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

  setUpdateNote: (state, action: PayloadAction<NotesSlicesModel>) => {
   const notePosition = state.findIndex((note) => note._id === action.payload._id);
   notePosition !== -1 && (state[notePosition] = action.payload);
  },

  setDeleteNote: (state, action: PayloadAction<string>) => {
   return state.filter((note) => note._id !== action.payload);
  },
 },
});

export const { setInitializeNotes, setAddNote, setUpdateNote, setDeleteNote } = notesSlice.actions;
