
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Users, Trophy, BookOpen, 
  Quote, Calendar, Newspaper, MapPin, CheckCircle, ExternalLink, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, Shield, Star, Rocket,
  MessageSquare, StarHalf, Music, Camera
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { TRADES } from '../constants';

const HeroSlider: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      title: "Ikoranabuhanga ku Ejo Hazaza",
      subtitle: "Injira mu mwuga wo gukora porogaramu uhindure isi ukoresheje code.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      stat: "Abarenga 240 Basoza Buri Mwaka",
      highlight: "Inyigisho Ziri ku Rwego Mpuzamahanga"
    },
    {
      title: "Ubwubatsi bwa Kijyambere",
      subtitle: "Master the art of building construction with world-class mentors.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      stat: "98% Bayobora Imishinga",
      highlight: "Ubwubatsi Burambye"
    },
    {
      title: "Ikinyabiziga na Moteri",
      subtitle: "Learn the latest in automotive technology and electrical systems.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      stat: "Abahanga mu Modoka z'Amashanyarazi",
      highlight: "Gusuzuma Imodoka ku Rwego rwo Hejuru"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover transition-transform duration-[12000ms] ease-out" style={{ transform: idx === current ? 'scale(1.15)' : 'scale(1)' }} alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent flex items-center">
            <div className="w-full px-4 sm:px-8 lg:px-16 relative pt-8 sm:pt-12 lg:pt-16">
              <div className="max-w-5xl space-y-4 sm:space-y-6 lg:space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white drop-shadow-2xl leading-[1.1] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                
                <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 drop-shadow-md max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-400">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
                  <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-green-500 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black text-lg shadow-[0_15px_40px_-10px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-3 group">
                    <span>Kwiyandikisha</span>
                    <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/20 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black text-lg transition-all flex items-center justify-center space-x-3">
                    <PlayCircle size={22} />
                    <span>Ubumenyi Ngiro</span>
                  </button>
                </div>
              </div>

              {/* Floating Slide Mini-Card Overlay */}
              <div className="absolute top-0 right-0 hidden lg:flex flex-col space-y-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-700 pr-8 sm:pr-16 pt-32 sm:pt-40">
                 <div className="p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl max-w-[15rem] space-y-3 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-xl">
                       <CheckCircle size={18} />
                    </div>
                    <h5 className="text-base font-black text-white leading-tight">{slide.highlight}</h5>
                    <p className="text-gray-400 text-[10px] font-medium leading-relaxed">Byemejwe n'inzego z'uburezi mu Rwanda.</p>
                 </div>
                 <div className="p-5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl max-w-[15rem] space-y-3 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-xl">
                       <Users size={18} />
                    </div>
                    <h5 className="text-base font-black text-white leading-tight">{slide.stat}</h5>
                    <p className="text-gray-400 text-[10px] font-medium leading-relaxed">Injira mu muryango w'abahanga bakora ibishya.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex items-center space-x-4 z-10">
          <div className="flex space-x-2">
             {slides.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrent(i)}
                 className={`h-1.5 transition-all duration-700 rounded-full ${i === current ? 'w-10 bg-green-400' : 'w-4 bg-white/30 hover:bg-white/50'}`}
               />
             ))}
          </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Mukamana Solange",
      role: "Umubyeyi",
      text: "Umwana wanjye yize SOD ubu arishura ishuri rye akoresheje gukora porogaramu. Garden TVET ni ishuri ridasanzwe.",
      avatar: "https://i.pravatar.cc/150?u=solange"
    },
    {
      name: "Habimana Jean Paul",
      role: "Umunyeshuri (Level 5)",
      text: "Uburyo bwigishwa muri iri shuri butuma umunyeshuri asohoka azi akazi neza. Nakuye hano ubumenyi butangaje.",
      avatar: "https://i.pravatar.cc/150?u=jeanpaul"
    },
    {
      name: "Gasana Eric",
      role: "Rwiyemezamirimo",
      text: "Abakozi nkurura muri Garden TVET bafite ikinyabupfura n'ubumenyi buhambaye. Nibyo Rwanda ikeneye uyu munsi.",
      avatar: "https://i.pravatar.cc/150?u=eric"
    }
  ];

  return (
    <div className="w-full space-y-0 pb-0 bg-gray-50">
      <HeroSlider />

      {/* Trust & Partnership Bar */}
      <div className="bg-gray-950 py-12 w-full overflow-hidden">
        <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-wrap justify-center sm:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
           <span className="text-white font-black text-xl lg:text-3xl tracking-tighter">MINEDUC</span>
           <span className="text-white font-black text-xl lg:text-3xl tracking-tighter uppercase">RTB BOARD</span>
           <span className="text-white font-black text-xl lg:text-3xl tracking-tighter italic uppercase">SDC SWISS</span>
           <span className="text-white font-black text-xl lg:text-3xl tracking-tighter">GIZ COLLAB</span>
        </div>
      </div>

      {/* Trades Section */}
      <section id="trades-section" className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-32 scroll-mt-24">
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-green-100 shadow-sm">Imyuga Twigisha</div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1]">Hitamo Umwuga <br /><span className="gradient-text">Uzagufasha</span></h2>
          <p className="text-lg sm:text-2xl text-gray-400 max-w-4xl mx-auto font-medium italic">Wubake ubumenyi n'amahirwe mashya mu mwuga wihitiyemo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {TRADES.map((trade) => (
            <div 
              key={trade.id} 
              onClick={() => navigate(`/trades/${trade.id}`)}
              className="group relative bg-white rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all duration-700 border border-gray-100 cursor-pointer"
            >
              <div className="h-[20rem] lg:h-[28rem] overflow-hidden relative">
                <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-100 group-hover:opacity-0 transition-all duration-500">
                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tighter">{trade.name}</h3>
                </div>

                <div className="absolute inset-0 p-8 bg-gray-900/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center text-white space-y-6">
                    <h4 className="text-2xl font-black tracking-tighter border-b border-white/10 pb-4">Inshamake</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="opacity-50 font-black uppercase tracking-widest text-[10px]">Icyiciro</span>
                            <span className="font-bold text-green-400">Level 5 Diploma</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="opacity-50 font-black uppercase tracking-widest text-[10px]">Internship</span>
                            <span className="font-bold text-blue-400">Amezi 6</span>
                        </div>
                    </div>
                    <button className="w-full py-4 bg-white text-gray-900 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-green-400 hover:text-white transition-all">Sura Umwuga</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="bg-gray-100 py-20 lg:py-32 w-full px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-blue-100">{t('testimonialsTag')}</div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">{t('testimonialsTitle')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6 relative group hover:shadow-xl transition-all hover:-translate-y-2">
              <Quote className="text-green-500 opacity-20 absolute top-8 right-8" size={60} />
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-green-500 shadow-lg" />
                <div>
                  <h4 className="font-black text-gray-900 leading-none">{t.name}</h4>
                  <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg font-medium leading-relaxed italic">"{t.text}"</p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Campus Life Section */}
      <section className="py-20 lg:py-32 w-full px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16 lg:mb-24">
           <div className="max-w-2xl space-y-6">
              <div className="inline-block px-6 py-2 bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-purple-100">{t('campusLifeTag')}</div>
              <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-tight">{t('campusLifeTitle')}</h2>
              <p className="text-xl text-gray-500 font-medium">Iri shuri si inyubako gusa, ni umuryango wubaka impano zitandukanye z'abanyeshuri.</p>
           </div>
           <button className="px-10 py-5 bg-gray-900 text-white rounded-[2rem] font-black hover:bg-green-500 transition-all shadow-xl">Reba Byose</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Imikino N'Imyidagaduro", icon: Trophy, color: "bg-orange-500", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070" },
            { title: "Ikoranabuhanga & Udushya", icon: Cpu, color: "bg-blue-500", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" },
            { title: "Umuco N'Ubuhanzi", icon: Music, color: "bg-purple-500", img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070" },
            { title: "Inama N'Amahuriro", icon: Users, color: "bg-green-500", img: "https://images.unsplash.com/photo-1540575861501-7ad05823c93e?q=80&w=2070" }
          ].map((card, i) => (
            <div key={i} className="group relative h-[25rem] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer hover:scale-[1.02] transition-all">
               <img src={card.img} className="w-full h-full object-cover grayscale-0 transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl`}>
                     <card.icon size={24} />
                  </div>
                  <h4 className="text-white text-2xl font-black leading-tight tracking-tight">{card.title}</h4>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Final CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-16 lg:py-32">
        <div className="w-full bg-gray-950 rounded-[3rem] lg:rounded-[6rem] p-10 lg:p-32 text-center space-y-12 relative overflow-hidden group border border-white/5">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[160px]"></div>
           <div className="space-y-6 relative z-10">
                <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[8px] font-black uppercase tracking-[0.3em] mb-4">Admissions Closed in 14 Days</div>
                <h2 className="text-4xl lg:text-[7.5rem] font-black text-white leading-[1.1] tracking-tighter">Injira Mu <br /><span className="text-green-500">Muryango.</span></h2>
                <p className="text-lg lg:text-2xl text-gray-500 max-w-4xl mx-auto italic opacity-70">"Inzira y'ejo hazaza haryoshye itangirira mu guhitamo neza uyu munsi."</p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-10 relative z-10">
              <Link to="/register" className="w-full sm:w-auto px-12 py-6 bg-green-500 text-white rounded-[1.5rem] font-black text-xl hover:bg-green-400 hover:scale-105 transition-all shadow-2xl">Kwiyandikisha</Link>
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-3xl border border-white/10 text-white rounded-[1.5rem] font-black text-xl hover:bg-white/10 transition-all">Twandikire</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
