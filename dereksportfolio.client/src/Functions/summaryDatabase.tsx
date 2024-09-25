import axios from 'axios';
import { API_URL } from "./config";
import { ExperienceGroupType } from '../Types/types';

type SummaryData = {
  title: string;
  description: string;
}

export async function fetchSummary() {
  try {
    const response = await axios.get(API_URL + "/Summary");
    return formatSummaryToExperience(response.data);
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
}

const formatSummaryToExperience = (summary : SummaryData) => {
  const summaryData : ExperienceGroupType = {
    title: 'Summary',
    sections: [
      {
        title: summary.title,
        description: summary.description
      }
    ]
  };
  return summaryData;
}