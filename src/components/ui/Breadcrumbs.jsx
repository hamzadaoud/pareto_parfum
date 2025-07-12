import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumbs = ({ customItems = null }) => {
  const location = useLocation();
  
  const routeMap = {
    '/homepage': 'Home',
    '/product-catalog': 'Perfumes',
    '/product-detail': 'Product Details',
    '/shopping-cart': 'Shopping Cart',
    '/about-us': 'Our Story',
    '/contact': 'Contact'
  };

  const generateBreadcrumbs = () => {
    if (customItems) return customItems;
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];
    
    if (location.pathname !== '/homepage') {
      const currentRoute = `/${pathSegments[0]}`;
      if (routeMap[currentRoute]) {
        breadcrumbs.push({
          label: routeMap[currentRoute],
          path: currentRoute
        });
      }
      
      // Add product-specific breadcrumb for product detail page
      if (location.pathname === '/product-detail') {
        breadcrumbs.splice(1, 0, {
          label: 'Perfumes',
          path: '/product-catalog'
        });
      }
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm font-inter text-muted-foreground py-4">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          {index > 0 && (
            <Icon name="ChevronRight" size={16} className="text-border" />
          )}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link
              to={crumb.path}
              className="hover:text-accent transition-colors duration-200"
            >
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;