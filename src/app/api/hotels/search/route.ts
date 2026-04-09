import { NextRequest, NextResponse } from 'next/server';
import { serpAPI } from '@/lib/serp-api';
import { hotelSearchSchema } from '@/lib/validators';
import { apiResponse, apiError } from '@/lib/api/helpers';

/**
 * POST /api/hotels/search
 * Search for hotels using SERP API (Google Hotels)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Pre-process dates - convert strings to Date objects for validation
    if (typeof body.checkIn === 'string') {
      body.checkIn = new Date(body.checkIn);
    }
    if (typeof body.checkOut === 'string') {
      body.checkOut = new Date(body.checkOut);
    }

    // Validate request
    const validation = hotelSearchSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid search parameters',
          details: validation.error.issues,
        },
        { status: 400 }
      );
    }

    const { destination, checkIn, checkOut, adults, children, priceRange, starRating, amenities } = validation.data;

    // Convert dates to YYYY-MM-DD format
    const checkInDate = new Date(checkIn).toISOString().split('T')[0];
    const checkOutDate = new Date(checkOut).toISOString().split('T')[0];

    // Search hotels using SERP API
    const results = await serpAPI.searchHotels({
      query: destination,
      checkInDate,
      checkOutDate,
      adults,
      children,
      currency: 'INR',
      gl: 'in',
      hl: 'en',
      minPrice: priceRange?.min,
      maxPrice: priceRange?.max,
      rating: starRating?.[0], // Use first rating if multiple provided
      // Note: sort_by is not supported by SERP API for Google Hotels
    });

    // Filter by amenities if specified
    let properties = results.properties || [];
    if (amenities && amenities.length > 0) {
      properties = serpAPI.filterByAmenities(properties, amenities);
    }

    // Transform response to match our application format
    const hotels = properties.map(property => ({
      id: property.property_token || property.link,
      name: property.name,
      description: property.description,
      type: property.type,
      location: {
        address: destination,
        coordinates: property.gps_coordinates,
      },
      images: property.images?.map(img => img.original_image) || [],
      thumbnail: property.images?.[0]?.thumbnail,
      pricePerNight: {
        amount: property.rate_per_night?.extracted_lowest || 0,
        currency: 'INR',
        display: property.rate_per_night?.lowest || '₹0',
      },
      totalPrice: {
        amount: property.total_rate?.extracted_lowest || 0,
        currency: 'INR',
        display: property.total_rate?.lowest || '₹0',
      },
      rating: {
        overall: property.overall_rating,
        reviews: property.reviews,
        starClass: property.extracted_hotel_class,
      },
      amenities: property.amenities || [],
      checkInTime: property.check_in_time,
      checkOutTime: property.check_out_time,
      nearbyPlaces: property.nearby_places,
      bookingLink: property.link,
      propertyToken: property.property_token,
    }));

    return apiResponse({
      hotels,
      total: hotels.length,
      searchParams: {
        destination,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        adults,
        children,
      },
      metadata: results.search_metadata,
    });

  } catch (error: unknown) {
    console.error('Hotel search error:', error);
    
    if (error instanceof Error && error.message?.includes('SERPAPI_API_KEY')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Hotel search service is not configured. Please add SERPAPI_API_KEY to environment variables.',
        },
        { status: 500 }
      );
    }

    return apiError(error, 'Failed to search hotels');
  }
}

/**
 * GET /api/hotels/search?destination=...&checkIn=...&checkOut=...
 * Alternative GET endpoint for hotel search
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const destination = searchParams.get('destination');
    const checkIn = searchParams.get('checkIn');
    const checkOut = searchParams.get('checkOut');
    const adults = parseInt(searchParams.get('adults') || '2');
    const children = parseInt(searchParams.get('children') || '0');
    const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined;
    const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined;
    const rating = searchParams.get('rating') ? parseInt(searchParams.get('rating')!) : undefined;

    if (!destination || !checkIn || !checkOut) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required parameters: destination, checkIn, checkOut',
        },
        { status: 400 }
      );
    }

    // Search hotels
    const results = await serpAPI.searchHotels({
      query: destination,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adults,
      children,
      currency: 'INR',
      gl: 'in',
      hl: 'en',
      minPrice,
      maxPrice,
      rating,
      // Note: sort_by is not supported by SERP API for Google Hotels
    });

    const properties = results.properties || [];

    const hotels = properties.map(property => ({
      id: property.property_token || property.link,
      name: property.name,
      description: property.description,
      type: property.type,
      location: {
        address: destination,
        coordinates: property.gps_coordinates,
      },
      images: property.images?.map(img => img.original_image) || [],
      thumbnail: property.images?.[0]?.thumbnail,
      pricePerNight: {
        amount: property.rate_per_night?.extracted_lowest || 0,
        currency: 'INR',
        display: property.rate_per_night?.lowest || '₹0',
      },
      totalPrice: {
        amount: property.total_rate?.extracted_lowest || 0,
        currency: 'INR',
        display: property.total_rate?.lowest || '₹0',
      },
      rating: {
        overall: property.overall_rating,
        reviews: property.reviews,
        starClass: property.extracted_hotel_class,
      },
      amenities: property.amenities || [],
      checkInTime: property.check_in_time,
      checkOutTime: property.check_out_time,
      nearbyPlaces: property.nearby_places,
      bookingLink: property.link,
      propertyToken: property.property_token,
    }));

    return apiResponse({
      hotels,
      total: hotels.length,
      searchParams: {
        destination,
        checkIn,
        checkOut,
        adults,
        children,
      },
    });

  } catch (error: unknown) {
    console.error('Hotel search error:', error);
    return apiError(error, 'Failed to search hotels');
  }
}
