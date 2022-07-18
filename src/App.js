import "./App.css";
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignIn from './components/signin/signIn';
import Components from "./component";
import {ProtectedRoute} from "./components/shared/protectedRoutes/protectedRoute";

function App() {

  return (
 <Router>
   <Routes>
     <Route path="/" element={<SignIn/>}/>
     <Route path="/components" element={<Components/>}/>
     <Route path="/components/protected" element={<ProtectedRoute><Components/></ProtectedRoute>}/>
   </Routes>
 </Router>
  
  );
}

export default App;
