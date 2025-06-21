import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../i18n/LanguageContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()
  const { currentLanguage, changeLanguage, languages } = useLanguage()

  const navItems = [
    { path: '/developers', label: t('navbar.developerPool'), icon: 'fas fa-users' },
    { path: '/process', label: t('navbar.howItWorks'), icon: 'fas fa-cogs' },
    { path: '/request', label: t('navbar.projectRequest'), icon: 'fas fa-paper-plane' },
    { path: '/about', label: t('navbar.aboutUs'), icon: 'fas fa-info-circle' }
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
              {t('navbar.home')}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-sm font-medium text-white hover:text-primary transition-colors duration-200"
              >
                <i className="fas fa-globe text-primary"></i>
                <span>{languages.find(lang => lang.code === currentLanguage)?.name || 'English'}</span>
                <i className={`fas fa-chevron-${isLanguageMenuOpen ? 'up' : 'down'} text-xs`}></i>
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          changeLanguage(language.code);
                          setIsLanguageMenuOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentLanguage === language.code
                            ? 'text-primary bg-gray-800'
                            : 'text-white hover:bg-gray-800'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              {/* Language Selector for Mobile */}
              <div className="px-3 py-2">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm font-medium text-white">{t('navbar.language')}:</span>
                  <div className="flex space-x-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          changeLanguage(language.code);
                        }}
                        className={`px-3 py-1 text-sm rounded-md ${
                          currentLanguage === language.code
                            ? 'bg-primary text-white'
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
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
