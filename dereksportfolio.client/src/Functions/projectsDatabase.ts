import axios from 'axios';
import { API_URL } from "./config";

export async function fetchProjects() {
  try {
    const response = await axios.get(API_URL + "/Projects");
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}