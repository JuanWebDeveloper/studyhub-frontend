'use client';

import { Fragment, useEffect } from 'react';
import axios from 'axios';
import { useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { setLoading, setHasErrors, setErrorMessage, setInitializeNotes } from '@/src/common/store';
import { Loading } from '@/src/views/components';
import { NoteCard } from '@/src/views/components';

export const DashboardNotesSection = () => {
 const { loading, hasErrors, errorMessage } = useStoreSelector((state) => state.ui);
 const notes = useStoreSelector((state) => state.notes);
 const dispatch = useStoreDispatch();

 useEffect(() => {
  dispatch(setLoading(true));

  axios
   .get('http://127.0.0.1:8000/all-notes')
   .then((response) => {
    dispatch(setInitializeNotes(response.data));
    dispatch(setHasErrors(false));
    dispatch(setErrorMessage(''));
    dispatch(setLoading(false));
   })
   .catch((error) => {
    console.error('Error fetching connection status:', error);
    dispatch(setHasErrors(true));
    dispatch(setErrorMessage('No se pudieron cargar las notas desde la API. Por favor, verifica la conexión e inténtalo nuevamente.'));
    dispatch(setLoading(false));
   });
 }, [dispatch]);

 return (
  <div className='notes-section'>
   <div className='notes-section-content'>
    {loading && (
     <div className='notes-container'>
      <Loading />
     </div>
    )}
    {!loading && hasErrors && errorMessage && (
     <div className='notes-container'>
      <div className='error-message-alert'>{errorMessage}</div>
     </div>
    )}
    {!loading && !hasErrors && notes.length < 1 && (
     <div className='notes-container'>
      <div className='warning-message-alert'>No has creado ninguna nota hasta el momento. Te invitamos a agregar tus primeras notas.</div>
     </div>
    )}
    {!loading && !hasErrors && notes.length > 0 && (
     <Fragment>
      <h2>Tus Notas</h2>
      <div className='notes-container'>
       {notes.map((note) => (
        <NoteCard key={note.id} noteData={note} />
       ))}
      </div>
     </Fragment>
    )}
   </div>
  </div>
 );
};
