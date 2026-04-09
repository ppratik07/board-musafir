import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google Gemini client
const genAI = process.env.OPENAI_API_KEY 
  ? new GoogleGenerativeAI(process.env.OPENAI_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  let body: {
    destination?: string;
    startDate?: string;
    endDate?: string;
    travelers?: string;
    budget?: string;
    interests?: string[];
    pace?: string;
  } = {};
  
  try {
    body = await request.json();
    const { destination, startDate, endDate, travelers, budget, interests, pace } = body;

    // Validate required fields
    if (!destination || !startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY || !genAI) {
      console.log('ℹ️ AI API key not configured, using mock data');
      // Return mock data for development
      return NextResponse.json({
        success: true,
        data: getMockItinerary(destination, startDate, endDate, travelers),
        source: 'mock'
      });
    }

    console.log('🤖 Generating AI itinerary with Gemini for:', { destination, startDate, endDate, travelers });

    // Create the AI prompt
    const prompt = `Create a detailed travel itinerary with the following requirements:

Destination: ${destination}
Travel Dates: ${startDate} to ${endDate}
Travelers: ${travelers}
${budget ? `Budget: ${budget}` : ''}
${interests ? `Interests: ${interests.join(', ')}` : ''}
${pace ? `Pace: ${pace}` : ''}

Generate a day-by-day itinerary in JSON format with the following structure:
{
  "title": "Trip title",
  "summary": "Brief trip summary",
  "days": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "title": "Day title",
      "activities": [
        {
          "time": "HH:MM",
          "title": "Activity name",
          "description": "Activity description",
          "location": "Location name",
          "duration": "Duration in format like '2 hours'",
          "cost": "Estimated cost",
          "tips": ["Tip 1", "Tip 2"]
        }
      ]
    }
  ],
  "accommodations": [
    {
      "name": "Hotel name",
      "type": "Hotel type",
      "location": "Location",
      "priceRange": "Price range",
      "highlights": ["Feature 1", "Feature 2"]
    }
  ],
  "estimatedBudget": {
    "accommodation": "Amount",
    "food": "Amount",
    "activities": "Amount",
    "transport": "Amount",
    "total": "Amount"
  },
  "travelTips": ["Tip 1", "Tip 2", "Tip 3"]
}

Make it detailed, practical, and tailored to the traveler type. Return ONLY valid JSON, no additional text.`;

    // Use Gemini to generate itinerary
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse JSON from response (remove markdown code blocks if present)
    const jsonText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const itinerary = JSON.parse(jsonText);

    console.log('✅ AI itinerary generated successfully with Gemini');

    return NextResponse.json({
      success: true,
      data: itinerary,
      source: 'gemini'
    });

  } catch (error: unknown) {
    console.error('❌ AI itinerary generation error:', error);
    
    // If AI fails, return mock data as fallback (use already parsed body)
    return NextResponse.json({
      success: true,
      data: getMockItinerary(
        body?.destination || 'Paris', 
        body?.startDate || '2026-05-01', 
        body?.endDate || '2026-05-07', 
        body?.travelers || 'Solo Explorer'
      ),
      source: 'mock',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Mock itinerary generator for fallback
function getMockItinerary(destination: string, startDate: string, endDate: string, travelers: string) {
  return {
    title: `${destination} ${travelers} Adventure`,
    summary: `A memorable journey through ${destination}, carefully curated for ${travelers.toLowerCase()} travelers.`,
    days: [
      {
        day: 1,
        date: startDate,
        title: `Arrival in ${destination}`,
        activities: [
          {
            time: '10:00',
            title: 'Arrival & Check-in',
            description: `Arrive in ${destination} and check into your accommodation`,
            location: 'City Center',
            duration: '2 hours',
            cost: 'Included',
            tips: ['Book airport transfer in advance', 'Keep local currency handy']
          },
          {
            time: '14:00',
            title: 'City Orientation Walk',
            description: 'Explore the neighborhood and get your bearings',
            location: 'Around hotel',
            duration: '3 hours',
            cost: 'Free',
            tips: ['Download offline maps', 'Try local street food']
          },
          {
            time: '19:00',
            title: 'Welcome Dinner',
            description: 'Traditional local cuisine at a recommended restaurant',
            location: 'Old Town',
            duration: '2 hours',
            cost: '$30-50',
            tips: ['Make reservations', 'Ask for local specialties']
          }
        ]
      },
      {
        day: 2,
        date: new Date(new Date(startDate).getTime() + 86400000).toISOString().split('T')[0],
        title: 'Cultural Exploration',
        activities: [
          {
            time: '09:00',
            title: 'Historical Landmarks Tour',
            description: 'Visit the main historical sites and museums',
            location: 'City Center',
            duration: '4 hours',
            cost: '$40',
            tips: ['Buy tickets online to skip queues', 'Hire a local guide']
          },
          {
            time: '15:00',
            title: 'Local Market Experience',
            description: 'Explore traditional markets and local crafts',
            location: 'Market District',
            duration: '2 hours',
            cost: '$20',
            tips: ['Bargain respectfully', 'Try local snacks']
          }
        ]
      }
    ],
    accommodations: [
      {
        name: `Boutique Hotel ${destination}`,
        type: 'Boutique Hotel',
        location: 'City Center',
        priceRange: '$100-200/night',
        highlights: ['Central location', 'Local design', 'Great breakfast']
      }
    ],
    estimatedBudget: {
      accommodation: '$700',
      food: '$400',
      activities: '$300',
      transport: '$200',
      total: '$1,600'
    },
    travelTips: [
      'Best time to visit is during shoulder season',
      'Learn a few basic local phrases',
      'Book popular attractions in advance',
      'Stay in centrally located accommodation',
      'Try local transportation for authentic experience'
    ]
  };
}
