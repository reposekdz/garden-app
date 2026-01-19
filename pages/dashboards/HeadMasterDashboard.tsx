
import React from 'react';
import { 
  ShieldCheck, TrendingUp, Users, Award, Zap, Download, Calendar, 
  MessageSquare, Star, Activity, Briefcase, Globe, Target, ArrowUpRight
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area 
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const HeadMasterDashboard: React.FC = () => {
  const { t } = useLanguage();

  const yearlyData = [
    { name: '2020', students: 800, performance: 75 },
    { name: '2021', students: 1000, performance: 78 },
    { name: '2022', students: 1200, performance: 82 },
    { name: '2023', students: 1500, performance: 85 },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><ShieldCheck className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Executive Office</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Ubuyobozi Bukuru bwa Garden TVET - Global Oversight</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
             <Download size={18} />
             <span>School Report</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Student Growth', value: '+24%', sub: 'Year over Year', icon: TrendingUp, color: 'text-green-500' },
          { label: 'Staff Efficiency', value: '92%', sub: 'Optimized', icon: Zap, color: 'text-orange-500' },
          { label: 'Partner Orgs', value: '50+', icon: Globe, sub: 'International', color: 'text-blue-500' },
          { label: 'Academic Standing', value: 'Rank #4', sub: 'In Rwanda TVETs', icon: Award, color: 'text-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden relative">
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gray-50 ${stat.color}`}><stat.icon size={26} /></div>
                <span className="px-3 py-1 bg-gray-50 text-[10px] font-black text-gray-400 uppercase rounded-full">{stat.sub}</span>
             </div>
             <div className="relative z-10">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
         <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
            <h4 className="text-2xl font-black tracking-tighter">School Population Growth</h4>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={yearlyData}>
                    <defs>
                       <linearGradient id="colorPop" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                    <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none'}} />
                    <Area type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={4} fill="url(#colorPop)" />
                 </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
            <h4 className="text-2xl font-black tracking-tighter">Academic Excellence Index</h4>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyData}>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                     <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem', border: 'none'}} />
                     <Bar dataKey="performance" fill="#22c55e" radius={[10, 10, 0, 0]}>
                        {yearlyData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={index === 3 ? '#22c55e' : '#e2e8f0'} />
                        ))}
                     </Bar>
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};

export default HeadMasterDashboard;
