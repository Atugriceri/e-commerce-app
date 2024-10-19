import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('triggers onClick function when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disables the button when `disabled` prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  test('applies the correct variant class', () => {
    render(<Button variant="primary">Buy</Button>);
    const buttonElement = screen.getByText(/buy/i);
    expect(buttonElement).toHaveClass('btn--primary');
  });

  test('passes down the `aria-label` correctly', () => {
    render(<Button ariaLabel="Close the dialog">Close</Button>);
    const buttonElement = screen.getByLabelText(/close the dialog/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with additional class names', () => {
    render(<Button className="additional-class">Additional</Button>);
    const buttonElement = screen.getByText(/additional/i);
    expect(buttonElement).toHaveClass('additional-class');
  });
});
