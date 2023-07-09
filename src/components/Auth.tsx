import React, { useState } from 'react'
import { supabase } from '@/supabase';
export const Auth = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleSubmit = async() => {
    console.log('>>>>>>',{email,password})
    const {error} = await supabase.auth.signInWithPassword({email,password});
    if(error) throw new Error(error?.message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            className="bg-black my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div>
          <input
            type="password"
            required
            className="bg-black my-2 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <h1 className="text-lg" onClick={handleSubmit}>🫡</h1>
      </form>
    </>
  )
}
