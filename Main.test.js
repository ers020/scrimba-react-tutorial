import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders main component with facts', () => {
    const { getByText } = render(<Main />);
    const titleElement = screen.getByText('Fun facts about React');
    const factElement = screen.getByText('Was first released in 2013');

    expect(titleElement).toBeInTheDocument();
    expect(factElement).toBeInTheDocument();
});
