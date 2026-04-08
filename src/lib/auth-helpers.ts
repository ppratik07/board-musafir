import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

/**
 * Server-side authentication utilities for protecting pages
 * Use these in Server Components and Server Actions
 */

/**
 * Get the current session or redirect to login
 * Use this in protected pages
 */
export async function requireAuth() {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/auth/login');
  }
  
  return session;
}

/**
 * Get the current session or return null
 * Use this when auth is optional
 */
export async function getSession() {
  return await auth();
}

/**
 * Require admin role or redirect
 */
export async function requireAdmin() {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/auth/login');
  }
  
  if (session.user.role !== 'ADMIN') {
    redirect('/');
  }
  
  return session;
}

/**
 * Require partner or admin role
 */
export async function requirePartner() {
  const session = await auth();
  
  if (!session?.user) {
    redirect('/auth/login');
  }
  
  if (session.user.role !== 'PARTNER' && session.user.role !== 'ADMIN') {
    redirect('/');
  }
  
  return session;
}

/**
 * Get user ID from session or redirect
 */
export async function requireUserId() {
  const session = await requireAuth();
  return session.user.id;
}

/**
 * Check if user is authenticated (boolean)
 */
export async function isAuthenticated() {
  const session = await auth();
  return !!session?.user;
}

/**
 * Check if user has specific role
 */
export async function hasRole(role: 'USER' | 'ADMIN' | 'PARTNER') {
  const session = await auth();
  return session?.user?.role === role;
}
