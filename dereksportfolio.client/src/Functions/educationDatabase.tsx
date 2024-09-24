import axios from 'axios';
import { ExperienceGroupType, ExperienceSection } from '../Types/types';
import { API_URL } from './config.ts';

type EducationData = {
  title: string;
  dateRange: string;
  location: string;
  description: string;
  bulletPoints: string[];
}

export async function fetchEducationData() {
  try {
    const response = await axios.get(API_URL + "/Education");
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