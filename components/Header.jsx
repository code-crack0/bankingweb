import React from 'react'

const Header = ({text}) => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2 className='text-2xl text-bold font-mono'>Welcome back {text}</h2>
    </div>
  )
}

export default Header