import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductRoutes from '../modules/product/routes';

const PageRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<ProductRoutes />} />
			</Routes>
		</Router>
	);
};

export default PageRoutes;
