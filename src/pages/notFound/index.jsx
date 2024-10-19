import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';

function NotFound() {
  const navigate = useNavigate();
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      gap: '16px',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button onClick={() => navigate('/products')} style={styles.link}>
        Return to Product List
      </Button>
    </div>
  );
}

export default NotFound;
