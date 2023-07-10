import { EditedProfile , IEditedNotice} from '@/interfaces/interfaces';
import { ReactNode, createContext, useContext } from 'react';
import React, { useState } from 'react'
interface IContextProviderProp {
  children: ReactNode
}
interface IContextProvider {
  update: React.Dispatch<React.SetStateAction<EditedProfile>>,
  editedProfile: EditedProfile,
  updateNotice: React.Dispatch<React.SetStateAction<IEditedNotice>>,
  editedNotice: IEditedNotice
}
const globalContext = createContext({} as IContextProvider);

export const ContextProvider = (prop:IContextProviderProp) => {
  
  const children = prop.children;
  const [editedProfile,update] = useState<EditedProfile>({} as EditedProfile);
  const [editedNotice,updateNotice] = useState<IEditedNotice>({} as IEditedNotice);
  const value:IContextProvider = {update,editedProfile,updateNotice,editedNotice};

  return (
    <globalContext.Provider value={value}>
      {children}
    </globalContext.Provider>
  )
};
export const useGlobalContext = () => useContext(globalContext);
