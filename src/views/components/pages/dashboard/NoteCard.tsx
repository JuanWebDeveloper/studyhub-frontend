import { Edit, Trash } from 'lucide-react';
import { NotesSlicesModel } from '@/src/common/models';

export const NoteCard = ({ noteData }: { noteData: NotesSlicesModel }) => {
 const { title, content, category } = noteData;

 return (
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
      <button>
       <Edit />
      </button>
      <button>
       <Trash />
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};
