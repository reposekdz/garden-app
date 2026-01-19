
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, Zap, Users, Trophy, BookOpen, Quote, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, ShieldCheck, Target,
  Award, TrendingUp, Shield, Rocket, MapPin, ChevronRight, Activity, Code, HardHat,
  Briefcase, Search as SearchIcon, Calendar, Clock, Newspaper
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import { TRADES } from '../constants';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      id: 'sod',
      title: "Ikoranabuhanga ku Ejo Hazaza",
      subtitle: "Injira mu mwuga wo gukora porogaramu uhindure isi ukoresheje code.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
      icon: Code
    },
    {
      id: 'bdc',
      title: "Ubwubatsi bwa Kijyambere",
      subtitle: "Yubaka ejo hazaza heza wiga imyuga y'ubwubatsi bugezweho.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      icon: HardHat
    },
    {
      id: 'auto',
      title: "Ikinyabiziga na Moteri",
      subtitle: "Sana kandi uhange udushya mu binyabiziga n'amashanyarazi.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop",
      icon: Car
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-gray-950">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/40 to-transparent flex items-center">
            <div className="w-full px-4 sm:px-12 lg:px-20 xl:px-32 relative pt-10 sm:pt-20">
              <div className="max-w-7xl space-y-4 sm:space-y-10">
                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-500/10 backdrop-blur-xl border border-green-500/20 rounded-full text-green-400 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-left-8 duration-1000">
                   <Zap size={14} />
                   <span>Now Accepting 2024 Enrollments</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-[7rem] font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                <p className="text-sm sm:text-2xl text-white/70 max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
                  <Link to="/register" className="px-6 sm:px-10 py-3 sm:py-5 bg-green-500 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black text-sm sm:text-xl shadow-2xl hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-2 sm:space-x-4">
                    <span>Kwiyandikisha</span>
                    <Rocket size={20} />
                  </Link>
                  <button className="px-6 sm:px-10 py-3 sm:py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[1.2rem] sm:rounded-[1.5rem] font-black text-sm sm:text-xl transition-all hover:bg-white/20">
                    Sura Ishuri
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-20 flex justify-center sm:justify-end px-4 sm:px-20 xl:px-32 gap-3 sm:gap-6">
          {slides.map((slide, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-[2rem] border transition-all duration-500 ${
                i === current 
                ? 'bg-green-500 border-green-400 text-white shadow-[0_0_50px_rgba(34,197,94,0.4)] scale-110' 
                : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
              }`}
            >
              <slide.icon size={20} className="sm:size-10" />
            </button>
          ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      setSearchQuery(q);
      const searchSection = document.getElementById('search-results');
      if (searchSection) searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.search]);

  const filteredTrades = useMemo(() => {
    if (!searchQuery) return [];
    return TRADES.filter(t => 
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      <HeroSlider />

      {searchQuery && (
        <section id="search-results" className="py-20 px-6 bg-white border-b border-gray-100">
           <div className="max-w-[1600px] mx-auto space-y-12">
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                   <h2 className="text-4xl font-black tracking-tighter">Results for <span className="text-green-500">"{searchQuery}"</span></h2>
                   <p className="text-gray-500 font-medium">Found {filteredTrades.length} matches in our trades and courses.</p>
                </div>
                <button onClick={() => setSearchQuery('')} className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">Clear Results</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredTrades.map(trade => (
                  <div key={trade.id} onClick={() => navigate(`/trades/${trade.id}`)} className="group bg-gray-50 p-8 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between">
                     <div className="space-y-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm"><SearchIcon size={20} /></div>
                        <h3 className="text-2xl font-black tracking-tighter">{trade.name}</h3>
                        <p className="text-sm text-gray-500 font-medium line-clamp-2">{trade.description}</p>
                     </div>
                     <div className="mt-6 flex items-center text-green-600 font-black text-xs uppercase tracking-widest space-x-2">
                        <span>View Details</span>
                        <ChevronRight size={16} />
                     </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      )}

      <section className="bg-gray-950 py-24 px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full lg:w-auto flex-1">
             {[
               { val: '20+', label: 'Imyaka Tumaranye' },
               { val: '1500+', label: 'Abanyeshuri' },
               { val: '98%', label: 'Guhabwa Akazi' },
               { val: '50+', label: 'Abafatanyabikorwa' }
             ].map((s, i) => (
               <div key={i} className="text-center lg:text-left space-y-2">
                 <p className="text-4xl sm:text-6xl font-black gradient-text">{s.val}</p>
                 <p className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em]">{s.label}</p>
               </div>
             ))}
          </div>
          <p className="text-gray-400 text-lg sm:text-xl font-medium max-w-xl leading-relaxed text-center lg:text-right flex-1">
            Dufatanya n'ibigo nka RTB, MINEDUC, n'andi mashirahamwe mpuzamahanga kugira ngo duhe abanyeshuri bacu ubumenyi bukenewe ku isoko ry'umurimo.
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 xl:px-32 bg-white">
         <div className="max-w-[1600px] mx-auto space-y-20">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-10 border-b border-gray-100 pb-16">
               <div className="space-y-6">
                  <div className="inline-block px-5 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] rounded-full">New Updates</div>
                  <h2 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter leading-none">Amakuru & <br /><span className="text-blue-600">Ibirori.</span></h2>
               </div>
               <button className="flex items-center space-x-4 text-blue-600 font-black text-sm uppercase tracking-widest group px-8 py-4 bg-blue-50/50 rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                  <span>View All News</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { date: 'June 12, 2024', title: 'Garden TVET Graduation Ceremony', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070', category: 'Events' },
                 { date: 'June 15, 2024', title: 'Modern Workshop Opening with RTB', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070', category: 'Innovation' },
                 { date: 'July 01, 2024', title: 'New Semester Intake: Apply Now!', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070', category: 'Admission' }
               ].map((news, i) => (
                 <div key={i} className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 h-[600px] cursor-pointer">
                    <img src={news.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                    <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-6">
                       <span className="inline-block self-start px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-full">{news.category}</span>
                       <div className="space-y-4">
                          <p className="text-white/60 text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                             <Calendar size={14} />
                             <span>{news.date}</span>
                          </p>
                          <h3 className="text-3xl font-black text-white tracking-tighter leading-tight group-hover:text-green-400 transition-colors">{news.title}</h3>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 sm:py-48 bg-gray-50 px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="max-w-[1600px] mx-auto space-y-32">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Inzira y'Ubukire</div>
                  <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-black text-gray-950 tracking-tighter leading-[0.85]">Uburezi Bufite <br /><span className="text-green-500">Intego Nyakuri.</span></h2>
               </div>
               <div className="space-y-10 text-xl sm:text-2xl lg:text-3xl text-gray-500 font-medium leading-relaxed italic">
                  <p>
                    Kuri Garden TVET, ntabwo twigisha gusa; twubaka abayobozi b'ejo hazaza. Uburezi bwacu bwubakiye ku nkingi eshatu z'ingenzi: Ubumenyi ngiro (Skills), Ikinyabupfura (Discipline), no guhanga udushya (Innovation).
                  </p>
               </div>
               <button className="px-12 py-8 bg-gray-900 text-white rounded-[2rem] font-black text-xl shadow-2xl hover:bg-green-500 transition-all">Soma Amateka yacu</button>
            </div>
            <div className="grid grid-cols-2 gap-8 h-[800px]">
               <div className="space-y-8">
                  <div className="h-2/3 bg-gray-100 rounded-[4rem] overflow-hidden group shadow-2xl border border-white">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="lab" />
                  </div>
                  <div className="h-1/3 bg-green-500 rounded-[4rem] p-12 text-white flex flex-col justify-center shadow-[0_40px_100px_-20px_rgba(34,197,94,0.4)]">
                    <p className="text-6xl font-black">100%</p>
                    <p className="text-[12px] font-black uppercase tracking-[0.3em] mt-4">Practical Focus</p>
                  </div>
               </div>
               <div className="space-y-8 pt-20">
                  <div className="h-1/3 bg-gray-900 rounded-[4rem] p-12 text-white flex flex-col justify-center shadow-2xl border border-white/10">
                    <TrendingUp size={60} className="text-green-500 mb-6" />
                    <p className="text-lg font-medium leading-relaxed">Inzira isobanutse yo kuzamura ubumenyi bw'umunyeshuri bacu.</p>
                  </div>
                  <div className="h-2/3 bg-gray-100 rounded-[4rem] overflow-hidden group shadow-2xl border border-white">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt="construction" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trades-section" className="w-full px-6 sm:px-12 lg:px-20 xl:px-32 py-32 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Explore Amashami Yacu</div>
              <h2 className="text-6xl sm:text-7xl lg:text-9xl font-black text-gray-950 tracking-tighter leading-[0.8]">Umwuga Uhindura <br /><span className="text-green-500">Imibereho.</span></h2>
            </div>
            <p className="text-2xl lg:text-3xl text-gray-400 font-medium max-w-xl italic text-right">"Hitamo neza uyu munsi kugira ngo wubake ubumenyi buzaguhesha agaciro."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TRADES.map((trade) => (
              <div key={trade.id} onClick={() => navigate(`/trades/${trade.id}`)} className="group relative bg-white rounded-[5rem] overflow-hidden shadow-sm hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] transition-all duration-1000 cursor-pointer border border-gray-100">
                <div className="h-[700px] overflow-hidden relative">
                  <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-end group-hover:opacity-0 transition-all duration-500">
                      <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">{trade.name}</h3>
                  </div>
                  <div className="absolute inset-0 p-16 bg-gray-950/95 backdrop-blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-center text-white space-y-10">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-green-500 rounded-[1.5rem] flex items-center justify-center shadow-2xl"><Award size={32} /></div>
                        <h4 className="text-3xl font-black tracking-tight">RTB Certified</h4>
                      </div>
                      <p className="text-xl text-white/70 font-bold leading-relaxed">Wiga gukoresha ibikoresho bigezweho bihuje n'isoko ry'umurimo rya none.</p>
                      <button className="w-full py-6 bg-white text-gray-950 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">Sura Umwuga</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
