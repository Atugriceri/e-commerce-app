import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsLayout from '..';
import Spinner from '../../../components/spinner';

const ProductList = lazy(() => import('../subComponents/productList'));
const ProductDetail = lazy(() => import('../subComponents/productDetail'));

function ProductRoutes() {
  return (
    <Routes>
      <Route path="" element={<ProductsLayout />}>
        <Route
          index
          element={(
            <Suspense fallback={<Spinner />}>
              <ProductList />
            </Suspense>
          )}
        />
        <Route
          path=":id"
          element={(
            <Suspense fallback={<Spinner />}>
              <ProductDetail />
            </Suspense>
          )}
        />
      </Route>
    </Routes>
  );
}

export default ProductRoutes;
