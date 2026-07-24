// API Configuration
const API_CONFIG = {
  // Backend API base URL - change this for different environments
  BASE_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api' 
    : '/api', // For production, use relative path or production URL
  
  // Contact email for public display
  CONTACT_EMAIL: 'nx.studio.network@gmail.com',
  
  // Admin notification email (not exposed to frontend)
  // This is handled server-side
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}
