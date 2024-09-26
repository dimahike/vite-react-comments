import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NavBar from './NavBar';

test('renders NavBar with home link', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );

  expect(screen.getByRole('link', { name: /Comments/i })).toBeInTheDocument();
});
