import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './pages/Login';
import StudentBlog from './pages/StudentBlog';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/StudentBlog" element={<StudentBlog />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
