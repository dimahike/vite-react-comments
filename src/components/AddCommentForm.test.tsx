import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import AddCommentForm from '../components/AddCommentForm';

import { store } from '../redux/store';

test('renders AddCommentForm and handles input', () => {
  const { getByLabelText, getByRole } = render(
    <Provider store={store}>
      <AddCommentForm />
    </Provider>,
  );

  const nameInput = getByLabelText(/Your name/i);
  const commentInput = getByLabelText(/Your comment/i);
  const submitButton = getByRole('button', { name: /Add a comment/i });

  fireEvent.change(nameInput, { target: { value: 'Test name' } });
  fireEvent.change(commentInput, { target: { value: 'Rest comment' } });
  fireEvent.click(submitButton);
});
