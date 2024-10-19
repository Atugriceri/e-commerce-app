import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function ErrorPopup({ message, duration, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="error-popup">
      <div className="error-popup__content">
        <p className="error-popup__message">{message}</p>
      </div>
    </div>
  );
}

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

ErrorPopup.defaultProps = {
  duration: 3000,
};

export default ErrorPopup;
