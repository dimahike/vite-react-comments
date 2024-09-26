import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('renders NotFoundPage with message and link', () => {
  render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>,
  );

  expect(
    screen.getByRole('heading', { name: /Page not found/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByText(/Unfortunately, the page you requested does not exist./i),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /Return to home page/i }),
  ).toBeInTheDocument();
});
