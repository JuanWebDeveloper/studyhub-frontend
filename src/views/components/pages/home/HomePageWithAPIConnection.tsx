'use client';
import { BookOpen } from 'lucide-react';
import { ConnectionStatus } from '@/src/views/components';
import { useStoreSelector } from '@/src/common/hooks';

export const HomePageWithAPIConnection = () => {
 const { loading, hasErrors, errorMessage } = useStoreSelector((state) => state.ui);

 return (
  <div className='home-page'>
   <div className='content'>
    <div className='header-info'>
     <div className='studyhub-logo'>
      <BookOpen />
      <h3>
       <span>Study</span>Hub
      </h3>
     </div>
     <p>StudyHub es una plataforma para el aprendizaje colaborativo y la gestión de estudios.</p>
     <h3>Esta página verifica la conexión con la API y la base de datos.</h3>
     <h2>El estado actual de la conexión es:</h2>
    </div>
    <ConnectionStatus />
    {!loading && hasErrors && <div className='error-message-alert'>{errorMessage}</div>}
   </div>
  </div>
 );
};
