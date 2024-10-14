'use client';
import { Fragment, useState } from 'react';
import { Edit, Trash } from 'lucide-react';
import { NotesSlicesModel } from '@/src/common/models';
import { NoteFormModal } from './NoteFormModal';

export const NoteCard = ({ noteData }: { noteData: NotesSlicesModel }) => {
 const { title, content, category } = noteData;
 const [isModalOpen, setIsModalOpen] = useState(false);

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
       <button>
        <Trash />
       </button>
      </div>
     </div>
    </div>
   </div>
   {isModalOpen && <NoteFormModal modalState={[isModalOpen, setIsModalOpen]} noteToEdit={noteData} />}
  </Fragment>
 );
};
