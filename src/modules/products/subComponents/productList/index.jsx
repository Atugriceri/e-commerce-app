import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../slice';
import CardList from '../../../../components/card-list';
import Spinner from '../../../../components/spinner';

function ProductList() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.products.productList);

  useEffect(() => {
    if (status === 'waitingPayload') {
      dispatch(getProductList());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'error') {
    return <p>Error: {error}</p>;
  }

  if (status === 'success' && data) {
    return <CardList products={data} />;
  }

  return null;
}

export default ProductList;
