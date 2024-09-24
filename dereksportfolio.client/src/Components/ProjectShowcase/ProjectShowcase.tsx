import { Project } from "../../Types/types";
import Slideshow from "../Slideshow/Slideshow";
import ProjectInfo from "./ProjectInfo";

const ProductShowcase: React.FC<{ project: Project }> = ({ project }) => {
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <div className="col-span-1">
        <Slideshow
          autoScroll
          autoScrollInterval={5000}
          images={project.images}
        />
      </div>
      <ProjectInfo project={project}/>
    </div>
  );
};

export default ProductShowcase;
