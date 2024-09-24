import React from "react";
import { Project, ProjectUrl, Tag } from "../../Types/types";
import Divider from "../Divider/Divider";

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  // The 'type' tag is not relevant because it is equal to the category. We do this so we can add the type filter, but should not show it as a tag.

  const filteredTags = project.tags.filter(
    (tag: Tag) => tag.category !== "type"
  );

  return (
    <div className="col-span-1 space-y-6">
      <div className="bg-[--secondary-background-color] p-8 rounded-sm">
        <h2 className="text-2xl font-bold text-white mb-2">
          Project Information
        </h2>
        <Divider
          style={{ width: "100%" }}
          tailwind="mx-auto my-4 border-t-2 border-gray-600"
        />
        <div className="space-y-3">
          <p className="">
            <span className="font-semibold">Category:</span> {project.category}
          </p>
          <p className="">
            <span className="font-semibold">Technologies:</span>{" "}
            {filteredTags.map((tag: Tag) => tag.name).join(", ")}
          </p>
          {project.urls?.map((projectUrl: ProjectUrl, index: number) => (
            <p key={index} className="">
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
      <div className="px-4">
        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectInfo;
