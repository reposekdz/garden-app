
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, Hammer, Layers, Image as ImageIcon, Briefcase, 
  CheckCircle2, X, ChevronRight, GraduationCap, Target, Award, Play
} from 'lucide-react';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'levels' | 'tools' | 'gallery'>('levels');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImageIndex]);

  if (!trade) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 px-4 bg-gray-900 text-white">
        <h2 className="text-4xl font-black">Trade not found</h2>
        <Link to="/" className="text-green-400 font-bold hover:underline flex items-center space-x-2">
           <ChevronLeft size={20} />
           <span>Return to Hub</span>
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % trade.gallery.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + trade.gallery.length) % trade.gallery.length);
  };

  return (
    <div className="min-h-screen bg-white pb-32 w-full">
      {/* Immersive Edge-to-Edge Banner */}
      <div className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden">
        <img src={trade.image} className="w-full h-full object-cover scale-110 blur-[1px]" alt={trade.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/60 flex items-end p-8 sm:p-20">
          <div className="w-full">
            <Link to="/" className="inline-flex items-center space-x-3 text-white/90 hover:text-white mb-10 transition-all group">
              <div className="p-3 bg-white/10 backdrop-blur-3xl rounded-full border border-white/20 group-hover:bg-white/20">
                <ChevronLeft size={24} />
              </div>
              <span className="font-black text-xl">Exit Trade View</span>
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <span className="px-6 py-2 bg-green-500 text-white text-xs font-black uppercase rounded-full tracking-widest inline-block shadow-2xl">{trade.code} CERTIFIED</span>
                    <div className="flex items-center space-x-2 text-white/60 font-black text-xs uppercase tracking-widest">
                        <Award size={14} />
                        <span>National Standard</span>
                    </div>
                </div>
                <h1 className="text-6xl sm:text-[10rem] font-black text-gray-900 leading-[0.8] tracking-tighter drop-shadow-2xl">{trade.name}</h1>
                <p className="text-gray-600 max-w-4xl text-xl sm:text-3xl font-medium leading-relaxed">{trade.description}</p>
              </div>
              <div className="flex-shrink-0">
                  <button className="px-12 py-6 bg-gray-900 text-white rounded-[2.5rem] font-black text-xl hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all flex items-center space-x-4">
                    <span>Enrolment Portal</span>
                    <Play size={20} fill="currentColor" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-12 lg:px-20 mt-24">
        {/* Enriched Content: Career & Core Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="bg-gray-50 p-12 sm:p-20 rounded-[4rem] sm:rounded-[6rem] space-y-12">
                <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl">
                        <Target size={40} />
                    </div>
                    <h3 className="text-4xl font-black tracking-tighter">Career Outcomes</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {trade.careerProspects.map((career, i) => (
                        <div key={i} className="flex items-center space-x-4 group cursor-default">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </div>
                            <span className="text-xl font-black text-gray-700">{career}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-950 p-12 sm:p-20 rounded-[4rem] sm:rounded-[6rem] space-y-12 text-white">
                <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-green-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl">
                        <GraduationCap size={40} />
                    </div>
                    <h3 className="text-4xl font-black tracking-tighter">Core Learning Modules</h3>
                </div>
                <div className="space-y-6">
                    {trade.coreModules.map((module, i) => (
                        <div key={i} className="flex items-center space-x-6 p-6 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all group">
                            <span className="text-green-500 font-black text-2xl group-hover:scale-125 transition-transform">0{i+1}</span>
                            <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{module}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Section Tabs */}
        <div className="bg-gray-50 rounded-[3rem] sm:rounded-[5rem] p-4 sm:p-8 flex flex-wrap gap-4 sm:gap-10 mb-20 border border-gray-100 shadow-inner">
          {[
            { id: 'levels', label: 'Academic Progression', icon: Layers },
            { id: 'tools', label: 'Mastery Tools', icon: Hammer },
            { id: 'gallery', label: 'Practical Gallery', icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[200px] flex items-center justify-center space-x-4 py-6 sm:py-10 rounded-[2rem] sm:rounded-[3.5rem] font-black text-lg sm:text-2xl transition-all shadow-sm ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 shadow-2xl border border-gray-100'
                    : 'text-gray-400 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                <Icon size={32} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Areas */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {activeTab === 'levels' && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {trade.levels.map((level, idx) => (
                <div key={level.id} className="bg-white p-12 sm:p-16 rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-4 duration-500">
                  <div className="w-20 h-20 rounded-[1.5rem] bg-green-50 text-green-600 flex items-center justify-center mb-10 group-hover:bg-green-500 group-hover:text-white transition-all duration-700 shadow-inner">
                    <span className="font-black text-4xl">{idx + 3}</span>
                  </div>
                  <h3 className="text-4xl font-black mb-6 tracking-tighter">{level.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-10 text-xl font-medium">{level.description}</p>
                  <ul className="space-y-6 pt-10 border-t border-gray-50">
                    {['National Certification', 'Live Projects', 'Advanced Internships'].map(item => (
                      <li key={item} className="flex items-center space-x-4 text-lg font-black text-gray-800">
                        <CheckCircle2 size={24} className="text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {trade.tools.map((tool) => (
                <div key={tool.name} className="bg-gray-50 p-12 rounded-[4rem] text-center hover:bg-white hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 border border-transparent hover:border-gray-100">
                  <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-700 shadow-2xl">
                    <Briefcase size={48} />
                  </div>
                  <h4 className="text-3xl font-black mb-4 tracking-tighter">{tool.name}</h4>
                  <p className="text-gray-500 text-lg font-medium leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {trade.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedImageIndex(idx)}
                  className="group relative h-[30rem] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white cursor-pointer hover:rotate-2 transition-all duration-500 hover:scale-105"
                >
                  <img src={img} className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-12">
                    <p className="text-white font-black text-2xl tracking-tighter">{trade.name} Focus</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Light Gallery Modal (Lightbox) */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-300">
          <button 
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-10 right-10 p-6 bg-white/10 hover:bg-white text-white hover:text-gray-900 rounded-full transition-all z-[110]"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-10 p-6 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all z-[110]"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative max-w-[90vw] max-h-[85vh] overflow-hidden rounded-[3rem] shadow-2xl">
            <img 
              src={trade.gallery[selectedImageIndex]} 
              className="w-full h-full object-contain animate-in zoom-in-95 duration-500" 
              alt={`Gallery image ${selectedImageIndex + 1}`} 
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-10 py-4 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full text-white font-black text-xl tracking-widest uppercase">
                {selectedImageIndex + 1} / {trade.gallery.length}
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-10 p-6 bg-white/5 hover:bg-white/20 text-white rounded-full transition-all z-[110]"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TradeDetail;
