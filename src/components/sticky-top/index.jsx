import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function StickyTop({ children, top }) {
  return (
    <div className="sticky-top" style={{ top }}>
      {children}
    </div>
  );
}

StickyTop.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.string,
};

StickyTop.defaultProps = {
  top: '0',
};

export default StickyTop;
