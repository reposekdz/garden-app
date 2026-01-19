
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, Menu, X, Globe, LogIn, Bell, Command, Sun, Moon, Sparkles, 
  Activity, ChevronRight, ChevronDown, Trophy, Users, Calendar, 
  BookOpen, Heart, Briefcase, HelpCircle, FileText, Cpu, Hammer, Car
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuFeatures = {
    'Sports': [
      { label: 'Football Team', icon: Trophy, desc: 'Current champions of the regional TVET gala.' },
      { label: 'Basketball', icon: Users, desc: 'Mixed teams training every Tuesday.' },
      { label: 'Facilities', icon: Activity, desc: 'Modern arena and fitness center.' },
    ],
    'Services': [
      { label: 'Career Hub', icon: Briefcase, desc: 'Internship and job placement support.' },
      { label: 'Health Center', icon: Heart, desc: '24/7 medical assistance for students.' },
      { label: 'Library', icon: BookOpen, desc: 'Digital and physical learning resources.' },
    ],
    'Trades': [
      { label: 'Software Dev', icon: Cpu, path: '/trades/sod' },
      { label: 'Construction', icon: Hammer, path: '/trades/bdc' },
      { label: 'Automobile', icon: Car, path: '/trades/auto' },
    ],
    'Support': [
      { label: 'Help Desk', icon: HelpCircle, desc: 'Technical and academic assistance.' },
      { label: 'FAQ', icon: FileText, desc: 'Quick answers to common questions.' },
      { label: 'Feedback', icon: Sparkles, desc: 'Help us improve your experience.' },
    ]
  };

  const navItems = [
    { label: t('home'), path: '/', dropdown: false },
    { label: t('sports'), path: '/sports', dropdown: true, key: 'Sports' },
    { label: t('services'), path: '/services', dropdown: true, key: 'Services' },
    { label: t('trades'), path: '/trades/sod', dropdown: true, key: 'Trades' },
    { label: t('contact'), path: '/contact', dropdown: false },
    { label: t('support'), path: '/support', dropdown: true, key: 'Support' },
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
          {/* Logo Area with Fixed Glassmorphism */}
          <Link to="/" className="group relative flex items-center space-x-4 flex-shrink-0 z-20">
            <div className={`absolute inset-[-12px] rounded-[2.5rem] border border-white/20 shadow-xl transition-all duration-500 backdrop-blur-xl ${
              scrolled ? 'bg-white/30 opacity-100' : 'bg-white/10 opacity-100 shadow-white/5'
            }`}></div>
            
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center text-white font-black text-2xl sm:text-3xl shadow-2xl transform group-hover:rotate-12 transition-all duration-500">G</div>
            <div className="relative flex flex-col">
              <span className={`text-xl sm:text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-gray-900' : 'text-white sm:text-gray-900'}`}>Garden <span className="gradient-text">TVET</span></span>
              <div className="flex items-center space-x-1 mt-1.5">
                 <Activity size={10} className="text-green-500 animate-pulse" />
                 <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${scrolled ? 'text-gray-400' : 'text-gray-300 sm:text-gray-400'}`}>Excellence Hub</span>
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-1 bg-gray-900/5 backdrop-blur-xl p-1.5 rounded-[2rem] border border-white/40 shadow-inner mx-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <button
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.key || null)}
                  onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.key ? null : (item.key || null)) : null}
                  className={`px-5 py-3 rounded-[1.5rem] text-sm font-black transition-all whitespace-nowrap flex items-center space-x-2 group/item ${
                    isActive(item.path) || activeDropdown === item.key
                      ? 'bg-white text-gray-900 shadow-xl'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <Link to={item.path}>{item.label}</Link>
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />}
                  {isActive(item.path) && !item.dropdown && <Sparkles size={12} className="absolute -top-1 -right-1 text-green-400 animate-bounce" />}
                </button>

                {/* Dropdown Content */}
                {item.dropdown && activeDropdown === item.key && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-[120%] left-0 w-80 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 animate-in fade-in slide-in-from-top-4 z-50"
                  >
                    <div className="space-y-4">
                      {menuFeatures[item.key as keyof typeof menuFeatures].map((feat: any, i: number) => (
                        <Link 
                          key={i} 
                          to={feat.path || item.path} 
                          className="flex items-start space-x-4 p-3 rounded-2xl hover:bg-gray-50 transition-all group"
                        >
                          <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                            <feat.icon size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-black text-gray-900">{feat.label}</p>
                            {feat.desc && <p className="text-[10px] font-medium text-gray-500 leading-tight mt-0.5">{feat.desc}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <button className="flex items-center space-x-4 px-5 py-3 bg-white/50 border border-gray-100 rounded-[1.5rem] text-gray-400 transition-all hover:bg-white hover:shadow-xl group">
              <Search size={20} className="group-hover:text-green-500 transition-colors" />
              <div className="flex items-center space-x-2 px-2 py-1 bg-gray-100 rounded-lg text-[10px] font-black text-gray-400 border border-gray-200">
                <Command size={10} />
                <span>K</span>
              </div>
            </button>

            <div className="relative">
              <button onClick={() => setShowNotifications(!showNotifications)} className="p-4 bg-white/50 border border-gray-100 rounded-[1.5rem] shadow-sm text-gray-400 hover:text-green-500 transition-all relative hover:shadow-xl">
                <Bell size={22} />
                <div className="absolute top-3.5 right-3.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-ping"></div>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-6 w-80 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-6 animate-in fade-in slide-in-from-top-6 z-50">
                  <h4 className="font-black text-xl mb-6">Inbox</h4>
                  <div className="space-y-3">
                    {notifications.map(n => (
                      <div key={n.id} className="p-4 hover:bg-gray-50 rounded-2xl cursor-pointer transition-all border-l-4 border-transparent hover:border-green-400 group">
                        <p className="text-sm font-bold text-gray-800 leading-tight group-hover:text-gray-950">{n.text}</p>
                        <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-2 inline-block">{n.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <Link to="/login" className={`px-6 py-3.5 text-sm font-black transition-colors ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white sm:text-gray-700'}`}>Login</Link>
              <Link to="/register" className="px-8 py-4 bg-gray-900 text-white text-sm font-black rounded-[1.5rem] shadow-2xl hover:shadow-green-500/20 hover:-translate-y-1 transition-all whitespace-nowrap">Get Started</Link>
            </div>
          </div>

          <div className="flex lg:hidden items-center space-x-3">
             <button className="p-3 bg-white border border-gray-100 rounded-2xl text-gray-600 shadow-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
             </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-3xl border-t border-gray-100 p-6 animate-in slide-in-from-top-8 duration-500 shadow-2xl rounded-b-[3rem] z-50">
          <div className="space-y-2 mb-8">
            {navItems.map((item) => (
              <div key={item.path} className="space-y-2">
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-xl font-black transition-all ${
                    isActive(item.path) ? 'bg-green-500 text-white shadow-2xl' : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} />
                </Link>
                {item.dropdown && (
                  <div className="grid grid-cols-2 gap-2 px-2">
                    {menuFeatures[item.key as keyof typeof menuFeatures].map((feat: any, i: number) => (
                      <Link key={i} to={feat.path || item.path} className="p-3 bg-white border border-gray-100 rounded-xl text-[10px] font-black uppercase text-gray-500 flex items-center space-x-2">
                         <feat.icon size={14} />
                         <span>{feat.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
