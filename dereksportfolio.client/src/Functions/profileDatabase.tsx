import axios from 'axios';
import { API_URL } from "./config";

export async function fetchProfile() {
  try {
    const response = await axios.get(API_URL + "/Profile");
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}