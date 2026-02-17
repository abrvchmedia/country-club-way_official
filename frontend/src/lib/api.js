const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitLead = async (leadData) => {
  try {
    const response = await fetch(`${API_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

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
    // If it's already an Error object, rethrow it
    if (error instanceof Error) {
      throw error;
    }
    // Otherwise, wrap it
    throw new Error('Network error: Could not connect to server');
  }
};
