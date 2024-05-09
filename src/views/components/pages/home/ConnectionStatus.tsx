'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIEndponitConnectionStatus } from '@/src/common/models';

export const ConnectionStatus = () => {
 const [connectionStatus, setConnectionStatus] = useState({} as APIEndponitConnectionStatus);

 useEffect(() => {
  axios
   .get('http://127.0.0.1:8000/connection-status')
   .then((response) => {
    setConnectionStatus(response.data);
   })
   .catch((error) => {
    console.error('Error fetching connection status:', error);
   });
 }, []);

 return (
  <div className='connection-status'>
   <h2>
    API Connection:{' '}
    {connectionStatus.api_message ? <span className='connected'>Connected</span> : <span className='disconnected'>Not Connected</span>}
   </h2>
   <p>{connectionStatus.api_message && connectionStatus.api_message}</p>

   <h2>
    Database Connection:{' '}
    {connectionStatus.db_message && connectionStatus.db_connection ? (
     <span className='connected'>Connected</span>
    ) : (
     <span className='disconnected'>Not Connected</span>
    )}
   </h2>
   <p>{connectionStatus.db_message && connectionStatus.db_message}</p>
  </div>
 );
};
