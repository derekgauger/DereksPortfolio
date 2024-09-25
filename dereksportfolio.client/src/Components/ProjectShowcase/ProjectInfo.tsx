import React from "react";
import { Project, ProjectUrl, Tag } from "../../Types/types";
import Divider from "../Divider/Divider";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const filteredTags = project.tags.filter(
    (tag: Tag) => tag.category !== "type"
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-[--secondary-background-color] p-4 sm:p-6 md:p-8 rounded-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Project Information
        </h2>
        <Divider
          style={{ width: "100%" }}
          tailwind="mx-auto my-2 sm:my-4 border-t-2 border-gray-600"
        />
        <div className="space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Category:</span> {project.category}
          </p>
          <p className="text-sm sm:text-base">
            <span className="font-semibold">Technologies:</span>{" "}
            {filteredTags.map((tag: Tag) => tag.name).join(", ")}
          </p>
          {project.urls?.map((projectUrl: ProjectUrl, index: number) => (
            <p key={index} className="text-sm sm:text-base">
              <span className="font-semibold">{projectUrl.name}:</span>{" "}
              <a
                href={projectUrl.url}
                className="text-green-400 hover:text-pink-600 hover:underline overflow-wrap word-wrap break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectUrl.url}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div className="px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-sm sm:text-base text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;