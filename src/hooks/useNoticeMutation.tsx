import { useMutation } from "react-query";
import { useGlobalContext } from "@/context/ContextProvider";
import { supabase } from "@/supabase";
import { INotice ,IEditedNotice} from "@/interfaces/interfaces";
import { error } from "console";


export const useNoticeMutation = () => {
  const {editedNotice,updateNotice} = useGlobalContext();
  const createNoticeMutate = useMutation(
    async(notice:Omit<INotice|'id','created_date'>)=>{
     const {data,error} = await supabase.from('Notices').insert(notice);//user_id?
      if(error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: () => {
        updateNotice({} as IEditedNotice)
      }
    }
  );

  const updateNoticeMutate = useMutation(
      async() => {
        const {data,error} = await supabase.from('Notices').update(editedNotice);
        if(error) throw new Error(error.message);
        return data;
      },{
        onSuccess: () => {
          updateNotice({} as IEditedNotice)
        }
      }
  )
  
  return{createNoticeMutate,updateNoticeMutate}
}
