import axios from 'axios';
import { ExperienceGroupType, ExperienceSection } from '../Types/types';

type EducationData = {
  title: string;
  dateRange: string;
  location: string;
  description: string;
  bulletPoints: string[];
}

const API_URL = 'http://localhost:5084/api/Education';

export async function fetchEducationData() {
  try {
    const response = await axios.get(API_URL);
    return formatEducationToExperience(response.data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
const formatEducationToExperience = (data : EducationData[]) => {
  console.log("Educ", data);
  const formattedData : ExperienceGroupType = {
    title: 'Education',
    sections: []
  };
  data.map((education : EducationData) => {
    const section : ExperienceSection = {
      title: education.title,
      date_range: education.dateRange,
      location: education.location,
      description: education.description,
      bulletPoints: education.bulletPoints,
    }
    formattedData.sections.push(section);
  });
  return formattedData;
}