import { Edit, Trash } from 'lucide-react';

export const NoteCard = () => {
 return (
  <div className='note-card'>
   <div className='note-card-content'>
    <div className='card-content'>
     <h3>Titulo de la nota</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, magnam?</p>
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
 );
};
