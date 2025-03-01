const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/posts`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};