
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
    <div className="relative min-h-[700px] h-[100svh] w-full overflow-hidden bg-white">
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

          {/* 2x2 Responsive Navigation Grid - Optimized for Vertical Clearance */}
          <div className="grid grid-cols-2 gap-3 xs:gap-4 lg:gap-6 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[320px] lg:max-w-none lg:w-auto animate-in fade-in slide-in-from-bottom-8 lg:slide-in-from-right-12 duration-1000 delay-200 mt-auto lg:mt-0 mb-8 lg:mb-0">
             {slides.map((slide, i) => (
               <button 
                 key={i} 
                 onClick={() => navigate(`/trades/${slide.id}`)}
                 onMouseEnter={() => setCurrent(i)}
                 className={`group relative aspect-[3/4] w-20 xs:w-24 sm:w-32 md:w-40 lg:w-44 xl:w-56 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden border-2 lg:border-4 transition-all duration-700 shadow-2xl ${
                   i === current 
                   ? 'border-green-600 scale-105 shadow-green-600/30' 
                   : 'border-white/40 opacity-60 hover:opacity-100 hover:scale-105'
                 }`}
               >
                 <img src={slide.tradeImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2 sm:p-4 lg:p-6 space-y-1 lg:space-y-2">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center text-white shadow-xl ${slide.color} group-hover:rotate-6 transition-all`}>
                       <slide.icon className="w-3 sm:w-5 lg:w-6" />
                    </div>
                    <p className="text-[6px] sm:text-[8px] lg:text-[10px] font-black text-white uppercase tracking-widest leading-none truncate">{slide.id}</p>
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

      {/* Trust & Stats Section */}
      <section className="bg-white py-12 sm:py-20 lg:py-32 border-y border-gray-100">
        <div className="container-fluid flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 lg:gap-20 w-full lg:w-auto flex-1 order-2 lg:order-1">
             {[
               { val: '20+', label: 'Imyaka Tumaranye' },
               { val: '1.5k+', label: 'Abanyeshuri Bacu' },
               { val: '98%', label: 'Guhabwa Akazi' },
               { val: '50+', label: 'Abafatanyabikorwa' }
             ].map((s, i) => (
               <div key={i} className="text-center lg:text-left space-y-1 sm:space-y-3 p-4 bg-gray-50 lg:bg-transparent rounded-2xl border border-gray-100 lg:border-none shadow-sm lg:shadow-none">
                 <p className="text-3xl sm:text-5xl lg:text-7xl font-black gradient-text tracking-tighter leading-none">{s.val}</p>
                 <p className="text-[8px] sm:text-[10px] lg:text-[13px] font-black text-gray-400 uppercase tracking-widest leading-tight">{s.label}</p>
               </div>
             ))}
          </div>
          <div className="max-w-xl space-y-4 text-center lg:text-right order-1 lg:order-2 px-4">
             <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-2">Our impact</div>
             <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter leading-tight">Ubumenyi Buhuye <br className="hidden sm:block" /><span className="text-green-600">n'Isoko ry'Umurimo.</span></h2>
             <p className="text-sm sm:text-lg text-gray-500 font-medium leading-relaxed italic opacity-80">
               "Twubaka ubushobozi bw'abanyeshuri bacu binyuze mu nyigisho zifatika zishingiye ku bikorwa (CBT)."
             </p>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="container-fluid">
           <div className="flex justify-between items-end mb-12">
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Campus Highlights</p>
                 <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">Amakuru <span className="text-green-600">Mashya.</span></h2>
              </div>
              <button className="hidden sm:flex items-center space-x-2 text-sm font-black text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">
                 <span>Byose</span>
                 <ArrowUpRight size={16} />
              </button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CAMPUS_NEWS.map((news) => (
                <div key={news.id} className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all overflow-hidden">
                   <div className="h-64 overflow-hidden relative">
                      <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                      <div className="absolute top-6 right-6 px-4 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-gray-900">{news.tag}</div>
                   </div>
                   <div className="p-8 space-y-4">
                      <div className="flex items-center space-x-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                         <Calendar size={12} />
                         <span>{news.date}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-950 leading-tight group-hover:text-green-600 transition-colors">{news.title}</h3>
                      <button className="flex items-center space-x-2 text-xs font-black text-blue-600 uppercase tracking-widest">
                         <span>Soma Byose</span>
                         <ChevronRight size={14} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Trades Exploration */}
      <section id="trades-section" className="py-16 sm:py-24 lg:py-40 bg-gray-50/50">
        <div className="container-fluid">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 lg:mb-24 gap-8">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block px-5 py-2 bg-blue-50 text-blue-600 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] rounded-full">Shakisha Amashami Yacu</div>
              <h2 className="text-3xl sm:text-6xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[1.1] lg:leading-[0.85]">Imyuga Ihindura <br /><span className="text-green-600">Ubuzima.</span></h2>
            </div>
            <p className="hidden md:block text-base lg:text-2xl text-gray-400 font-medium max-w-xl lg:text-right italic">"Hitamo umwuga ujyanye n'impano yawe uyu munsi kugira ngo wubake ejo hazaza heza hashoboka."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
            {TRADES.map((trade) => (
              <div 
                key={trade.id} 
                onClick={() => navigate(`/trades/${trade.id}`)} 
                className="group relative bg-white rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-xl hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] transition-all duration-700 cursor-pointer border border-white"
              >
                <div className="aspect-[4/5] sm:h-[500px] lg:h-[650px] overflow-hidden relative">
                  <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent lg:from-white/95 lg:via-white/10 lg:to-transparent"></div>
                  
                  {/* Default View */}
                  <div className="absolute inset-0 p-6 sm:p-12 flex flex-col justify-end lg:group-hover:opacity-0 transition-all duration-500">
                      <div className="space-y-2 sm:space-y-4">
                         <div className="flex items-center space-x-2">
                            <div className="px-3 py-1 bg-green-500 text-white lg:bg-green-100 lg:text-green-700 text-[8px] sm:text-[9px] font-black uppercase rounded-full tracking-widest">{trade.code}</div>
                            <div className="px-3 py-1 bg-blue-500 text-white lg:bg-blue-100 lg:text-blue-700 text-[8px] sm:text-[9px] font-black uppercase rounded-full tracking-widest">Level 5</div>
                         </div>
                         <h3 className="text-2xl sm:text-4xl font-black text-white lg:text-gray-900 leading-none tracking-tighter">{trade.name}</h3>
                         <p className="text-white/80 lg:text-gray-500 font-medium line-clamp-2 text-xs sm:text-sm">{trade.description}</p>
                      </div>
                  </div>

                  {/* Desktop Hover View */}
                  <div className="hidden lg:flex absolute inset-0 p-12 bg-white/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 flex-col justify-center space-y-8">
                      <div className="flex items-center space-x-6">
                        <div className="w-20 h-20 bg-green-600 rounded-[1.8rem] flex items-center justify-center text-white shadow-2xl"><Award size={40} /></div>
                        <div>
                           <h4 className="text-3xl font-black tracking-tight text-gray-900">RTB Certified</h4>
                           <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Verified Academic Standard</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                         <p className="text-lg text-gray-600 font-bold leading-relaxed">Wiga gukoresha ibikoresho bigezweho bihuje n'isoko ry'umurimo rya none mu buryo bw'umwuga.</p>
                         <div className="grid grid-cols-2 gap-4">
                            {trade.coreModules.slice(0, 4).map((m, i) => (
                               <div key={i} className="flex items-center space-x-2 text-xs font-bold text-gray-500">
                                  <CheckCircle2 size={16} className="text-green-500" />
                                  <span className="truncate">{m}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                      <button className="w-full py-6 bg-gray-950 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">Sura Umwuga</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses Section */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="container-fluid">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20">
              <div className="space-y-6">
                 <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.5em]">Fast-Track Skills</p>
                 <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">Amasomo <br /><span className="text-blue-600">Amagufi.</span></h2>
              </div>
              <div className="max-w-xl space-y-4">
                 <p className="text-xl text-gray-500 font-medium leading-relaxed">"Ubumenyi bwihuse ku bantu bashaka guhita binjira mu isoko ry'umurimo cyangwa kwihangira imirimo."</p>
                 <button className="px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all">Saba Itariki ya Vuba</button>
              </div>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {SHORT_COURSES.map((course) => (
                <div key={course.id} className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all space-y-8 group">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                      {course.icon === 'Shield' && <Shield size={32} />}
                      {course.icon === 'Zap' && <Zap size={32} />}
                      {course.icon === 'Image' && <Image size={32} />}
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-black tracking-tight">{course.name}</h3>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{course.duration} • {course.price}</p>
                   </div>
                   <button className="w-full py-4 border-2 border-gray-200 rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:border-blue-600 group-hover:text-blue-600 transition-all">Enroll Now</button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Partner Ecosystem */}
      <section className="py-20 bg-gray-50">
        <div className="container-fluid text-center space-y-12">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Global Recognition</p>
           <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center space-x-3 text-3xl font-black text-gray-900 tracking-tighter">
                <Globe size={40} />
                <span>RTB Rwanda</span>
              </div>
              <div className="text-3xl font-black text-gray-900 tracking-tighter">UNESCO-UNEVOC</div>
              <div className="text-3xl font-black text-gray-900 tracking-tighter">WDA</div>
              <div className="text-3xl font-black text-gray-900 tracking-tighter">Rwanda Polytechnic</div>
           </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 sm:py-32 lg:py-48 bg-white relative overflow-hidden">
         <div className="container-fluid flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
            <div className="flex-1 space-y-8 lg:space-y-12 text-center lg:text-left px-4">
               <div className="space-y-4 sm:space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] rounded-full">Inzira y'Iterambere</div>
                  <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[1.1] lg:leading-[0.85]">Ejo Hazaza Hawe <br /><span className="text-green-600">Hatangiye.</span></h2>
               </div>
               <p className="text-base sm:text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl italic mx-auto lg:mx-0 px-4 sm:px-0">
                 "Uburezi bufite intego niryo shingiro ry'impinduka mu muryango. Garden TVET iguha imfunguzo zo gufungura imiryango y'ubushobozi bwawe."
               </p>
               <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-12 pt-4">
                  <div className="text-center sm:text-left space-y-1">
                     <p className="text-4xl sm:text-5xl font-black text-gray-900">100%</p>
                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Inyigisho Zifatika</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center sm:text-left space-y-1">
                     <p className="text-4xl sm:text-5xl font-black text-gray-900">2024</p>
                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Imyaka y'Ikizere</p>
                  </div>
               </div>
            </div>
            <div className="w-full max-w-[450px] lg:w-[600px] aspect-square rounded-[3rem] sm:rounded-[5rem] overflow-hidden shadow-2xl relative rotate-1 hover:rotate-0 transition-all duration-1000 mx-auto">
               <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" className="w-full h-full object-cover" alt="Graduation" />
               <div className="absolute inset-0 bg-gradient-to-t from-green-600/70 via-transparent to-transparent flex items-end p-8 sm:p-16">
                  <div className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl flex items-center space-x-4 sm:space-x-6 w-full animate-fade-in-up">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shrink-0"><Activity size={24} /></div>
                     <div>
                        <p className="text-lg sm:text-xl font-black text-gray-900 leading-tight">Active Campus</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Innovation Hub</p>
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
