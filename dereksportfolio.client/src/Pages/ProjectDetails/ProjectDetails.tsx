import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Footer from "../../Components/Footer/Footer";
import { Project } from "../../Types/types";
import ProductShowcase from "../../Components/ProjectShowcase/ProjectShowcase";

const ProjectDetails: React.FC = () => {
  const location = useLocation();
  const project: Project = location.state?.additionalData;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto">
      <PageHeader
        title={project.title}
        description={project.pageDescription}
      />
      <div className="mt-8">
        <ProductShowcase project={project} />
      </div>
      <Footer
        title={"Thank you for checking out my project details!"}
        content={
          <p>
            If you would like to learn more about the project, please visit the 'Contact' page and send me a message. If you would like to contribute to the project, please visit the project's GitHub repository.
          </p>
        }
      />
    </div>
  );
};

export default ProjectDetails;
