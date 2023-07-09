import React from 'react'
import { Profile } from './Profile'
export const Dashbord = () => {
  return (
    <div className='flex items-center p-10 w-screen h-screen'>
      <div className='w-3/12 bg-gray h-11/12'>
        <Profile/>
      </div>
      <div className='w-6/12 bg-blue-300 h-11/12'></div>
      <div className='w-3/12 bg-green-300 h-11/12'></div>
    </div>
  )
}
