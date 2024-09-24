import axios from "axios";
import { ExperienceGroupType, ExperienceSection } from "../Types/types";
import { API_URL } from "./config";

type WorkExperienceData = {
  title: string;
  dateRange: string;
  location: string;
  description: string;
  bulletPoints: string[];
};

export async function fetchWorkExperienceData() {
  try {
    const response = await axios.get(API_URL + "/WorkExperience");
    return formatWorkExperienceToExperience(response.data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}
const formatWorkExperienceToExperience = (data: WorkExperienceData[]) => {
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