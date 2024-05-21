import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiSlicesModel } from '@/src/common/models/';

const initialState: UiSlicesModel = {
 hasErrors: false,
 errorMessage: '',
 loading: true,
};

export const uiSlice = createSlice({
 name: 'ui',
 initialState,
 reducers: {
  setHasErrors: (state, action: PayloadAction<boolean>) => {
   state.hasErrors = action.payload;
  },
  setErrorMessage: (state, action: PayloadAction<string>) => {
   state.errorMessage = action.payload;
  },
  setLoading: (state, action: PayloadAction<boolean>) => {
   state.loading = action.payload;
  },
 },
});

export const { setHasErrors, setErrorMessage, setLoading } = uiSlice.actions;
