
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Hammer, ImageIcon, Briefcase, 
  CheckCircle2, ChevronRight, GraduationCap, Target, Award, Play,
  TrendingUp, BookOpen, Star, Download, LayoutGrid, HelpCircle,
  Activity, Wrench
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from 'recharts';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'inzira' | 'ibikoresho' | 'amafoto' | 'deepdive' | 'quiz'>('inzira');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(trade?.levels[0].id || null);
  const [quizFinished, setQuizFinished] = useState(false);

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
      {/* Dynamic Hero Section */}
      <div className="relative h-[65svh] lg:h-[85svh] w-full overflow-hidden bg-gray-50">
        <img src={trade.image} className="w-full h-full object-cover brightness-[0.7] lg:brightness-[0.9]" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent lg:via-white/20 flex items-end p-6 lg:p-20">
          <div className="container-fluid !px-0">
            <Link to="/" className="inline-flex items-center space-x-2 sm:space-x-3 text-gray-900 mb-6 lg:mb-12 transition-all hover:-translate-x-2 group">
              <div className="p-2 lg:p-3 bg-white/90 backdrop-blur-3xl rounded-full border border-gray-100 shadow-xl group-hover:bg-green-600 group-hover:text-white transition-all">
                <ChevronLeft size={20} />
              </div>
              <span className="font-black text-sm lg:text-lg drop-shadow-sm">Ahabanza</span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
              <div className="space-y-3 lg:space-y-6 flex-1">
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="px-3 py-1 lg:px-5 lg:py-2 bg-green-600 text-white text-[8px] lg:text-[10px] font-black uppercase rounded-full tracking-widest shadow-2xl">{trade.code}</span>
                    <span className="px-3 py-1 lg:px-5 lg:py-2 bg-white/90 backdrop-blur-md border border-gray-100 text-gray-950 text-[8px] lg:text-[10px] font-black uppercase rounded-full shadow-lg">Level 3-5 RTB</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-[9.5rem] font-black text-gray-900 leading-[1.1] lg:leading-[0.85] tracking-tighter drop-shadow-md animate-in fade-in slide-in-from-bottom-12 duration-1000">
                   {trade.name}
                </h1>
                <p className="text-gray-600 max-w-3xl text-sm sm:text-lg lg:text-2xl font-bold leading-relaxed line-clamp-3 lg:line-clamp-none">
                   {trade.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <button className="w-full sm:w-auto px-10 py-5 lg:px-14 lg:py-8 bg-green-600 text-white rounded-2xl lg:rounded-[3rem] font-black text-sm lg:text-2xl hover:bg-green-700 transition-all flex items-center justify-center space-x-3 lg:space-x-6 shadow-2xl shadow-green-600/30">
                    <span>Kwiyandikisha</span>
                    <Play size={20} fill="currentColor" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-12 lg:mt-32 space-y-20 lg:space-y-40">
        
        {/* Navigation Tabs - Scrollable */}
        <div className="bg-gray-100/50 p-2 sm:p-4 rounded-3xl lg:rounded-[5rem] overflow-x-auto hide-scrollbar flex gap-2 lg:gap-4 shadow-inner border border-gray-100">
          {[
            { id: 'inzira', label: 'Incamake', icon: Target },
            { id: 'deepdive', label: 'Urwego', icon: LayoutGrid },
            { id: 'ibikoresho', label: 'Workshop', icon: Hammer },
            { id: 'amafoto', label: 'Gallery', icon: ImageIcon },
            { id: 'quiz', label: 'Quiz', icon: HelpCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-shrink-0 min-w-[120px] lg:flex-1 flex items-center justify-center space-x-2 lg:space-x-4 py-4 lg:py-8 px-4 lg:px-6 rounded-2xl lg:rounded-[4rem] font-black text-[10px] lg:text-xl transition-all ${
                activeTab === tab.id ? 'bg-white text-gray-900 shadow-xl border border-white' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-green-600' : 'text-gray-300'} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content: Incamake */}
        {activeTab === 'inzira' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-20 lg:space-y-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 lg:space-y-12">
                <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
                  <div className="inline-block px-5 py-2 bg-green-50 text-green-700 text-[10px] lg:text-[11px] font-black uppercase tracking-widest rounded-full">Overview</div>
                  <h2 className="text-3xl sm:text-5xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-tight lg:leading-[0.85]">Ubumenyi <br /><span className="gradient-text">buzakuraho.</span></h2>
                </div>
                <p className="text-base lg:text-2xl text-gray-500 font-semibold leading-relaxed text-center lg:text-left px-4 lg:px-0">Iyi gahunda yateguwe kugira ngo umunyeshuri asohoke ari impuguke yuzuye, ifite ubumenyi ngiro bukenewe mu Rwanda no mu mahanga.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 px-4 lg:px-0">
                  {trade.careerProspects.map((career, i) => (
                    <div key={i} className="flex items-center space-x-4 p-5 lg:p-8 bg-gray-50 rounded-2xl lg:rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group">
                       <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm"><Briefcase size={20} /></div>
                       <span className="text-sm lg:text-xl font-black text-gray-800 leading-tight">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 lg:p-16 rounded-[2.5rem] lg:rounded-[6rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-50 h-[380px] sm:h-[500px] lg:h-[700px] relative">
                  <div className="absolute top-8 left-8 lg:top-16 lg:left-16 z-10 space-y-1">
                    <p className="text-[8px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest">Analytics</p>
                    <p className="text-base lg:text-3xl font-black text-gray-900 tracking-tighter leading-none">Skill Strength Map</p>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={skillData}>
                      <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                      <Radar name="Skills" dataKey="A" stroke="#16a34a" strokeWidth={4} fill="#22c55e" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {/* Deep Dive / Curriculum Tab */}
        {activeTab === 'deepdive' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {trade.levels.map((level) => (
                  <button 
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`p-8 lg:p-12 text-left rounded-[2rem] lg:rounded-[3rem] transition-all border-4 ${
                      selectedLevel === level.id 
                      ? 'bg-gray-950 text-white border-green-500 shadow-2xl' 
                      : 'bg-white text-gray-900 border-gray-50 hover:border-gray-200'
                    }`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-60">Year of Study</p>
                    <h4 className="text-2xl lg:text-4xl font-black tracking-tighter mb-4">{level.name}</h4>
                    <p className={`text-sm lg:text-lg font-semibold leading-relaxed ${selectedLevel === level.id ? 'text-gray-400' : 'text-gray-500'}`}>
                      {level.description}
                    </p>
                  </button>
                ))}
             </div>
             {selectedLevel && (
               <div className="bg-gray-50 p-8 lg:p-20 rounded-[3rem] lg:rounded-[6rem] space-y-12 animate-in fade-in duration-500">
                  <div className="flex items-center justify-between">
                     <h5 className="text-3xl lg:text-6xl font-black tracking-tighter">Core Modules</h5>
                     <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-3xl flex items-center justify-center text-green-600 shadow-xl">
                        <BookOpen size={40} />
                     </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                     {trade.coreModules.map((module, idx) => (
                       <div key={idx} className="flex items-center space-x-6 p-6 lg:p-10 bg-white rounded-[1.5rem] lg:rounded-[2.5rem] shadow-sm border border-white">
                          <span className="text-3xl lg:text-5xl font-black text-gray-100">0{idx + 1}</span>
                          <span className="text-base lg:text-2xl font-black text-gray-900">{module}</span>
                       </div>
                     ))}
                  </div>
               </div>
             )}
          </div>
        )}

        {/* Workshop Tab */}
        {activeTab === 'ibikoresho' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-4 lg:px-0">
            {trade.tools.map((tool, i) => (
              <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all space-y-6">
                 <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400"><Wrench size={24} /></div>
                 <div className="space-y-2">
                    <p className="text-xl lg:text-2xl font-black text-gray-900 leading-tight">{tool.name}</p>
                    <p className="text-xs lg:text-sm font-bold text-gray-500 leading-relaxed">{tool.description}</p>
                 </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'amafoto' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-4 lg:px-0">
            {trade.gallery.map((img, i) => (
              <div key={i} className="relative group rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xl break-inside-avoid border-4 border-white">
                 <img src={img.url} className="w-full object-cover" alt={img.caption} />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 lg:p-10 flex flex-col justify-end">
                    <p className="text-white font-black text-sm lg:text-lg leading-tight">{img.caption}</p>
                 </div>
              </div>
            ))}
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto py-12 lg:py-24 space-y-12 text-center">
             {!quizFinished ? (
               <>
                 <div className="space-y-6">
                    <h3 className="text-4xl lg:text-7xl font-black tracking-tighter">Isuzume Umwuga.</h3>
                    <p className="text-lg lg:text-2xl text-gray-500 font-semibold max-w-2xl mx-auto">Simbuka mu isuzuma rito urebe niba uyu mwuga ujuganye n'impano yawe.</p>
                 </div>
                 <div className="p-10 lg:p-20 bg-gray-50 rounded-[3rem] lg:rounded-[5rem] space-y-10 border border-gray-100">
                    <p className="text-xl lg:text-4xl font-black text-gray-900 leading-tight">"Ese ukunda gukemura ibibazo bikomeye ukoresheje mudasobwa cyangwa ibikoresho bifatika?"</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                       <button onClick={() => setQuizFinished(true)} className="px-12 py-6 lg:px-20 lg:py-8 bg-green-600 text-white rounded-[2rem] font-black text-lg lg:text-2xl shadow-xl hover:-translate-y-1 transition-all">Cyane cyane</button>
                       <button onClick={() => setQuizFinished(true)} className="px-12 py-6 lg:px-20 lg:py-8 bg-white border-2 border-gray-200 text-gray-900 rounded-[2rem] font-black text-lg lg:text-2xl shadow-sm hover:border-gray-900 transition-all">Biterwa na moko</button>
                    </div>
                 </div>
               </>
             ) : (
               <div className="space-y-10 animate-in zoom-in duration-700">
                  <div className="w-24 h-24 lg:w-40 lg:h-40 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner"><Star size={64} fill="currentColor" /></div>
                  <h3 className="text-4xl lg:text-7xl font-black tracking-tighter">Urashoboye!</h3>
                  <p className="text-lg lg:text-2xl text-gray-500 font-semibold">Impano yawe ihuye neza na {trade.name}. Turagutegereje!</p>
                  <button onClick={() => setQuizFinished(false)} className="px-10 py-5 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all">Ongera ugerageze</button>
               </div>
             )}
          </div>
        )}

      </div>
      
      {/* Mobile Context Button */}
      <button className="fixed bottom-6 right-6 lg:hidden w-16 h-16 bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center z-[80] active:scale-90 transition-transform">
         <Activity size={28} />
      </button>
    </div>
  );
};

export default TradeDetail;
