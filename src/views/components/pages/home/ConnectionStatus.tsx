'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { APIEndponitConnectionStatus } from '@/src/common/models';
import { useStoreSelector, useStoreDispatch } from '@/src/common/hooks';
import { setLoading, setHasErrors, setErrorMessage } from '@/src/common/store';
import { Loading } from '@/src/views/components';

export const ConnectionStatus = () => {
 const [connectionStatus, setConnectionStatus] = useState({} as APIEndponitConnectionStatus);
 const { loading, hasErrors } = useStoreSelector((state) => state.ui);
 const dispatch = useStoreDispatch();

 useEffect(() => {
  dispatch(setLoading(true));

  axios
   .get('http://127.0.0.1:8000/connection-status')
   .then((response) => {
    setConnectionStatus(response.data);
    dispatch(setHasErrors(false));
    dispatch(setErrorMessage(''));
    dispatch(setLoading(false));
   })
   .catch((error) => {
    console.error('Error fetching connection status:', error);
    dispatch(setHasErrors(true));
    dispatch(setErrorMessage('Connection Status Could Not Be Verified. Please Check The Connection And Try Again.'));
    dispatch(setLoading(false));
   })
   .finally(() => dispatch(setLoading(false)));
 }, [dispatch]);

 return (
  <>
   {loading && (
    <div className='connection-status'>
     <Loading />
    </div>
   )}
   {!loading && !hasErrors && connectionStatus.api_message && (
    <div className='connection-status'>
     <h2>
      API Connection: <span className='connected'>Connected</span>
     </h2>
     <p className='connected'>{connectionStatus.api_message}</p>

     <h2>
      Database Connection:{' '}
      {!hasErrors && connectionStatus.db_connection ? (
       <span className='connected'>Connected</span>
      ) : (
       <span className='disconnected'>Not Connected</span>
      )}
     </h2>
     <p className={!hasErrors && !connectionStatus.db_connection ? 'disconnected' : 'connected'}>{!hasErrors && connectionStatus.db_message}</p>
    </div>
   )}
  </>
 );
};
