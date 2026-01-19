
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Zap, Trophy, Rocket, Activity, Code, HardHat, Car, CheckCircle2,
  Award, PlayCircle, Star, Calendar, ArrowUpRight, BookOpen, Globe, Users,
  Shield, Image, ChevronRight, MessageCircle
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { TRADES, CAMPUS_NEWS, SHORT_COURSES } from '../constants';

const HeroSlider: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 'sod',
      title: "Ikoranabuhanga ku Ejo Hazaza",
      subtitle: "Injira mu mwuga wo gukora porogaramu uhindure isi ukoresheje code ya kijyambere.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072",
      icon: Code,
      tradeImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
      color: 'bg-blue-600'
    },
    {
      id: 'bdc',
      title: "Ubwubatsi bwa Kijyambere",
      subtitle: "Yubaka ejo hazaza heza wiga imyuga y'ubwubatsi bugezweho n'ibishushanyo mbonera.",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070",
      icon: HardHat,
      tradeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400",
      color: 'bg-orange-600'
    },
    {
      id: 'auto',
      title: "Ikinyabiziga na Moteri",
      subtitle: "Sana kandi uhange udushya mu binyabiziga n'amashanyarazi y'imodoka za none.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072",
      icon: Car,
      tradeImage: "https://images.unsplash.com/photo-1487750111969-12f2f2e73d47?q=80&w=400",
      color: 'bg-red-600'
    },
    {
      id: 'sports',
      title: "Imikino n'Imyidagaduro",
      subtitle: "Garagaza impano yawe mu mikino itandukanye muri Garden TVET ikunzwe cyane.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070",
      icon: Trophy,
      tradeImage: "https://images.unsplash.com/photo-1461896756993-7f733b79b5c3?q=80&w=400",
      color: 'bg-green-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative min-h-[750px] h-[100svh] w-full overflow-hidden bg-white">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover brightness-[0.7] lg:brightness-[0.9]" alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/60 lg:to-transparent"></div>
        </div>
      ))}

      {/* Hero Content Wrapper */}
      <div className="absolute inset-0 flex items-center pt-16 lg:pt-0 pb-12 lg:pb-0">
        <div className="container-fluid flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 h-full lg:h-auto">
          
          {/* Text Content */}
          <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 lg:space-y-10 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/20 lg:bg-green-100 border border-green-400/30 lg:border-green-200 rounded-full text-white lg:text-green-700 text-[9px] sm:text-[10px] font-black uppercase tracking-widest mx-auto lg:mx-0">
               <Zap size={14} className="animate-pulse" />
               <span>Inyigisho Zemejwe 2024</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-white lg:text-gray-900 leading-[1.1] lg:leading-[0.95] tracking-tighter text-balance drop-shadow-lg lg:drop-shadow-none">
              {slides[current].title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="gradient-text">{slides[current].title.split(' ').pop()}</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-white/90 lg:text-gray-600 max-w-xl mx-auto lg:mx-0 font-semibold leading-relaxed px-4 lg:px-0 drop-shadow-md lg:drop-shadow-none">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4 px-6 sm:px-0">
              <Link to="/register" className="px-6 py-4 sm:px-10 sm:py-5 bg-green-600 text-white rounded-xl sm:rounded-[1.5rem] font-black text-sm sm:text-lg shadow-2xl hover:bg-green-700 transition-all flex items-center justify-center space-x-3 active:scale-95">
                <span>Kwiyandikisha</span>
                <Rocket size={18} />
              </Link>
              <button className="px-6 py-4 sm:px-10 sm:py-5 bg-white/10 lg:bg-white border-2 border-white/20 lg:border-gray-100 text-white lg:text-gray-900 rounded-xl sm:rounded-[1.5rem] font-black text-sm sm:text-lg backdrop-blur-md transition-all hover:bg-white hover:text-gray-900 shadow-xl">
                Sura Ishuri
              </button>
            </div>
          </div>

          {/* 2x2 Responsive Navigation Grid - Increased Size for Mobile */}
          <div className="grid grid-cols-2 gap-4 xs:gap-5 lg:gap-6 w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[420px] lg:max-w-none lg:w-auto animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-right-12 duration-1000 delay-200 mt-auto lg:mt-0 mb-12 lg:mb-0">
             {slides.map((slide, i) => (
               <button 
                 key={i} 
                 onClick={() => navigate(`/trades/${slide.id}`)}
                 onMouseEnter={() => setCurrent(i)}
                 className={`group relative aspect-[3/4] w-32 xs:w-40 sm:w-44 lg:w-44 xl:w-56 rounded-2xl lg:rounded-[2.5rem] overflow-hidden border-2 lg:border-4 transition-all duration-700 shadow-2xl ${
                   i === current 
                   ? 'border-green-600 scale-105 shadow-green-600/30' 
                   : 'border-white/40 opacity-70 hover:opacity-100 hover:scale-105'
                 }`}
               >
                 <img src={slide.tradeImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5 lg:p-6 space-y-2 lg:space-y-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center text-white shadow-xl ${slide.color} group-hover:rotate-6 transition-all`}>
                       <slide.icon className="w-4 sm:w-6 lg:w-7" />
                    </div>
                    <p className="text-[10px] sm:text-[12px] lg:text-[14px] font-black text-white uppercase tracking-widest leading-none truncate">{slide.id}</p>
                 </div>
               </button>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#fcfcfc] overflow-x-hidden">
      <HeroSlider />
      {/* Existing sections follow... */}
    </div>
  );
};

export default Home;
