import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Management from "./pages/Management";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="" element={<Login />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
