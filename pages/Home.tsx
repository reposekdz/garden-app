
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
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/40 to-transparent flex items-center">
            <div className="w-full px-4 sm:px-12 lg:px-20 relative pt-20">
              <div className="max-w-5xl space-y-6 sm:space-y-10">
                <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-500/10 backdrop-blur-xl border border-green-500/20 rounded-full text-green-400 text-[10px] font-black uppercase tracking-widest animate-in fade-in slide-in-from-left-8 duration-1000">
                   <Zap size={14} />
                   <span>Now Accepting 2024 Enrollments</span>
                </div>
                <h1 className="text-4xl sm:text-7xl lg:text-[8.5rem] font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                <p className="text-lg sm:text-2xl text-white/70 max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
                  <Link to="/register" className="px-10 py-5 bg-green-500 text-white rounded-[1.5rem] font-black text-xl shadow-2xl hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4">
                    <span>Kwiyandikisha</span>
                    <Rocket size={22} />
                  </Link>
                  <button className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[1.5rem] font-black text-xl transition-all hover:bg-white/20">
                    Sura Ishuri
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile-Responsive Bottom Nav Icons */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center sm:justify-end px-6 sm:px-20 gap-4 sm:gap-6">
          {slides.map((slide, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)}
              className={`flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[2rem] border transition-all duration-500 ${
                i === current 
                ? 'bg-green-500 border-green-400 text-white shadow-[0_0_50px_rgba(34,197,94,0.4)] scale-110' 
                : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
              }`}
            >
              <slide.icon size={24} className="sm:size-32" />
            </button>
          ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  // Handle URL search query if any
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

      {/* Interactive Search Results Section (only visible if searching) */}
      {searchQuery && (
        <section id="search-results" className="py-20 px-6 bg-white border-b border-gray-100">
           <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex justify-between items-end">
                <div className="space-y-4">
                   <h2 className="text-4xl font-black tracking-tighter">Results for <span className="text-green-500">"{searchQuery}"</span></h2>
                   <p className="text-gray-500 font-medium">Found {filteredTrades.length} matches in our trades and courses.</p>
                </div>
                <button onClick={() => setSearchQuery('')} className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-red-500 transition-colors">Clear Results</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              {filteredTrades.length === 0 && (
                <div className="py-20 text-center space-y-4">
                  <SearchIcon size={64} className="mx-auto text-gray-200" />
                  <p className="text-xl text-gray-400 font-bold tracking-tight">Tanga amakuru arambye, nta kintu cyabonetse.</p>
                </div>
              )}
           </div>
        </section>
      )}

      {/* Trust & Stats Section */}
      <section className="bg-gray-950 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 w-full lg:w-auto">
             {[
               { val: '20+', label: 'Imyaka Tumaranye' },
               { val: '1500+', label: 'Abanyeshuri' },
               { val: '98%', label: 'Guhabwa Akazi' },
               { val: '50+', label: 'Abafatanyabikorwa' }
             ].map((s, i) => (
               <div key={i} className="text-center space-y-2">
                 <p className="text-3xl sm:text-5xl font-black gradient-text">{s.val}</p>
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{s.label}</p>
               </div>
             ))}
          </div>
          <p className="text-gray-400 text-sm sm:text-base font-medium max-w-lg leading-relaxed text-center lg:text-right">
            Dufatanya n'ibigo nka RTB, MINEDUC, n'andi mashirahamwe mpuzamahanga kugira ngo duhe abanyeshuri bacu ubumenyi bukenewe ku isoko ry'umurimo.
          </p>
        </div>
      </section>

      {/* School News & Events (NEW FEATURE) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-16">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-6 border-b border-gray-100 pb-10">
               <div className="space-y-4">
                  <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">New Updates</div>
                  <h2 className="text-5xl font-black tracking-tighter">Campus News & <span className="text-blue-600">Events.</span></h2>
               </div>
               <button className="flex items-center space-x-2 text-blue-600 font-black text-xs uppercase tracking-widest group">
                  <span>View All News</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               {[
                 { date: 'June 12, 2024', title: 'Garden TVET Graduation Ceremony', icon: Trophy, color: 'text-orange-500', bg: 'bg-orange-50' },
                 { date: 'June 15, 2024', title: 'Modern Workshop Opening', icon: Hammer, color: 'text-green-500', bg: 'bg-green-50' },
                 { date: 'July 01, 2024', title: 'New Semester Intake Begins', icon: Newspaper, color: 'text-blue-500', bg: 'bg-blue-50' }
               ].map((news, i) => (
                 <div key={i} className="group p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all cursor-pointer space-y-6">
                    <div className={`w-14 h-14 ${news.bg} ${news.color} rounded-2xl flex items-center justify-center`}><news.icon size={24} /></div>
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center space-x-2">
                          <Calendar size={12} />
                          <span>{news.date}</span>
                       </p>
                       <h3 className="text-xl font-black tracking-tight leading-tight group-hover:text-blue-600 transition-colors">{news.title}</h3>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* The Garden TVET Philosophy (Long Content) */}
      <section className="py-24 lg:py-48 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Inzira y'Ubukire</div>
                  <h2 className="text-5xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9]">Uburezi Bufite <br /><span className="text-green-500">Intego Nyakuri.</span></h2>
               </div>
               <div className="space-y-10 text-xl sm:text-2xl text-gray-500 font-medium leading-relaxed italic">
                  <p>
                    Kuri Garden TVET, ntabwo twigisha gusa; twubaka abayobozi b'ejo hazaza. Uburezi bwacu bwubakiye ku nkingi eshatu z'ingenzi: Ubumenyi ngiro (Skills), Ikinyabupfura (Discipline), no guhanga udushya (Innovation).
                  </p>
                  <p>
                    Urugendo rw'umunyeshuri muri Garden TVET rutangira hamwe no kuvumbura impano, rugakomeza mu ma-Workshop agezweho, rukarangira ashyira mu bikorwa ibyo yize mu nganda zikomeye mu Rwanda.
                  </p>
               </div>
               <button className="px-12 py-6 bg-gray-900 text-white rounded-[2rem] font-black text-lg shadow-2xl hover:bg-green-500 transition-all">Soma Amateka yacu</button>
            </div>
            <div className="grid grid-cols-2 gap-6 h-[600px]">
               <div className="space-y-6">
                  <div className="h-2/3 bg-gray-100 rounded-[3rem] overflow-hidden group shadow-xl">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="lab" />
                  </div>
                  <div className="h-1/3 bg-green-500 rounded-[3rem] p-10 text-white flex flex-col justify-center shadow-2xl">
                    <p className="text-4xl font-black">100%</p>
                    <p className="text-[10px] font-black uppercase tracking-widest mt-2">Practical Focus</p>
                  </div>
               </div>
               <div className="space-y-6 pt-12">
                  <div className="h-1/3 bg-gray-900 rounded-[3rem] p-10 text-white flex flex-col justify-center shadow-2xl">
                    <TrendingUp size={40} className="text-green-500 mb-4" />
                    <p className="text-sm font-medium">Uku niko abanyeshuri bacu bazamura ubumenyi.</p>
                  </div>
                  <div className="h-2/3 bg-gray-100 rounded-[3rem] overflow-hidden group shadow-xl">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="construction" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Exploration - Shortened Descriptions */}
      <section id="trades-section" className="w-full px-6 lg:px-20 py-20 lg:py-40 bg-white">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 lg:mb-32 gap-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Explore Amashami Yacu</div>
            <h2 className="text-5xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9]">Umwuga Uhindura <br /><span className="text-green-500">Imibereho.</span></h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-400 font-medium max-w-xl italic">"Hitamo neza uyu munsi kugira ngo wubake ubumenyi buzaguhesha agaciro."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TRADES.map((trade) => (
            <div key={trade.id} onClick={() => navigate(`/trades/${trade.id}`)} className="group relative bg-white rounded-[4rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-100">
              <div className="h-[30rem] overflow-hidden relative">
                <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end group-hover:opacity-0 transition-all duration-500">
                    <h3 className="text-4xl font-black text-white leading-tight tracking-tighter">{trade.name}</h3>
                </div>
                <div className="absolute inset-0 p-10 bg-gray-950/95 backdrop-blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center text-white space-y-8">
                    <div className="flex items-center space-x-4"><div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center"><Award size={24} /></div><h4 className="text-2xl font-black tracking-tight">RTB Certified</h4></div>
                    <p className="text-base text-white/70 font-bold leading-relaxed line-clamp-2">Master {trade.name} with modern tools and expert instructors.</p>
                    <button className="w-full py-5 bg-white text-gray-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">Sura Umwuga</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Feature Cards (3D Lift) */}
      <section className="py-32 lg:py-48 px-6 bg-gray-50">
         <div className="max-w-7xl mx-auto space-y-24">
            <div className="text-center space-y-4">
              <h3 className="text-5xl lg:text-7xl font-black tracking-tighter">Kuki duhitamo <span className="text-green-500">Garden TVET?</span></h3>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">Dufite ibintu bidasanzwe bitandukanya ishuri ryacu n'ayandi mu karere.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { title: "Ikoranabuhanga rya Kijyambere", desc: "Laboratwari zacu zuzuyemo imashini n'ibikoresho bigezweho bihuje n'inganda zikomeye mu Burayi na Amerika.", icon: Cpu, color: "text-blue-500", bg: "bg-blue-50" },
                 { title: "Umutekano w'Umunyeshuri", desc: "Ku ishuri, umunyeshuri aba afite umutekano usesuye n'ubufasha mu buzima bwa buri munsi kugira ngo yige atuje.", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-50" },
                 { title: "Umuco n'Imyidagaduro", desc: "Twubaka umunyeshuri wuzuye binyuze mu mikino, umuco, n'ibindi birori bimufasha kuruhuka no kwagura intekerezo.", icon: Activity, color: "text-purple-500", bg: "bg-purple-50" },
                 { title: "Gufashwa mu Akazi", desc: "Dufite ishami ryihariye rifasha abanyeshuri bacu kubona aho bimenyereza umurimo no kubona akazi vuba basoje.", icon: Briefcase, color: "text-orange-500", bg: "bg-orange-50" },
                 { title: "Abarimu b'Impuguke", desc: "Abarimu bacu n'impuguke zifite inararibonye (Experts) ziva mu nganda kugira ngo zigishe ibigezweho.", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50" },
                 { title: "Gahunda y'Amasomo", desc: "Inyigisho zacu zateguwe na RTB, zongerwamo ubumenyi mpuzamahanga butuma umunyeshuri yisanga hose.", icon: BookOpen, color: "text-red-500", bg: "bg-red-50" }
               ].map((f, i) => (
                 <div key={i} className="group bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-700 cursor-default relative overflow-hidden">
                    <div className={`w-20 h-20 ${f.bg} ${f.color} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                       <f.icon size={36} />
                    </div>
                    <h4 className="text-2xl font-black text-gray-950 mb-6 tracking-tight">{f.title}</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
