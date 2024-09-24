import { IconType } from "react-icons";

export type Skill = {
    name: string;
    years: number;
    icon?: IconType;
    category: string;
    description: string;
}

export type SkillCategory = {
    name: string;
    skills: Skill[];
}

export type Interest = {
    name: string;
    icon: IconType;
}

export type ExperienceSection = {
    title: string;
    date_range?: string;
    location?: string;
    description: string;
    bulletPoints?: string[];
};

export type ExperienceGroupType = {
    title: string;
    sections: ExperienceSection[];
};

export type Tag = {
    name: string;
    category: string;
}

export type ProjectUrl = {
    name: string;
    url: string;
}
  
export type Project = {
    id: number | string;
    title: string;
    category: string;
    images: string[];
    pageDescription: string;
    description: string;
    tags: Tag[];
    detailsUrl?: string;
    urls?: ProjectUrl[];
}


export type EmailSettings = {
    name: string;
    email: string;
    subject: string;
    body: string;
}