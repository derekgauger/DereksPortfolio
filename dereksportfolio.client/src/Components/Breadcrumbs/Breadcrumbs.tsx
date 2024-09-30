import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../Routes/Routes";
import { ChevronRight } from "lucide-react"; // Assuming you're using lucide-react for icons

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="py-2 px-4 overflow-x-auto">
      <ol className="flex items-center space-x-1 sm:space-x-2 whitespace-nowrap">
        <li>
          <Link to="/" className="text-green-400 hover:text-pink-600 font-bold text-sm sm:text-base">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const alternateDisplayName = name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const route = routes.find((r) => r.path.split("/")[1] === name);
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <li className="text-gray-500 flex items-center">
                <ChevronRight size={16} className="hidden sm:inline" />
                <span className="sm:hidden">/</span>
              </li>
              <li className="max-w-[120px] sm:max-w-none overflow-hidden overflow-ellipsis">
                {isLast ? (
                  <span className="text-white font-bold text-sm sm:text-base" aria-current="page">
                    {route ? route.breadcrumb : alternateDisplayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-green-400 hover:text-pink-600 font-bold text-sm sm:text-base"
                  >
                    {route ? route.breadcrumb : alternateDisplayName}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;