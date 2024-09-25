import axios from 'axios';
import { API_URL } from "./config";

export async function fetchSummary() {
  try {
    const response = await axios.get(API_URL + "/Summary");
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
}