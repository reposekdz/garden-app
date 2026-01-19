
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Zap, Users, Trophy, BookOpen, Quote, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, ShieldCheck, Target,
  Award, TrendingUp, Shield, Rocket, MapPin, ChevronRight, Activity, Code, HardHat,
  Briefcase, Search as SearchIcon, Calendar, Clock, Newspaper, ArrowUpRight, CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { TRADES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 'sod',
      title: "Ikoranabuhanga ku Ejo Hazaza",
      subtitle: "Injira mu mwuga wo gukora porogaramu uhindure isi ukoresheje code ya kijyambere.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      icon: Code,
      tradeImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400",
      color: 'bg-blue-600'
    },
    {
      id: 'bdc',
      title: "Ubwubatsi bwa Kijyambere",
      subtitle: "Yubaka ejo hazaza heza wiga imyuga y'ubwubatsi bugezweho n'ibishushanyo mbonera.",
      image: "https://images.unsplash.com/photo-1503387762-592dee58c160?q=80&w=2070&auto=format&fit=crop",
      icon: HardHat,
      tradeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400",
      color: 'bg-orange-600'
    },
    {
      id: 'auto',
      title: "Ikinyabiziga na Moteri",
      subtitle: "Sana kandi uhange udushya mu binyabiziga n'amashanyarazi y'imodoka za none.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2072&auto=format&fit=crop",
      icon: Car,
      tradeImage: "https://images.unsplash.com/photo-1487750111969-12f2f2e73d47?q=80&w=400",
      color: 'bg-red-600'
    },
    {
      id: 'sports',
      title: "Imikino n'Imyidagaduro",
      subtitle: "Garagaza impano yawe mu mikino itandukanye muri Garden TVET ikunzwe cyane.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      icon: Trophy,
      tradeImage: "https://images.unsplash.com/photo-1461896756993-7f733b79b5c3?q=80&w=400",
      color: 'bg-green-600'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-white">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover brightness-[0.85]" alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent"></div>
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Main Text Area */}
          <div className="flex-1 space-y-6 lg:space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="inline-flex items-center space-x-3 px-5 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-[10px] font-black uppercase tracking-widest">
               <Zap size={14} className="animate-pulse" />
               <span>Inyigisho Zemejwe na RTB - 2024</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter drop-shadow-sm">
              {slides[current].title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="gradient-text">{slides[current].title.split(' ').pop()}</span>
            </h1>
            <p className="text-sm sm:text-xl text-gray-600 max-w-xl font-semibold leading-relaxed">
              {slides[current].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/register" className="px-10 py-5 bg-green-600 text-white rounded-[1.5rem] font-black text-lg shadow-[0_20px_50px_rgba(22,163,74,0.3)] hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4">
                <span>Kwiyandikisha ubu</span>
                <Rocket size={20} />
              </Link>
              <button className="px-10 py-5 bg-white border-2 border-gray-100 text-gray-900 rounded-[1.5rem] font-black text-lg transition-all hover:bg-gray-50 hover:border-gray-200 shadow-xl">
                Sura Ishuri Ryacu
              </button>
            </div>
          </div>

          {/* 2 by 2 Vertical Grid of Trade Cards - High Definition */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-in fade-in slide-in-from-right-12 duration-1000">
             {slides.map((slide, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrent(i)}
                 className={`group relative w-36 h-48 sm:w-64 sm:h-80 rounded-[2.5rem] overflow-hidden border-4 transition-all duration-700 shadow-2xl ${
                   i === current 
                   ? 'border-green-600 scale-105 shadow-green-600/20' 
                   : 'border-white opacity-60 hover:opacity-100 hover:scale-105'
                 }`}
               >
                 <img src={slide.tradeImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-8 space-y-2">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-xl ${slide.color} group-hover:rotate-6 transition-all`}>
                       <slide.icon size={22} />
                    </div>
                    <p className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest">{slide.id}</p>
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
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#fcfcfc] overflow-x-hidden">
      <HeroSlider />

      {/* Trust & Stats Section - Light Mode */}
      <section className="bg-white py-32 px-6 sm:px-12 lg:px-24 border-y border-gray-100">
        <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 sm:gap-20 w-full lg:w-auto flex-1">
             {[
               { val: '20+', label: 'Imyaka Tumaranye' },
               { val: '1500+', label: 'Abanyeshuri Bacu' },
               { val: '98%', label: 'Guhabwa Akazi' },
               { val: '50+', label: 'Abafatanyabikorwa' }
             ].map((s, i) => (
               <div key={i} className="text-center lg:text-left space-y-3">
                 <p className="text-5xl sm:text-7xl font-black gradient-text tracking-tighter leading-none">{s.val}</p>
                 <p className="text-[11px] sm:text-[13px] font-black text-gray-400 uppercase tracking-[0.3em]">{s.label}</p>
               </div>
             ))}
          </div>
          <div className="max-w-xl space-y-6 text-center lg:text-right">
             <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter leading-tight">Inyigisho Zifatika <br /><span className="text-green-600">Zishingiye ku Isoko.</span></h2>
             <p className="text-gray-500 text-lg font-medium leading-relaxed italic opacity-80">
               "Twubaka ubushobozi bw'abanyeshuri bacu binyuze mu nyigisho zishingiye ku bikorwa n'ikoranabuhanga rya none (CBT-Competency Based Training)."
             </p>
          </div>
        </div>
      </section>

      {/* Trades Exploration - Feature Rich Light Cards */}
      <section id="trades-section" className="py-32 px-6 sm:px-12 lg:px-24 bg-gray-50/50">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Explore Amashami Yacu</div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.85]">Imyuga Ihindura <br /><span className="text-green-600">Ubuzima.</span></h2>
            </div>
            <p className="text-xl sm:text-2xl text-gray-400 font-medium max-w-xl lg:text-right italic">"Hitamo umwuga ujyanye n'impano yawe uyu munsi kugira ngo wubake ejo hazaza heza hashoboka."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {TRADES.map((trade) => (
              <div key={trade.id} onClick={() => navigate(`/trades/${trade.id}`)} className="group relative bg-white rounded-[4rem] overflow-hidden shadow-xl hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.1)] transition-all duration-1000 cursor-pointer border border-white">
                <div className="h-[650px] overflow-hidden relative">
                  <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                  
                  {/* Default Content View */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end group-hover:opacity-0 transition-all duration-500">
                      <div className="space-y-4">
                         <div className="flex items-center space-x-3">
                            <div className="px-4 py-1.5 bg-green-100 text-green-700 text-[9px] font-black uppercase rounded-full tracking-widest">{trade.code}</div>
                            <div className="px-4 py-1.5 bg-blue-100 text-blue-700 text-[9px] font-black uppercase rounded-full tracking-widest">Level 3-5</div>
                         </div>
                         <h3 className="text-4xl font-black text-gray-900 leading-none tracking-tighter">{trade.name}</h3>
                         <p className="text-gray-500 font-medium line-clamp-2 text-sm">{trade.description}</p>
                      </div>
                  </div>

                  {/* Hover Detailed View */}
                  <div className="absolute inset-0 p-12 bg-white/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center space-y-8">
                      <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 bg-green-600 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl"><Award size={40} /></div>
                        <div>
                           <h4 className="text-3xl font-black tracking-tight text-gray-900">RTB Certified</h4>
                           <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ubumenyi Bwemewe</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                         <p className="text-lg text-gray-600 font-bold leading-relaxed">Wiga gukoresha ibikoresho bigezweho bihuje n'isoko ry'umurimo rya none mu buryo bw'umwuga.</p>
                         <div className="grid grid-cols-2 gap-4">
                            {trade.coreModules.slice(0, 4).map((m, i) => (
                               <div key={i} className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                                  <CheckCircle2 size={14} className="text-green-500" />
                                  <span>{m}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                      <button className="w-full py-6 bg-gray-950 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">Sura Umwuga & Amasomo</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-40 px-6 sm:px-12 lg:px-24 bg-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
         <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center gap-24">
            <div className="flex-1 space-y-10">
               <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Inzira y'Ubukire</div>
                  <h2 className="text-6xl sm:text-8xl font-black text-gray-950 tracking-tighter leading-[0.85]">Ejo Hazaza Hawe <br /><span className="text-green-600">Hatangiye.</span></h2>
               </div>
               <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-xl italic">"Uburezi bufite intego niryo shingiro ry'impinduka mu muryango. Garden TVET iguha imfunguzo zo gufungura imiryango y'ubushobozi bwawe."</p>
               <div className="flex items-center gap-10 pt-4">
                  <div className="space-y-1">
                     <p className="text-4xl font-black text-gray-900">100%</p>
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Inyigisho Zifatika</p>
                  </div>
                  <div className="w-px h-12 bg-gray-100"></div>
                  <div className="space-y-1">
                     <p className="text-4xl font-black text-gray-900">2024</p>
                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Imwaka w'Iterambere</p>
                  </div>
               </div>
            </div>
            <div className="w-full lg:w-[600px] aspect-square rounded-[5rem] overflow-hidden shadow-2xl relative group rotate-2 hover:rotate-0 transition-all duration-1000">
               <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]" />
               <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 to-transparent flex items-end p-20">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl flex items-center space-x-6">
                     <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center"><Activity size={32} /></div>
                     <div>
                        <p className="text-xl font-black text-gray-900">Active Campus</p>
                        <p className="text-xs font-bold text-gray-500">24/7 Innovation Hub</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
