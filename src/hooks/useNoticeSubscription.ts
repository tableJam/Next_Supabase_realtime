import { INotice } from "@/interfaces/interfaces";
import { supabase } from "@/supabase";
import { RealtimePostgresChangesPayload} from "@supabase/supabase-js";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
interface ISuperPayload {
  new: INotice,
  old: INotice,
}
const updateNoticeQueryByRealtime = (notices:INotice[],updated:INotice) => [...notices].map(el => el.id == updated.id ? {...updated} : el);

export const useNoticeSubscription = () => {
  const client = useQueryClient();
  useEffect(()=>{
    console.log('start subscript notice db state change');
    const Notices = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'Notices' },
      (payload:RealtimePostgresChangesPayload<INotice>) => {
        const prevNotices = (() => {
          const notices = client.getQueryData<INotice[]>('notices');
          return notices ? notices : [];
        })()
        if(payload.eventType == 'INSERT')client.setQueryData<INotice[]>('notices',[...prevNotices,{...payload.new}]);
        if(payload.eventType == "DELETE")client.setQueryData<INotice[]>('notices',[...prevNotices].filter(notice=>notice.id != payload.old.id));
        if(payload.eventType == "UPDATE")client.setQueryData<INotice[]>('notices',updateNoticeQueryByRealtime(prevNotices,payload.new));
      }
    )
    .subscribe()
    return () => {supabase.removeChannel(Notices)};
  },[])
}
