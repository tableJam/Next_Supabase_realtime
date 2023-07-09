import React from 'react'
import { useQuery } from 'react-query'
import { supabase } from '@/supabase'
import { IProfile } from '@/interfaces/interfaces'
import { useGlobalContext } from '@/context/ContextProvider'
import { useProfileMutate } from './useProfileMutate'
interface IUser {
  id: string,
  email: string,
}
export const useProfileQuery = () => {
  const getProfile = async () => {
    const {data} = await supabase.auth.getUser();
    const id = data.user?.id;
    const {data:profile,error} = await supabase.from('profile').select('*').eq('id',id)
    if(error?.code=='406'){
      const {mutateProfile} = await useProfileMutate();
      mutateProfile.mutate();
    }
    const res:IProfile =  profile ? profile[0] : {} as IProfile;
    return res;
  }
  return useQuery({
    queryKey: 'profile',
    queryFn: getProfile,
    staleTime: Infinity,
    onSuccess: (data) => {
      const {update} = useGlobalContext();
      update({...data});
    }
  },
  )
}
