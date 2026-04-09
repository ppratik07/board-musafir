# SERP API Integration for Hotels

This project uses [SERP API](https://serpapi.com/) to search for hotels via Google Hotels. SERP API provides comprehensive hotel data including prices, ratings, amenities, and availability.

## Setup

### 1. Get SERP API Key

1. Sign up at [https://serpapi.com/users/sign_up](https://serpapi.com/users/sign_up)
2. Get your API key from [https://serpapi.com/manage-api-key](https://serpapi.com/manage-api-key)
3. Free tier includes **100 searches/month**

### 2. Configure Environment Variables

Add your SERP API key to `.env.local`:

```bash
SERPAPI_API_KEY=your_api_key_here
```

### 3. Test the Integration

```bash
# Make sure Redis is running
redis-server

# Start the development server
npm run dev
```

## API Endpoints

### Search Hotels

**POST** `/api/hotels/search`

Request body:
```json
{
  "destination": "Jaipur, Rajasthan",
  "checkIn": "2026-05-15",
  "checkOut": "2026-05-18",
  "adults": 2,
  "children": 0,
  "rooms": 1,
  "priceRange": {
    "min": 2000,
    "max": 10000
  },
  "starRating": [4, 5],
  "amenities": ["wifi", "pool"]
}
```

**GET** `/api/hotels/search?destination=Jaipur&checkIn=2026-05-15&checkOut=2026-05-18&adults=2`

Response:
```json
{
  "success": true,
  "data": {
    "hotels": [
      {
        "id": "property_token_123",
        "name": "The Oberoi Rajvilas",
        "description": "Luxury heritage hotel...",
        "type": "Hotel",
        "location": {
          "address": "Jaipur, Rajasthan",
          "coordinates": {
            "latitude": 26.9124,
            "longitude": 75.7873
          }
        },
        "images": ["url1", "url2"],
        "pricePerNight": {
          "amount": 15000,
          "currency": "INR",
          "display": "₹15,000"
        },
        "rating": {
          "overall": 4.8,
          "reviews": 1234,
          "starClass": 5
        },
        "amenities": ["WiFi", "Pool", "Spa", "Restaurant"],
        "bookingLink": "https://...",
        "propertyToken": "property_token_123"
      }
    ],
    "total": 25,
    "searchParams": {
      "destination": "Jaipur, Rajasthan",
      "checkIn": "2026-05-15",
      "checkOut": "2026-05-18",
      "adults": 2
    }
  }
}
```

### Get Hotel Details

**GET** `/api/hotels/[propertyToken]`

Example: `/api/hotels/ChkQta_T7cqJn4G8ARoLL2cvMTFoMWhoNnhiRBAB`

## Features

### 1. Caching

- Search results are cached in Redis for **1 hour**
- Hotel details are cached for **24 hours**
- Reduces API calls and improves performance

### 2. Filtering & Sorting

```typescript
import { serpAPI } from '@/lib/serp-api';

// Filter by amenities
const filtered = serpAPI.filterByAmenities(properties, ['wifi', 'pool', 'parking']);

// Sort hotels
const sorted = serpAPI.sortHotels(properties, 'price'); // 'price' | 'rating' | 'reviews'
```

### 3. Search Parameters

Available search options:

| Parameter | Type | Description |
|-----------|------|-------------|
| `query` | string | Destination (e.g., "Jaipur, Rajasthan") |
| `checkInDate` | string | Check-in date (YYYY-MM-DD) |
| `checkOutDate` | string | Check-out date (YYYY-MM-DD) |
| `adults` | number | Number of adults |
| `children` | number | Number of children |
| `currency` | string | Currency code (default: 'INR') |
| `gl` | string | Country code (default: 'in') |
| `hl` | string | Language code (default: 'en') |
| `minPrice` | number | Minimum price filter |
| `maxPrice` | number | Maximum price filter |
| `rating` | number | Minimum star rating (1-5) |
| `sortBy` | string | Sort order: 'lowest_price', 'highest_rating', 'most_reviewed' |

## Usage Example

### Client-Side Component

```typescript
'use client';

import { useState } from 'react';

export default function HotelSearch() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHotels = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/hotels/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: 'Jaipur, Rajasthan',
          checkIn: '2026-05-15',
          checkOut: '2026-05-18',
          adults: 2,
          rooms: 1,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setHotels(data.data.hotels);
      }
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={searchHotels}>Search Hotels</button>
      {loading && <p>Searching...</p>}
      <div>
        {hotels.map(hotel => (
          <div key={hotel.id}>
            <h3>{hotel.name}</h3>
            <p>{hotel.pricePerNight.display} per night</p>
            <p>Rating: {hotel.rating.overall}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Server Component

```typescript
import { serpAPI } from '@/lib/serp-api';

export default async function HotelListPage() {
  const results = await serpAPI.searchHotels({
    query: 'Jaipur, Rajasthan',
    checkInDate: '2026-05-15',
    checkOutDate: '2026-05-18',
    adults: 2,
    sortBy: 'lowest_price',
  });

  const hotels = results.properties || [];

  return (
    <div>
      {hotels.map(hotel => (
        <div key={hotel.property_token}>
          <h2>{hotel.name}</h2>
          <p>{hotel.rate_per_night?.lowest}</p>
        </div>
      ))}
    </div>
  );
}
```

## Error Handling

The service handles various errors:

```typescript
try {
  const results = await serpAPI.searchHotels(params);
} catch (error) {
  if (error.message.includes('SERPAPI_API_KEY')) {
    // API key not configured
  } else if (error.message.includes('SERP API error')) {
    // API returned an error
  } else {
    // Network or other error
  }
}
```

## Pricing

SERP API pricing (as of 2026):

- **Free Tier**: 100 searches/month
- **Developer**: $50/month - 5,000 searches
- **Production**: $150/month - 15,000 searches
- **Enterprise**: Custom pricing

See [https://serpapi.com/pricing](https://serpapi.com/pricing) for current pricing.

## Data Source

SERP API fetches real-time data from **Google Hotels**, which aggregates:
- Direct hotel bookings
- Booking.com
- Expedia
- Agoda
- Hotels.com
- And many more booking platforms

## Limitations

1. **Rate Limits**: Respect SERP API rate limits (100 searches/month on free tier)
2. **Caching**: Results are cached for 1 hour, so real-time availability may differ
3. **Booking**: SERP API provides booking links to external platforms, not direct booking capability
4. **Coverage**: Limited to hotels available on Google Hotels search

## Best Practices

1. **Cache Aggressively**: Search results don't change frequently
2. **Use Filters**: Apply client-side filters to reduce API calls
3. **Monitor Usage**: Track API usage to avoid exceeding quota
4. **Fallback**: Have a fallback mechanism when API is unavailable
5. **Price Display**: Always show "from" prices as they can vary

## Support

- SERP API Documentation: [https://serpapi.com/google-hotels-api](https://serpapi.com/google-hotels-api)
- Google Hotels Parameters: [https://serpapi.com/google-hotels-api#api-parameters](https://serpapi.com/google-hotels-api#api-parameters)
- Playground: [https://serpapi.com/playground](https://serpapi.com/playground)

## Next Steps

1. ✅ SERP API service configured
2. ✅ Hotel search API endpoints created
3. ⏳ Update hotels search page UI to use real data
4. ⏳ Add pagination for search results
5. ⏳ Implement hotel details page
6. ⏳ Add booking flow integration
