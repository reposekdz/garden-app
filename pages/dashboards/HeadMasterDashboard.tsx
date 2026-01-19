
import React from 'react';
import { 
  ShieldCheck, TrendingUp, Users, Award, Zap, Download, Calendar, 
  MessageSquare, Star, Activity, Briefcase, Globe, Target, ArrowUpRight,
  Shield, Bell, PieChart as PieIcon, Layout, Monitor, Heart, Sparkles, Filter, MoreHorizontal,
  ChevronRight, Bookmark, Plus
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area,
  PieChart, Pie, Cell as ReCell, LineChart, Line
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const HeadMasterDashboard: React.FC = () => {
  const { t } = useLanguage();

  const yearlyData = [
    { name: '2020', students: 800, score: 75, investment: 120 },
    { name: '2021', students: 1000, score: 78, investment: 180 },
    { name: '2022', students: 1200, score: 82, investment: 250 },
    { name: '2023', students: 1500, score: 85, investment: 400 },
  ];

  const strategicHealth = [
    { name: 'CBT Accreditation', value: 95, color: '#22c55e' },
    { name: 'Infrastructure', value: 65, color: '#3b82f6' },
    { name: 'Financial Surplus', value: 42, color: '#f59e0b' }
  ];

  return (
    <div className="p-8 lg:p-16 space-y-16 bg-[#f4f5f7] min-h-screen font-['Plus_Jakarta_Sans']">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <div className="p-5 bg-white shadow-xl border border-gray-100 rounded-[1.8rem] text-gray-950"><Monitor size={32} /></div>
            <div>
               <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight">Executive Control</h1>
               <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>High-Fidelity Monitoring Node</span>
               </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">
             <Download size={18} />
             <span>Executive Audit</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
             <Bell size={18} />
             <span>Global Broadcast</span>
          </button>
        </div>
      </header>

      {/* Strategic Ring Barometers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {strategicHealth.map((goal, i) => (
           <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 flex items-center justify-between group overflow-hidden">
              <div className="space-y-1 relative z-10">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{goal.name}</p>
                 <h4 className="text-3xl font-black text-gray-950 tracking-tighter">{goal.value}%</h4>
              </div>
              <div className="w-24 h-24">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={[{v: goal.value}, {v: 100 - goal.value}]} cx="50%" cy="50%" innerRadius={30} outerRadius={40} dataKey="v" startAngle={90} endAngle={-270}>
                          <Cell fill={goal.color} />
                          <Cell fill="#f1f5f9" />
                       </Pie>
                    </PieChart>
                 </ResponsiveContainer>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
         {/* Strategic Multi-Line Growth */}
         <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h4 className="text-2xl font-black tracking-tighter text-gray-950">Growth Matrix Forecast</h4>
               <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-[8px] font-black uppercase text-gray-400">Students</span></div>
                  <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div><span className="text-[8px] font-black uppercase text-gray-400">KPI Score</span></div>
               </div>
            </div>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={yearlyData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                     <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)'}} />
                     <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={5} dot={{r: 6, fill: '#3b82f6', strokeWidth: 4, stroke: '#fff'}} />
                     <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={5} dot={{r: 6, fill: '#22c55e', strokeWidth: 4, stroke: '#fff'}} />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-gray-950 p-12 rounded-[4rem] flex flex-col justify-between text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full"></div>
            <div className="space-y-8 relative z-10">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center"><Target size={32} /></div>
               <h4 className="text-4xl font-black tracking-tighter leading-tight italic">Vision 2026 <br />"Elite Digital <br />Pioneer"</h4>
            </div>
            <div className="pt-10 space-y-4 relative z-10">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Global Ranking Target</p>
               <div className="flex items-baseline space-x-2">
                  <span className="text-6xl font-black text-white">#12</span>
                  <span className="text-green-500 text-sm font-black">+4 Positions</span>
               </div>
            </div>
         </div>
      </div>

      <footer className="flex justify-between items-center text-gray-400">
         <div className="flex items-center space-x-4">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Institutional Command Matrix V4.5</span>
         </div>
      </footer>
    </div>
  );
};

export default HeadMasterDashboard;
