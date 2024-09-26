import { createListenerMiddleware } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store.ts';

import { addComment, deleteComment } from './commentsSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: addComment,
  effect: (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    localStorage.setItem('comments', JSON.stringify(state.comments.comments));
  },
});

listenerMiddleware.startListening({
  actionCreator: deleteComment,
  effect: (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    localStorage.setItem('comments', JSON.stringify(state.comments.comments));
  },
});

export default listenerMiddleware;
