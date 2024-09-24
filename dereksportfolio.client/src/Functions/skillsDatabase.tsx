import axios from "axios";
import { Skill } from "../Types/types";
import { mapNameToIcon } from "../Constants/Mappings";

const API_URL = "http://localhost:5084/api/Skill";

type SkillsFromDB = {
  name: string;
  years: number;
  iconName: string;
  category: string;
  description: string;
};

export async function fetchSkills() {
  try {
    const response = await axios.get(API_URL);
    return convertSkillsFromDB(response.data);
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

const convertSkillsFromDB = (data: SkillsFromDB[]) => {
  console.log(data);
  const skills : Skill[] = [];
  data.map((skill: SkillsFromDB) => {
    const newSkill : Skill = {
      name: skill.name,
      years: skill.years,
      icon: mapNameToIcon(skill.iconName),
      category: skill.category,
      description: skill.description,
    };
    skills.push(newSkill);
  });
  return skills;
};
