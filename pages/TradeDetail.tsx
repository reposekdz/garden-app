
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Hammer, Layers, Image as ImageIcon, Briefcase, CheckCircle2 } from 'lucide-react';
import { TRADES } from '../constants';

const TradeDetail: React.FC = () => {
  const { id } = useParams();
  const trade = TRADES.find((t) => t.id === id);
  const [activeTab, setActiveTab] = useState<'levels' | 'tools' | 'gallery'>('levels');

  if (!trade) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4 px-4">
        <h2 className="text-3xl font-black">Trade not found</h2>
        <Link to="/" className="text-blue-600 font-bold hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 w-full">
      {/* Full Bleed Banner */}
      <div className="relative h-80 sm:h-[60vh] w-full">
        <img src={trade.image} className="w-full h-full object-cover" alt={trade.name} />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-end p-6 sm:p-12">
          <div className="w-full">
            <Link to="/" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 sm:mb-8 transition-colors group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-sm sm:text-base">Back to Overview</span>
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="px-4 py-1.5 bg-green-500 text-white text-[10px] font-black uppercase rounded-lg tracking-widest inline-block">{trade.code}</span>
                <h1 className="text-4xl sm:text-7xl font-black text-white leading-tight tracking-tighter">{trade.name}</h1>
                <p className="text-gray-300 max-w-3xl text-base sm:text-xl font-medium leading-relaxed">{trade.description}</p>
              </div>
              <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 rounded-2xl sm:rounded-[2rem] font-black text-base sm:text-lg hover:bg-green-400 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl flex-shrink-0">
                Enroll Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content attached to screen edges with minimal margins */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-12">
        {/* Interactive Full Width Tabs */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl p-3 sm:p-5 flex flex-wrap gap-3 sm:gap-6 mb-12 border border-gray-100">
          {[
            { id: 'levels', label: 'Academic Levels', icon: Layers },
            { id: 'tools', label: 'Professional Tools', icon: Hammer },
            { id: 'gallery', label: 'Trade Gallery', icon: ImageIcon },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[140px] flex items-center justify-center space-x-3 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-black text-xs sm:text-base transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon size={20} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area Stretching Width */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === 'levels' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
              {trade.levels.map((level, idx) => (
                <div key={level.id} className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-8 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                    <span className="font-black text-2xl">{idx + 3}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">{level.name}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base font-medium">{level.description}</p>
                  <ul className="space-y-4">
                    {['Advanced Modules', 'Practical Projects', 'Field Attachment'].map(item => (
                      <li key={item} className="flex items-center space-x-3 text-sm font-bold text-gray-700">
                        <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8">
              {trade.tools.map((tool) => (
                <div key={tool.name} className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 text-center hover:bg-green-50 hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-[1.5rem] sm:rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <Briefcase size={32} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-black mb-3">{tool.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {trade.gallery.map((img, idx) => (
                <div key={idx} className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white">
                  <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                    <p className="text-white font-black text-xl tracking-tight">{trade.name} Session</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeDetail;
