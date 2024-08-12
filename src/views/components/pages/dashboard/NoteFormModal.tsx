'use client';
import { ChangeEventHandler } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { noteCategories, customNoteCategorySelectStyles } from '@/src/common/utils';
import { stateBooleanModel } from '@/src/common/models';
import { useForm, useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { setLoading, setHasErrors, setErrorMessage } from '@/src/common/store';
import { Loading } from '@/src/views/components';

type NoteFormModalProps = {
 modalState: stateBooleanModel;
};

export const NoteFormModal = ({ modalState: [isModalOpen, setIsModalOpen] }: NoteFormModalProps) => {
 const { loading } = useStoreSelector((state) => state.ui);
 const dispatch = useStoreDispatch();

 //*> Use the custom hook to manage the form state.
 const { formValues, handleInputChange, handleSelectChange, resetOrInitialize } = useForm();
 const { title, content, category } = formValues;

 const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();

  const noteData = { title, content, category };

  axios
   .post('http://127.0.0.1:8000/create-note', noteData)
   .then((response) => {
    dispatch(setHasErrors(false));
    dispatch(setErrorMessage(''));
    dispatch(setLoading(false));
    console.log('Note created successfully:', response.data);
   })
   .catch((error) => {
    console.error('Error fetching connection status:', error);
    dispatch(setHasErrors(true));
    dispatch(setErrorMessage('An error occurred while creating the note. Please try again later.'));
    dispatch(setLoading(false));
   });

  resetOrInitialize();
  handleModalClose();
 };

 const handleModalClose = () => setIsModalOpen(false);

 return (
  <div className={`note-form ${isModalOpen ? 'fadeIn' : 'fadeOut'} ${loading && 'isLoading'}`}>
   {loading && <Loading />}

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
