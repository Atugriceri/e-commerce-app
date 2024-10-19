/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Button({ children, onClick, type, disabled, variant, ariaLabel, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
  type: 'button',
  disabled: false,
  variant: 'primary',
  ariaLabel: '',
  className: '',
};

export default Button;
