import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function PageWrapper({ children }) {
  return (
    <div className="page-wrapper" style={{ display: 'flex', flexGrow: 1 }}>
      <div style={{ width: '100%', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
