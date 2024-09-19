// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useUser } from '../context/UserContext';

const SERVER_HOST = "localhost";
const SERVER_PORT = "3000";
const API_LOGIN_ENDPOINT = "/api/login";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser(); // Usar el contexto del usuario

  const authenticate = async (email, password) => {
    console.log("hola mundo")
    try {
      const response = await axios.post(
        `http://${SERVER_HOST}:${SERVER_PORT}${API_LOGIN_ENDPOINT}`,
        { email, password }
      );
      console.log(response)

      if (response.status === 200) {
        const user = response.data;
        Cookies.set("carnet", user.carnet, { expires: 7 });
        setUser(user); // Actualizar el estado del usuario en el contexto
        navigate("/StudentBlog");
      }
    } catch (error) {
      setError("Correo o contraseña inválido.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/fondoLogin.png)' }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Login</h2>
        
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/Register');
            }}
            className="text-sm text-blue-500 hover:underline"
          >
            Don&apos;t have an account? Register
          </a>
          <br />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/ResetPassword');
            }}
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
