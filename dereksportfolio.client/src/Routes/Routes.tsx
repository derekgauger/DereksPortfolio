import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume/Resume";
import { Navigate } from "react-router-dom";

export const routes = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <h1>404 Not Found</h1>,
        exact: true,
        breadcrumb: 'Home'
    },
    {
        path: '/about',
        element: <About/>,
        exact: true,
        breadcrumb: 'About'
    },
    {
        path: '/experiences',
        element: <Resume/>,
        exact: true,
        breadcrumb: 'Experiences'
    },
    {
        path: '/projects',
        element: <Projects/>,
        exact: true,
        breadcrumb: 'Projects'
    },
    {
        path: '/projects/:project_details_page_url',
        element: <ProjectDetails />,
        exact: true,
        breadcrumb: 'Project Details'
    },
    {
        path: '/contact',
        element: <Contact/>,
        exact: true,
        breadcrumb: 'Contact',
    },
    {
        path: '*',
        element: <Navigate to="/"/>,
        breadcrumb: 'Home'
    }
]