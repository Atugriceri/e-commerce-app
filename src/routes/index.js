import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductRoutes from '../modules/products/routes';
import NotFound from '../pages/notFound';

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
