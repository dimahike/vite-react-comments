import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import CommentsList from './CommentsList';

import { addComment, resetCommentsState } from '../redux/commentsSlice';

import { store } from '../redux/store';

import { Comment } from '@/types';

beforeEach(() => {
  store.dispatch(resetCommentsState());
  localStorage.removeItem('comments');
});

test('renders CommentsList with comments', () => {
  const mockComments: Comment[] = [
    {
      id: 1001,
      body: 'First test comment',
      postId: 1,
      user: {
        id: 11,
        username: 'User1',
      },
    },
    {
      id: 2001,
      body: 'Second test comment',
      postId: 1,
      user: {
        id: 21,
        username: 'User2',
      },
    },
  ];

  mockComments.forEach((comment) => store.dispatch(addComment(comment)));

  render(
    <Provider store={store}>
      <BrowserRouter>
        <CommentsList />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByText(/First test comment/i)).toBeInTheDocument();
  expect(screen.getByText(/Second test comment/i)).toBeInTheDocument();
});

test('renders CommentsList without comments', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CommentsList />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.queryByText(/test comment 3/i)).not.toBeInTheDocument();
});
