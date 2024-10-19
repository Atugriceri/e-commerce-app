import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import Link from '../link';

function ProductCard({ title, price, image, body, to, productId }) {
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(to);
    }
  };

  return (
    <div
      className="product-card"
      tabIndex={0}
      onClick={() => navigate(to)}
      onKeyPress={handleKeyPress}
      role="button"
      aria-label={`View details for ${title}`}
      data-testid={`product-card-${productId}`}
    >
      <img src={image} alt={title} className="product-card__image" />
      <div className="product-card__body">
        <Link to={to}>{title}</Link>
        <p className="product-card__description" title={body}>{body}</p>
        <p className="product-card__price">${price}</p>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired, // productId eklenmiş olmalı
};

export default ProductCard;
