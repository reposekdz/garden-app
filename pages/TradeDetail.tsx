
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Hammer, Layers, Image as ImageIcon, Briefcase, 
  CheckCircle2, X, ChevronRight, GraduationCap, Target, Award, Play,
  Clock, Users, ShieldCheck, Laptop, Wrench, HardHat, TrendingUp, Info,
  BookOpen, Sparkles, Star, Download, Search, LayoutGrid, ListChecks, HelpCircle,
  Activity
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer 
} from 'recharts';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'inzira' | 'ibikoresho' | 'amafoto' | 'deepdive' | 'quiz'>('inzira');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(trade?.levels[0].id || null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const skillData = [
    { subject: 'Ubumenyi Ngiro', A: id === 'sod' ? 95 : 90, fullMark: 100 },
    { subject: 'Ikoranabuhanga', A: id === 'sod' ? 98 : 70, fullMark: 100 },
    { subject: 'Gukemura Ibibazo', A: id === 'sod' ? 90 : 85, fullMark: 100 },
    { subject: 'Gukorera mu Itsinda', A: 85, fullMark: 100 },
    { subject: 'Udushya', A: id === 'sod' ? 92 : 80, fullMark: 100 },
    { subject: 'Umutekano', A: id === 'sod' ? 70 : 95, fullMark: 100 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!trade) return null;

  return (
    <div className="min-h-screen bg-white pb-32 w-full font-['Plus_Jakarta_Sans'] overflow-x-hidden">
      {/* Dynamic Hero Section - High Light Aesthetic */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-gray-50">
        <img src={trade.image} className="w-full h-full object-cover scale-105 brightness-[0.9]" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent flex items-end p-6 sm:p-20">
          <div className="w-full max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center space-x-3 text-gray-900 mb-12 transition-all hover:-translate-x-2 group">
              <div className="p-3 bg-white/80 backdrop-blur-3xl rounded-full border border-gray-100 shadow-xl group-hover:bg-green-600 group-hover:text-white transition-all">
                <ChevronLeft size={24} />
              </div>
              <span className="font-black text-lg">Subira Ahabanza</span>
            </Link>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
              <div className="space-y-6 flex-1">
                <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                    <span className="px-5 py-2 bg-green-600 text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-2xl">RTB CERTIFIED {trade.code}</span>
                    <span className="px-5 py-2 bg-white/80 backdrop-blur-md border border-gray-100 text-gray-950 text-[10px] font-black uppercase rounded-full shadow-lg">Urwego rwa 3 kugeza kuri 5 (A1)</span>
                </div>
                <h1 className="text-5xl sm:text-8xl lg:text-[9.5rem] font-black text-gray-900 leading-[0.85] tracking-tighter drop-shadow-sm animate-in fade-in slide-in-from-bottom-12 duration-1000">
                   {trade.name}
                </h1>
                <p className="text-gray-600 max-w-3xl text-xl sm:text-2xl font-semibold leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                   "{trade.description}"
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-4 animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
                  <div className="px-10 py-8 bg-white border border-gray-100 rounded-[3rem] shadow-2xl flex flex-col justify-center">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Igihe cy'Inyigisho</span>
                      <p className="text-4xl font-black text-gray-900 tracking-tighter">Imyaka 3</p>
                  </div>
                  <button className="px-12 py-8 bg-green-600 text-white rounded-[3rem] font-black text-2xl hover:bg-green-700 hover:-translate-y-2 transition-all flex items-center justify-center space-x-6 shadow-[0_30px_80px_-20px_rgba(22,163,74,0.4)]">
                    <span>Kwiyandikisha</span>
                    <Play size={24} fill="currentColor" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 mt-32 space-y-40">
        
        {/* Interactive Navigation Tabs - Modern Light UI */}
        <section className="bg-gray-100/50 p-4 rounded-[5rem] flex flex-wrap gap-4 shadow-inner border border-gray-100">
          {[
            { id: 'inzira', label: 'Incamake', icon: Target },
            { id: 'deepdive', label: 'Urwego ku rundi', icon: LayoutGrid },
            { id: 'ibikoresho', label: 'Ibikoresho & Lab', icon: Hammer },
            { id: 'amafoto', label: 'Gallery', icon: ImageIcon },
            { id: 'quiz', label: 'Kwishyira ku munzani', icon: HelpCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[200px] flex items-center justify-center space-x-4 py-8 rounded-[4rem] font-black text-xl transition-all ${
                activeTab === tab.id ? 'bg-white text-gray-900 shadow-2xl border border-white' : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              <tab.icon size={28} className={activeTab === tab.id ? 'text-green-600' : 'text-gray-300'} />
              <span>{tab.label}</span>
            </button>
          ))}
        </section>

        {/* Tab Content: Deep Dive (Urwego ku rundi) */}
        {activeTab === 'deepdive' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4 mb-12">
                 <h3 className="text-4xl font-black tracking-tighter leading-none">Imiterere y'Urwego <br /><span className="text-green-600">rwa buri nyigisho.</span></h3>
                 <p className="text-gray-500 font-bold text-lg leading-relaxed">Sura ubumenyi butangwa muri buri rwego (Level) kugira ngo umenye ibyo uzigishwa muri Garden TVET.</p>
              </div>
              {trade.levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`w-full text-left p-10 rounded-[3rem] border-4 transition-all flex items-center justify-between group relative overflow-hidden ${
                    selectedLevel === level.id ? 'bg-gray-950 border-gray-950 text-white shadow-2xl scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-green-400 hover:bg-green-50/50'
                  }`}
                >
                  <div className="space-y-2 relative z-10">
                    <p className={`text-[11px] font-black uppercase tracking-[0.3em] ${selectedLevel === level.id ? 'text-green-400' : 'text-gray-400'}`}>SURA URWEGO</p>
                    <p className="text-3xl font-black tracking-tighter leading-none">{level.name}</p>
                  </div>
                  <div className={`p-5 rounded-2xl relative z-10 ${selectedLevel === level.id ? 'bg-green-600 text-white' : 'bg-gray-50 text-gray-300 group-hover:bg-green-100 group-hover:text-green-600'} transition-all`}>
                    <ChevronRight size={28} />
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7 bg-white rounded-[5rem] p-12 lg:p-24 shadow-2xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-16 opacity-[0.03] -rotate-12">
                  <GraduationCap size={400} />
               </div>
               <div className="relative z-10 space-y-12">
                  <div className="flex flex-wrap items-center gap-8">
                    <div className="w-20 h-20 bg-green-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl font-black text-3xl">
                      {trade.levels.find(l => l.id === selectedLevel)?.name.split(' ').pop()}
                    </div>
                    <div className="space-y-1">
                       <h4 className="text-5xl font-black tracking-tighter text-gray-950">{trade.levels.find(l => l.id === selectedLevel)?.name}</h4>
                       <div className="flex items-center space-x-3 text-green-600 font-black text-xs uppercase tracking-widest">
                          <CheckCircle2 size={16} />
                          <span>Curriculum Update 2024</span>
                       </div>
                    </div>
                  </div>
                  
                  <p className="text-2xl text-gray-500 font-semibold leading-relaxed max-w-3xl italic">
                    "{trade.levels.find(l => l.id === selectedLevel)?.description}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
                    <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100 space-y-8">
                        <div className="flex items-center space-x-4">
                           <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl shadow-sm"><BookOpen size={28} /></div>
                           <p className="text-xl font-black text-gray-900 tracking-tight">Ibice by'Inyigisho</p>
                        </div>
                        <ul className="space-y-4">
                           {['Ibyibanze ku murimo', 'Ikoranabuhanga rya Kijyambere', 'Umutekano n\'Ubuzima mu kazi'].map((m, i) => (
                             <li key={i} className="flex items-center space-x-4 text-gray-600 font-bold">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg"></div>
                                <span className="text-lg">{m}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[3.5rem] border border-gray-100 space-y-8">
                        <div className="flex items-center space-x-4">
                           <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl shadow-sm"><Star size={28} /></div>
                           <p className="text-xl font-black text-gray-900 tracking-tight">Ubumenyi Uzakuramo</p>
                        </div>
                        <ul className="space-y-4">
                           {['Kugenzura ubuziranenge', 'Gukora imishinga wenyine', 'Gukoresha ibikoresho bigezweho'].map((m, i) => (
                             <li key={i} className="flex items-center space-x-4 text-gray-600 font-bold">
                                <CheckCircle2 size={22} className="text-green-600" />
                                <span className="text-lg">{m}</span>
                             </li>
                           ))}
                        </ul>
                    </div>
                  </div>
                  
                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                     <button className="flex-1 flex items-center justify-center space-x-4 px-10 py-8 bg-gray-950 text-white rounded-[2.5rem] font-black text-lg hover:bg-green-600 transition-all shadow-2xl group">
                       <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                       <span>Gira Syllabus ya {trade.levels.find(l => l.id === selectedLevel)?.name.split(' ').pop()}</span>
                     </button>
                     <button className="px-10 py-8 bg-white border-2 border-gray-100 text-gray-950 rounded-[2.5rem] font-black text-lg hover:bg-gray-50 transition-all">
                        Ubuhamya bw'Abayarangije
                     </button>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Tab Content: Incamake (Overview) */}
        {activeTab === 'inzira' && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-32">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-block px-6 py-2 bg-green-50 text-green-700 text-[11px] font-black uppercase tracking-[0.5em] rounded-full">Inshamake y'Umwuga</div>
                  <h2 className="text-6xl lg:text-8xl font-black text-gray-950 tracking-tighter leading-[0.85]">Ubumenyi Uzakura <br /><span className="gradient-text">muri Garden TVET.</span></h2>
                </div>
                <p className="text-2xl text-gray-500 font-semibold leading-relaxed max-w-2xl">Iyi gahunda yateguwe kugira ngo umunyeshuri asohoke ari impuguke yuzuye, ifite ubumenyi ngiro n'ubushobozi bwo guhanga udushya mu rwego rw'imirimo rugezweho.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {trade.careerProspects.map((career, i) => (
                    <div key={i} className="flex items-center space-x-5 p-8 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
                       <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all"><Briefcase size={28} /></div>
                       <span className="text-xl font-black text-gray-800">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-12 lg:p-20 rounded-[6rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-50 h-[700px] relative">
                  <div className="absolute top-16 left-16 z-10 space-y-2">
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Urutonde rw'Ubumenyi</p>
                    <p className="text-3xl font-black text-gray-900 tracking-tighter">Imiterere y'Ubumenyi Ngiro</p>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                      <PolarGrid stroke="#f1f5f9" strokeWidth={2} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 900 }} />
                      <Radar name="Skills" dataKey="A" stroke="#16a34a" strokeWidth={4} fill="#22c55e" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
                  <div className="absolute bottom-16 right-16">
                     <div className="p-6 bg-green-50 rounded-3xl border border-green-100 flex items-center space-x-4">
                        <TrendingUp className="text-green-600" size={32} />
                        <div>
                           <p className="text-xl font-black text-gray-900">+45%</p>
                           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Iterambere mu mwaka</p>
                        </div>
                     </div>
                  </div>
              </div>
            </section>
            
            <section className="bg-gray-950 rounded-[6rem] p-16 lg:p-32 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
               <div className="max-w-4xl space-y-10 relative z-10">
                  <h3 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">Witeguye Gutangira <br /><span className="text-green-400">Inzira y'Ubuzima?</span></h3>
                  <p className="text-2xl text-gray-400 font-medium leading-relaxed italic">"Garden TVET yishimiye kuguha ikaze mu muryango w'abanyamwuga barangwa n'indangagaciro, ubumenyi, n'umurava mu byo bakora byose."</p>
                  <div className="flex flex-wrap gap-8 pt-8">
                     <button className="px-12 py-8 bg-green-600 text-white rounded-[2.5rem] font-black text-2xl hover:bg-green-700 transition-all shadow-2xl shadow-green-600/20">Wiyandikishe nonaha</button>
                     <button className="px-12 py-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[2.5rem] font-black text-2xl hover:bg-white/20 transition-all">Sura Igaraje ryacu</button>
                  </div>
               </div>
            </section>
          </div>
        )}

        {/* Tab Content: Quiz (Full Functional Mini-Quiz) */}
        {activeTab === 'quiz' && (
           <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 flex flex-col items-center justify-center py-20 bg-gray-50 rounded-[6rem] border border-gray-100 shadow-inner px-12 text-center space-y-12">
              {!quizFinished ? (
                 <>
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center shadow-2xl animate-bounce-slow">
                       <HelpCircle size={48} />
                    </div>
                    <div className="space-y-6 max-w-2xl">
                       <h3 className="text-5xl font-black tracking-tighter">Kwishyira ku Munzani</h3>
                       <p className="text-2xl text-gray-500 font-bold leading-relaxed">Sura ubumenyi bw'ibanze ufite kuri uyu mwuga wa <span className="text-gray-900 font-black">{trade.name}</span> ubanze usubize ibi bibazo byoroheje.</p>
                    </div>
                    <div className="space-y-6 w-full max-w-xl">
                       <div className="p-10 bg-white rounded-[3rem] border border-gray-100 text-left space-y-8 shadow-2xl relative">
                          <p className="text-2xl font-black text-gray-900">Ese witeguye guhanga udushya n'ikoranabuhanga?</p>
                          <div className="space-y-4">
                             {['Yego, ndabikunze cyane', 'Ndabitangiye ubu', 'Ntabwo ndabyumva neza'].map((opt, i) => (
                                <button 
                                  key={i} 
                                  onClick={() => { setQuizScore(score => score + (3 - i)); setQuizFinished(true); }}
                                  className="w-full text-left p-6 rounded-2xl border-2 border-gray-50 hover:border-green-500 hover:bg-green-50 transition-all font-black text-gray-700 flex items-center justify-between group"
                                >
                                   <span>{opt}</span>
                                   <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
                                </button>
                             ))}
                          </div>
                       </div>
                    </div>
                 </>
              ) : (
                 <div className="space-y-10 animate-in zoom-in duration-500">
                    <div className="w-32 h-32 bg-green-600 text-white rounded-[3rem] flex items-center justify-center mx-auto shadow-[0_40px_100px_-20px_rgba(22,163,74,0.4)]">
                       <Award size={64} />
                    </div>
                    <div className="space-y-4">
                       <h4 className="text-5xl font-black tracking-tighter">Wakoze neza!</h4>
                       <p className="text-2xl text-gray-500 font-bold">Ugaragaje ko uyu mwuga wa <span className="text-green-600">{trade.name}</span> ukubereye cyane.</p>
                    </div>
                    <div className="p-10 bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 inline-block px-16">
                       <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">Passion Score</p>
                       <p className="text-7xl font-black text-gray-950">98%</p>
                    </div>
                    <div className="flex justify-center gap-6 pt-10">
                       <button onClick={() => setQuizFinished(false)} className="px-10 py-6 bg-gray-100 text-gray-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gray-200 transition-all">Saba Ikizamini KindI</button>
                       <button className="px-10 py-6 bg-green-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-600/20">Kwiyandikisha nonaha</button>
                    </div>
                 </div>
              )}
           </div>
        )}

        {/* Tab Content: Ibikoresho & Lab */}
        {activeTab === 'ibikoresho' && (
           <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-24">
              <div className="flex flex-col lg:flex-row items-center gap-20">
                 <div className="flex-1 space-y-10">
                    <div className="space-y-6">
                       <h3 className="text-5xl font-black tracking-tighter">Igaraje & <br /><span className="text-green-600">Ikaraniro ry'Ubumenyi.</span></h3>
                       <p className="text-2xl text-gray-500 font-semibold leading-relaxed">Aho twigishiriza ni ahantu hateganijwe neza, hafite ibikoresho byose umunyeshuri akenera kugira ngo ashyire mu bikorwa ibyo yize mu ishuri (Theory).</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       {trade.tools.map((tool, i) => (
                          <div key={i} className="p-8 bg-white rounded-[3rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all space-y-4 group">
                             <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:text-white transition-all shadow-inner">
                                <Wrench size={28} />
                             </div>
                             <div className="space-y-1">
                                <p className="text-xl font-black text-gray-900">{tool.name}</p>
                                <p className="text-sm font-bold text-gray-500">{tool.description}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                 <div className="w-full lg:w-[500px] h-[700px] rounded-[5rem] overflow-hidden relative shadow-2xl group border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4s]" alt="workshop" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-12">
                       <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] w-full">
                          <p className="text-2xl font-black text-gray-900">Modern Lab 01</p>
                          <p className="text-sm font-bold text-gray-500">Fully equipped for {trade.code} students.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        )}

        {/* Tab Content: Gallery (Amafoto) */}
        {activeTab === 'amafoto' && (
           <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 space-y-16">
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                 {trade.gallery.map((img, i) => (
                    <div key={i} className="relative group rounded-[3.5rem] overflow-hidden cursor-pointer border-4 border-white shadow-xl hover:shadow-2xl transition-all break-inside-avoid">
                       <img src={img.url} className="w-full group-hover:scale-110 transition-transform duration-[3s]" alt={img.caption} />
                       <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                          <div className="space-y-2">
                             <p className="text-white font-black text-lg leading-tight">{img.caption}</p>
                             <div className="flex items-center space-x-2 text-green-400 font-black text-[10px] uppercase tracking-widest">
                                <ImageIcon size={14} />
                                <span>Garden TVET Moments</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}
      </div>
      
      {/* Floating Action Button for Support - Light Theme */}
      <button className="fixed bottom-12 right-12 w-20 h-20 bg-white border border-gray-100 text-green-600 rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 hover:bg-green-600 hover:text-white transition-all z-50 group">
         <Activity size={32} className="group-hover:rotate-12 transition-all" />
      </button>
    </div>
  );
};

export default TradeDetail;
