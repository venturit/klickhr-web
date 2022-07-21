import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/signIn";
import Components from "./component";
import { ProtectedRoute } from "./components/shared/protectedRoutes/protectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import LastSession from "./components/lastSession/LastSession";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import Support from "./components/support/support";
import AuthenticateAccount from "./components/signin/authenticate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/authenticate" element={<AuthenticateAccount />} />
        <Route path="/support" element={<Support />} />
        <Route path="/components" element={<Components />} />
        <Route
          path="/components/protected"
          element={
            <ProtectedRoute>
              <Components />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/last-session" element={<LastSession />} />
      </Routes>
    </Router>
  );
}

export default App;
