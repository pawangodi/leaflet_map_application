import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getDashboardData } from '../api/api';
//react-icons
import { PiMapPinAreaFill } from "react-icons/pi";
import Navbar from './Navbar';

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await getDashboardData(token);
        setCards(response.data.cards);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load dashboard data');
      }
    };
    fetchDashboardData();
  }, [token]);

  const handleCardClick = (id) => {
    navigate(`/map/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 animate-gradient text-white">
      <Navbar logout={logout} />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center hover:pl-4 md:hover:pl-8 transition-all duration-500">Dashboard</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between p-6 md:p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 hover:rotate-1 hover:shadow-2xl transition duration-500 ease-in-out relative overflow-hidden"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-10 rounded-2xl"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{card.title}</h2>
              <button className="bg-white/20 text-white p-2 md:p-3 rounded-lg hover:bg-white/40"><PiMapPinAreaFill size={24} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
