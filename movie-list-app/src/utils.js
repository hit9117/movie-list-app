// utils.js

export const formatReleaseDate = (date) => {
    // Add your logic to format the date string into a user-friendly format (e.g., YYYY-MM-DD to DD/MM/YYYY)
    return new Date(date).toLocaleDateString(); // Example using built-in formatting
  };
  
  // You can add other utility functions here, such as formatting numbers (e.g., currency),
  // manipulating strings, etc.
  