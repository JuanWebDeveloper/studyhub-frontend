'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIEndponitConnectionStatus } from '@/src/common/models';

export const HomePageWithAPIConnection = () => {
 const [connectionStatus, setConnectionStatus] = useState({} as APIEndponitConnectionStatus);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  axios
   .get('http://127.0.0.1:8000/connection-status')
   .then((response) => {
    setLoading(false);
    setConnectionStatus(response.data);
   })
   .catch((error) => {
    console.error('Error fetching connection status:', error);
    setLoading(false);
   });
 }, []);

 return (
  <div className='home-page'>
   <div className='content'>
    <div className='header-info'>
     <h1 className='logo'>
      Study<span>Hub</span>
     </h1>
     <p>StudyHub is a platform for collaborative learning and study management.</p>
     <h3>This Page Verifies The Connection With The Api And The Database.</h3>
     <h2>The current connection status is:</h2>
    </div>
    {loading && <h2>Loading...</h2>}
    {!loading && (
     <div className='connection-status'>
      <h2>
       API Connection: <span className='status'>{connectionStatus.api_message ? 'Connected' : 'Not Connected'}</span>
      </h2>
      <p>{connectionStatus.api_message && connectionStatus.api_message}</p>
      <h2>
       Database Connection:{' '}
       <span className='status'>{connectionStatus.db_message && connectionStatus.db_connection ? 'Connected' : 'Not Connected'}</span>
      </h2>
      <p>{connectionStatus.db_message && connectionStatus.db_message}</p>
     </div>
    )}
    {!loading && !connectionStatus.api_message && !connectionStatus.db_message && (
     <h2>Connection Status Could Not Be Verified. Please Check The Connection And Try Again.</h2>
    )}
   </div>
  </div>
 );
};
