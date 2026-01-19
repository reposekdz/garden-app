
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, Menu, X, Globe, LogIn, Bell, Command, Sun, Moon, Sparkles, 
  Activity, ChevronRight, ChevronDown, Trophy, Users, Calendar, 
  BookOpen, Heart, Briefcase, HelpCircle, FileText, Cpu, Hammer, Car,
  Zap, ShieldCheck, MessageSquare, Star, ArrowUpRight, Search as SearchIcon
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const menuData: Record<string, any> = {
    'Imikino': {
      title: 'Imikino n\'Imyidagaduro',
      sections: [
        {
          label: 'Amakipe y\'Ishuri',
          items: [
            { label: 'Ikipe y\'Umupira', icon: Trophy, desc: 'Abatwaye igikombe cya TVET 2024.', badge: 'Gishya' },
            { label: 'Basketball', icon: Users, desc: 'Imyitozo buri wa kabiri n\'uwa kane.' },
          ]
        },
        {
          label: 'Ibirori By\'Ishuri',
          items: [
            { label: 'Gahunda y\'Imikino', icon: Calendar, desc: 'Reba imikino itaha y\'ishuri.' },
            { label: 'Umuganura 2024', icon: Sparkles, desc: 'Ibirori by\'umuco n\'umubano.' },
          ]
        }
      ],
      featured: { title: 'Umukino utaha', desc: 'Garden vs Kigali TVET - Sat 14:00', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400' }
    },
    'Serivisi': {
      title: 'Serivisi z\'Abanyeshuri',
      sections: [
        {
          label: 'Gufasha Kwiga',
          items: [
            { label: 'Isomero rya Kijyambere', icon: BookOpen, desc: 'Ibitabo na mudasobwa bihagije.' },
            { label: 'Laboratwari', icon: Cpu, desc: 'Aho gukora imyitozo ngiro.' },
          ]
        },
        {
          label: 'Iterambere',
          items: [
            { label: 'Ubujyanama', icon: MessageSquare, desc: 'Guhitamo umwuga neza.' },
            { label: 'Ikigo cy\'Ubuzima', icon: Heart, desc: 'First Aid & Health services.' },
          ]
        }
      ],
      featured: { title: 'New Services', desc: 'Sura Isomero rishya ryuzuye ikoranabuhanga.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400' }
    },
    'Imyuga': {
      title: 'Amashami Yacu',
      sections: [
        {
          label: 'Ikoranabuhanga',
          items: [
            { label: 'SOD - Software Dev', icon: Cpu, desc: 'Code your future today.', path: '/trades/sod' },
            { label: 'AUT - Automobile', icon: Car, desc: 'Advanced engine mastery.', path: '/trades/auto' },
          ]
        },
        {
          label: 'Ubwubatsi',
          items: [
            { label: 'BDC - Construction', icon: Hammer, desc: 'Modern civil engineering.', path: '/trades/bdc' },
          ]
        }
      ],
      featured: { title: 'Join a Trade', desc: 'Ubumenyi ngiro nibwo bukire nyabwo.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400' }
    },
    'Ubufasha': {
      title: 'Support Center',
      sections: [
        {
          label: 'Contact',
          items: [
            { label: 'WhatsApp Chat', icon: MessageSquare, desc: 'Quick replies 24/7.' },
            { label: 'Email Us', icon: Globe, desc: 'Support@gardentvet.rw' },
          ]
        }
      ],
      featured: { title: 'Help is here', desc: 'Turi hano kugira ngo tuguhe ubufasha bwose.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400' }
    }
  };

  const navItems = [
    { label: 'Ahabanza', path: '/', dropdown: false },
    { label: 'Imikino', path: '/sports', dropdown: true },
    { label: 'Serivisi', path: '/services', dropdown: true },
    { label: 'Imyuga', path: '/trades/sod', dropdown: true },
    { label: 'Ubufasha', path: '/support', dropdown: true },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-10'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-4 group z-[60]">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-900 rounded-[1.5rem] flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-2xl group-hover:bg-green-500 transition-all duration-500">G</div>
              <div className="flex flex-col">
                <span className={`text-xl sm:text-2xl font-black tracking-tighter leading-none ${scrolled ? 'text-gray-950' : 'text-white'}`}>Garden TVET</span>
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Uburezi Bufite Intego</span>
              </div>
            </Link>

            {/* Glassmorphic Nav */}
            <nav className={`hidden xl:flex items-center space-x-1 p-2 rounded-[2.5rem] border transition-all duration-700 ${
              scrolled ? 'bg-gray-100/30 border-gray-200' : 'bg-white/10 border-white/20 backdrop-blur-3xl shadow-2xl'
            }`}>
              {navItems.map((item) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`px-6 py-3 rounded-[1.5rem] text-xs font-black transition-all flex items-center space-x-2 ${
                      scrolled 
                        ? (location.pathname === item.path || activeDropdown === item.label ? 'bg-white text-gray-950 shadow-xl border border-gray-100' : 'text-gray-600 hover:text-gray-950 hover:bg-white/60')
                        : (location.pathname === item.path || activeDropdown === item.label ? 'bg-white/30 text-white' : 'text-white hover:bg-white/10')
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Enhanced Mega Menu */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="w-[850px] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 p-10 flex overflow-hidden">
                        <div className="flex-1 space-y-10">
                          <div className="flex justify-between items-center border-b border-gray-50 pb-6">
                            <h3 className="text-2xl font-black text-gray-950 tracking-tighter">{menuData[item.label].title}</h3>
                            <Link to={item.path} className="text-green-600 font-bold text-sm flex items-center space-x-2 hover:underline">
                              <span>Reba Byose</span>
                              <ArrowUpRight size={16} />
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-10">
                            {menuData[item.label].sections.map((sec: any, i: number) => (
                              <div key={i} className="space-y-6">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{sec.label}</p>
                                <div className="space-y-4">
                                  {sec.items.map((sub: any, j: number) => (
                                    <Link key={j} to={sub.path || item.path} className="flex items-start space-x-5 p-4 rounded-[1.5rem] hover:bg-gray-50 transition-all group">
                                      <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm">
                                        <sub.icon size={22} />
                                      </div>
                                      <div>
                                        <p className="text-sm font-black text-gray-950 leading-none">{sub.label}</p>
                                        <p className="text-[11px] text-gray-500 mt-2 line-clamp-2 leading-relaxed font-medium">{sub.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="w-72 ml-10 pl-10 border-l border-gray-50 flex flex-col">
                           <div className="flex-1 rounded-[2.5rem] overflow-hidden relative group/feat shadow-2xl">
                              <img src={menuData[item.label].featured.img} className="w-full h-full object-cover group-hover/feat:scale-110 transition-transform duration-1000" />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent p-6 flex flex-col justify-end">
                                 <h4 className="text-white font-black text-lg leading-tight tracking-tight">{menuData[item.label].featured.title}</h4>
                                 <p className="text-white/70 text-xs mt-2 font-medium leading-relaxed">{menuData[item.label].featured.desc}</p>
                              </div>
                           </div>
                           <button className="mt-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">Contact Staff</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 sm:space-x-8 z-[60]">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`hidden md:flex items-center space-x-4 px-6 py-3.5 rounded-2xl border transition-all ${
                  scrolled ? 'bg-gray-100 border-gray-200 text-gray-500' : 'bg-white/10 border-white/20 text-white/60 backdrop-blur-xl'
                } hover:bg-white/20 shadow-xl`}
              >
                <SearchIcon size={18} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Shakisha...</span>
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${scrolled ? 'bg-gray-200 text-gray-500' : 'bg-white/10 text-white/40'}`}>⌘K</span>
              </button>

              <div className="flex items-center space-x-3">
                <Link to="/login" className={`px-6 py-3 text-xs font-black transition-all ${scrolled ? 'text-gray-950' : 'text-white'}`}>Injira</Link>
                <Link to="/register" className={`px-8 py-4 rounded-[1.5rem] text-xs font-black shadow-2xl hover:-translate-y-1 transition-all flex items-center space-x-2 ${
                  scrolled ? 'bg-gray-950 text-white' : 'bg-white text-gray-950'
                }`}>
                  <span>Kwiyandikisha</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <button className={`xl:hidden p-3 rounded-2xl border ${scrolled ? 'border-gray-200 text-gray-950' : 'border-white/20 text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Advanced Interactive Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-gray-950/95 backdrop-blur-[40px] p-6 lg:p-20 flex items-start justify-center animate-in fade-in duration-500">
           <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 text-white/40 hover:text-white transition-colors"><X size={40} /></button>
           <div className="w-full max-w-5xl mt-20 space-y-16 animate-in slide-in-from-bottom-12 duration-700">
              <div className="space-y-4 text-center">
                 <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter">Icyo waba <span className="text-green-500">ushaka cyose.</span></h2>
                 <p className="text-gray-500 font-medium text-xl">Shakisha amashami, abanyeshuri, abarimu cyangwa andi makuru.</p>
              </div>
              
              <div className="relative group">
                <SearchIcon className="absolute left-10 top-12 text-green-500 group-focus-within:scale-110 transition-transform" size={40} />
                <input 
                  autoFocus 
                  type="text" 
                  placeholder="Andika hano..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-[4rem] px-28 py-12 text-4xl font-black text-white outline-none focus:border-green-500 transition-all placeholder:text-white/10 shadow-[0_0_100px_rgba(34,197,94,0.1)]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { label: 'Ubwubatsi Level 5', cat: 'Amashami', icon: Hammer, desc: 'Reba syllabus n\'amasomo.' },
                   { label: 'Gahunda y\'Ishuri', cat: 'Amasomo', icon: Calendar, desc: 'Imfashanyigisho n\'amasaha.' },
                   { label: 'John Bosco', cat: 'Umunyeshuri', icon: Users, desc: 'SOD Year 3 - Software Dev.' }
                 ].map((res, i) => (
                   <button key={i} className="flex flex-col items-start p-10 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-[3rem] text-left transition-all group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                         <res.icon size={100} />
                      </div>
                      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-white/40 group-hover:text-green-500 transition-colors mb-8 shadow-xl">
                        <res.icon size={28} />
                      </div>
                      <div>
                         <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">{res.cat}</p>
                         <p className="text-2xl font-black text-white tracking-tight leading-tight">{res.label}</p>
                         <p className="text-gray-500 text-sm mt-3 font-medium">{res.desc}</p>
                      </div>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default Header;
