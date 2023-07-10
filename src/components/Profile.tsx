import React, { useState } from 'react'
import { useProfileQuery } from '@/hooks/useProfileQuery';
import { useProfileMutate } from '@/hooks/useProfileMutate';
import { useQueryClient } from 'react-query';
import { useGlobalContext } from '@/context/ContextProvider';
export const Profile = () => {
  const {editedProfile,update} = useGlobalContext();
  const {mutateProfile} = useProfileMutate()

  const handleSubmit = () => {
    mutateProfile.mutate();
  };
  return (
    <div className="">
      <input className='bg-black my-2 px-3 py-2 text-sm focus:outline-none' value={editedProfile.name} onChange={(e)=>{update({...editedProfile,name: e.target.value})}}/>
      <input className='bg-black my-2 px-3 py-2 text-sm focus:outline-none' value={editedProfile.favorite} onChange={(e)=>{update({...editedProfile,favorite: e.target.value})}}/>
      <h1 onClick={handleSubmit} className="">🫥</h1>
    </div>
  )
}

