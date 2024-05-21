'use client';

import Select from 'react-select';
import { ChangeEventHandler } from 'react';
//*> Import the note categories.
import { noteCategories, customNoteCategorySelectStyles } from '@/src/common/utils';
//*> Import the model for the modal state.
import { stateBooleanModel } from '@/src/common/models';
//*> Import the hook to manage the form state.
import { useForm } from '@/src/common/hooks';

type NoteFormModalProps = {
 modalState: stateBooleanModel;
};

export const NoteFormModal = ({ modalState: [isModalOpen, setIsModalOpen] }: NoteFormModalProps) => {
 const handleModalClose = () => setIsModalOpen(false);

 //*> Use the custom hook to manage the form state.
 const { formValues, handleInputChange, handleSelectChange, resetOrInitialize } = useForm();
 const { title, content, category } = formValues;

 const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  console.log(formValues);
  resetOrInitialize();
  handleModalClose();
 };

 return (
  <div className={`note-form ${isModalOpen ? 'fadeIn' : 'fadeOut'}`}>
   <div className='model-close-button' onClick={handleModalClose}>
    <div className='close-icon-bar'></div>
    <div className='close-icon-bar'></div>
   </div>
   <div className='form-content'>
    <h2>Create a Note</h2>

    <form onSubmit={handleSubmit}>
     <div className='form-group'>
      <label htmlFor='title'>Title</label>
      <input type='text' id='title' name='title' placeholder='Type a title for your note' onChange={handleInputChange} value={title} />
     </div>

     <div className='form-group'>
      <label htmlFor='content'>Content</label>
      <textarea id='content' name='content' placeholder='Type the content of your note here' onChange={handleInputChange} value={content}></textarea>
     </div>

     <div className='form-group'>
      <Select
       isSearchable={false}
       placeholder='Select a category for your note'
       options={noteCategories}
       styles={customNoteCategorySelectStyles}
       key={category}
       onChange={handleSelectChange}
       value={noteCategories.find((option) => option.value === category || (category === '' && option.label === 'Uncategorized'))}
      />
     </div>

     <button type='submit'>Create Note</button>
    </form>
   </div>
  </div>
 );
};
