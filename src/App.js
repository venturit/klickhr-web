import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/signIn";
import Components from "./component";
import { ProtectedRoute } from "./components/shared/protectedRoutes/protectedRoute";
import Dashboard from "./components/dashboard/dashboard";
import LastSession from "./components/lastSession/LastSession";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Support from "./components/support/support";
import AuthenticateAccount from "./components/signin/authenticate";
import Users from "./components/users/users";
import GlobalAdmin from "./components/globalAdmin/globalAdmin";
import Admin from "./components/admin/admin";
import MenuWithout from "./components/shared/headers/generalMenu";
import {useSelector} from 'react-redux';
// import Dashboard from "./components/dashboard/Dashboard";
// import LastSession from "./components/lastSession/LastSession";

function App() {
  const state = useSelector((store)=>{
    if(store.auth_data){
return store.auth_data;
    }
  })

  return (
 <Router>
 {/* {state.user_id===null && <MenuWithout/>} */}
   <Routes>
     <Route path="/" element={<MenuWithout><SignIn/></MenuWithout>}/>
     <Route path="/forgot_password" element={<MenuWithout><ForgotPassword/></MenuWithout>}/>
     <Route path="/authenticate" element={<MenuWithout><AuthenticateAccount/></MenuWithout>}/>
     <Route path="/support" element={<MenuWithout><Support/></MenuWithout>}/>
     <Route path="/components" element={<Components/>}/>
     <Route path="/components/protected" element={<ProtectedRoute><Components/></ProtectedRoute>}/>
     <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
     <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>}/>
     <Route path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
     <Route path="/global_admin" element={<ProtectedRoute><GlobalAdmin/></ProtectedRoute>}/>
     <Route path="/last-session" element={<LastSession />} />
   </Routes>
 </Router>
  
  );
}

export default App;
