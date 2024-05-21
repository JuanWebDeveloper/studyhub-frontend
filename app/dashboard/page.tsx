'use client';
import { useState } from 'react';
import { NoteFormModal } from '@/src/views/components';

const Dashboard = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModalOpen = () => setIsModalOpen(true);
 return (
  <div className='dashboard'>
   <header className='dashboard-header'>
    <h2>Welcome to the Dashboard</h2>
    <p>Manage your notes effectively and efficiently, all in one place.</p>
    <div className='dashboard-actions'>
     <button onClick={handleModalOpen}>Create Note</button>
     <button>List Notes</button>
     <button>Edit Notes</button>
     <button>Delete Notes</button>
    </div>
   </header>
   <NoteFormModal modalState={[isModalOpen, setIsModalOpen]} />
  </div>
 );
};

export default Dashboard;
