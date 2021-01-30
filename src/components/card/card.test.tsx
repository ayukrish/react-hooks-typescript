import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import Card from './index';

// eslint-disable-next-line react/jsx-props-no-spreading
const renderCard = (props?: any) => render(<Card {...props} />);

describe('<Card>', () => {
  it('should render Card in light mode', () => {
    renderCard({
      theme: {
        theme: 'light',
      },
    });
    expect(screen.getByRole('article')).toMatchSnapshot();
  });

  it('should render Card in dark mode', () => {
    renderCard({
      theme: {
        theme: 'dark',
      },
    });
    expect(screen.getByRole('article')).toMatchSnapshot();
  });
});
