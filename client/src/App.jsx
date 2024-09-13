import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentBlog from './pages/StudentBlog';
import Login from './pages/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/StudentBlog" element={<StudentBlog />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
