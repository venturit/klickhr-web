import "./App.css";
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignIn from './components/signin/signIn';
import Components from "./component";
import {ProtectedRoute} from "./components/shared/protectedRoutes/protectedRoute";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Support from "./components/support/support";
import AuthenticateAccount from "./components/signin/authenticate";

function App() {
  const state = useSelector((store)=>{
    if(store.auth_data){
return store.auth_data;
    }
  })
console.log(state);
  return (
 <Router>
 {state.user_id===null && <MenuWithout/>}
   <Routes>
     <Route path="/" element={<SignIn/>}/>
     <Route path="/forgot_password" element={<ForgotPassword/>}/>
     <Route path="/authenticate" element={<AuthenticateAccount/>}/>
     <Route path="/support" element={<Support/>}/>
     <Route path="/components" element={<Components/>}/>
     <Route path="/components/protected" element={<ProtectedRoute><Components/></ProtectedRoute>}/>
     <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
     <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
     <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
     <Route path="/global_admin" element={<ProtectedRoute><GlobalAdmin/></ProtectedRoute>}/>
   </Routes>
 </Router>
  
  );
}

export default App;
