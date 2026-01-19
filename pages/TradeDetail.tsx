
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Hammer, Layers, Image as ImageIcon, Briefcase, 
  CheckCircle2, X, ChevronRight, GraduationCap, Target, Award, Play,
  Clock, Users, ShieldCheck, Laptop, Wrench, HardHat, TrendingUp, Info,
  BookOpen, Sparkles, Star, Download, Search, LayoutGrid, ListChecks
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'inzira' | 'ibikoresho' | 'amafoto' | 'deepdive'>('inzira');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(trade?.levels[0].id || null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const skillData = [
    { subject: 'Ubumenyi Ngiro', A: id === 'sod' ? 95 : 90, fullMark: 150 },
    { subject: 'Ikoranabuhanga', A: id === 'sod' ? 98 : 70, fullMark: 150 },
    { subject: 'Gukemura Ibibazo', A: id === 'sod' ? 90 : 85, fullMark: 150 },
    { subject: 'Gukorera mu Itsinda', A: 85, fullMark: 150 },
    { subject: 'Udushya', A: id === 'sod' ? 92 : 80, fullMark: 150 },
    { subject: 'Umutekano', A: id === 'sod' ? 70 : 95, fullMark: 150 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trade) return null;

  return (
    <div className="min-h-screen bg-white pb-32 w-full font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      {/* Dynamic Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img src={trade.image} className="w-full h-full object-cover scale-105" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/60 flex items-end p-6 sm:p-20">
          <div className="w-full max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-3 text-white mb-12 transition-all hover:-translate-x-2">
              <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20">
                <ChevronLeft size={24} />
              </div>
              <span className="font-black text-lg">Subira Inyuma</span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="space-y-6 flex-1">
                <div className="flex flex-wrap items-center gap-4">
                    <span className="px-5 py-2 bg-green-500 text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-xl">RTB CERTIFIED {trade.code}</span>
                    <span className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase rounded-full">Level 3-5 (A1)</span>
                </div>
                <h1 className="text-5xl sm:text-8xl lg:text-[9.5rem] font-black text-gray-900 leading-[0.8] tracking-tighter drop-shadow-2xl">{trade.name}</h1>
                <p className="text-gray-600 max-w-3xl text-xl sm:text-3xl font-medium leading-relaxed italic opacity-80">"{trade.description}"</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="px-8 py-6 bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl flex flex-col justify-center">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Duration</span>
                      <p className="text-3xl font-black text-gray-900 tracking-tighter">3 Years</p>
                  </div>
                  <button className="px-12 py-8 bg-gray-950 text-white rounded-[2.5rem] font-black text-xl hover:bg-green-500 hover:-translate-y-2 transition-all flex items-center justify-center space-x-4 shadow-2xl">
                    <span>Kwiyandikisha</span>
                    <Play size={22} fill="currentColor" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mt-32 space-y-40">
        {/* Navigation Tabs */}
        <section className="bg-gray-50 p-4 rounded-[4rem] flex flex-wrap gap-4 shadow-inner border border-gray-100">
          {[
            { id: 'inzira', label: 'Overview', icon: Target },
            { id: 'deepdive', label: 'Levels Deep-Dive', icon: LayoutGrid },
            { id: 'ibikoresho', label: 'Workshop & Tools', icon: Hammer },
            { id: 'amafoto', label: 'Gallery', icon: ImageIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[180px] flex items-center justify-center space-x-4 py-8 rounded-[3rem] font-black text-xl transition-all ${
                activeTab === tab.id ? 'bg-white text-gray-900 shadow-2xl border border-gray-100' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              <tab.icon size={28} />
              <span>{tab.label}</span>
            </button>
          ))}
        </section>

        {/* Tab Content: Deep Dive */}
        {activeTab === 'deepdive' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-4xl font-black tracking-tighter mb-8">Ubusobanuro <br /><span className="text-green-500">bw'Inyigisho</span></h3>
              {trade.levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`w-full text-left p-8 rounded-[2.5rem] border-2 transition-all flex items-center justify-between group ${
                    selectedLevel === level.id ? 'bg-gray-900 border-gray-900 text-white shadow-2xl scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-green-400'
                  }`}
                >
                  <div className="space-y-1">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${selectedLevel === level.id ? 'text-green-400' : 'text-gray-400'}`}>URWEGO</p>
                    <p className="text-2xl font-black tracking-tighter">{level.name.split(' ').pop()}</p>
                  </div>
                  <div className={`p-4 rounded-2xl ${selectedLevel === level.id ? 'bg-green-500 text-white' : 'bg-gray-50 text-gray-300 group-hover:bg-green-50 group-hover:text-green-500'} transition-all`}>
                    <ChevronRight size={24} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-gray-50 rounded-[5rem] p-12 lg:p-20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-5">
                  <GraduationCap size={200} />
               </div>
               <div className="relative z-10 space-y-10">
                  <div className="flex flex-wrap items-center gap-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-2xl font-black text-2xl">
                      {trade.levels.find(l => l.id === selectedLevel)?.name.split(' ').pop()}
                    </div>
                    <h4 className="text-5xl font-black tracking-tighter text-gray-900">{trade.levels.find(l => l.id === selectedLevel)?.name}</h4>
                  </div>
                  
                  <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl">
                    {trade.levels.find(l => l.id === selectedLevel)?.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
                    <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                        <div className="flex items-center space-x-4">
                           <div className="p-3 bg-blue-50 text-blue-500 rounded-xl"><BookOpen size={24} /></div>
                           <p className="text-lg font-black text-gray-900">Ibice by'Inyigisho (Modules)</p>
                        </div>
                        <ul className="space-y-3">
                           {['Ibyibanze ku murimo', 'Ikoranabuhanga rya Kijyambere', 'Umutekano n\'Ubuzima'].map((m, i) => (
                             <li key={i} className="flex items-center space-x-3 text-gray-500 font-bold">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{m}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                        <div className="flex items-center space-x-4">
                           <div className="p-3 bg-purple-50 text-purple-500 rounded-xl"><Star size={24} /></div>
                           <p className="text-lg font-black text-gray-900">Ubumenyi Uzakuramo</p>
                        </div>
                        <ul className="space-y-3">
                           {['Kugenzura ubuziranenge', 'Gukora imishinga', 'Gukoresha ibikoresho bigezweho'].map((m, i) => (
                             <li key={i} className="flex items-center space-x-3 text-gray-500 font-bold">
                                <CheckCircle2 size={18} className="text-green-500" />
                                <span>{m}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-4 px-10 py-6 bg-gray-900 text-white rounded-[2rem] font-black text-lg hover:bg-green-500 transition-all shadow-2xl group">
                    <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                    <span>Download Syllabus (Urwego rwa {trade.levels.find(l => l.id === selectedLevel)?.name.split(' ').pop()})</span>
                  </button>
               </div>
            </div>
          </div>
        )}

        {/* Tab Content: Overview (inzira) */}
        {activeTab === 'inzira' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">Imiterere y'Umwuga</div>
                  <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-tight">Ubumenyi <br /><span className="gradient-text">Uzakuramo.</span></h2>
                </div>
                <p className="text-2xl text-gray-500 font-medium leading-relaxed">Iyi gahunda yateguwe kugira ngo umunyeshuri asohoke ari impuguke yuzuye, ifite ubumenyi ngiro n'ubushobozi bwo guhanga udushya mu rwego rw'imirimo.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trade.careerProspects.map((career, i) => (
                    <div key={i} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-500 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all"><Briefcase size={20} /></div>
                       <span className="text-lg font-black text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-12 rounded-[5rem] shadow-2xl border border-gray-50 h-[600px] relative">
                  <div className="absolute top-12 left-12 z-10">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Skill Evolution Radar</p>
                    <p className="text-2xl font-black text-gray-900 tracking-tighter">Imiterere y'Ubumenyi</p>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#f1f5f9" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 900 }} />
                      <Radar name="Skills" dataKey="A" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                    </RadarChart>
                  </ResponsiveContainer>
              </div>
            </section>
          </div>
        )}

        {/* Other tabs follow similar high-interactive patterns... */}
      </div>
    </div>
  );
};

export default TradeDetail;
