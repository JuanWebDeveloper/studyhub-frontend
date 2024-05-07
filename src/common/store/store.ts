import { configureStore } from '@reduxjs/toolkit';
//*> Import the slices to be used in the store.
import { uiSlice } from './slices/uiSlice';

export const StoreState = configureStore({
 reducer: {
  ui: uiSlice.reducer,
 },
});
