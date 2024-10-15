'use client';
import { useState } from 'react';
import { DashboardNotesSection, NoteFormModal } from '@/src/views/components';
import { BookOpen, Plus } from 'lucide-react';

const Dashboard = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModalOpen = () => setIsModalOpen(true);
 return (
  <div className='dashboard'>
   <header className='dashboard-header'>
    <div className='studyhub-logo'>
     <BookOpen />
     <h3>
      <span>Study</span>Hub
     </h3>
    </div>

    <div className='dashboard-action'>
     <button onClick={handleModalOpen}>
      <Plus /> Nueva Nota
     </button>
    </div>
   </header>
   <div className='dashboard-banner'>
    <h2>¡Bienvenido A Tu Espacio De Estudio Personal!</h2>
    <p>
     Aquí puedes organizar tus pensamientos, apuntes y descubrimientos. Crea nuevas notas, edita las existentes y mantén tu conocimiento siempre a
     mano.
    </p>
   </div>
   <DashboardNotesSection />
   {isModalOpen && <NoteFormModal modalState={[isModalOpen, setIsModalOpen]} />}
  </div>
 );
};

export default Dashboard;
