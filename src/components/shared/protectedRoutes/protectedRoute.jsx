import * as React from "react";
// import { getToken, setAuthData } from "../../../util/auth";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Menu from "../headers/loginMenu";


export function ProtectedRoute({children}) {

    const user = useSelector((state)=>{
      if(state.auth_data){
        if(state.auth_data.user_id && state.auth_data.is_authenticated)
        return true;
      }
      return false;
    });

  if(user){
    return  (
    <Menu children={children}/>
    )

     
}else{
return <Navigate to="/" replace />;
}

 
};
