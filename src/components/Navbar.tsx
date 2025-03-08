import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trophy, Users, Calendar, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-goc-gray">Game<span className="text-goc-red">Of</span></span>
              <span className="text-2xl font-bold text-goc-gray ml-1">Champions</span>
            </NavLink>
          </div>
          
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/tournaments" 
              className={({ isActive }) => `flex items-center text-goc-gray hover:text-goc-red ${isActive ? 'text-goc-red' : ''}`}
            >
              <Trophy size={20} />
              <span className="ml-2 font-medium">Tournaments</span>
            </NavLink>
            <NavLink 
              to="/teams" 
              className={({ isActive }) => `flex items-center text-goc-gray hover:text-goc-red ${isActive ? 'text-goc-red' : ''}`}
            >
              <Users size={20} />
              <span className="ml-2 font-medium">Teams</span>
            </NavLink>
            <NavLink 
              to="/tournaments" 
              className={({ isActive }) => `flex items-center text-goc-gray hover:text-goc-red ${isActive ? 'text-goc-red' : ''}`}
            >
              <Calendar size={20} />
              <span className="ml-2 font-medium">Schedule</span>
            </NavLink>
            <button className="relative p-2 text-goc-gray hover:text-goc-red">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-goc-red rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}