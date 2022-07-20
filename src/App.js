import "./App.css";
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignIn from './components/signin/signIn';
import Components from "./component";
import {ProtectedRoute} from "./components/shared/protectedRoutes/protectedRoute";
import Support from "./components/support/support";
import ForgotPassword from "./components/forgotPassword/forgotPassword";

function App() {

  return (
 <Router>
   <Routes>
     <Route path="/" element={<ForgotPassword/>}/>
     <Route path="/support" element={<Support/>}/>
     <Route path="/components" element={<Components/>}/>
     <Route path="/components/protected" element={<ProtectedRoute><Components/></ProtectedRoute>}/>
   </Routes>
 </Router>
  
  );
}

export default App;
