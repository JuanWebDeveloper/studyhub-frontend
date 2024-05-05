import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'StudyHub - Home Page',
 description: 'StudyHub is a platform for students to share their notes and study materials.',
};

const HomePage = () => {
 return (
  <div>
   <h1>Welcome to StudyHub! 📚</h1>
  </div>
 );
};

export default HomePage;
