'use client';

import { useState } from 'react';
import { Loading, ConnectionStatus } from '@/src/views/components';

export const HomePageWithAPIConnection = () => {
 const [loading, setLoading] = useState(true);

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
    {loading && <Loading />}
    {!loading && <ConnectionStatus />}
    {/* {!loading && !connectionStatus.api_message && !connectionStatus.db_message && (
	<h2 className='disconnected'>Connection Status Could Not Be Verified. Please Check The Connection And Try Again.</h2>
   )} */}
   </div>
  </div>
 );
};
