import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { AppError } from '@/types';

/**
 * Standard API response wrapper
 */
export function apiResponse<T>(data: T, status: number = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    { status }
  );
}

/**
 * API error response wrapper
 */
export function apiError(error: unknown, defaultMessage: string = 'An error occurred') {
  console.error('API Error:', error);

  if (error instanceof AppError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        error: 'Validation error',
        details: error.errors,
      },
      { status: 400 }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: defaultMessage,
    },
    { status: 500 }
  );
}

/**
 * Pagination helper
 */
export function paginate(page: number = 1, limit: number = 10) {
  const skip = (page - 1) * limit;
  return { skip, take: limit };
}

/**
 * Build paginated response
 */
export function paginatedResponse<T>(
  data: T[],
  total: number,
  page: number,
  limit: number
) {
  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

/**
 * Extract query parameters with defaults
 */
export function getQueryParams(url: string) {
  const searchParams = new URL(url).searchParams;
  
  return {
    page: parseInt(searchParams.get('page') || '1', 10),
    limit: Math.min(parseInt(searchParams.get('limit') || '10', 10), 100),
    search: searchParams.get('search') || undefined,
    sortBy: searchParams.get('sortBy') || undefined,
    sortOrder: (searchParams.get('sortOrder') as 'asc' | 'desc') || 'desc',
    filters: extractFilters(searchParams),
  };
}

/**
 * Extract filters from search params
 */
function extractFilters(searchParams: URLSearchParams): Record<string, any> {
  const filters: Record<string, any> = {};
  
  searchParams.forEach((value, key) => {
    if (!['page', 'limit', 'search', 'sortBy', 'sortOrder'].includes(key)) {
      // Handle array values (e.g., category[]=value1&category[]=value2)
      if (key.endsWith('[]')) {
        const filterKey = key.slice(0, -2);
        if (!filters[filterKey]) {
          filters[filterKey] = [];
        }
        filters[filterKey].push(value);
      } else {
        filters[key] = value;
      }
    }
  });
  
  return filters;
}

/**
 * Rate limiting helper (simple in-memory implementation)
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    const resetTime = now + windowMs;
    rateLimitStore.set(identifier, { count: 1, resetTime });
    return { allowed: true, remaining: maxRequests - 1, resetTime };
  }

  if (record.count >= maxRequests) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return {
    allowed: true,
    remaining: maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Clean up expired rate limit records periodically
 */
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean up every minute
