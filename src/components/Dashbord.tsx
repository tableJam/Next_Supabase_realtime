import React, { useState } from 'react'
import { Profile } from './Profile'
import { useNoticeQuery } from '@/hooks/useNoticeQuery'
import { INotice } from '@/interfaces/interfaces';
import { useNoticeMutation } from '@/hooks/useNoticeMutation';
import { useNoticeSubscription } from '@/hooks/useNoticeSubscription';
export const Dashbord = () => {
  const [newNotice,createNotice] = useState({} as INotice);
  useNoticeSubscription()
  const {createNoticeMutate} = useNoticeMutation();
  const notices:INotice[]|[] = (()=>{
    const noticeInCash = useNoticeQuery();
    const res = noticeInCash?.data;
    return res ? res : [];
  })();
  const handleSubmit = () => {
    console.log(newNotice,'?????');
    createNoticeMutate.mutate(newNotice);
    createNotice({} as INotice);
  };

  return (
    <div className='flex items-center p-10 w-screen h-screen'>
      <div className='w-3/12 bg-gray h-11/12'>
        <Profile/>
      </div>
      <div className='w-6/12 text-white font-white h-11/12'>
        {
          notices.map(notice=><p>{notice.content}</p>)
        }
        <input placeholder='content' value={newNotice.content} className="bg-black my-2 px-3 py-2 text-sm focus:outline-none" onChange={(e) => createNotice({...newNotice,content:e.target.value})}/>
        <h1 onClick={(e)=>handleSubmit()}>😶‍🌫️</h1>
      </div>
      <div className='w-3/12 bg-green-300 h-11/12'></div>
    </div>
  )
}
