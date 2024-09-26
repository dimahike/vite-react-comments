import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import CommentPage from './CommentPage';

import { store } from '../redux/store';

import { addComment, resetCommentsState } from '../redux/commentsSlice';

import { Comment } from '@/types';

const mockComment: Comment = {
  id: 1,
  body: 'This is a test comment on CommentPage',
  postId: 1,
  user: {
    id: 1,
    username: 'TestUser',
  },
};

beforeEach(() => {
  store.dispatch(resetCommentsState());
  localStorage.removeItem('comments');
});

test('renders CommentPage with existing comment', () => {
  store.dispatch(addComment(mockComment));

  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/comments/1']}>
        <Routes>
          <Route path="/comments/:id" element={<CommentPage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(
    screen.getByText(/This is a test comment on CommentPage/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/Comment from TestUser/i)).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /Back to the list of comments/i }),
  ).toBeInTheDocument();
});

test('renders CommentPage with non-existing comment', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/comments/999']}>
        <Routes>
          <Route path="/comments/:id" element={<CommentPage />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(screen.getByText(/Comment not found/i)).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /Back to the list of comments/i }),
  ).toBeInTheDocument();
});
