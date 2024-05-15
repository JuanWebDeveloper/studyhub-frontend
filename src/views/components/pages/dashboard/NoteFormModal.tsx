export const NoteFormModal = () => {
 return (
  <div className='note-form'>
   <div className='model-close-button'>
    <div className='close-icon-bar'></div>
    <div className='close-icon-bar'></div>
   </div>
   <div className='form-content'>
    <h2>Create a Note</h2>

    <form>
     <label htmlFor='title'>Title</label>
     <input type='text' id='title' name='title' placeholder='Type a title for your note' />
     <label htmlFor='content'>Content</label>
     <textarea id='content' name='content' placeholder='Type the content of your note here'></textarea>
     <select id='category' name='category'>
      <option value=''>Select a category for your note</option>
      <option value='personal'>Personal</option>
      <option value='work'>Work</option>
      <option value='school'>School</option>
      <option value='other'>Other</option>
     </select>
     <button type='submit'>Create Note</button>
    </form>
   </div>
  </div>
 );
};
