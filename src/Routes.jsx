import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import { CartProvider } from "contexts/CartContext"; // Add this import

// Page imports
import Homepage from "pages/homepage";
import ProductDetail from "pages/product-detail";
import ShoppingCart from "pages/shopping-cart";
import Contact from "pages/contact";
import AboutUs from "pages/about-us";
import ProductCatalog from "pages/product-catalog";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <CartProvider> {/* Wrap everything with CartProvider */}
          <ScrollToTop />
          <RouterRoutes>
            {/* Define your routes here */}
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </CartProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;