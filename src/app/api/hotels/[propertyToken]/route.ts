import { NextRequest, NextResponse } from 'next/server';
import { serpAPI } from '@/lib/serp-api';
import { apiResponse, apiError } from '@/lib/api/helpers';

/**
 * GET /api/hotels/[propertyToken]
 * Get detailed information about a specific hotel
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { propertyToken: string } }
) {
  try {
    const { propertyToken } = params;

    if (!propertyToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'Property token is required',
        },
        { status: 400 }
      );
    }

    // Get hotel details from SERP API
    const hotelDetails = await serpAPI.getHotelDetails(propertyToken);

    return apiResponse(hotelDetails);

  } catch (error: unknown) {
    console.error('Hotel details error:', error);
    return apiError(error, 'Failed to fetch hotel details');
  }
}
