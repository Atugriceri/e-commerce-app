import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PageRoutes from './routes';
import Logo from './assets/images/logo.png';
import Navbar from './components/navbar';
import PageWrapper from './components/page-wrapper';
import ErrorBoundary from './components/error-boundary';

function App() {
  return (
    <Provider store={store}>
      <Navbar>
        <a href="/products" tabIndex="0">
          <img src={Logo} alt="Company Logo" style={{ height: '24px', aspectRatio: 1 }} />
        </a>
      </Navbar>

      <ErrorBoundary>
        <PageWrapper>
          <PageRoutes />
        </PageWrapper>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
