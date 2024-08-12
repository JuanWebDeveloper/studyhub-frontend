import { createSlice } from '@reduxjs/toolkit';
import { NotesSlicesModel } from '@/src/common/models/';

const initialState: NotesSlicesModel[] = [];

export const notesSlice = createSlice({
 name: 'notes',
 initialState,
 reducers: {},
});

export const {} = notesSlice.actions;
