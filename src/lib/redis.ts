import IORedis from 'ioredis';
import { Redis as UpstashRedis } from '@upstash/redis';

// Determine which Redis client to use
const useUpstash = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);

// Create Redis client
let redis: IORedis | UpstashRedis;

if (useUpstash) {
  // Use Upstash for production/serverless (Vercel)
  redis = new UpstashRedis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
  console.log('Using Upstash Redis (REST API)');
} else {
  // Use ioredis for local development
  const getRedisUrl = () => {
    if (process.env.REDIS_URL) {
      return process.env.REDIS_URL;
    }
    throw new Error('REDIS_URL is not defined');
  };

  redis = new IORedis(getRedisUrl(), {
    maxRetriesPerRequest: 3,
    retryStrategy: (times) => {
      const delay = Math.min(times * 50, 2000);
      return delay;
    },
  });

  redis.on('error', (error) => {
    console.error('Redis connection error:', error);
  });

  redis.on('connect', () => {
    console.log('Connected to Redis');
  });
}

export { redis };

// Cache utilities (compatible with both clients)
export const cache = {
  async get<T>(key: string): Promise<T | null> {
    const data = await redis.get(key);
    if (!data) return null;
    
    // Upstash returns parsed data, ioredis returns string
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return data as T;
  },

  async set(key: string, value: any, ttlSeconds?: number): Promise<void> {
    const stringValue = JSON.stringify(value);
    if (ttlSeconds) {
      if (useUpstash) {
        // Upstash REST API - set with expiration
        await (redis as UpstashRedis).setex(key, ttlSeconds, stringValue);
      } else {
        // ioredis uses setex
        await (redis as IORedis).setex(key, ttlSeconds, stringValue);
      }
    } else {
      await redis.set(key, stringValue);
    }
  },

  async del(key: string): Promise<void> {
    await redis.del(key);
  },

  async delPattern(pattern: string): Promise<void> {
    if (useUpstash) {
      // Note: Upstash REST API doesn't support KEYS command efficiently
      // You may need to implement a different pattern deletion strategy
      console.warn('Pattern deletion not optimized for Upstash REST API');
      // For now, just skip or implement alternative logic
    } else {
      const keys = await (redis as IORedis).keys(pattern);
      if (keys.length > 0) {
        await redis.del(...keys);
      }
    }
  },
};

export default redis;
