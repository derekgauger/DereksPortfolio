import React from "react";
import { Project } from "../../Types/types";
import Slideshow from "../Slideshow/Slideshow";
import ProjectInfo from "./ProjectInfo";

const ProductShowcase: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
      <div className="col-span-1">
        <Slideshow
          autoScroll
          autoScrollInterval={5000}
          images={project.images}
        />
      </div>
      <div className="col-span-1">
        <ProjectInfo project={project}/>
      </div>
    </div>
  );
};

export default ProductShowcase;