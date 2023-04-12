import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import Recenttransfer from '../components/Recenttransfer';
import Sidebar from '@/components/Sidebar';
import Creditcard from '@/components/Creditcard';

export default function Home() {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className='bg-gray-100 min-h-screen flex-grow flex flex-col'>
        <Header />
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
      </main>
    </div>
  );
}
