import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Link from './index';

describe('Link Component', () => {
  const linkText = 'Click me';
  const linkTo = '/about';

  test('renders the Link with correct text and href', () => {
    render(
      <Router>
        <Link to={linkTo}>{linkText}</Link>
      </Router>,
    );

    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', linkTo);
  });

  test('applies the hover style', () => {
    render(
      <Router>
        <Link to={linkTo}>{linkText}</Link>
      </Router>,
    );

    const linkElement = screen.getByText(linkText);
    expect(linkElement).toHaveStyle('color: var(--dark)');
  });
});
