const API_URL = import.meta.env.VITE_API_URL || 'https://country-club-way-backend.vercel.app';

console.log('API_URL:', API_URL); // Debug log

export const submitLead = async (leadData) => {
  try {
    console.log('Submitting to:', `${API_URL}/api/leads`); // Debug log
    
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    console.log('Response status:', response.status); // Debug log

    const contentType = response.headers.get('content-type');
    
    if (!response.ok) {
      // Try to parse error as JSON if possible
      if (contentType && contentType.includes('application/json')) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit lead');
      } else {
        const errorText = await response.text();
        throw new Error(errorText || `Server error: ${response.status}`);
      }
    }

    // Parse successful response
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      throw new Error('Invalid response format from server');
    }
  } catch (error) {
    console.error('API Error:', error); // Debug log
    // If it's already an Error object, rethrow it
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise, wrap it
    throw new Error('Network error: Could not connect to server');
  }
};
