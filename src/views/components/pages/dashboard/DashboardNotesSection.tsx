'use client';

import { Fragment, useEffect } from 'react';
import { useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { NotesService } from '@/src/common/services';
import { Loading } from '@/src/views/components';
import { NoteCard } from '@/src/views/components';

export const DashboardNotesSection = () => {
 const { loading, hasErrors, errorMessage } = useStoreSelector((state) => state.ui);
 const notes = useStoreSelector((state) => state.notes);
 const dispatch = useStoreDispatch();

 useEffect(() => {
  NotesService.getAllNotes(dispatch);
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
    {!loading && notes.length > 0 && (
     <Fragment>
      <h2>Tus Notas</h2>
      <div className='notes-container'>
       {notes.map((note) => (
        <NoteCard key={note._id} noteData={note} />
       ))}
      </div>
     </Fragment>
    )}
   </div>
  </div>
 );
};
