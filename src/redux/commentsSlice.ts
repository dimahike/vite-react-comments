import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialComments } from '../data/comments';

import { Comment, CommentsState } from '@/types';

const storedComments = localStorage.getItem('comments');
const initialState: CommentsState = {
  username: '',
  body: '',
  comments: storedComments ? JSON.parse(storedComments) : initialComments,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    resetCommentsState: () => initialState,
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.unshift(action.payload);

      // localStorage.setItem('comments', JSON.stringify(state.comments));
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload,
      );
    },
  },
});

export const {
  resetCommentsState,
  setBody,
  setUsername,
  addComment,
  deleteComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
