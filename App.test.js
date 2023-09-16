import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders Nav and Main components', () => {
    const { getByText } = render(<App />);
    const navElement = screen.getByText('ReactFacts');
    const mainElement = screen.getByText('Fun facts about React');

    expect(navElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
});
