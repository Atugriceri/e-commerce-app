/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './index';

describe('ProductCard Component', () => {
  const mockProps = {
    productId: 1,
    title: 'Test Title',
    price: '99.99',
    image: 'https://picsum.photos/200?random=2',
    body: 'Test Description',
    to: '/product/test-title',
  };

  test('renders ProductCard with correct props', () => {
    render(
      <MemoryRouter>
        <ProductCard {...mockProps} />
      </MemoryRouter>,
    );

    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Test Description/i);
    expect(descriptionElement).toBeInTheDocument();

    const priceElement = screen.getByText(/99.99/i);
    expect(priceElement).toBeInTheDocument();

    const imageElement = screen.getByAltText(/Test Title/i);
    expect(imageElement).toHaveAttribute('src', 'https://picsum.photos/200?random=2');

    const cardElement = screen.getByRole('button', { name: /View details for Test Title/i });
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveAttribute('tabindex', '0');
  });

  test('navigates when clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProductCard {...mockProps} />} />
          <Route path="/product/test-title" element={<div>Product Detail Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const cardElement = screen.getByRole('button', { name: /View details for Test Title/i });
    fireEvent.click(cardElement);

    expect(screen.getByText('Product Detail Page')).toBeInTheDocument();
  });

  test('navigates when "Enter" or "Space" key is pressed', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProductCard {...mockProps} />} />
          <Route path="/product/test-title" element={<div>Product Detail Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const cardElement = screen.getByRole('button', { name: /View details for Test Title/i });

    fireEvent.keyPress(cardElement, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(screen.getByText('Product Detail Page')).toBeInTheDocument();

    fireEvent.keyPress(cardElement, { key: ' ', code: 'Space', charCode: 32 });
    expect(screen.getByText('Product Detail Page')).toBeInTheDocument();
  });
});
