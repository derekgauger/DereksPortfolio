import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Footer from "../../Components/Footer/Footer";
import { Project } from "../../Types/types";
import ProductShowcase from "../../Components/ProjectShowcase/ProjectShowcase";
import { fetchProjects } from "../../Functions/projectsDatabase";
import LoadingIcon from "../../Components/LoadingIcon/LoadingIcon";

const ProjectDetails: React.FC = () => {
  const location = useLocation();
  const [project, setProject] = useState<Project>(location.state?.additionalData);
  const [isLoading, setIsLoading] = useState(!project);

  useEffect(() => {
    if (project) {
      setIsLoading(false);
      return;
    }
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const fetchedProjects = await fetchProjects();
        
        const correctProject = fetchedProjects.find((project: Project) => project.detailsUrl === location.pathname);
        setProject(correctProject);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (isLoading) {
      return <LoadingIcon/>;
  }

  return (
    <div className="container mx-auto">
      <PageHeader title={project.title} description={project.pageDescription} />
      <div className="mt-4 sm:mt-8 px-4">
        <ProductShowcase project={project} />
      </div>
      <Footer
        title={"Thank you for checking out my project details!"}
        content={
          <p className="text-sm sm:text-base">
            If you would like to learn more about the project, please visit the
            'Contact' page and send me a message. If you would like to
            contribute to the project, please visit the project's GitHub
            repository.
          </p>
        }
      />
    </div>
  );
};

export default ProjectDetails;
