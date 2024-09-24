import axios from "axios";
import { EmailSettings } from "../Types/types";
import { API_URL } from "./config";

export const sendEmail = async(emailData : EmailSettings) => {
  try {
      const response = await axios.post(API_URL + "/Email/send-email", emailData, {
      });
      return {data: response.data, error: null}
  } catch (error) {
      return {data: null, error: error}
  }
}