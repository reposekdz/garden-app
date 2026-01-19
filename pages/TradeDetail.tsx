
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Hammer, ImageIcon, Briefcase, 
  CheckCircle2, ChevronRight, GraduationCap, Target, Award, Play,
  TrendingUp, BookOpen, Star, Download, LayoutGrid, HelpCircle,
  Activity, Wrench, Rocket, ShieldCheck, Globe, Cpu, Zap, Lightbulb,
  ExternalLink, Layers, Terminal, Construction, CarFront, Users, MessageCircle,
  // Added missing ArrowUpRight icon
  ArrowUpRight
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  AreaChart, Area, XAxis, Tooltip
} from 'recharts';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'inzira' | 'deepdive' | 'imishinga' | 'amafoto' | 'quiz'>('inzira');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(trade?.levels[0].id || null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Mock Project Data
  const projects = [
    { id: 1, title: 'Smart City Prototype', category: 'Innovation', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400', lead: 'Final Year Team A' },
    { id: 2, title: 'Eco-Friendly Structure', category: 'Sustainability', image: 'https://images.unsplash.com/photo-1449156059431-787058726548?q=80&w=400', lead: 'BDC Level 5' },
    { id: 3, title: 'Hybrid Engine Optimization', category: 'Mechanics', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400', lead: 'AUT Level 4' },
  ];

  const skillData = [
    { subject: 'Ngiro', A: id === 'sod' ? 95 : 90 },
    { subject: 'Tech', A: id === 'sod' ? 98 : 70 },
    { subject: 'Solving', A: id === 'sod' ? 90 : 85 },
    { subject: 'Team', A: 85 },
    { subject: 'Innovation', A: id === 'sod' ? 92 : 80 },
    { subject: 'Safety', A: id === 'sod' ? 70 : 95 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trade) return null;

  return (
    <div className="min-h-screen bg-white pb-20 w-full font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      {/* Power Hero Section */}
      <div className="relative h-[70svh] lg:h-[90svh] w-full overflow-hidden">
        <img src={trade.image} className="w-full h-full object-cover brightness-[0.5] lg:brightness-[0.8] scale-105" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 lg:bg-gradient-to-r lg:from-white/95 lg:via-white/40 lg:to-transparent flex items-end lg:items-center p-6 lg:p-24">
          <div className="container-fluid !px-0 relative z-10">
            <Link to="/" className="inline-flex items-center space-x-3 text-gray-900 lg:text-gray-950 mb-10 group bg-white/20 backdrop-blur-3xl px-6 py-3 rounded-full border border-white/20 hover:bg-green-600 hover:text-white transition-all">
              <ChevronLeft size={20} />
              <span className="font-black text-xs uppercase tracking-widest">Ahabanza</span>
            </Link>
            
            <div className="space-y-6 lg:space-y-10 max-w-5xl">
              <div className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="px-5 py-2 bg-green-600 text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-2xl flex items-center space-x-2">
                  <ShieldCheck size={14} />
                  <span>Accredited By RTB</span>
                </div>
                <div className="px-5 py-2 bg-gray-950 text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg flex items-center space-x-2">
                  <Globe size={14} />
                  <span>International Standard</span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[10rem] xl:text-[12rem] font-black text-white lg:text-gray-950 leading-[0.95] lg:leading-[0.8] tracking-tighter drop-shadow-2xl lg:drop-shadow-none animate-in fade-in slide-in-from-bottom-12 duration-1000">
                 {trade.name}
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <p className="text-white lg:text-gray-600 text-base sm:text-xl lg:text-3xl font-bold leading-relaxed opacity-90">
                   {trade.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-10 py-6 bg-green-600 text-white rounded-3xl font-black text-lg hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4 shadow-2xl shadow-green-600/30">
                    <span>Kwiyandikisha</span>
                    <Play size={20} fill="currentColor" />
                  </button>
                  <button className="flex-1 px-10 py-6 bg-white border-2 border-gray-100 text-gray-950 rounded-3xl font-black text-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-4 shadow-xl">
                    <span>Syllabus</span>
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-12 lg:mt-32 space-y-20 lg:space-y-40">
        
        {/* Advanced Navigation Bar */}
        <div className="sticky top-24 z-50 bg-white/80 backdrop-blur-2xl p-3 rounded-3xl lg:rounded-[5rem] overflow-x-auto hide-scrollbar flex gap-2 lg:gap-4 shadow-2xl border border-gray-100">
          {[
            { id: 'inzira', label: 'Incamake', icon: Target },
            { id: 'deepdive', label: 'Urwego', icon: Layers },
            { id: 'imishinga', label: 'Imishinga', icon: Rocket },
            { id: 'amafoto', label: 'Gallery', icon: ImageIcon },
            { id: 'quiz', label: 'Quiz', icon: HelpCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-shrink-0 min-w-[140px] lg:flex-1 flex items-center justify-center space-x-3 lg:space-x-5 py-5 lg:py-8 px-6 rounded-2xl lg:rounded-[4rem] font-black text-[11px] lg:text-xl transition-all ${
                activeTab === tab.id 
                ? 'bg-gray-950 text-white shadow-2xl scale-[1.02]' 
                : 'text-gray-400 hover:text-gray-950 hover:bg-gray-50'
              }`}
            >
              <tab.icon size={22} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Section: Incamake & Skill Analysis */}
        {activeTab === 'inzira' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center space-x-3 px-5 py-2 bg-blue-50 text-blue-600 rounded-full">
                    <Zap size={18} className="animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Industry Pulse 2024</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl lg:text-9xl font-black text-gray-950 tracking-tighter leading-[0.85]">Ejo Hazaza <br /><span className="gradient-text">Hatangira None.</span></h2>
                </div>
                <p className="text-lg lg:text-3xl text-gray-500 font-semibold leading-relaxed">
                  Garden TVET yateguye uyu mwuga mu buryo buhuza amasomo yo mu ishuri n'ibikenerwa ku isoko ry'umurimo rigezweho.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trade.careerProspects.map((career, i) => (
                    <div key={i} className="flex items-center space-x-5 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-gray-50 group-hover:bg-green-600 group-hover:text-white transition-all">
                          <Briefcase size={24} />
                       </div>
                       <span className="text-xl lg:text-2xl font-black text-gray-950 leading-tight">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative group">
                 <div className="absolute inset-0 bg-green-500/10 blur-[120px] rounded-full group-hover:bg-green-500/20 transition-all"></div>
                 <div className="relative bg-white p-10 lg:p-20 rounded-[4rem] lg:rounded-[6rem] shadow-2xl border border-gray-50 h-[400px] lg:h-[700px]">
                    <div className="absolute top-12 left-12 space-y-2">
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Skill Matrix V1.0</p>
                       <h3 className="text-3xl font-black text-gray-950 tracking-tighter">Competency Distribution</h3>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                        <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                        <Radar name="Skills" dataKey="A" stroke="#16a34a" strokeWidth={5} fill="#22c55e" fillOpacity={0.6} />
                      </RadarChart>
                    </ResponsiveContainer>
                 </div>
              </div>
            </section>

            {/* Powerful Stats/Benefits Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { icon: Award, title: "Double Certification", desc: "Get RTB and Garden Industry awards.", color: "text-blue-500" },
                 { icon: Users, title: "Direct Internship", desc: "Connect with our 50+ industry partners.", color: "text-green-500" },
                 { icon: Lightbulb, title: "Innovation Lab", desc: "24/7 access to high-end prototyping tools.", color: "text-orange-500" },
               ].map((item, i) => (
                 <div key={i} className="p-12 bg-white rounded-[3.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all space-y-8">
                    <div className={`w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center ${item.color}`}><item.icon size={36} /></div>
                    <div className="space-y-3">
                       <h4 className="text-3xl font-black tracking-tighter">{item.title}</h4>
                       <p className="text-lg text-gray-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </section>
          </div>
        )}

        {/* Deep Dive / Curriculum */}
        {activeTab === 'deepdive' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-16">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {trade.levels.map((level) => (
                  <button 
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`p-10 lg:p-14 text-left rounded-[3rem] transition-all border-4 relative overflow-hidden group ${
                      selectedLevel === level.id 
                      ? 'bg-gray-950 text-white border-green-500 shadow-2xl scale-[1.02]' 
                      : 'bg-white text-gray-950 border-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                       <GraduationCap size={80} />
                    </div>
                    <div className="relative z-10">
                       <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-60">Academic Pathway</p>
                       <h4 className="text-3xl lg:text-5xl font-black tracking-tighter mb-6">{level.name}</h4>
                       <p className={`text-lg lg:text-xl font-bold leading-relaxed ${selectedLevel === level.id ? 'text-gray-400' : 'text-gray-500'}`}>
                         {level.description}
                       </p>
                    </div>
                  </button>
                ))}
             </div>

             {selectedLevel && (
               <div className="bg-gray-50 p-12 lg:p-24 rounded-[4rem] lg:rounded-[6rem] space-y-16 border border-gray-100 animate-in fade-in zoom-in duration-500">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                     <div className="space-y-4">
                        <h5 className="text-4xl lg:text-7xl font-black tracking-tighter">Core Modules</h5>
                        <p className="text-xl text-gray-400 font-bold italic">"Practical competency benchmarks for Level {selectedLevel.slice(-1)}."</p>
                     </div>
                     <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-lg">
                             <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="" />
                          </div>
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-white bg-gray-950 flex items-center justify-center text-white text-xs font-black shadow-lg">+42</div>
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                     {trade.coreModules.map((module, idx) => (
                       <div key={idx} className="group flex items-center justify-between p-8 lg:p-12 bg-white rounded-[2.5rem] lg:rounded-[3.5rem] shadow-sm border border-transparent hover:border-green-500 hover:shadow-2xl transition-all">
                          <div className="flex items-center space-x-8">
                             <span className="text-4xl lg:text-6xl font-black text-gray-100 group-hover:text-green-500 transition-colors">0{idx + 1}</span>
                             <span className="text-xl lg:text-3xl font-black text-gray-900 leading-tight">{module}</span>
                          </div>
                          <CheckCircle2 size={32} className="text-gray-50 opacity-0 group-hover:opacity-100 group-hover:text-green-500 transition-all" />
                       </div>
                     ))}
                  </div>
               </div>
             )}
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'imishinga' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-24">
             <div className="max-w-4xl space-y-6">
                <h3 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none">Imishinga <br /><span className="gradient-text">y'indashyikirwa.</span></h3>
                <p className="text-xl lg:text-3xl text-gray-500 font-bold">Uburyo abanyeshuri bacu bishyira mu bikorwa ibyo bize binyuze mu gukemura ibibazo bifatika.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {projects.map((project) => (
                  <div key={project.id} className="group bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-lg hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-4 transition-all">
                     <div className="h-72 overflow-hidden relative">
                        <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" alt={project.title} />
                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-gray-950">{project.category}</div>
                     </div>
                     <div className="p-10 space-y-6">
                        <h4 className="text-3xl font-black tracking-tighter leading-tight">{project.title}</h4>
                        <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                           <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden"><img src={`https://i.pravatar.cc/150?u=${project.id}`} alt="" /></div>
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{project.lead}</p>
                           </div>
                           <button className="p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:bg-green-600 group-hover:text-white transition-all"><ExternalLink size={20} /></button>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
             <div className="p-16 bg-gray-950 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10"><Terminal size={120} className="text-white" /></div>
                <h4 className="text-3xl lg:text-5xl font-black text-white tracking-tighter relative z-10">Ufite umushinga wifuza ko twafatanyamo?</h4>
                <p className="text-lg lg:text-2xl text-gray-500 font-bold relative z-10 max-w-2xl mx-auto">Ishuri ryacu rifunguye imiryango ku bigo n'abashoramari bifuza gukoresha ubumenyi bw'abanyeshuri bacu.</p>
                <button className="px-12 py-6 bg-white text-gray-950 rounded-[2rem] font-black text-lg hover:bg-green-600 hover:text-white transition-all relative z-10">Tanga Igitekerezo</button>
             </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'amafoto' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-24">
             <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                {trade.gallery.map((img, i) => (
                  <div key={i} className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white break-inside-avoid hover:shadow-green-500/20 transition-all">
                     <img src={img.url} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                        <p className="text-white font-black text-xl leading-tight">{img.caption}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="animate-in fade-in zoom-in duration-700 max-w-5xl mx-auto py-24 space-y-16 text-center">
             {!quizFinished ? (
               <div className="space-y-16">
                 <div className="space-y-6">
                    <h3 className="text-5xl lg:text-9xl font-black tracking-tighter">Isuzume Umwuga.</h3>
                    <p className="text-xl lg:text-4xl text-gray-500 font-bold max-w-3xl mx-auto italic">"Simbuka mu isuzuma rito urebe niba uyu mwuga ujuganye n'impano yawe ya gihanga."</p>
                 </div>
                 <div className="p-16 lg:p-28 bg-gray-50 rounded-[5rem] lg:rounded-[8rem] space-y-12 border border-gray-100 shadow-inner relative overflow-hidden">
                    <div className="absolute top-10 left-10 p-4 bg-white rounded-2xl shadow-sm text-green-500"><Terminal size={32} /></div>
                    <p className="text-2xl lg:text-5xl font-black text-gray-950 leading-tight">"Ese ukunda gukemura ibibazo bikomeye ukoresheje mudasobwa cyangwa ibikoresho bifatika?"</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                       <button onClick={() => setQuizFinished(true)} className="px-16 py-8 bg-green-600 text-white rounded-[2.5rem] font-black text-xl lg:text-3xl shadow-2xl hover:bg-green-700 transition-all flex items-center justify-center space-x-4">
                          <span>Yego, Cyane</span>
                          <ArrowUpRight size={24} />
                       </button>
                       <button onClick={() => setQuizFinished(true)} className="px-16 py-8 bg-white border-4 border-gray-100 text-gray-950 rounded-[2.5rem] font-black text-xl lg:text-3xl hover:border-gray-950 transition-all">Biterwa n'igihe</button>
                    </div>
                 </div>
               </div>
             ) : (
               <div className="space-y-12">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 bg-green-100 text-green-600 rounded-[3rem] flex items-center justify-center mx-auto shadow-inner animate-bounce"><Star size={80} fill="currentColor" /></div>
                  <div className="space-y-4">
                    <h3 className="text-6xl lg:text-9xl font-black tracking-tighter">Urashoboye!</h3>
                    <p className="text-2xl lg:text-4xl text-gray-500 font-bold">Impano yawe ihuye neza na {trade.name}. <br />Inzugi za Garden TVET ziragufunguriye!</p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="px-14 py-6 bg-gray-950 text-white rounded-[2rem] font-black text-xl hover:bg-green-600 transition-all">Tanga Application</button>
                    <button onClick={() => setQuizFinished(false)} className="px-14 py-6 bg-gray-100 text-gray-500 rounded-[2rem] font-black text-xl hover:bg-gray-200 transition-all">Ongera ugerageze</button>
                  </div>
               </div>
             )}
          </div>
        )}
      </div>
      
      {/* Dynamic Action Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl bg-gray-950/80 backdrop-blur-3xl p-4 lg:p-6 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-between">
         <div className="hidden sm:flex items-center space-x-5 px-6">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-black">?</div>
            <div>
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Questions?</p>
               <p className="text-sm font-bold text-white">Talk to an Advisor</p>
            </div>
         </div>
         <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-10 py-5 bg-white text-gray-950 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:text-white transition-all">
               Ibisabwa
            </button>
            <button className="flex-1 sm:flex-none px-10 py-5 bg-green-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all flex items-center justify-center space-x-3">
               <span>Iyandikishe</span>
               <ChevronRight size={18} />
            </button>
         </div>
      </div>
    </div>
  );
};

export default TradeDetail;
