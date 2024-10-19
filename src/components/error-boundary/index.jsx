/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import Button from '../button';
import './styles.scss';

function ErrorFallback({ error, resetErrorBoundary }) {
  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <div className="error-boundary">
      <h2>Something went wrong!</h2>
      <p>An unexpected error occurred. Please try again later.</p>
      <Button onClick={() => window.location.replace('/products')}>Return to Product List</Button>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('ErrorBoundary caught an error', error, errorInfo);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
