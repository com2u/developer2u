import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/developers', label: 'Developer Pool', icon: 'fas fa-users' },
    { path: '/process', label: 'How It Works', icon: 'fas fa-cogs' },
    { path: '/request', label: 'Project Request', icon: 'fas fa-paper-plane' },
    { path: '/about', label: 'About Us', icon: 'fas fa-info-circle' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and Home */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/data/Logo.png" 
                alt="Developer2U Logo" 
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-lg hidden sm:block">Developer2U</span>
            </Link>
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
            >
              <i className="fas fa-home mr-2"></i>
              Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path) ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                <i className={`${item.icon} text-primary`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path) 
                      ? 'text-primary bg-gray-900' 
                      : 'text-white hover:text-primary hover:bg-gray-900'
                  }`}
                >
                  <i className={`${item.icon} text-primary`}></i>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
