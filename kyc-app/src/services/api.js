const API_URL = import.meta.env.VITE_API_URL;

export async function fectchData(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`,{
   headers: {
    'Content-Type': 'application/json',
  }, ...options});
   if (!response.ok) {
        const errorData = await response.json()
        .then(data => data).catch(() => ({}));
        throw new Error(errorData.message || 'An error occurred while fetching data.');
    }
  return response.json();
}