
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Users, Trophy, BookOpen, 
  Quote, Calendar, Newspaper, MapPin, CheckCircle, ExternalLink, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, Shield, Star, Rocket,
  MessageSquare, StarHalf, Music, Camera, Award, HardHat, TrendingUp, Info, ShieldCheck, Target
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
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/20 to-transparent flex items-center">
            <div className="w-full px-6 sm:px-12 lg:px-20 relative pt-12 sm:pt-20">
              <div className="max-w-5xl space-y-6 sm:space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-[7.5rem] xl:text-[9rem] font-black text-white drop-shadow-2xl leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/70 drop-shadow-md max-w-3xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
                  <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-green-500 text-white rounded-[1.5rem] font-black text-xl shadow-[0_20px_50px_rgba(34,197,94,0.3)] hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4 group">
                    <span>Kwiyandikisha</span>
                    <Rocket size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-[30px] border border-white/20 hover:bg-white/20 text-white rounded-[1.5rem] font-black text-xl transition-all flex items-center justify-center space-x-4">
                    <PlayCircle size={24} />
                    <span>Ubumenyi Ngiro</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 right-12 flex items-center space-x-6 z-10">
          <div className="flex space-x-3">
             {slides.map((_, i) => (
               <button key={i} onClick={() => setCurrent(i)} className={`h-2 transition-all duration-700 rounded-full ${i === current ? 'w-16 bg-green-500' : 'w-4 bg-white/30'}`} />
             ))}
          </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="w-full space-y-0 pb-0 bg-gray-50 overflow-x-hidden">
      <HeroSlider />

      {/* Trust Bar */}
      <div className="bg-gray-950 py-16 w-full">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between items-center gap-12 opacity-30 hover:opacity-100 transition-opacity duration-1000">
           <span className="text-white font-black text-2xl lg:text-4xl tracking-tighter">MINEDUC</span>
           <span className="text-white font-black text-2xl lg:text-4xl tracking-tighter">RTB BOARD</span>
           <span className="text-white font-black text-2xl lg:text-4xl tracking-tighter uppercase italic">SDC Swiss</span>
           <span className="text-white font-black text-2xl lg:text-4xl tracking-tighter">GIZ COLLAB</span>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="max-w-[1400px] mx-auto px-6 py-24 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { title: "Syllabus Mpuzamahanga", desc: "Inyigisho zacu zihuje n'amasoko y'umurimo hanze y'u Rwanda.", icon: Globe, color: "bg-blue-500" },
             { title: "Workshop Zigezweho", desc: "Ibikoresho bihagije kandi bigezweho kuri buri mwuga.", icon: Hammer, color: "bg-orange-500" },
             { title: "Abarimu b'Impuguke", desc: "Abarimu bafite ubumenyi n'ikinyabupfura mu kazi.", icon: Users, color: "bg-green-500" },
             { title: "Guhabwa Akazi", desc: "Dufasha abanyeshuri bacu kubona internship n'akazi vuba.", icon: TrendingUp, color: "bg-purple-500" },
           ].map((feat, i) => (
             <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all group relative overflow-hidden">
                <div className={`w-16 h-16 ${feat.color} rounded-[1.5rem] flex items-center justify-center text-white mb-10 shadow-xl group-hover:scale-110 transition-transform`}>
                   <feat.icon size={30} />
                </div>
                <h4 className="text-2xl font-black text-gray-950 tracking-tight mb-4">{feat.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Long-Form Context: Why Garden TVET? */}
      <section className="bg-white py-24 lg:py-48 w-full">
         <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Inzira y'Ubumenyi</div>
                  <h2 className="text-5xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9]">Kwinjira mu rugendo <br /><span className="text-green-500">rw'ahazaza.</span></h2>
               </div>
               
               <div className="space-y-8 text-xl text-gray-500 font-medium leading-relaxed italic">
                  <p>
                    Garden TVET School ntabwo ari ishuri gusa; ni ikigo cy'indashyikirwa cyashinzwe hagamijwe gufasha urubyiruko rw'u Rwanda n'akarere guhangana n'ibibazo by'amasoko y'umurimo mu buryo bugezweho.
                  </p>
                  <p>
                    Urugendo rwacu rwatangiye dufite icyerekezo cyo guhuza ubumenyi bw'ishuri n'ibikenewe mu nganda n'abashoramari. Twubaka ubumenyi ngiro buherekejwe n'ikinyabupfura (Discipline), udushya (Innovation), n'ubushobozi bwo gukorera mu matsinda.
                  </p>
                  <p>
                    Muri buri shami, umunyeshuri ahabwa umwanya uhagije mu mu ma-Workshop agezweho, aho akorana n'impuguke (Instructors) zifite ubumenyi buhambaye n'imyaka myinshi mu kazi. Ibi bituma asoza amasomo ye atari umuntu ufite impamyabumenyi gusa, ahubwo ari umuntu ufite igisubizo ku bibazo by'inganda.
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="p-8 bg-gray-50 rounded-[3rem] space-y-4 border border-gray-100">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm"><ShieldCheck size={24} /></div>
                     <h5 className="text-xl font-black text-gray-950">Certification</h5>
                     <p className="text-sm text-gray-400 font-medium">Buri munyeshuri uhasoje ahabwa Certificat n'Impamyabumenyi (Diploma) zemewe na RTB mu Rwanda.</p>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-[3rem] space-y-4 border border-gray-100">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><Target size={24} /></div>
                     <h5 className="text-xl font-black text-gray-950">Partnerships</h5>
                     <p className="text-sm text-gray-400 font-medium">Dufatanya n'inganda zirenga 50 mu Rwanda no mu mahanga mu rwego rwo gufasha abanyeshuri kubona internship.</p>
                  </div>
               </div>
            </div>

            <div className="relative">
               <div className="aspect-[4/5] rounded-[5rem] overflow-hidden shadow-2xl relative group">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="workshop" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent flex items-end p-16">
                     <div className="space-y-4 text-white">
                        <h4 className="text-3xl font-black tracking-tight">Our Modern Lab</h4>
                        <p className="text-white/70 font-medium">Aho abanyeshuri bazamura ubumenyi bwabo buri munsi.</p>
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-500 rounded-[3rem] p-10 text-white flex flex-col justify-center animate-bounce-slow shadow-2xl z-10">
                  <p className="text-5xl font-black">98%</p>
                  <p className="text-xs font-black uppercase tracking-widest mt-2">Success Rate</p>
               </div>
            </div>
         </div>
      </section>

      {/* Trades Exploration */}
      <section id="trades-section" className="w-full px-6 lg:px-20 py-20 lg:py-40">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 lg:mb-32 gap-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Explore Amashami Yacu</div>
            <h2 className="text-5xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.9]">Umwuga Uhindura <br /><span className="text-green-500">Imibereho.</span></h2>
          </div>
          <p className="text-xl lg:text-2xl text-gray-400 font-medium max-w-xl italic">"Hitamo neza uyu munsi kugira ngo wubake ubumenyi buzaguhesha agaciro n'iterambere rirambye."</p>
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
                    <p className="text-lg text-white/70 font-medium leading-relaxed line-clamp-3">{trade.description}</p>
                    <button className="w-full py-5 bg-white text-gray-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">Sura Umwuga</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-32 lg:py-48 w-full px-6 lg:px-20 overflow-hidden">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Ijwi rya Garden TVET</div>
          <h2 className="text-5xl lg:text-7xl font-black text-gray-950 tracking-tighter">Ibyo ababyeyi n'abanyeshuri bavuga</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { name: "Mukamana Solange", role: "Umubyeyi", text: "Umwana wanjye yize SOD ubu arishura ishuri rye akoresheje gukora porogaramu. Garden TVET ni ishuri ridasanzwe.", avatar: "https://i.pravatar.cc/150?u=solange" },
            { name: "Habimana Jean Paul", role: "Umunyeshuri (Level 5)", text: "Uburyo bwigishwa muri iri shuri butuma umunyeshuri asohoka azi akazi neza. Nakuye hano ubumenyi butangaje.", avatar: "https://i.pravatar.cc/150?u=jeanpaul" },
            { name: "Gasana Eric", role: "Rwiyemezamirimo", text: "Abakozi nkurura muri Garden TVET bafite ikinyabupfura n'ubumenyi buhambaye. Nibyo Rwanda ikeneye uyu munsi.", avatar: "https://i.pravatar.cc/150?u=eric" }
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[4rem] shadow-sm border border-gray-100 space-y-8 relative group hover:shadow-2xl transition-all">
              <Quote className="text-green-500 opacity-10 absolute top-12 right-12" size={80} />
              <div className="flex items-center space-x-6">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-[2rem] border-4 border-white shadow-2xl object-cover" />
                <div>
                  <h4 className="text-xl font-black text-gray-950 leading-none">{t.name}</h4>
                  <p className="text-[11px] font-black text-green-600 uppercase tracking-widest mt-2">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-xl font-medium leading-relaxed italic opacity-80">"{t.text}"</p>
              <div className="flex space-x-1.5 pt-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
