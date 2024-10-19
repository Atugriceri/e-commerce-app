import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductRoutes from '../modules/products/routes';

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/*" element={<ProductRoutes />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
