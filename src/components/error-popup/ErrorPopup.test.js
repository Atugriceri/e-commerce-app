import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorPopup from './index';

jest.useFakeTimers();

describe('ErrorPopup Component', () => {
  test('renders the message correctly', async () => {
    const message = 'Test error message';
    const onClose = jest.fn();

    render(<ErrorPopup message={message} onClose={onClose} />);

    expect(await screen.findByText(message)).toBeInTheDocument();
  });
});
