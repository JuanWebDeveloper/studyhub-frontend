'use client';
import { ConnectionStatus } from '@/src/views/components';
import { useStoreSelector } from '@/src/common/hooks';

export const HomePageWithAPIConnection = () => {
 const { loading, hasErrors, errorMessage } = useStoreSelector((state) => state.ui);

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
    <ConnectionStatus />
    {!loading && hasErrors && <h2 className='disconnected'>{errorMessage}</h2>}
   </div>
  </div>
 );
};
