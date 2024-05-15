import { NoteFormModal } from '@/src/views/components';

const Dashboard = () => {
 return (
  <div className='dashboard'>
   <header className='dashboard-header'>
    <h2>Welcome to the Dashboard</h2>
    <p>Manage your notes effectively and efficiently, all in one place.</p>
    <div className='dashboard-actions'>
     <button>Create Note</button>
     <button>List Notes</button>
     <button>Edit Notes</button>
     <button>Delete Notes</button>
    </div>
   </header>
   <NoteFormModal />
  </div>
 );
};

export default Dashboard;
