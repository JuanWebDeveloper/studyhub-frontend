'use client';

import Select from 'react-select';
//*> Import the note categories.
import { noteCategories, customNoteCategorySelectStyles } from '@/src/common/utils';
import { stateBooleanModel } from '@/src/common/models';

type NoteFormModalProps = {
 modalState: stateBooleanModel;
};

export const NoteFormModal = ({ modalState: [isModalOpen, setIsModalOpen] }: NoteFormModalProps) => {
 const handleModalClose = () => setIsModalOpen(false);

 return (
  <div className={`note-form ${isModalOpen ? 'fadeIn' : 'fadeOut'}`}>
   <div className='model-close-button' onClick={handleModalClose}>
    <div className='close-icon-bar'></div>
    <div className='close-icon-bar'></div>
   </div>
   <div className='form-content'>
    <h2>Create a Note</h2>

    <form>
     <div className='form-group'>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' name='title' placeholder='Type a title for your note' />
     </div>
     <div className='form-group'>
      <label htmlFor='content'>Content</label>
      <textarea id='content' name='content' placeholder='Type the content of your note here'></textarea>
     </div>
     <div className='form-group'>
      <Select isSearchable={false} placeholder='Select a category for your note' options={noteCategories} styles={customNoteCategorySelectStyles} />
     </div>
     <button type='submit'>Create Note</button>
    </form>
   </div>
  </div>
 );
};
