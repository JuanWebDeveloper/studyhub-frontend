import { NoteCard } from '@/src/views/components';

export const DashboardNotesSection = () => {
 return (
  <div className='notes-section'>
   <div className='notes-section-content'>
    <h2>Tus Notas</h2>

    <div className='notes-container'>
     <NoteCard />
     <NoteCard />
     <NoteCard />
    </div>
   </div>
  </div>
 );
};
