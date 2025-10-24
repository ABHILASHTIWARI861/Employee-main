import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";


export const AuthContext=createContext() 

function AuthProvider({children}){

    const[user_data,set_user_data]=useState(null);

    useEffect(() => {
    const{employees}=getLocalStorage();
    set_user_data(employees);
    },[]);


    
    return(
        <AuthContext.Provider value={[user_data,set_user_data]}>
          {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;