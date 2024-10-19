import React, { Suspense as ReactSuspense } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

function Suspense({ children }) {
  return (
    <ReactSuspense fallback={<Spinner />}>
      {children}
    </ReactSuspense>
  );
}

Suspense.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Suspense;
