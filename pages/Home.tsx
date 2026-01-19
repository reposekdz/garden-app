
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Users, Trophy, BookOpen, 
  Quote, Calendar, Newspaper, MapPin, CheckCircle, ExternalLink, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, Shield, Star, Rocket
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { TRADES } from '../constants';

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Building the Future of Tech",
      subtitle: "Join our Software Development program and change the world with code.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      stat: "240+ Graduating Annually",
      highlight: "Cloud Certified Curriculum"
    },
    {
      title: "Constructing Tomorrow",
      subtitle: "Master the art of building construction with world-class mentors.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      stat: "98% Site Ready Rate",
      highlight: "Sustainable Masonry Experts"
    },
    {
      title: "Innovating Mobility",
      subtitle: "Learn the latest in automotive technology and electrical systems.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      stat: "EV System Specialists",
      highlight: "Diagnostic Excellence"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[95vh] w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover transition-transform duration-[12000ms] ease-out" style={{ transform: idx === current ? 'scale(1.15)' : 'scale(1)' }} alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent flex items-center">
            <div className="w-full px-4 sm:px-8 lg:px-16 relative">
              <div className="max-w-5xl space-y-8 sm:space-y-12">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 animate-in fade-in slide-in-from-left-4 duration-700">
                  <Star className="text-yellow-400" size={16} fill="currentColor" />
                  <span className="text-xs font-black text-white uppercase tracking-[0.4em]">Excellence Redefined • Intake 2026</span>
                </div>
                
                <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black text-white drop-shadow-2xl leading-[0.8] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-4xl text-gray-300 drop-shadow-md max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                  <button className="w-full sm:w-auto px-12 py-6 bg-green-500 text-white rounded-[2.5rem] font-black text-2xl shadow-[0_25px_60px_-15px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4 group">
                    <span>Enroll Now</span>
                    <Rocket size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-12 py-6 bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/20 text-white rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center space-x-4">
                    <PlayCircle size={32} />
                    <span>Experience TVET</span>
                  </button>
                </div>
              </div>

              {/* Floating Slide Mini-Card Overlay */}
              <div className="absolute top-0 right-0 hidden xl:flex flex-col space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700 pr-16 pt-20">
                 <div className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl max-w-xs space-y-4 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                       <CheckCircle size={24} />
                    </div>
                    <h5 className="text-xl font-black text-white">{slide.highlight}</h5>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Certified by national and international industry boards for career readiness.</p>
                 </div>
                 <div className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl max-w-xs space-y-4 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                       <Users size={24} />
                    </div>
                    <h5 className="text-xl font-black text-white">{slide.stat}</h5>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed">Join a thriving community of builders, creators, and innovators.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation Controls */}
      <div className="absolute bottom-12 right-8 sm:right-16 flex items-center space-x-8 z-10">
          <div className="flex space-x-4">
             {slides.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrent(i)}
                 className={`h-2.5 transition-all duration-700 rounded-full ${i === current ? 'w-20 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)]' : 'w-8 bg-white/30 hover:bg-white/50'}`}
               />
             ))}
          </div>
          <div className="h-14 w-px bg-white/20 hidden sm:block"></div>
          <div className="hidden sm:flex flex-col items-end">
             <p className="text-white font-black text-2xl tracking-tighter leading-none">0{current + 1}</p>
             <p className="text-gray-500 font-black text-[10px] uppercase tracking-[0.3em]">of 03</p>
          </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full space-y-0 pb-0 bg-gray-50">
      <HeroSlider />

      {/* Trust & Partnership Bar */}
      <div className="bg-gray-950 py-16 sm:py-24 w-full overflow-hidden">
        <div className="w-full px-4 sm:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
           <span className="text-white font-black text-2xl sm:text-5xl tracking-tighter">MINEDUC</span>
           <span className="text-white font-black text-2xl sm:text-5xl tracking-tighter uppercase">RTB BOARD</span>
           <span className="text-white font-black text-2xl sm:text-5xl tracking-tighter italic uppercase">SDC SWISS</span>
           <span className="text-white font-black text-2xl sm:text-5xl tracking-tighter">GIZ COLLAB</span>
           <span className="text-white font-black text-2xl sm:text-5xl tracking-tighter font-serif">KOICA</span>
        </div>
      </div>

      <section id="trades-section" className="w-full px-4 sm:px-8 lg:px-16 py-24 sm:py-48 scroll-mt-24">
        <div className="text-center mb-24 sm:mb-40 space-y-8">
          <div className="inline-block px-8 py-3 bg-green-50 text-green-600 text-xs font-black uppercase tracking-[0.6em] rounded-full border border-green-100 shadow-sm">Industry Standard Trades</div>
          <h2 className="text-6xl sm:text-[10rem] font-black text-gray-900 tracking-tighter leading-[0.85]">Choose Your <br /><span className="gradient-text">Profession</span></h2>
          <p className="text-2xl sm:text-4xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium italic">Empowering minds, building hands. Excellence across three core disciplines.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
          {TRADES.map((trade) => (
            <div 
              key={trade.id} 
              onClick={() => navigate(`/trades/${trade.id}`)}
              className="group relative bg-white rounded-[4rem] sm:rounded-[6rem] overflow-hidden shadow-2xl hover:shadow-green-500/30 transition-all duration-1000 border border-gray-100 cursor-pointer flex flex-col"
            >
              <div className="h-[30rem] sm:h-[45rem] overflow-hidden relative">
                <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale-0 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-10 sm:p-20 flex flex-col justify-end opacity-100 group-hover:opacity-0 transition-all duration-700">
                    <div className="flex items-center space-x-3 mb-6">
                        <span className="px-5 py-2 rounded-2xl bg-white/10 backdrop-blur-3xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest inline-block">{trade.code}</span>
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl sm:text-7xl font-black text-white leading-tight tracking-tighter">{trade.name}</h3>
                </div>

                <div className="absolute inset-0 p-10 sm:p-20 bg-gray-900/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center text-white space-y-10">
                    <h4 className="text-4xl sm:text-6xl font-black tracking-tighter leading-none border-b border-white/10 pb-10">Program Insights</h4>
                    <div className="space-y-6 pt-4">
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-xs font-black uppercase tracking-[0.3em] opacity-50">Accreditation</span>
                            <span className="font-bold text-green-400">Level 5 Diploma</span>
                        </div>
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-xs font-black uppercase tracking-[0.3em] opacity-50">Internship</span>
                            <span className="font-bold text-blue-400">6 Months Required</span>
                        </div>
                        <div className="flex justify-between items-center text-lg">
                            <span className="text-xs font-black uppercase tracking-[0.3em] opacity-50">Placement</span>
                            <span className="font-black text-3xl">95%+</span>
                        </div>
                    </div>
                    <div className="pt-10">
                        <button className="w-full py-6 sm:py-8 bg-white text-gray-900 rounded-[2.5rem] font-black shadow-2xl uppercase tracking-[0.4em] text-xs flex items-center justify-center gap-4 hover:bg-green-400 hover:text-white transition-all">
                            <span>Deep Dive</span>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Stats Counter Grid - Fluid & Edge to Edge */}
      <section className="bg-gray-900 py-32 sm:py-56 text-white relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
        <div className="w-full px-4 sm:px-16 lg:px-24 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-32 text-center">
            {[
              { label: "Elite Students", val: "1,200+", icon: Users, color: "text-green-400" },
              { label: "Job Guarantee", val: "95%", icon: Zap, color: "text-yellow-400" },
              { label: "National Awards", val: "15+", icon: Trophy, color: "text-blue-400" },
              { label: "Master Modules", val: "45+", icon: BookOpen, color: "text-purple-400" }
            ].map((s, idx) => (
              <div key={idx} className="space-y-10 group">
                <div className="w-24 h-24 sm:w-40 sm:h-40 bg-white/5 rounded-[3rem] sm:rounded-[5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-700">
                  <s.icon className={s.color} size={64} />
                </div>
                <div className="text-7xl sm:text-[10rem] font-black tracking-tighter text-white tabular-nums leading-none drop-shadow-2xl">{s.val}</div>
                <div className="text-gray-500 uppercase tracking-[0.6em] text-[10px] font-black opacity-50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="w-full px-4 sm:px-12 py-32 sm:py-64">
        <div className="w-full bg-gray-950 rounded-[4rem] sm:rounded-[10rem] p-16 sm:p-48 text-center space-y-16 sm:space-y-24 relative overflow-hidden group border border-white/5">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[160px] group-hover:bg-green-500/10 transition-colors duration-1000"></div>
           <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] group-hover:bg-blue-500/10 transition-colors duration-1000"></div>
           
           <div className="space-y-10 relative z-10">
                <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-4">Admissions Closed in 14 Days</div>
                <h2 className="text-6xl sm:text-[12rem] font-black text-white leading-[0.8] tracking-tighter shadow-sm">Your era <br />begins <span className="text-green-500 underline decoration-green-500/30 underline-offset-8">Now.</span></h2>
                <p className="text-xl sm:text-4xl text-gray-500 max-w-4xl mx-auto font-medium leading-relaxed italic opacity-70">"The best way to predict your future is to create it with your own hands."</p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center items-center gap-10 pt-10 relative z-10">
              <Link to="/register" className="w-full sm:w-auto px-20 py-10 bg-green-500 text-white rounded-[4rem] font-black text-3xl hover:bg-green-400 hover:scale-105 transition-all shadow-[0_40px_100px_-20px_rgba(34,197,94,0.5)]">Start Application</Link>
              <Link to="/contact" className="w-full sm:w-auto px-20 py-10 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[4rem] font-black text-3xl hover:bg-white/10 transition-all">Visit Campus</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
