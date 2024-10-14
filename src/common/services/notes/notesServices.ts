import axios from 'axios';
import { setLoading, setHasErrors, setErrorMessage, setInitializeNotes, setAddNote, setUpdateNote } from '@/src/common/store';
import { NotesSlicesModel } from '@/src/common/models';

export class NotesService {
 static async getAllNotes(dispatch: Function) {
  try {
   dispatch(setLoading(true));
   const response = await axios.get('http://127.0.0.1:8000/all-notes');
   dispatch(setInitializeNotes(response.data));
   dispatch(setHasErrors(false));
   dispatch(setErrorMessage(''));
  } catch (error) {
   console.error('Error fetching all notes:', error);
   dispatch(setHasErrors(true));
   dispatch(setErrorMessage('No se pudieron cargar las notas desde la API. Por favor, verifica la conexión e inténtalo nuevamente.'));
  } finally {
   dispatch(setLoading(false));
  }
 }

 static async saveOrUpdateNote(dispatch: Function, noteData: NotesSlicesModel, noteToEdit?: NotesSlicesModel) {
  try {
   dispatch(setLoading(true));

   if (noteToEdit) {
    const response = await axios.put(`http://127.0.0.1:8000/update-note/${noteToEdit._id}`, noteData);
    dispatch(setUpdateNote(response.data));
   } else {
    const response = await axios.post('http://127.0.0.1:8000/create-note', noteData);
    dispatch(setAddNote(response.data));
   }

   dispatch(setHasErrors(false));
   dispatch(setErrorMessage(''));
  } catch (error) {
   console.error('Error saving or updating note:', error);
   dispatch(setHasErrors(true));

   noteToEdit
    ? dispatch(setErrorMessage('Ocurrió un error al actualizar la nota. Por favor, inténtalo de nuevo más tarde.'))
    : dispatch(setErrorMessage('Ocurrió un error al crear la nota. Por favor, inténtalo de nuevo más tarde.'));
  } finally {
   dispatch(setLoading(false));
  }
 }
}
