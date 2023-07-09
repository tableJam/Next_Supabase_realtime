import { supabase } from '@/supabase'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useGlobalContext } from '@/context/ContextProvider'
import { UseMutationResult } from 'react-query'
export const useProfileMutate = async() => {
  const {editedProfile} = useGlobalContext();
  
  const user_id =  supabase.auth.getUser().then(({data})=>data?.user?.id);
  const client = useQueryClient()
  const mutateProfile = useMutation(
    async()=> {
      const payload = editedProfile?.name ? editedProfile : {};
      const {data,error} = await supabase.from('profile').update(editedProfile).eq('id',user_id);
      if(error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (data) => {
        client.setQueryData('profile',data);
      }
    }
  )
  return{
    mutateProfile
  }
}
