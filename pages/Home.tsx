
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Users, Trophy, BookOpen, 
  Quote, Calendar, Newspaper, MapPin, CheckCircle, ExternalLink, PlayCircle,
  GraduationCap, Cpu, Hammer, Car, Globe, Heart, Shield
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
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Constructing Tomorrow",
      subtitle: "Master the art of building construction with world-class mentors.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Innovating Mobility",
      subtitle: "Learn the latest in automotive technology and electrical systems.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
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
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img src={slide.image} className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out" style={{ transform: idx === current ? 'scale(1.1)' : 'scale(1)' }} alt={slide.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex items-center">
            <div className="w-full px-4 sm:px-8 lg:px-12">
              <div className="max-w-4xl space-y-6 sm:space-y-10">
                <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-green-500/20 backdrop-blur-xl rounded-full border border-green-500/40">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping"></span>
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-[0.3em]">Excellence Reimagined • 2026</span>
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white drop-shadow-2xl leading-[0.85] tracking-tighter">
                  {slide.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="gradient-text">{slide.title.split(' ').pop()}</span>
                </h1>
                <p className="text-lg sm:text-2xl lg:text-3xl text-gray-300 drop-shadow-md max-w-xl font-medium leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4">
                  <button className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-green-500 text-white rounded-[2rem] sm:rounded-[2.5rem] font-black text-lg sm:text-xl shadow-2xl hover:bg-green-400 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4 group">
                    <span>Apply Now</span>
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button className="w-full sm:w-auto px-10 sm:px-12 py-5 sm:py-6 bg-white/10 backdrop-blur-2xl border border-white/20 hover:bg-white/20 text-white rounded-[2rem] sm:rounded-[2.5rem] font-black text-lg sm:text-xl transition-all flex items-center justify-center space-x-4">
                    <PlayCircle size={28} />
                    <span>School Tour</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 flex items-center space-x-6 z-10">
          <div className="flex space-x-3">
             {slides.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setCurrent(i)}
                 className={`h-2 transition-all duration-500 rounded-full ${i === current ? 'w-16 bg-green-400 shadow-lg shadow-green-500/50' : 'w-6 bg-white/30'}`}
               />
             ))}
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block"></div>
          <p className="text-white font-black text-sm tracking-widest hidden sm:block">{current + 1} / {slides.length}</p>
      </div>
    </div>
  );
};

const StaffSection: React.FC = () => (
  <section className="py-20 sm:py-32 bg-white w-full">
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">
        <span className="text-blue-600 font-black uppercase text-xs sm:text-sm tracking-[0.4em]">Academic Excellence</span>
        <h2 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tighter leading-none">Meet Our <span className="gradient-text">Educators</span></h2>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">Industry veterans and academic experts dedicated to your success.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {[
          { name: "Eng. Robert K.", role: "Head of SOD", icon: Cpu, color: "bg-blue-500" },
          { name: "Arch. Diane M.", role: "Head of BDC", icon: Hammer, color: "bg-orange-500" },
          { name: "Mech. David T.", role: "Head of AUTO", icon: Car, color: "bg-red-500" },
          { name: "Prof. Sarah L.", role: "Academic Director", icon: GraduationCap, color: "bg-purple-500" }
        ].map((staff, idx) => (
          <div key={idx} className="group relative bg-gray-50 p-8 rounded-[3rem] text-center hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
             <div className={`w-20 h-20 sm:w-24 sm:h-24 ${staff.color} rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                <staff.icon size={40} className="text-white" />
             </div>
             <h4 className="text-2xl font-black text-gray-900 mb-2">{staff.name}</h4>
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{staff.role}</p>
             <div className="mt-8 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 bg-gray-100 rounded-xl hover:bg-green-500 hover:text-white transition-all"><Globe size={16} /></button>
                <button className="p-3 bg-gray-100 rounded-xl hover:bg-green-500 hover:text-white transition-all"><Heart size={16} /></button>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CampusFacilities: React.FC = () => (
  <section className="py-20 sm:py-32 bg-gray-50 w-full overflow-hidden">
    <div className="w-full px-4 sm:px-8 lg:px-12">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 sm:space-y-12">
             <div className="space-y-6">
                <h3 className="text-4xl sm:text-6xl font-black text-gray-900 leading-none tracking-tighter">Modern Campus <br /><span className="text-green-500">Facilities</span></h3>
                <p className="text-xl sm:text-2xl text-gray-500 font-medium leading-relaxed">Designed for practical learning, our workshops and labs are equipped with the latest technology found in the global industry.</p>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Smart Labs", desc: "High-speed coding environments.", icon: Shield },
                  { title: "Green Energy", desc: "Campus powered by solar.", icon: Zap },
                  { title: "Safe Space", desc: "24/7 security & wellness center.", icon: Shield },
                  { title: "Digital Lib", desc: "Millions of online resources.", icon: BookOpen }
                ].map((f, i) => (
                  <div key={i} className="flex items-start space-x-4 sm:space-x-6 group">
                     <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                        <f.icon size={24} />
                     </div>
                     <div>
                        <h5 className="text-lg sm:text-xl font-black text-gray-900">{f.title}</h5>
                        <p className="text-gray-500 font-medium text-xs sm:text-sm">{f.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="relative group px-4 lg:px-0">
              <div className="absolute -inset-10 bg-green-500/10 rounded-[100px] blur-[100px] group-hover:bg-green-500/20 transition-all duration-700 hidden lg:block"></div>
              <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" className="rounded-[2rem] sm:rounded-[3rem] h-48 sm:h-80 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 mt-6 sm:mt-12" alt="" />
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" className="rounded-[2rem] sm:rounded-[3rem] h-48 sm:h-80 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500" alt="" />
                 <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" className="rounded-[2rem] sm:rounded-[3rem] h-48 sm:h-80 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500" alt="" />
                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070" className="rounded-[2rem] sm:rounded-[3rem] h-48 sm:h-80 w-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 -mt-6 sm:-mt-12" alt="" />
              </div>
          </div>
       </div>
    </div>
  </section>
);

const Testimonials: React.FC = () => (
  <section className="bg-white py-20 sm:py-32 w-full overflow-hidden">
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 sm:mb-24 gap-8">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          <span className="text-blue-600 font-black uppercase text-xs sm:text-sm tracking-[0.4em]">Success Stories</span>
          <h2 className="text-4xl sm:text-7xl font-black tracking-tighter text-gray-900 leading-[0.85]">Our Graduates <br />Shape the <span className="gradient-text">World</span></h2>
        </div>
        <div className="flex space-x-4 sm:space-x-6 pb-2">
           <button className="p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all"><ChevronLeft size={24} /></button>
           <button className="p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all"><ChevronRight size={24} /></button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {[
          { name: "John Mugisha", role: "Junior Dev at Irembo", text: "Garden TVET didn't just teach me code, they taught me how to solve problems that matter in Rwanda.", img: "https://i.pravatar.cc/150?u=1" },
          { name: "Alice Umutoni", role: "Project Manager", text: "The BDC program is intense and hands-on. I was leading sites within 6 months of graduation.", img: "https://i.pravatar.cc/150?u=2" },
          { name: "Kevin Kabera", role: "Auto Specialist", text: "Learning about EV systems in Level 5b was a game changer for my career in green mobility.", img: "https://i.pravatar.cc/150?u=3" }
        ].map((t, idx) => (
          <div key={idx} className="group bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] space-y-8 sm:space-y-10 relative border border-transparent hover:border-green-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
            {/* Fixed: Removed non-existent sm:size prop */}
            <Quote className="absolute top-8 right-8 sm:top-12 sm:right-12 text-green-200 group-hover:text-green-500 transition-colors" size={64} />
            <p className="text-lg sm:text-2xl text-gray-600 italic leading-relaxed relative z-10 font-medium">"{t.text}"</p>
            <div className="flex items-center space-x-4 sm:space-x-6 pt-6 sm:pt-10 border-t border-gray-100">
              <img src={t.img} className="w-16 h-16 sm:w-20 h-20 rounded-[1.2rem] sm:rounded-[1.5rem] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
              <div>
                <h4 className="font-black text-xl sm:text-2xl text-gray-900">{t.name}</h4>
                <p className="text-[10px] sm:text-xs text-gray-400 font-black uppercase tracking-[0.2em] mt-1">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NewsAndEvents: React.FC = () => (
  <section className="bg-gray-900 py-20 sm:py-32 text-white w-full">
    <div className="w-full px-4 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
        {/* News Column */}
        <div className="lg:col-span-2 space-y-12 sm:space-y-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-3xl sm:text-5xl font-black flex items-center gap-4 sm:gap-6 tracking-tighter">
              {/* Fixed: Removed non-existent sm:size prop */}
              <Newspaper className="text-green-500 flex-shrink-0" size={48} /> Latest News
            </h3>
            <Link to="/news" className="text-xs sm:text-sm font-black text-green-400 hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap">
                <span>View All</span>
                <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {[
              { title: "Global Tech Partnership with Google", date: "May 12, 2026", cat: "Partnerships", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070" },
              { title: "Building Rwanda's Next Eco-Hub", date: "May 08, 2026", cat: "Architecture", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069" }
            ].map((n, idx) => (
              <div key={idx} className="group bg-white/5 rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/5 hover:border-white/20">
                <div className="h-48 sm:h-72 overflow-hidden">
                  <img src={n.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                </div>
                <div className="p-6 sm:p-10 space-y-4 sm:space-y-6">
                  <span className="px-3 py-1 bg-green-500/20 rounded-full text-[9px] sm:text-[10px] font-black uppercase text-green-400 tracking-[0.2em]">{n.cat}</span>
                  <h4 className="text-xl sm:text-3xl font-black group-hover:text-green-400 transition-colors leading-tight">{n.title}</h4>
                  <div className="flex items-center justify-between text-gray-500 text-xs sm:text-sm font-black pt-2 sm:pt-4">
                      <span>{n.date}</span>
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events Column */}
        <div className="space-y-12 sm:space-y-16">
          <h3 className="text-3xl sm:text-5xl font-black flex items-center gap-4 sm:gap-6 tracking-tighter">
            {/* Fixed: Removed non-existent sm:size prop */}
            <Calendar className="text-blue-500 flex-shrink-0" size={48} /> Upcoming
          </h3>
          <div className="space-y-6 sm:space-y-8">
            {[
              { day: "15", month: "JUN", title: "Sports Gala Final", loc: "Main Arena", color: "text-blue-400" },
              { day: "22", month: "JUN", title: "Tech Pitch Day", loc: "Innovation Lab", color: "text-green-400" },
              { day: "02", month: "JUL", title: "Inter-TVET Debate", loc: "Conference Hall", color: "text-purple-400" }
            ].map((e, idx) => (
              <div key={idx} className="flex items-center space-x-6 sm:space-x-8 p-6 sm:p-8 bg-white/5 rounded-[2rem] sm:rounded-[2.5rem] border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-[1.2rem] sm:rounded-[1.5rem] flex flex-col items-center justify-center ${e.color} group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl sm:text-3xl font-black leading-none">{e.day}</span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-1">{e.month}</span>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-black group-hover:text-white transition-colors">{e.title}</h4>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-gray-500 text-[10px] sm:text-xs font-black uppercase mt-1 sm:mt-2 tracking-widest">
                    {/* Fixed: Removed non-existent sm:size prop */}
                    <MapPin size={14} className={e.color} />
                    <span>{e.loc}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-5 sm:py-6 bg-transparent border-2 border-dashed border-white/10 text-gray-500 font-black rounded-[2rem] sm:rounded-[2.5rem] hover:bg-white hover:text-gray-900 hover:border-white transition-all text-xs tracking-widest uppercase">
              Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="w-full space-y-0 pb-0 bg-gray-50">
      <HeroSlider />

      {/* Trust & Partnership Bar */}
      <div className="bg-gray-950 py-12 sm:py-16 w-full overflow-hidden">
        <div className="w-full px-4 sm:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <span className="text-white font-black text-xl sm:text-3xl tracking-tighter">MINEDUC</span>
           <span className="text-white font-black text-xl sm:text-3xl tracking-tighter uppercase">RTB</span>
           <span className="text-white font-black text-xl sm:text-3xl tracking-tighter italic uppercase">SDC Swiss</span>
           <span className="text-white font-black text-xl sm:text-3xl tracking-tighter">GIZ</span>
           <span className="text-white font-black text-xl sm:text-3xl tracking-tighter font-serif">KOICA</span>
        </div>
      </div>

      <section id="trades-section" className="w-full px-4 sm:px-8 lg:px-12 py-24 sm:py-40 scroll-mt-24">
        <div className="text-center mb-16 sm:mb-32 space-y-6 sm:space-y-8">
          <div className="inline-block px-5 py-2 bg-green-50 text-green-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] rounded-full border border-green-100">Future-Proof Careers</div>
          <h2 className="text-4xl sm:text-7xl lg:text-9xl font-black text-gray-900 tracking-tighter leading-none">Your <span className="gradient-text">Trade</span> Path</h2>
          <p className="text-lg sm:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-medium italic">"Skill is the new currency." Master yours today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16">
          {TRADES.map((trade) => (
            <div 
              key={trade.id} 
              onClick={() => navigate(`/trades/${trade.id}`)}
              className="group relative bg-white rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-700 border border-gray-100 cursor-pointer flex flex-col"
            >
              <div className="h-80 sm:h-[28rem] overflow-hidden relative">
                <img src={trade.image} alt={trade.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    <span className="px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest inline-block w-fit mb-3">{trade.code}</span>
                    <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tighter">{trade.name}</h3>
                </div>

                <div className="absolute inset-0 p-8 sm:p-12 bg-green-600/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-center text-white space-y-6">
                    <h4 className="text-3xl sm:text-4xl font-black tracking-tighter leading-none">Quick Stats</h4>
                    <div className="space-y-3 sm:space-y-4 pt-4 border-t border-white/20">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Duration</span>
                            <span className="font-bold">3 Years</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Placement</span>
                            <span className="font-bold">95%</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Success</span>
                            <span className="font-bold text-xl">99.8%</span>
                        </div>
                    </div>
                    <button className="w-full py-4 sm:py-5 bg-white text-green-600 rounded-[1.5rem] sm:rounded-[2rem] font-black shadow-2xl uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                        <span>Explore</span>
                        <ArrowRight size={16} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Stats Counter Grid */}
      <section className="bg-gray-900 py-24 sm:py-40 text-white relative overflow-hidden w-full">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[150px] animate-pulse"></div>
        
        <div className="w-full px-4 sm:px-8 lg:px-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 text-center">
            {[
              { label: "Active Learners", val: "1,200+", icon: Users, color: "text-green-400" },
              { label: "Job Placement", val: "95%", icon: Zap, color: "text-yellow-400" },
              { label: "International Awards", val: "15+", icon: Trophy, color: "text-blue-400" },
              { label: "Skills Modules", val: "45+", icon: BookOpen, color: "text-purple-400" }
            ].map((s, idx) => (
              <div key={idx} className="space-y-6 sm:space-y-10 group">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-[2rem] sm:rounded-[3rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-700">
                  {/* Fixed: Removed non-existent sm:size prop */}
                  <s.icon className={s.color} size={56} />
                </div>
                <div className="text-6xl sm:text-8xl font-black tracking-tighter text-white tabular-nums leading-none">{s.val}</div>
                <div className="text-gray-500 uppercase tracking-[0.4em] text-[9px] sm:text-[10px] font-black">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaffSection />
      
      <CampusFacilities />

      <Testimonials />

      <NewsAndEvents />

      {/* Enhanced Final CTA */}
      <section className="w-full px-4 sm:px-8 lg:px-12 py-24 sm:py-40">
        <div className="w-full bg-gray-900 rounded-[3rem] sm:rounded-[6rem] p-12 sm:p-32 text-center space-y-10 sm:space-y-16 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-green-500/10 rounded-full blur-[120px] group-hover:bg-green-500/20 transition-colors duration-1000"></div>
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-blue-500/10 rounded-full blur-[120px] group-hover:bg-blue-500/20 transition-colors duration-1000"></div>
           
           <div className="space-y-6 relative z-10">
                <h2 className="text-4xl sm:text-7xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">Your journey <br />starts <span className="text-green-500">Today.</span></h2>
                <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed italic">The most powerful way to predict the future is to create it.</p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 pt-6 relative z-10">
              <Link to="/register" className="w-full sm:w-auto px-12 py-6 bg-green-500 text-white rounded-[2rem] sm:rounded-[3rem] font-black text-xl sm:text-2xl hover:bg-green-400 hover:scale-105 transition-all shadow-2xl">Apply Online</Link>
              <Link to="/contact" className="w-full sm:w-auto px-12 py-6 bg-white/5 backdrop-blur-2xl border border-white/10 text-white rounded-[2rem] sm:rounded-[3rem] font-black text-xl sm:text-2xl hover:bg-white/10 transition-all">Visit Campus</Link>
           </div>

           <div className="pt-16 sm:pt-20 flex justify-center gap-8 sm:gap-16 opacity-30 relative z-10">
                {/* Fixed: Removed non-existent sm:size prop */}
                <Shield className="text-white" size={40} />
                <Globe className="text-white" size={40} />
                <Trophy className="text-white" size={40} />
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
