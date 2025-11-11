import React, {  createContext } from 'react';

export const Context=createContext({})
const ContextApi = ({children}) => {
    const user={name:"st"}
  const ContextInfo={user,}

    return (<Context.Provider value={ContextInfo}>{children} </Context.Provider>
    );
};

export default ContextApi;