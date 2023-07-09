import Image from 'next/image'
import { Inter } from 'next/font/google'
import { supabase } from '@/supabase'
import { useEffect,useState } from 'react'
import { Auth } from '@/components/Auth'
import { Dashbord } from '@/components/Dashbord'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isLogin,setLogin] = useState(false);
  useEffect(()=>{
    supabase.auth.onAuthStateChange((event,session)=>{
      console.log(event,session);
      if(event=='SIGNED_IN'){
        setLogin(true);
      }else{
        setLogin(false);
      }
    });
  },[]);
  useEffect(()=>{
    const validAuth = async() => {
      const user = await supabase.auth.getUser();
      if(!user.error)setLogin(false);
      console.log(user);
    }
    validAuth();
  },[])
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} text-mono`}
    >
      {
        isLogin ?   <Dashbord/>:<Auth/>
      }
    </main>
  )
}
