import React from 'react';
import PropTypes from 'prop-types';
import StickyTop from '../sticky-top';

function Navbar({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <StickyTop>
        <div style={{ width: '100%', background: 'var(--dark)', padding: '16px 16px' }}>
          {children}
        </div>
      </StickyTop>
    </div>
  );
}

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
