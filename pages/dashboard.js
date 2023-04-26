import { useState, useEffect } from 'react';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import Recenttransfer from '../components/Recenttransfer';
import Sidebar from '@/components/Sidebar';
import Creditcard from '@/components/Creditcard';
import { CircularProgress } from '@mui/material';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating content loaded
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up function to clear the timeout if component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);
  const heading = 'Welcome back Client';
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className='bg-gray-100 min-h-screen flex-grow flex flex-col'>
        <Header text={heading} />
        {isLoading ? (
          <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
          </div>
        ) : (
          <>
            <TopCards />
            <div className='p-4 flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className='mb-4 md:mr-4 md:w-[65%] w-full'>
                <BarChart />
              </div>
              <div className='mb-4 md:w-1/3'>
                <Creditcard />
              </div>
            </div>
            <Recenttransfer />
          </>
        )}
      </main>
    </div>
  );
}
