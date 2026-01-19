
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe, LogIn, Bell, Command, Sun, Moon } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('home'), path: '/' },
    { label: t('sports'), path: '/sports' },
    { label: t('services'), path: '/services' },
    { label: t('trades'), path: '/trades/sod' },
    { label: t('contact'), path: '/contact' },
    { label: t('support'), path: '/support' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const notifications = [
    { id: 1, text: "Admission for 2026 intake is now open!", type: "news" },
    { id: 2, text: "New Software Lab commissioned.", type: "update" },
    { id: 3, text: "Sports Day scheduled for next Friday.", type: "event" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="group flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-xl transform group-hover:rotate-6 transition-transform">G</div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-gray-900 leading-none">Garden <span className="gradient-text">TVET</span></span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Excellence Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 bg-gray-100/50 backdrop-blur-sm p-1 rounded-2xl border border-white/20 shadow-inner mx-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-white text-green-600 shadow-md'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            {/* Search Interaction */}
            <button 
              onClick={() => window.location.hash = '#/search'}
              className="flex items-center space-x-3 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl border border-gray-200 text-gray-400 transition-all group"
            >
              <Search size={16} className="group-hover:text-gray-900 transition-colors" />
              <span className="text-xs font-bold hidden xl:inline">{t('searchPlaceholder')}</span>
              <div className="flex items-center space-x-1 px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px] font-black text-gray-300">
                <Command size={10} />
                <span>K</span>
              </div>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-400 hover:text-green-500 transition-all relative"
              >
                <Bell size={18} />
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 animate-in fade-in slide-in-from-top-4">
                  <h4 className="font-black text-lg mb-4 px-2">Notifications</h4>
                  <div className="space-y-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {notifications.map(n => (
                      <div key={n.id} className="p-3 hover:bg-gray-50 rounded-2xl cursor-pointer transition-colors border-l-4 border-green-400">
                        <p className="text-sm font-bold text-gray-800 leading-tight">{n.text}</p>
                        <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{n.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Selection */}
            <div className="flex items-center space-x-1 bg-white border border-gray-100 p-1 rounded-xl shadow-sm">
              {(['en', 'fr', 'rw', 'sw'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-7 h-7 text-[9px] font-black rounded-lg uppercase transition-all flex items-center justify-center ${
                    language === lang ? 'bg-gray-900 text-white shadow-lg' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 pl-2 border-l border-gray-200">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-black text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t('login')}
              </Link>
              <Link
                to="/register"
                className="px-5 py-2.5 bg-gradient-to-r from-gray-900 to-black text-white text-xs font-black rounded-xl shadow-xl hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Mobile UI Buttons */}
          <div className="flex lg:hidden items-center space-x-2">
             <button className="p-2 bg-gray-100 rounded-xl text-gray-600" onClick={() => window.location.hash = '#/search'}>
               <Search size={18} />
             </button>
             <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-600 shadow-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
             </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-gray-100 p-4 animate-in slide-in-from-top-8 duration-300 shadow-2xl rounded-b-[2rem]">
          <div className="space-y-1 mb-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-5 py-3.5 rounded-xl text-base font-black transition-all ${
                  isActive(item.path) ? 'bg-green-500 text-white shadow-lg' : 'bg-gray-50 text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/login" className="py-3.5 text-center font-black bg-gray-100 rounded-xl text-gray-900 text-sm">Login</Link>
            <Link to="/register" className="py-3.5 text-center font-black bg-gray-900 text-white rounded-xl text-sm">Enroll</Link>
          </div>
          <div className="mt-6 flex justify-center space-x-2">
             {(['en', 'fr', 'rw', 'sw'] as const).map(lang => (
               <button key={lang} onClick={() => setLanguage(lang)} className={`px-2.5 py-1.5 rounded-lg text-[10px] font-black uppercase ${language === lang ? 'bg-green-100 text-green-700' : 'text-gray-400'}`}>{lang}</button>
             ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
