'use client';
import { ChangeEventHandler } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { noteCategories, customNoteCategorySelectStyles } from '@/src/common/utils';
import { NotesSlicesModel, stateBooleanModel } from '@/src/common/models';
import { useForm, useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { setLoading, setHasErrors, setErrorMessage, setAddNote, setUpdateNote } from '@/src/common/store';
import { Loading } from '@/src/views/components';

type NoteFormModalProps = {
 modalState: stateBooleanModel;
 noteToEdit?: NotesSlicesModel;
};

export const NoteFormModal = ({ modalState: [isModalOpen, setIsModalOpen], noteToEdit }: NoteFormModalProps) => {
 const { loading } = useStoreSelector((state) => state.ui);
 const dispatch = useStoreDispatch();

 //*> Use the custom hook to manage the form state.
 const { formValues, handleInputChange, handleSelectChange, resetOrInitialize } = useForm({
  title: noteToEdit?.title || '',
  content: noteToEdit?.content || '',
  category: noteToEdit?.category || '',
 });

 const { title, content, category } = formValues;

 const handleSubmit: ChangeEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  dispatch(setLoading(true));

  const noteData = { title, content, category: category === '' ? 'Sin categoría' : category };

  if (noteToEdit) {
   console.log(noteData);

   axios
    .put(`http://127.0.0.1:8000/update-note/${noteToEdit._id}`, noteData)
    .then((response) => {
     dispatch(setUpdateNote(response.data));
     dispatch(setHasErrors(false));
     dispatch(setErrorMessage(''));
     dispatch(setLoading(false));
    })
    .catch((error) => {
     console.error('Error fetching connection status:', error);
     dispatch(setHasErrors(true));
     dispatch(setErrorMessage('Ocurrió un error al actualizar la nota. Por favor, inténtalo de nuevo más tarde.'));
     dispatch(setLoading(false));
    });
  } else {
   axios
    .post('http://127.0.0.1:8000/create-note', noteData)
    .then((response) => {
     dispatch(setAddNote(response.data));
     dispatch(setHasErrors(false));
     dispatch(setErrorMessage(''));
     dispatch(setLoading(false));
    })
    .catch((error) => {
     console.error('Error fetching connection status:', error);
     dispatch(setHasErrors(true));
     dispatch(setErrorMessage('Ocurrió un error al crear la nota. Por favor, inténtalo de nuevo más tarde.'));
     dispatch(setLoading(false));
    });
  }

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
    <h2>{noteToEdit ? 'Editar Nota' : 'Crear Nota'}</h2>

    <form onSubmit={handleSubmit}>
     <div className='form-group'>
      <label htmlFor='title'>Título</label>
      <input type='text' id='title' name='title' placeholder='Escribe un título para tu nota' onChange={handleInputChange} value={title} />
     </div>

     <div className='form-group'>
      <label htmlFor='content'>Contenido</label>
      <textarea
       id='content'
       name='content'
       placeholder='Escribe el contenido de tu nota aquí'
       onChange={handleInputChange}
       value={content}
      ></textarea>
     </div>

     <div className='form-group'>
      <Select
       isSearchable={false}
       placeholder='Selecciona una categoría para tu nota'
       options={noteCategories}
       styles={customNoteCategorySelectStyles}
       key={category}
       onChange={handleSelectChange}
       value={noteCategories.find((option) => option.value === category || (category === '' && option.label === 'Sin categoría'))}
      />
     </div>

     {noteToEdit ? <button type='submit'>Actualizar Nota</button> : <button type='submit'>Crear Nota</button>}
    </form>
   </div>
  </div>
 );
};
