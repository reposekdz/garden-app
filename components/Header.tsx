
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Added LogIn to the imports from lucide-react
import { 
  Search, Menu, X, Globe, Bell, ChevronDown, ChevronRight, Trophy, Users, Calendar, 
  BookOpen, Heart, Cpu, Hammer, Car, MessageSquare, Star, ArrowUpRight, Search as SearchIcon, Zap, LogIn
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4 group z-[60]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-900 rounded-[1.5rem] flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-2xl group-hover:bg-green-500 transition-all duration-500">G</div>
              <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl font-black tracking-tighter leading-none ${scrolled ? 'text-gray-950' : 'text-white'}`}>Garden TVET</span>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Uburezi Bufite Intego</span>
              </div>
            </Link>

            <nav className={`hidden xl:flex items-center space-x-1 p-2 rounded-[2.5rem] border transition-all duration-700 ${
              scrolled ? 'bg-gray-100/30 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-3xl shadow-2xl'
            }`}>
              {['Ahabanza', 'Imikino', 'Serivisi', 'Imyuga', 'Ubufasha'].map((item) => (
                <Link
                  key={item}
                  to="/"
                  className={`px-6 py-3 rounded-[1.5rem] text-xs font-black transition-all ${
                    scrolled ? 'text-gray-600 hover:text-gray-950 hover:bg-white/60' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4 sm:space-x-8 z-[60]">
              <button onClick={() => setIsSearchOpen(true)} className={`hidden md:flex p-3.5 rounded-2xl border transition-all ${scrolled ? 'bg-gray-100 border-gray-200 text-gray-500' : 'bg-white/10 border-white/20 text-white/60 backdrop-blur-xl'}`}><SearchIcon size={20} /></button>
              
              <div className="flex items-center space-x-3">
                {/* Advanced Interactive Injira Button */}
                <Link 
                  to="/login" 
                  className={`relative group overflow-hidden px-8 py-4 rounded-2xl text-xs font-black transition-all duration-500 flex items-center space-x-3 shadow-2xl ${
                    scrolled 
                    ? 'bg-gray-950 text-white hover:bg-green-500 hover:-translate-y-1' 
                    : 'bg-white text-gray-950 hover:bg-green-500 hover:text-white hover:-translate-y-1'
                  }`}
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                  <LogIn size={18} className="group-hover:rotate-12 transition-transform" />
                  <span>Injira</span>
                </Link>
              </div>

              <button className={`xl:hidden p-3 rounded-2xl border ${scrolled ? 'border-gray-200 text-gray-950' : 'border-white/20 text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
