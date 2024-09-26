import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CommentItem from './CommentItem';

import { Comment } from '@/types';

import { store } from '../redux/store';

const mockComment: Comment = {
  id: 1,
  body: 'This is a test comment',
  postId: 1,
  user: {
    id: 1,
    username: 'TestUser',
  },
};

jest.mock('../redux/hooks', () => ({
  ...jest.requireActual('../redux/hooks'),
  useAppDispatch: () => jest.fn(),
}));

test('renders CommentItem correctly', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CommentItem comment={mockComment} />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByText(/This is a test comment/i)).toBeInTheDocument();

  expect(screen.getByText(/TestUser/i)).toBeInTheDocument();

  expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
});
