'use client';
import { Fragment, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import { NotesSlicesModel } from '@/src/common/models';
import { NoteFormModal, ConfirmDeleteModal } from '@/src/views/components';
import { useStoreDispatch } from '@/src/common/hooks';
import { NotesService } from '@/src/common/services';

export const NoteCard = ({ noteData }: { noteData: NotesSlicesModel }) => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
 const { _id, title, content, category } = noteData;
 const dispatch = useStoreDispatch();

 const handleDelete = async () => {
  await NotesService.deleteNote(dispatch, _id);
  setIsConfirmDeleteOpen(false);
 };

 const handleCancelDelete = () => setIsConfirmDeleteOpen(false);

 return (
  <Fragment>
   <div className='note-card'>
    <div className='note-card-content'>
     <div className='card-content'>
      <h3>{title}</h3>
      <p>{content}</p>
     </div>
     <div className='card-footer'>
      <div className='note-category'>
       Categoria: <span>{category}</span>
      </div>
      <div className='card-actions'>
       <button onClick={() => setIsModalOpen(true)}>
        <Edit />
       </button>
       <button onClick={() => setIsConfirmDeleteOpen(true)}>
        <Trash />
       </button>
      </div>
     </div>
    </div>
   </div>

   {isConfirmDeleteOpen && <ConfirmDeleteModal onConfirm={handleDelete} onCancel={handleCancelDelete} />}
   {isModalOpen && <NoteFormModal modalState={[isModalOpen, setIsModalOpen]} noteToEdit={noteData} />}
  </Fragment>
 );
};
