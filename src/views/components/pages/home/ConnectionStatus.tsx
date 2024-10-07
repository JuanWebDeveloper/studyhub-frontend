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
    dispatch(setErrorMessage('No se pudo verificar el estado de la conexión con la API. Por favor, revisa la conexión e inténtalo de nuevo.'));
    dispatch(setLoading(false));
   });
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
      Conexión con la API: <span className='connected'>Conectado</span>
     </h2>

     <h2>
      Conexión con la base de datos:{' '}
      {!hasErrors && connectionStatus.db_connection ? (
       <span className='connected'>Conectado</span>
      ) : (
       <span className='disconnected'>No Conectado</span>
      )}
     </h2>
     {/* <p className={!hasErrors && !connectionStatus.db_connection ? 'disconnected' : 'connected'}>{!hasErrors && connectionStatus.db_message}</p> */}
    </div>
   )}
  </>
 );
};
