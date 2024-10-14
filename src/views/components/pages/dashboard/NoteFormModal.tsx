'use client';
import { ChangeEventHandler } from 'react';
import Select from 'react-select';
import { noteCategories, customNoteCategorySelectStyles } from '@/src/common/utils';
import { NotesSlicesModel, stateBooleanModel } from '@/src/common/models';
import { useForm, useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { NotesService } from '@/src/common/services';
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

 const handleSubmit: ChangeEventHandler<HTMLFormElement> = async (event) => {
  event.preventDefault();

  const noteData = { title, content, category: category === '' ? 'Sin categoría' : category };
  await NotesService.saveOrUpdateNote(dispatch, noteData, noteToEdit);

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
