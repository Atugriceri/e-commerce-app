import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

function Link({ children, to, className }) {
  return (
    <RouterLink
      to={to}
      className={`link ${className}`}
      title={children}
      tabIndex={-1}
    >
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: '',
};

export default Link;
