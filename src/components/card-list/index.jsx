import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../product-card';
import './styles.scss';

function CardList({ products }) {
  return (
    <div className="card-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          body={product.body}
          to={`/products/${product.id}`}
          data-testid={`product-card-${product.id}`}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CardList;
