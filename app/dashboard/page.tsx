const Dashboard = () => {
 return (
  <div className='dashboard'>
   <header className='dashboard-header'>
    <h1>Welcome to the Dashboard</h1>
    <p>Manage your notes effectively and efficiently, all in one place.</p>
    <div className='dashboard-actions'>
     <button>Create Note</button>
     <button>List Notes</button>
     <button>Edit Notes</button>
     <button>Delete Notes</button>
    </div>
   </header>
  </div>
 );
};

export default Dashboard;
