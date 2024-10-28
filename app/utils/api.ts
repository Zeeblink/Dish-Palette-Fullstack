// utils/api.ts
export function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    // Running on Vercel
    return `https://${process.env.VERCEL_URL}`;
  }
  
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    // Use NEXT_PUBLIC_SITE_URL if set (production)
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // Fallback to localhost in development
  return process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : '';
}

// Function to make API requests
export async function fetchApi(path: string) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;
  
  try {
    const response = await fetch(url, {
      // Include any default headers or options here
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}