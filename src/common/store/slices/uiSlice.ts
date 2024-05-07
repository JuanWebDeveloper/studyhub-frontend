import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiSlicesModel } from '@/src/common/models/';

const initialState: UiSlicesModel = {
 hasErrors: false,
 errorMessage: '',
 loading: false,
};

export const uiSlice = createSlice({
 name: 'ui',
 initialState,
 reducers: {},
});

export const {} = uiSlice.actions;
