import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BiTransfer } from 'react-icons/bi';
const RecentOrders = ({recentdebit}) => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1>Recent Transfers</h1>
      <ul>
        {recentdebit.map((debit) => (
          <li
            key={debit.id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className='bg-purple-100 rounded-lg p-3'>
              <BiTransfer className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>AED { ' '}{debit.total}</p>
              <p className='text-gray-400 text-sm'>{debit.title}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{debit.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
