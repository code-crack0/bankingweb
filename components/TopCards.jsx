import React from 'react'

const TopCards = ({balance,debit,credit}) => {
  return (
    <div className='grid lg:grid-cols-3  gap-6 p-4'>
        <div className=' col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>{balance}</p>
                <p className='text-gray-600'>Account balance</p>
            </div>
        </div>
        <div className=' col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>{debit}</p>
                <p className='text-gray-600'>Monthly Debits</p>
            </div>
        </div>
        <div className='col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                  <p className='text-2xl font-bold'>{credit}</p>
                <p className='text-gray-600'>Monthly Credits</p>
            </div>
        </div>
    </div>
  )
}

export default TopCards