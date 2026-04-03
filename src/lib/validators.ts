import { z } from 'zod';

// User validation schemas
export const userRegisterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export const userLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const profileUpdateSchema = z.object({
  name: z.string().min(2).optional(),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number').optional(),
  bio: z.string().max(500).optional(),
  dateOfBirth: z.date().optional(),
  gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
  budgetPreference: z.enum(['LOW', 'MID', 'LUXURY']).optional(),
  travelInterests: z.array(z.string()).optional(),
  preferredTransport: z.array(z.string()).optional(),
});

// Itinerary validation schemas
export const createItinerarySchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().optional(),
  daysCount: z.number().min(1).max(30, 'Maximum 30 days allowed'),
  nightsCount: z.number().min(0).max(30),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  budgetTier: z.enum(['LOW', 'MID', 'LUXURY']),
  travelMode: z.array(z.string()).min(1, 'Select at least one travel mode'),
  interests: z.array(z.string()).min(1, 'Select at least one interest'),
  paxAdults: z.number().min(1).max(20),
  paxChildren: z.number().min(0).max(10),
  paxInfants: z.number().min(0).max(5),
  destinationId: z.string().optional(),
});

export const aiItineraryRequestSchema = z.object({
  destination: z.string().min(2, 'Destination is required'),
  daysCount: z.number().min(1).max(30),
  budgetTier: z.enum(['LOW', 'MID', 'LUXURY']),
  travelMode: z.array(z.string()).min(1),
  interests: z.array(z.string()).min(1),
  startDate: z.date().optional(),
  paxAdults: z.number().min(1).max(20),
  paxChildren: z.number().min(0).max(10),
  paxInfants: z.number().min(0).max(5),
  additionalRequirements: z.string().optional(),
});

// Booking validation schemas
export const createBookingSchema = z.object({
  itineraryId: z.string().optional(),
  bookingType: z.enum(['PACKAGE', 'STANDALONE', 'CUSTOM']),
  leadTravelerName: z.string().min(2, 'Name is required'),
  leadTravelerEmail: z.string().email('Invalid email'),
  leadTravelerPhone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number'),
  totalPax: z.number().min(1),
  travelStartDate: z.date().optional(),
  travelEndDate: z.date().optional(),
  items: z.array(z.object({
    itemType: z.enum(['FLIGHT', 'TRAIN', 'BUS', 'CAB', 'HOTEL', 'ACTIVITY', 'RESTAURANT', 'MONUMENT', 'TRANSPORT_OTHER', 'FREE_TIME', 'NOTE']),
    itemName: z.string(),
    quantity: z.number().min(1),
    unitPrice: z.number().min(0),
    totalPrice: z.number().min(0),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  })).min(1, 'At least one item is required'),
});

// Search validation schemas
export const flightSearchSchema = z.object({
  origin: z.string().min(3, 'Origin is required'),
  destination: z.string().min(3, 'Destination is required'),
  departureDate: z.date(),
  returnDate: z.date().optional(),
  passengers: z.object({
    adults: z.number().min(1).max(9),
    children: z.number().min(0).max(8),
    infants: z.number().min(0).max(2),
  }),
  cabinClass: z.enum(['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST']),
  tripType: z.enum(['ONE_WAY', 'ROUND_TRIP', 'MULTI_CITY']),
});

export const hotelSearchSchema = z.object({
  destination: z.string().min(2, 'Destination is required'),
  checkIn: z.date(),
  checkOut: z.date(),
  rooms: z.number().min(1).max(10),
  adults: z.number().min(1).max(30),
  children: z.number().min(0).max(10),
  priceRange: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional(),
  }).optional(),
  starRating: z.array(z.number().min(1).max(5)).optional(),
  amenities: z.array(z.string()).optional(),
});

export const activitySearchSchema = z.object({
  destination: z.string().min(2, 'Destination is required'),
  date: z.date().optional(),
  category: z.enum(['ADVENTURE', 'CULTURE', 'NATURE', 'FOOD', 'WELLNESS', 'ENTERTAINMENT', 'EDUCATION', 'SHOPPING', 'SPORTS', 'NIGHTLIFE']).optional(),
  priceRange: z.object({
    min: z.number().min(0).optional(),
    max: z.number().min(0).optional(),
  }).optional(),
  duration: z.number().optional(), // in hours
  participants: z.number().min(1).optional(),
});

// Review validation schema
export const createReviewSchema = z.object({
  targetType: z.enum(['ACTIVITY', 'HOTEL', 'ITINERARY']),
  targetId: z.string(),
  rating: z.number().min(1).max(5),
  title: z.string().max(100).optional(),
  review: z.string().min(10, 'Review must be at least 10 characters').max(2000),
});

// Payment validation schema
export const createPaymentSchema = z.object({
  bookingId: z.string(),
  amount: z.number().min(1),
  currency: z.string().default('INR'),
  paymentMethod: z.string().optional(),
});

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});
