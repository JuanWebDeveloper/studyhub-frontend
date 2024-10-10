import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotesSlicesModel } from '@/src/common/models/';

const initialState: NotesSlicesModel[] = [];

export const notesSlice = createSlice({
 name: 'notes',
 initialState,
 reducers: {
  setInitializeNotes: (state, action: PayloadAction<NotesSlicesModel[]>) => {
   return action.payload;
  },

  setAddNote: (state, action: PayloadAction<NotesSlicesModel>) => {
   state.push(action.payload);
  },
 },
});

export const { setInitializeNotes, setAddNote } = notesSlice.actions;
