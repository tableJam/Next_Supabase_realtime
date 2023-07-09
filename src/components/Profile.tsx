import React, { useState } from 'react'
import { EditedProfile } from '@/interfaces/interfaces';
import { useProfileQuery } from '@/hooks/useProfileQuery';
import { useQueryClient } from 'react-query';
export const Profile = () => {
  const [name,setName] = useState('')
  const [favorite,setFavorite] = useState('');
  const [avtar_url,setUrl] = useState('');
  const profile = useProfileQuery();
  return (
    <div className="">
      <input className='bg-black my-2 px-3 py-2 text-sm focus:outline-none' value={'hello?'}/>
    </div>
  )
}

