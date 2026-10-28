import { DashboardOverview, Work, ActionItem, DailyLog } from '@portfolio/types';

/**
 * Returns the base URL for the backend API service.
 * In server-side functions on Vercel, the internal service binding injects API_URL.
 * In the browser, a relative URL is used since Vercel rewrites /api/(.*) to the API service.
 */
function getApiBaseUrl(): string {
  if (process.env.API_URL) {
    return process.env.API_URL;
  }
  if (typeof window !== 'undefined') {
    return '';
  }
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
}

export async function getDashboardOverview(): Promise<DashboardOverview | null> {
  try {
    const baseUrl = getApiBaseUrl();
    const endpoint = baseUrl ? new URL('/api/metrics/overview', baseUrl).toString() : '/api/metrics/overview';
    
    const res = await fetch(endpoint, {
      next: { revalidate: 60, tags: ['overview'] },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    // Graceful fallback during static build or when backend database is disconnected
    return null;
  }
}

export async function getWorks(): Promise<Work[]> {
  try {
    const baseUrl = getApiBaseUrl();
    const endpoint = baseUrl ? new URL('/api/works', baseUrl).toString() : '/api/works';
    
    const res = await fetch(endpoint, {
      next: { revalidate: 60, tags: ['works'] },
    });

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}
