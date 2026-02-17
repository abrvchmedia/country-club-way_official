const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitLead = async (leadData) => {
  const response = await fetch(`${API_URL}/api/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to submit lead');
  }

  return response.json();
};
