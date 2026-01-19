
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search as SearchIcon, Menu, X, Bell, LogIn, 
  ChevronDown, MessageSquare, Zap
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/?q=${encodeURIComponent(searchVal)}`);
      setIsSearchOpen(false);
      setSearchVal('');
    }
  };

  // Shared classes for consistent sizing of header actions
  const actionBtnClass = `flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border transition-all duration-300`;
  const scrolledBtnClass = `bg-gray-100 border-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-950`;
  const transparentBtnClass = `bg-white/10 border-white/20 text-white/80 backdrop-blur-xl hover:bg-white/20 hover:text-white`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-4 sm:py-8'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Responsive Logo */}
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

            {/* Desktop Nav */}
            <nav className={`hidden xl:flex items-center space-x-1 p-1.5 rounded-[2rem] border transition-all duration-700 ${
              scrolled ? 'bg-gray-100/30 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-3xl shadow-2xl'
            }`}>
              {['Ahabanza', 'Imikino', 'Serivisi', 'Imyuga', 'Ubufasha'].map((item) => (
                <Link
                  key={item}
                  to="/"
                  className={`px-5 py-2.5 rounded-[1.25rem] text-[11px] font-black transition-all ${
                    scrolled ? 'text-gray-600 hover:text-gray-950 hover:bg-white/60' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Right Actions: Standardized Sizes */}
            <div className="flex items-center space-x-2 sm:space-x-3 z-[60]">
              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`${actionBtnClass} ${scrolled ? scrolledBtnClass : transparentBtnClass}`}
              >
                <SearchIcon size={18} />
              </button>
              
              {/* Login Button */}
              <Link 
                to="/login" 
                className={`relative group overflow-hidden h-11 sm:h-12 rounded-xl sm:rounded-2xl text-[11px] font-black transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 shadow-2xl ${
                  scrolled 
                  ? 'bg-gray-950 text-white hover:bg-green-500 hover:-translate-y-0.5' 
                  : 'bg-white text-gray-950 hover:bg-green-500 hover:text-white hover:-translate-y-0.5'
                }`}
              >
                <LogIn size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="hidden xs:inline">Injira</span>
              </Link>

              {/* Hamburger Menu */}
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

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-gray-950/98 backdrop-blur-[40px] p-6 sm:p-20 flex items-start justify-center animate-in fade-in duration-500">
           <button onClick={() => setIsSearchOpen(false)} className="absolute top-6 sm:top-10 right-6 sm:right-10 text-white/40 hover:text-white transition-colors"><X size={32} /></button>
           <div className="w-full max-w-4xl mt-20 space-y-10 sm:space-y-16 animate-in slide-in-from-bottom-12 duration-700">
              <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tighter text-center">Icyo waba <span className="text-green-500">ushaka cyose.</span></h2>
              <form onSubmit={handleSearchSubmit} className="relative group">
                <SearchIcon className="absolute left-6 sm:left-10 top-8 sm:top-12 text-green-500 w-6 h-6 sm:w-10 sm:h-10" />
                <input 
                  autoFocus 
                  type="text" 
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Andika hano..." 
                  className="w-full bg-white/5 border-2 border-white/10 rounded-[2.5rem] sm:rounded-[4rem] px-16 sm:px-28 py-8 sm:py-12 text-xl sm:text-3xl font-black text-white outline-none focus:border-green-500 transition-all placeholder:text-white/10" 
                />
                <button type="submit" className="hidden">Search</button>
              </form>
              <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-[9px] sm:text-xs">Press Enter to view results on Home page</p>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;
