
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search as SearchIcon, Menu, X, Bell, LogIn, 
  ChevronDown, MessageSquare, Zap, Command, CornerDownLeft
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search on escape or outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/?q=${encodeURIComponent(searchVal)}`);
      setIsSearchOpen(false);
      setSearchVal('');
    }
  };

  const actionBtnClass = `flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border transition-all duration-300`;
  const scrolledBtnClass = `bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-950`;
  const transparentBtnClass = `bg-white/10 border-white/20 text-white/80 backdrop-blur-xl hover:bg-white/20 hover:text-white`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-4 sm:py-8'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-4 group z-[60]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-2xl group-hover:bg-green-500 transition-all duration-500">G</div>
              <div className="flex flex-col">
                <span className={`text-base sm:text-xl font-black tracking-tighter leading-none ${scrolled ? 'text-gray-950' : 'text-white'}`}>
                  <span className="hidden xs:inline">Garden </span>TVET
                </span>
                <span className={`text-[7px] sm:text-[9px] font-black uppercase tracking-[0.2em] mt-1 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
                  Uburezi Bufite Intego
                </span>
              </div>
            </Link>

            {/* Nav */}
            <nav className={`hidden xl:flex items-center space-x-1 p-1.5 rounded-[2rem] border transition-all duration-700 ${
              scrolled ? 'bg-gray-100/30 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-3xl shadow-2xl'
            }`}>
              {['home', 'about', 'sports', 'services', 'trades', 'support'].map((item) => (
                <Link
                  key={item}
                  to={`/${item === 'home' ? '' : item}`}
                  className={`px-5 py-2.5 rounded-[1.25rem] text-[11px] font-black transition-all uppercase tracking-widest ${
                    scrolled ? 'text-gray-600 hover:text-gray-950 hover:bg-white/60' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {t(item)}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3 z-[60]">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`${actionBtnClass} ${scrolled ? scrolledBtnClass : transparentBtnClass}`}
              >
                <SearchIcon size={18} />
              </button>
              
              <Link 
                to="/login" 
                className={`relative group overflow-hidden h-11 sm:h-12 rounded-xl sm:rounded-2xl text-[11px] font-black transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 shadow-2xl ${
                  scrolled 
                  ? 'bg-gray-950 text-white hover:bg-green-500 hover:-translate-y-0.5' 
                  : 'bg-white text-gray-950 hover:bg-green-500 hover:text-white hover:-translate-y-0.5'
                }`}
              >
                <LogIn size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">{t('login')}</span>
              </Link>

              <button 
                className={`xl:hidden ${actionBtnClass} ${scrolled ? 'border-gray-200 text-gray-950' : 'border-white/20 text-white'}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Interactive Search Bar */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
           <div 
            ref={searchRef}
            className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-gray-100 p-4 relative z-10 animate-in slide-in-from-top-8 duration-500"
           >
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <SearchIcon className="absolute left-6 text-green-500" size={22} />
                <input 
                  autoFocus 
                  type="text" 
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder={t('searchPlaceholder')} 
                  className="w-full bg-gray-50 rounded-[2rem] pl-16 pr-24 py-6 text-xl font-bold text-gray-900 outline-none focus:ring-4 focus:ring-green-400/10 transition-all" 
                />
                <div className="absolute right-4 flex items-center space-x-2">
                   <div className="hidden sm:flex items-center space-x-1 px-2 py-1 bg-gray-200 rounded-md text-[10px] font-black text-gray-500 uppercase">
                      <Command size={10} />
                      <span>K</span>
                   </div>
                   <button type="submit" className="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                      <CornerDownLeft size={18} />
                   </button>
                </div>
              </form>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;
