import { User, Profile, Itinerary, Booking, Activity, Hotel } from '@prisma/client';

// Extended user type with relations
export type UserWithProfile = User & {
  profile?: Profile | null;
};

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Itinerary generation types
export interface ItineraryGenerationRequest {
  destination: string;
  daysCount: number;
  budgetTier: 'LOW' | 'MID' | 'LUXURY';
  travelMode: string[];
  interests: string[];
  startDate?: Date;
  paxAdults: number;
  paxChildren?: number;
  paxInfants?: number;
  additionalRequirements?: string;
}

export interface GeneratedItinerary {
  title: string;
  description: string;
  days: GeneratedDay[];
  estimatedCost: number;
  budgetBreakdown: {
    transport: number;
    accommodation: number;
    activities: number;
    meals: number;
    miscellaneous: number;
  };
}

export interface GeneratedDay {
  dayNumber: number;
  title: string;
  description?: string;
  items: GeneratedItineraryItem[];
}

export interface GeneratedItineraryItem {
  time: string;
  duration?: number;
  type: 'transport' | 'accommodation' | 'activity' | 'meal' | 'free-time';
  title: string;
  description?: string;
  location?: string;
  estimatedCost?: number;
  bookingRequired: boolean;
}

// Flight search types
export interface FlightSearchQuery {
  origin: string;
  destination: string;
  departureDate: Date;
  returnDate?: Date;
  passengers: {
    adults: number;
    children: number;
    infants: number;
  };
  cabinClass: 'ECONOMY' | 'PREMIUM_ECONOMY' | 'BUSINESS' | 'FIRST';
  tripType: 'ONE_WAY' | 'ROUND_TRIP' | 'MULTI_CITY';
}

export interface FlightOffer {
  id: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  duration: number; // minutes
  stops: number;
  cabinClass: string;
  price: {
    amount: number;
    currency: string;
  };
  availability: number;
  baggage: {
    checked?: string;
    cabin?: string;
  };
  provider: string;
  providerData?: any;
}

// Hotel search types
export interface HotelSearchQuery {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  rooms: number;
  adults: number;
  children: number;
  priceRange?: {
    min?: number;
    max?: number;
  };
  starRating?: number[];
  amenities?: string[];
}

export interface HotelOffer {
  id: string;
  name: string;
  address: string;
  starRating?: number;
  rating?: number;
  reviewCount?: number;
  images: string[];
  amenities: string[];
  rooms: HotelRoomOffer[];
  location: {
    latitude: number;
    longitude: number;
  };
  provider: string;
  providerData?: any;
}

export interface HotelRoomOffer {
  id: string;
  name: string;
  description?: string;
  maxOccupancy: number;
  bedType?: string;
  price: {
    amount: number;
    currency: string;
    perNight: number;
  };
  amenities: string[];
  images: string[];
  availability: number;
  cancellationPolicy?: string;
}

// Activity search types
export interface ActivitySearchQuery {
  destination: string;
  date?: Date;
  category?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  duration?: number;
  participants?: number;
}

export interface ActivityOffer {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: number; // minutes
  location: string;
  price: {
    amount: number;
    currency: string;
    pricingType: string;
  };
  images: string[];
  rating?: number;
  reviewCount?: number;
  availability: boolean;
  provider: string;
  providerData?: any;
}

// Booking types
export interface BookingItemData {
  itemType: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  startDate?: Date;
  endDate?: Date;
  provider: string;
  providerData?: any;
}

export interface CreateBookingRequest {
  itineraryId?: string;
  bookingType: 'PACKAGE' | 'STANDALONE' | 'CUSTOM';
  leadTravelerName: string;
  leadTravelerEmail: string;
  leadTravelerPhone: string;
  totalPax: number;
  travelStartDate?: Date;
  travelEndDate?: Date;
  items: BookingItemData[];
}

// Payment types
export interface RazorpayOrderOptions {
  amount: number;
  currency: string;
  receipt: string;
  notes?: Record<string, string>;
}

export interface RazorpayOrder {
  id: string;
  entity: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
  created_at: number;
}

export interface PaymentVerification {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Dashboard stats types
export interface UserStats {
  totalTrips: number;
  upcomingTrips: number;
  completedTrips: number;
  totalSpent: number;
  placesVisited: number;
  savedItineraries: number;
}

export interface AdminStats {
  totalUsers: number;
  totalBookings: number;
  totalRevenue: number;
  activeBookings: number;
  pendingBookings: number;
  todayBookings: number;
  recentBookings: Booking[];
}

// Filter and sort types
export interface FilterOptions {
  priceRange?: { min?: number; max?: number };
  rating?: number[];
  category?: string[];
  amenities?: string[];
  sortBy?: 'price' | 'rating' | 'popularity' | 'distance';
  sortOrder?: 'asc' | 'desc';
}

// Notification types
export interface NotificationData {
  type: 'BOOKING_CONFIRMATION' | 'PAYMENT_SUCCESS' | 'PAYMENT_FAILED' | 'BOOKING_REMINDER' | 'PRICE_DROP' | 'ITINERARY_SHARED' | 'ACCOUNT_UPDATE' | 'SYSTEM';
  title: string;
  message: string;
  link?: string;
  metadata?: Record<string, any>;
}

// Email template types
export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: EmailAttachment[];
}

export interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

// Queue job types
export interface BookingProcessJob {
  bookingId: string;
  userId: string;
  items: BookingItemData[];
}

export interface EmailJob {
  to: string;
  template: string;
  data: Record<string, any>;
}

// Analytics types
export interface AnalyticsEvent {
  userId?: string;
  event: string;
  properties?: Record<string, any>;
  timestamp: Date;
}

export interface ConversionFunnel {
  stage: string;
  count: number;
  percentage: number;
}

// Error types
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 401);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

// SERP API Hotel Search Types
export interface SerpHotelSearchResult {
  id: string;
  name: string;
  description?: string;
  type: string;
  location: {
    address: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  images: string[];
  thumbnail?: string;
  pricePerNight: {
    amount: number;
    currency: string;
    display: string;
  };
  totalPrice: {
    amount: number;
    currency: string;
    display: string;
  };
  rating: {
    overall?: number;
    reviews?: number;
    starClass?: number;
  };
  amenities: string[];
  checkInTime?: string;
  checkOutTime?: string;
  nearbyPlaces?: Array<{
    name: string;
    transportations: Array<{
      type: string;
      duration: string;
    }>;
  }>;
  bookingLink: string;
  propertyToken?: string;
}

export interface HotelSearchResponse {
  hotels: SerpHotelSearchResult[];
  total: number;
  searchParams: {
    destination: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children?: number;
  };
  metadata?: {
    id: string;
    status: string;
    total_time_taken: number;
  };
}

