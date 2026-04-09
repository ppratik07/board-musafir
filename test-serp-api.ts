/**
 * Test script for SERP API integration
 * Run with: npx tsx test-serp-api.ts
 */

// Load environment variables
import { config } from 'dotenv';
config({ path: '.env.local' });

import { serpAPI } from './src/lib/serp-api';

async function testSerpAPI() {
  console.log('🧪 Testing SERP API Integration...\n');

  try {
    // Test hotel search
    console.log('📍 Searching for hotels in Jaipur...');
    
    const results = await serpAPI.searchHotels({
      query: 'Jaipur, Rajasthan, India',
      checkInDate: '2026-05-15',
      checkOutDate: '2026-05-18',
      adults: 2,
      children: 0,
      currency: 'INR',
      gl: 'in',
      hl: 'en',
      sortBy: 'lowest_price',
    });

    console.log('\n✅ Search successful!');
    console.log(`\n📊 Results Summary:`);
    console.log(`   - Total properties found: ${results.properties?.length || 0}`);
    console.log(`   - Search ID: ${results.search_metadata.id}`);
    console.log(`   - Status: ${results.search_metadata.status}`);
    console.log(`   - Time taken: ${results.search_metadata.total_time_taken}s`);

    if (results.properties && results.properties.length > 0) {
      console.log(`\n🏨 Top 5 Hotels:\n`);
      
      results.properties.slice(0, 5).forEach((hotel, index) => {
        console.log(`${index + 1}. ${hotel.name}`);
        console.log(`   ⭐ Rating: ${hotel.overall_rating || 'N/A'}/5 (${hotel.reviews || 0} reviews)`);
        console.log(`   🏷️  Price: ${hotel.rate_per_night?.lowest || 'N/A'} per night`);
        console.log(`   🏆 Class: ${hotel.extracted_hotel_class || 'N/A'}-star`);
        console.log(`   📍 Type: ${hotel.type}`);
        if (hotel.amenities && hotel.amenities.length > 0) {
          console.log(`   ✨ Amenities: ${hotel.amenities.slice(0, 3).join(', ')}${hotel.amenities.length > 3 ? '...' : ''}`);
        }
        console.log('');
      });

      // Test filtering
      console.log('🔍 Testing filter by amenities (WiFi)...');
      const filtered = serpAPI.filterByAmenities(results.properties, ['wifi']);
      console.log(`   - Hotels with WiFi: ${filtered.length}/${results.properties.length}\n`);

      // Test sorting
      console.log('📊 Testing sort by rating...');
      const sortedByRating = serpAPI.sortHotels(results.properties, 'rating');
      if (sortedByRating.length > 0) {
        console.log(`   - Top rated: ${sortedByRating[0].name} (${sortedByRating[0].overall_rating}/5)\n`);
      }

      // Test hotel details if we have a property token
      if (results.properties[0].property_token) {
        console.log('🔍 Testing hotel details fetch...');
        const propertyToken = results.properties[0].property_token;
        const details = await serpAPI.getHotelDetails(propertyToken);
        console.log(`   ✅ Details fetched for: ${results.properties[0].name}\n`);
      }
    }

    console.log('✅ All tests passed!');
    console.log('\n📝 Note: Results are cached in Redis for 1 hour to save API calls.');
    
  } catch (error: any) {
    console.error('\n❌ Test failed:', error.message);
    
    if (error.message?.includes('SERPAPI_API_KEY')) {
      console.error('\n💡 Make sure SERPAPI_API_KEY is set in your .env.local file');
    } else if (error.message?.includes('Redis')) {
      console.error('\n💡 Make sure Redis is running: redis-server');
    } else {
      console.error('\nFull error:', error);
    }
    
    process.exit(1);
  }
}

// Run the test
testSerpAPI();
