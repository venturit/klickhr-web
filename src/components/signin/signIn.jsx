import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { setUserDetail } from '../../redux/auth/authReducer';


export default function SignIn(){
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const user_details= useSelector((store)=>{
        if(store.auth_data){
            return store.auth_data
        }
        return null;
    });
   
   
    

    return(
        <div> changes
 Sign In page
 <div onClick={()=>dispatch(setUserDetail({user_id:1,is_authenticated:true,user_role:1}))}>Click here to SignIn to check protected routing</div>
 <div onClick={()=>dispatch(setUserDetail({user_id:1,is_authenticated:false,user_role:1}))}>Click here to SignOut to check protected routing</div>
<Link to="/components"> Navigate to reference components</Link>
<div onClick={()=>navigate('/components/protected')}> navigate to the protected route works only when you signIn </div>
        </div>
    )
}