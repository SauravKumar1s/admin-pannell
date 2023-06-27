import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import Login from "./layouts/account/Login";
import Admin from "./layouts/admin";

const App = () => {
  return (
    <Routes>
      
      <Route path="admin/*" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
