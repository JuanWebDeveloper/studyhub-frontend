export const ConfirmDeleteModal = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => {
 return (
  <div className='confirm-modal confirm-delete'>
   <div className='confirm-modal-content'>
    <div className='modal-text'>
     <h2>Confirmar Eliminación de Nota</h2>
     <p>Estás a punto de eliminar esta nota permanentemente. Esta acción no se puede revertir. ¿Estás seguro de que deseas continuar?</p>
    </div>
    <div className='modal-actions'>
     <button type='button' onClick={onConfirm}>
      Eliminar Nota
     </button>
     <button type='button' onClick={onCancel}>
      Cancelar
     </button>
    </div>
   </div>
  </div>
 );
};
