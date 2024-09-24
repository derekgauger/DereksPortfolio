import axios from "axios";
import { ExperienceGroupType, ExperienceSection } from "../Types/types";

type WorkExperienceData = {
  title: string;
  dateRange: string;
  location: string;
  description: string;
  bulletPoints: string[];
};

const API_URL = "http://localhost:5084/api/WorkExperience";

export async function fetchWorkExperienceData() {
  try {
    const response = await axios.get(API_URL);
    return formatWorkExperienceToExperience(response.data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
const formatWorkExperienceToExperience = (data: WorkExperienceData[]) => {
  console.log("Work experience", data);
  const formattedData: ExperienceGroupType = {
    title: "Professional Experience",
    sections: [],
  };
  data.map((workExperience: WorkExperienceData) => {
    const section: ExperienceSection = {
      title: workExperience.title,
      date_range: workExperience.dateRange,
      location: workExperience.location,
      description: workExperience.description,
      bulletPoints: workExperience.bulletPoints,
    };
    formattedData.sections.push(section);
  });
  return formattedData;
};