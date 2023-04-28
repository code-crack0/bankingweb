import { useState, useEffect } from 'react';

import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import Recenttransfer from '../components/Recenttransfer';
import Sidebar from '@/components/Sidebar';
import Creditcard from '@/components/Creditcard';
import { CircularProgress } from '@mui/material';
import { getuserdetails } from '@/API_CALLS/dashboard/getuserdetails';
import { getCheckingAccountBalance } from '@/API_CALLS/dashboard/getcheckingaccountbalance';
import { getcreditmonthly } from '@/API_CALLS/dashboard/getcreditmonthly';
import { getdebitmonthly } from '@/API_CALLS/dashboard/getdebitmonthly';
import { getCreditCard } from '@/API_CALLS/dashboard/getcredit_card';
import { getRecentDebitTransactions } from '@/API_CALLS/dashboard/getrecentdebittransactions';
import { getChartDetails } from '@/API_CALLS/dashboard/getchartdetails';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [balance, setBalance] = useState("");
  const [credit, setCredit] = useState("");
  const [debit, setDebit] = useState("");
  const [creditcard, setCreditcard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [recentdebit, setRecentdebit] = useState([]);
  const [chart, setChart] = useState([]);
  useEffect(() => {
    getuserdetails().then((data) => {
      setName(data.name);
    });
    getCheckingAccountBalance().then((data) => {
      setBalance(data.balance);
    }
    );
    getcreditmonthly().then((data) => {
      setCredit(data.amount);
    }
    );
    getdebitmonthly().then((data) => {
      setDebit(data.amount);
    }
    );
    getCreditCard().then((data) => {
      setCreditcard(data.creditcardnumber);
      setExpiry(data.expirydate);

    }
    );
    getRecentDebitTransactions().then((data) => {
      setRecentdebit(data.slice(0,15));
    }
    );
    getChartDetails().then((data) => {
      setChart(data);
    }
    );



  }, []);

  useEffect(() => {
    // Simulating content loaded
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up function to clear the timeout if component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);
  const heading = 'Welcome back Jack';
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className='bg-gray-100 min-h-screen flex-grow flex flex-col'>
        <Header text={name} />
        {isLoading ? (
          <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
          </div>
        ) : (
          <>
              <TopCards balance={balance} debit={debit} credit={credit} />
            <div className='p-4 flex flex-col md:flex-row md:justify-between md:items-center'>
              <div className='mb-4 md:mr-4 md:w-[65%] w-full'>
                <BarChart chart={chart} />
              </div>
              <div className='mb-4 md:w-1/3'>
                <Creditcard number={creditcard} expiry={expiry} />
              </div>
            </div>
            <Recenttransfer recentdebit={recentdebit} />
          </>
        )}
      </main>
    </div>
  );
}
