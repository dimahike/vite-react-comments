import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

test('renders HomePage with heading and components', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );

  expect(
    screen.getByRole('heading', { name: /List of comments/i }),
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: /Add a comment/i }),
  ).toBeInTheDocument();
});
