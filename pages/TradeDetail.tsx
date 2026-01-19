
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
      <div className="relative h-[60vh] lg:h-[85vh] w-full overflow-hidden bg-gray-50">
        <img src={trade.image} className="w-full h-full object-cover brightness-[0.9]" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent flex items-end p-6 sm:p-12 lg:p-20">
          <div className="container-fluid !px-0">
            <Link to="/" className="inline-flex items-center space-x-3 text-gray-900 mb-6 lg:mb-12 transition-all hover:-translate-x-2 group">
              <div className="p-2 lg:p-3 bg-white/80 backdrop-blur-3xl rounded-full border border-gray-100 shadow-xl group-hover:bg-green-600 group-hover:text-white transition-all">
                <ChevronLeft size={20} />
              </div>
              <span className="font-black text-sm lg:text-lg">Subira Ahabanza</span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
              <div className="space-y-3 lg:space-y-6 flex-1">
                <div className="flex flex-wrap items-center gap-2 lg:gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="px-3 py-1 lg:px-5 lg:py-2 bg-green-600 text-white text-[8px] lg:text-[10px] font-black uppercase rounded-full tracking-widest shadow-2xl">{trade.code}</span>
                    <span className="px-3 py-1 lg:px-5 lg:py-2 bg-white/80 backdrop-blur-md border border-gray-100 text-gray-950 text-[8px] lg:text-[10px] font-black uppercase rounded-full shadow-lg">Level 3-5</span>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-[9.5rem] font-black text-gray-900 leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000">
                   {trade.name}
                </h1>
                <p className="text-gray-600 max-w-3xl text-sm sm:text-lg lg:text-2xl font-semibold leading-relaxed line-clamp-2 lg:line-clamp-none">
                   {trade.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <button className="px-8 py-4 lg:px-12 lg:py-8 bg-green-600 text-white rounded-2xl sm:rounded-[3rem] font-black text-base lg:text-2xl hover:bg-green-700 transition-all flex items-center justify-center space-x-3 lg:space-x-6 shadow-xl">
                    <span>Kwiyandikisha</span>
                    <Play size={20} fill="currentColor" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-12 lg:mt-32 space-y-20 lg:space-y-40">
        
        {/* Navigation Tabs - Scrollable on Mobile */}
        <div className="bg-gray-100/50 p-2 sm:p-4 rounded-3xl sm:rounded-[5rem] overflow-x-auto hide-scrollbar flex gap-2 lg:gap-4 shadow-inner border border-gray-100">
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
              className={`flex-shrink-0 min-w-[120px] lg:flex-1 flex items-center justify-center space-x-2 lg:space-x-4 py-4 lg:py-8 px-4 rounded-2xl lg:rounded-[4rem] font-black text-xs lg:text-xl transition-all ${
                activeTab === tab.id ? 'bg-white text-gray-900 shadow-xl border border-white' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              <tab.icon size={18} className={activeTab === tab.id ? 'text-green-600' : 'text-gray-300'} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Sections */}
        {activeTab === 'inzira' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-16 lg:space-y-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
              <div className="space-y-6 lg:space-y-12">
                <div className="space-y-4 lg:space-y-6">
                  <div className="inline-block px-5 py-1.5 bg-green-50 text-green-700 text-[9px] lg:text-[11px] font-black uppercase tracking-widest rounded-full">Inshamake</div>
                  <h2 className="text-4xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-tight lg:leading-[0.85]">Ubumenyi <br /><span className="gradient-text">buzakuraho.</span></h2>
                </div>
                <p className="text-base lg:text-2xl text-gray-500 font-semibold leading-relaxed">Inyigisho zateguwe kugira ngo umunyeshuri asohoke ari impuguke yuzuye mu rwego rw'imirimo rugezweho.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {trade.careerProspects.map((career, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 lg:p-8 bg-gray-50 rounded-2xl lg:rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
                       <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm"><Briefcase size={20} /></div>
                       <span className="text-sm lg:text-xl font-black text-gray-800">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 lg:p-20 rounded-[2rem] lg:rounded-[6rem] shadow-xl border border-gray-50 h-[400px] lg:h-[700px] relative">
                  <div className="absolute top-8 left-8 lg:top-16 lg:left-16 z-10 space-y-1">
                    <p className="text-[8px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest">Urutonde rw'Ubumenyi</p>
                    <p className="text-base lg:text-3xl font-black text-gray-900 tracking-tighter">Skillset Visualization</p>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                      <Radar name="Skills" dataKey="A" stroke="#16a34a" strokeWidth={4} fill="#22c55e" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {/* Other tabs follow same pattern but scaled for mobile */}
        {activeTab === 'ibikoresho' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
            {trade.tools.map((tool, i) => (
              <div key={i} className="p-6 lg:p-10 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all space-y-4">
                 <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400"><Wrench size={24} /></div>
                 <div className="space-y-1">
                    <p className="text-lg lg:text-2xl font-black text-gray-900">{tool.name}</p>
                    <p className="text-xs lg:text-sm font-bold text-gray-500 leading-relaxed">{tool.description}</p>
                 </div>
              </div>
            ))}
          </div>
        )}

      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50">
          <button className="w-full py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl flex items-center justify-center space-x-3">
             <Activity size={18} />
             <span>Ask Questions</span>
          </button>
      </div>
    </div>
  );
};

export default TradeDetail;
