import axios from "axios";
import { EmailSettings } from "../Types/types";

const API_URL = "http://localhost:5084/api/Email/send-email";

export const sendEmail = async(emailData : EmailSettings) => {
  try {
      const response = await axios.post(API_URL, emailData, {
      });
      return {data: response.data, error: null}
  } catch (error) {
      return {data: null, error: error}
  }
}