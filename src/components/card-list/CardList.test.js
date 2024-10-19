import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import CardList from './index';

describe('CardList Component', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      price: '19.99',
      image: 'image1.jpg',
      body: 'Description for product 1',
    },
    {
      id: 2,
      title: 'Product 2',
      price: '29.99',
      image: 'image2.jpg',
      body: 'Description for product 2',
    },
  ];

  test('renders the correct number of ProductCard components', () => {
    render(
      <MemoryRouter>
        <CardList products={mockProducts} />
      </MemoryRouter>,
    );

    const productCards = screen.getAllByTestId(/product-card-/);
    expect(productCards).toHaveLength(mockProducts.length);
  });

  test("renders each product's information correctly", () => {
    render(
      <MemoryRouter>
        <CardList products={mockProducts} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    expect(screen.getByText((content, element) => {
      const hasText = (text) => element.textContent.includes(text);
      const priceElement = element.tagName.toLowerCase() === 'p' && hasText('19.99');
      return priceElement;
    })).toBeInTheDocument();

    expect(screen.getByText((content, element) => {
      const hasText = (text) => element.textContent.includes(text);
      const priceElement = element.tagName.toLowerCase() === 'p' && hasText('29.99');
      return priceElement;
    })).toBeInTheDocument();
  });

  test('renders correctly with an empty products array', () => {
    render(
      <MemoryRouter>
        <CardList products={[]} />
      </MemoryRouter>,
    );

    const productCards = screen.queryAllByTestId(/product-card-/);
    expect(productCards).toHaveLength(0);
  });
});
