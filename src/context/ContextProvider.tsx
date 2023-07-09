import { EditedProfile } from '@/interfaces/interfaces';
import { ReactNode, createContext, useContext } from 'react';
import React, { useState } from 'react'
interface IContextProviderProp {
  children: ReactNode
}
interface IContextProvider {
  update: React.Dispatch<React.SetStateAction<EditedProfile>>,
  editedProfile: EditedProfile
}
const globalContext = createContext({} as IContextProvider);
export const ContextProvider = (prop:IContextProviderProp) => {
  const children = prop.children;
  const [editedProfile,update] = useState<EditedProfile>({} as EditedProfile);
  const value:IContextProvider = {update,editedProfile}
  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  )
}
export const useGlobalContext = () => useContext(globalContext);
