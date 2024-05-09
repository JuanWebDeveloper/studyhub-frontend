import { HomePageWithAPIConnection } from '@/src/views/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'StudyHub - API Connection Verification',
 description: 'This page of StudyHub is primarily used to verify the successful connection with the API and the database.',
};

const HomePage = () => <HomePageWithAPIConnection />;

export default HomePage;
