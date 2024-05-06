import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'StudyHub - Home Page',
 description: 'StudyHub is a platform for students to share their notes and study materials.',
};

const HomePage = () => {
 return (
  <div>
   <h1>Title H1</h1>
   <h3>Subtitle H2</h3>
   <p>This is a paragraph of text.</p>
   <div className='bg-secondary'>This is a div with the class bg-secondary.</div>
   <div className='bg-tertiary'>This is a div with the class bg-tertiary.</div>
   <div className='bg-quaternary'>This is a div with the class bg-quaternary.</div>
   <button>This is a button</button>
  </div>
 );
};

export default HomePage;
