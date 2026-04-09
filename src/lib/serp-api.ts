/**
 * SERP API Integration for Hotel Search
 * Uses Google Hotels search results via SerpAPI
 */

import { Redis } from 'ioredis';
import { redis } from './redis';

// SERP API Types
export interface SerpHotelSearchParams {
  query: string;
  checkInDate: string; // YYYY-MM-DD
  checkOutDate: string; // YYYY-MM-DD
  adults?: number;
  children?: number;
  currency?: string;
  gl?: string; // Country code (e.g., 'in' for India)
  hl?: string; // Language code (e.g., 'en' for English)
  minPrice?: number;
  maxPrice?: number;
  rating?: number; // Minimum star rating
  amenities?: string[];
  sortBy?: 'lowest_price' | 'highest_rating' | 'most_reviewed';
}

export interface SerpHotelProperty {
  type: string;
  name: string;
  description?: string;
  link: string;
  gps_coordinates?: {
    latitude: number;
    longitude: number;
  };
  check_in_time?: string;
  check_out_time?: string;
  rate_per_night?: {
    lowest: string;
    extracted_lowest: number;
    before_taxes_fees?: string;
    extracted_before_taxes_fees?: number;
  };
  total_rate?: {
    lowest: string;
    extracted_lowest: number;
    before_taxes_fees?: string;
    extracted_before_taxes_fees?: number;
  };
  nearby_places?: Array<{
    name: string;
    transportations: Array<{
      type: string;
      duration: string;
    }>;
  }>;
  hotel_class?: string;
  extracted_hotel_class?: number;
  images?: Array<{
    thumbnail: string;
    original_image: string;
  }>;
  overall_rating?: number;
  reviews?: number;
  ratings?: Array<{
    stars: number;
    count: number;
  }>;
  amenities?: string[];
  excluded_amenities?: string[];
  essential_info?: string[];
  property_token?: string;
  serpapi_property_details_link?: string;
}

export interface SerpHotelSearchResponse {
  search_metadata: {
    id: string;
    status: string;
    created_at: string;
    processed_at: string;
    google_hotels_url: string;
    total_time_taken: number;
  };
  search_parameters: {
    engine: string;
    q: string;
    check_in_date: string;
    check_out_date: string;
    adults?: string;
    currency?: string;
    gl?: string;
    hl?: string;
  };
  properties?: SerpHotelProperty[];
  serpapi_pagination?: {
    next?: string;
    next_page_token?: string;
  };
  error?: string;
}

class SerpAPIService {
  private apiKey: string;
  private baseUrl = 'https://serpapi.com/search.json';
  private redis: Redis;

  constructor() {
    const key = process.env.SERPAPI_API_KEY;
    if (!key) {
      throw new Error('SERPAPI_API_KEY is not configured');
    }
    this.apiKey = key;
    this.redis = redis;
  }

  /**
   * Search for hotels using Google Hotels via SERP API
   */
  async searchHotels(params: SerpHotelSearchParams): Promise<SerpHotelSearchResponse> {
    // Generate cache key
    const cacheKey = `serp:hotels:${JSON.stringify(params)}`;
    
    // Check cache first (cache for 1 hour)
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      console.log('🔍 SERP API: Returning cached hotel results');
      return JSON.parse(cached);
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
      api_key: this.apiKey,
      engine: 'google_hotels',
      q: params.query,
      check_in_date: params.checkInDate,
      check_out_date: params.checkOutDate,
      currency: params.currency || 'INR',
      gl: params.gl || 'in',
      hl: params.hl || 'en',
    });

    // Add optional parameters
    if (params.adults) {
      queryParams.append('adults', params.adults.toString());
    }
    if (params.children) {
      queryParams.append('children', params.children.toString());
    }
    if (params.minPrice) {
      queryParams.append('min_price', params.minPrice.toString());
    }
    if (params.maxPrice) {
      queryParams.append('max_price', params.maxPrice.toString());
    }
    if (params.rating) {
      queryParams.append('hotel_class', params.rating.toString());
    }
    if (params.sortBy) {
      queryParams.append('sort_by', params.sortBy);
    }

    try {
      const fullUrl = `${this.baseUrl}?${queryParams.toString()}`;
      console.log('🔍 SERP API: Fetching hotels from Google Hotels...');
      console.log(`📍 Query: ${params.query}, Check-in: ${params.checkInDate}, Check-out: ${params.checkOutDate}`);
      console.log(`🌐 Full URL: ${fullUrl.replace(this.apiKey, 'API_KEY_HIDDEN')}`);
      
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(`📡 Response status: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorBody = await response.text();
        console.error('SERP API Response:', errorBody);
        throw new Error(`SERP API error: ${response.status} ${response.statusText} - ${errorBody}`);
      }

      const data: SerpHotelSearchResponse = await response.json();

      // Check for API error
      if (data.error) {
        throw new Error(`SERP API error: ${data.error}`);
      }

      // Cache the results for 1 hour
      await this.redis.setex(cacheKey, 3600, JSON.stringify(data));

      console.log(`✅ SERP API: Found ${data.properties?.length || 0} hotels`);
      return data;

    } catch (error) {
      console.error('❌ SERP API Error:', error);
      throw error;
    }
  }

  /**
   * Get hotel details by property token
   */
  async getHotelDetails(propertyToken: string): Promise<any> {
    const cacheKey = `serp:hotel:${propertyToken}`;
    
    // Check cache
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }

    const queryParams = new URLSearchParams({
      api_key: this.apiKey,
      engine: 'google_hotels',
      property_token: propertyToken,
      gl: 'in',
      hl: 'en',
      currency: 'INR',
    });

    try {
      const response = await fetch(`${this.baseUrl}?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error(`SERP API error: ${response.status}`);
      }

      const data = await response.json();

      // Cache for 24 hours (hotel details change less frequently)
      await this.redis.setex(cacheKey, 86400, JSON.stringify(data));

      return data;
    } catch (error) {
      console.error('❌ SERP API Hotel Details Error:', error);
      throw error;
    }
  }

  /**
   * Filter hotels by amenities (client-side filtering)
   */
  filterByAmenities(properties: SerpHotelProperty[], requiredAmenities: string[]): SerpHotelProperty[] {
    if (!requiredAmenities || requiredAmenities.length === 0) {
      return properties;
    }

    return properties.filter(property => {
      const hotelAmenities = property.amenities || [];
      return requiredAmenities.every(required => 
        hotelAmenities.some(amenity => 
          amenity.toLowerCase().includes(required.toLowerCase())
        )
      );
    });
  }

  /**
   * Sort hotels by different criteria
   */
  sortHotels(properties: SerpHotelProperty[], sortBy: 'price' | 'rating' | 'reviews'): SerpHotelProperty[] {
    const sorted = [...properties];

    switch (sortBy) {
      case 'price':
        return sorted.sort((a, b) => {
          const priceA = a.rate_per_night?.extracted_lowest || Infinity;
          const priceB = b.rate_per_night?.extracted_lowest || Infinity;
          return priceA - priceB;
        });
      
      case 'rating':
        return sorted.sort((a, b) => {
          const ratingA = a.overall_rating || 0;
          const ratingB = b.overall_rating || 0;
          return ratingB - ratingA; // Descending
        });
      
      case 'reviews':
        return sorted.sort((a, b) => {
          const reviewsA = a.reviews || 0;
          const reviewsB = b.reviews || 0;
          return reviewsB - reviewsA; // Descending
        });
      
      default:
        return sorted;
    }
  }
}

// Export singleton instance
export const serpAPI = new SerpAPIService();
