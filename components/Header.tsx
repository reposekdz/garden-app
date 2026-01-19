
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Added ChevronRight to the import list
import { Search, Menu, X, Globe, LogIn, Bell, Command, Sun, Moon, Sparkles, Activity, ChevronRight } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-4 bg-white/60 backdrop-blur-2xl shadow-2xl border-b border-white/20' 
        : 'py-8 bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo Area with Glassmorphism for High Visibility */}
          <Link to="/" className="group relative flex items-center space-x-4 flex-shrink-0 z-20">
            <div className="absolute inset-[-12px] bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-2xl transform group-hover:rotate-12 transition-all duration-500">G</div>
            <div className="relative flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-gray-900 leading-none drop-shadow-sm">Garden <span className="gradient-text">TVET</span></span>
              <div className="flex items-center space-x-1 mt-1.5">
                 <Activity size={10} className="text-green-500 animate-pulse" />
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Excellence Hub</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav - Centered & Glassy */}
          <nav className="hidden lg:flex items-center space-x-2 bg-gray-900/5 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/40 shadow-inner mx-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 rounded-[1.5rem] text-sm font-black transition-all whitespace-nowrap relative group/item ${
                  isActive(item.path)
                    ? 'bg-white text-gray-900 shadow-xl'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
                {isActive(item.path) && <Sparkles size={12} className="absolute -top-1 -right-1 text-green-400 animate-bounce" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* Search Interaction */}
            <button 
              onClick={() => window.location.hash = '#/search'}
              className="flex items-center space-x-4 px-5 py-3 bg-white/50 border border-gray-100 rounded-[1.5rem] text-gray-400 transition-all hover:bg-white hover:shadow-xl group"
            >
              <Search size={20} className="group-hover:text-green-500 transition-colors" />
              <div className="flex items-center space-x-2 px-2 py-1 bg-gray-100 rounded-lg text-[10px] font-black text-gray-400 border border-gray-200">
                <Command size={10} />
                <span>K</span>
              </div>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-4 bg-white/50 border border-gray-100 rounded-[1.5rem] shadow-sm text-gray-400 hover:text-green-500 transition-all relative hover:shadow-xl"
              >
                <Bell size={22} />
                <div className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-6 w-80 bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 p-6 animate-in fade-in slide-in-from-top-6 z-50">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <h4 className="font-black text-xl">Inbox</h4>
                    <span className="text-[10px] font-black bg-green-100 text-green-600 px-2 py-1 rounded-md uppercase tracking-widest">3 New</span>
                  </div>
                  <div className="space-y-3 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    {notifications.map(n => (
                      <div key={n.id} className="p-4 hover:bg-gray-50 rounded-2xl cursor-pointer transition-all border-l-4 border-transparent hover:border-green-400 group">
                        <p className="text-sm font-bold text-gray-800 leading-tight group-hover:text-gray-950 transition-colors">{n.text}</p>
                        <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-2 inline-block">{n.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Selection */}
            <div className="flex items-center space-x-1.5 bg-white/50 border border-gray-100 p-1.5 rounded-[1.5rem] shadow-sm">
              {(['en', 'fr', 'rw', 'sw'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`w-9 h-9 text-[10px] font-black rounded-xl uppercase transition-all flex items-center justify-center ${
                    language === lang ? 'bg-gray-900 text-white shadow-xl scale-110' : 'text-gray-400 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <Link
                to="/login"
                className="px-6 py-3.5 text-sm font-black text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t('login')}
              </Link>
              <Link
                to="/register"
                className="px-8 py-4 bg-gray-900 text-white text-sm font-black rounded-[1.5rem] shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all whitespace-nowrap"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile UI Buttons */}
          <div className="flex lg:hidden items-center space-x-3">
             <button className="p-3 bg-gray-100/50 backdrop-blur-md rounded-2xl text-gray-600" onClick={() => window.location.hash = '#/search'}>
               <Search size={22} />
             </button>
             <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-600 shadow-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
             </button>
          </div>
        </div>
      </div>

      {/* Modern Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 p-6 animate-in slide-in-from-top-8 duration-500 shadow-2xl rounded-b-[3rem] z-50">
          <div className="space-y-2 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl text-xl font-black transition-all ${
                  isActive(item.path) ? 'bg-green-500 text-white shadow-2xl' : 'bg-gray-50 text-gray-600'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} />
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/login" className="py-5 text-center font-black bg-gray-100 rounded-2xl text-gray-900 text-sm">Login</Link>
            <Link to="/register" className="py-5 text-center font-black bg-gray-900 text-white rounded-2xl text-sm">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
