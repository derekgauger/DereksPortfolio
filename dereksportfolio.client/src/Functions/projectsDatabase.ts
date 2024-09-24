import axios from 'axios';

const API_URL = 'http://localhost:5084/api/Projects';

export async function fetchProjects() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}