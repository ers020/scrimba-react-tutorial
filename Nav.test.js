import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';

test('renders navigation bar', () => {
    const { getByText, getByAltText } = render(<Nav />);
    const logoTextElement = screen.getByText('ReactFacts');
    const logoImageElement = screen.getByAltText('react-icon');

    expect(logoTextElement).toBeInTheDocument();
    expect(logoImageElement).toBeInTheDocument();
});
