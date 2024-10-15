import { setStateBooleanModel } from '@/src/common/models';

export const ConfirmUpdateModal = ({ confirmUpdate: setIsModalOpen }: { confirmUpdate: setStateBooleanModel }) => {
 return (
  <div className='confirm-modal'>
   <div className='confirm-modal-content'>
    <div className='modal-text'>
     <h2>Confirmar Actualización de Nota</h2>
     <p>
      Estás a punto de actualizar la nota seleccionada. Asegúrate de que toda la información sea correcta antes de proceder. Esta acción no se puede
      deshacer.
     </p>
    </div>
    <div className='modal-actions'>
     <button type='submit'>Actualizar Nota</button>
     <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
    </div>
   </div>
  </div>
 );
};
