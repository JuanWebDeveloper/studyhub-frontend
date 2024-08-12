import { configureStore } from '@reduxjs/toolkit';
//*> Import the slices to be used in the store.
import { uiSlice } from './slices/uiSlice';
import { notesSlice } from './slices/notesSlice';

export const StoreState = configureStore({
 reducer: {
  ui: uiSlice.reducer,
  notes: notesSlice.reducer,
 },
});

//*> Types representing the state and dispatch function of the Redux store.
export type StoreStateType = ReturnType<typeof StoreState.getState>;
export type StoreDispatchType = typeof StoreState.dispatch;
