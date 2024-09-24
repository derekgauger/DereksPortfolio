import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../Routes/Routes';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="py-2 ">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="text-green-400 hover:text-pink-500 font-bold">Home</Link>
        </li>
        {pathnames.map((name, index) => {
            const alternateDisplayName = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const route = routes.find(r => r.path.split('/')[1] === name);
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <li className="text-gray-500">/</li>
              <li>
                {isLast ? (
                  <span className="text-white font-bold" aria-current="page">
                    {route ? route.breadcrumb : alternateDisplayName}
                  </span>
                ) : (
                  <Link to={routeTo} className="text-green-400 hover:text-green-500 font-bold">
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