import { motion } from "framer-motion";
import React from "react";
import { Project, Tag } from "../../Types/types";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string | undefined) => {
    if (path === undefined) {
      enqueueSnackbar("Details page not found", { variant: "error" });
    }
    navigate(path ? path : "/", { state: { additionalData: project } });
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredTags = project.tags.filter(
    (tag: Tag) => !["type", "Type"].includes(tag.category)
  );

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 }, duration: 0.2 }}
      className="relative flex group border border-1 border-gray-500 rounded-lg overflow-hidden"
    >
      <div className="flex overflow-hidden rounded-sm m-auto w-full h-full">
        <img
          src={project.images[0]}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-lg my-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full group-hover:bg-black transition-opacity duration-300 opacity-0 group-hover:opacity-70 rounded-lg"/>
        <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex flex-col items-center justify-center w-full h-full p-2">
            <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2">
              {project.title} - <span>{project.category}</span>
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => handleNavigation(project.detailsUrl)}
                className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 tooltip"
                data-tooltip="View Details"
              >
                <FaInfoCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-2 right-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <div className="flex gap-1 flex-wrap-reverse">
          {filteredTags.map((tag) => (
            <span
              key={`${project.id}-${tag.name}`}
              className="text-center text-xs bg-green-400 text-[--primary-background-color] font-medium px-2 py-1 rounded-full"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;