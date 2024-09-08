import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesSlicesModel } from '@/src/common/models/';

const initialState: NotesSlicesModel[] = [];

export const notesSlice = createSlice({
 name: 'notes',
 initialState,
 reducers: {
  setAddNotes: (state, action: PayloadAction<NotesSlicesModel | NotesSlicesModel[]>) => {
   const notes = Array.isArray(action.payload) ? action.payload : [action.payload];
   state.push(...notes);
  },
 },
});

export const { setAddNotes } = notesSlice.actions;
