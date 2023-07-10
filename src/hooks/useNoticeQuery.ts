import { supabase } from '@/supabase'
import React from 'react'
import { useQuery } from 'react-query'

export const useNoticeQuery = () => {
  const getNotices = async() => {
    const {data,error} = await supabase.from('Notices').select('*');
    if(error) throw new Error('error'+error.message);
    console.log(data,'Notice get¥¥¥');
    return data;
  }
   return useQuery({
    queryKey: 'notices',
    queryFn: getNotices,
    staleTime: Infinity,
   });
}
