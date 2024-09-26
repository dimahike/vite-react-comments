import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';
import listenerMiddleware from '@/redux/listenerMiddleware.ts';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
