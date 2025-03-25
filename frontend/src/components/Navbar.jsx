import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/dashboard')}>
        OpenStreetMap App
      </h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 hover:rounded-full hover:bg-red-600">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
