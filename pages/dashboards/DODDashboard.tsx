
import React, { useState } from 'react';
import { 
  ClipboardList, UserCheck, ShieldAlert, Activity, Star, 
  Search, Bell, Filter, Plus, ChevronRight, MessageSquare, Shield,
  History, UserX, MapPin, Check, X, FileCheck
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const DODDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'attendance' | 'passes'>('attendance');
  
  const attendanceData = [
    { day: 'Mon', rate: 95 },
    { day: 'Tue', rate: 98 },
    { day: 'Wed', rate: 92 },
    { day: 'Thu', rate: 94 },
    { day: 'Fri', rate: 88 },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><ClipboardList className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">{t('discipline')}</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Ushinzwe Ikinyabupfura n'Imyitwarire</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-red-500/20">
             <ShieldAlert size={18} />
             <span>Tanga Raporo Nshya</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Attendance Rate', value: '94.2%', sub: 'Current Term', icon: UserCheck, color: 'text-green-500' },
          { label: 'Incidents Today', value: '0', sub: 'Flagged', icon: ShieldAlert, color: 'text-red-500' },
          { label: 'Gate Passes', value: '18', sub: 'Authorized', icon: Activity, color: 'text-blue-500' },
          { label: 'Conduct Avg', value: 'A-', sub: 'School-wide', icon: Star, color: 'text-yellow-500' },
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

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <div className="flex justify-between items-center">
             <h4 className="text-2xl font-black tracking-tighter">Attendance Variance</h4>
             <div className="flex space-x-4">
                <button onClick={() => setActiveTab('attendance')} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'attendance' ? 'bg-gray-950 text-white' : 'text-gray-400 hover:text-gray-600'}`}>Overview</button>
                <button onClick={() => setActiveTab('passes')} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'passes' ? 'bg-gray-950 text-white' : 'text-gray-400 hover:text-gray-600'}`}>Gate Passes</button>
             </div>
           </div>
           
           {activeTab === 'attendance' ? (
             <div className="h-[400px] animate-in fade-in duration-500">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attendanceData}>
                     <defs>
                        <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                     <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none'}} />
                     <Area type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={4} fill="url(#colorRate)" />
                  </AreaChart>
               </ResponsiveContainer>
             </div>
           ) : (
             <div className="space-y-4 animate-in slide-in-from-right-8 duration-500">
                {[
                  { student: 'Habimana Jean', time: '14:30', reason: 'Medical Checkup', status: 'Pending' },
                  { student: 'Umuhoza Aline', time: '16:00', reason: 'Family Emergency', status: 'Approved' },
                  { student: 'Gasana Eric', time: '09:00', reason: 'Bank Visit', status: 'Pending' }
                ].map((pass, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-blue-500 transition-all">
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><FileCheck size={20} /></div>
                        <div>
                           <p className="font-black text-gray-900">{pass.student}</p>
                           <p className="text-[10px] font-black text-gray-400 uppercase">{pass.reason} • {pass.time}</p>
                        </div>
                     </div>
                     <div className="flex space-x-2">
                        {pass.status === 'Pending' ? (
                          <>
                            <button className="p-3 bg-white text-green-500 rounded-xl hover:bg-green-500 hover:text-white transition-all shadow-sm"><Check size={18} /></button>
                            <button className="p-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"><X size={18} /></button>
                          </>
                        ) : (
                          <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full">Authorized</span>
                        )}
                     </div>
                  </div>
                ))}
             </div>
           )}
        </div>

        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <h4 className="text-2xl font-black tracking-tighter">Recent Discipline Logs</h4>
           <div className="space-y-4">
              {[
                { student: 'Habimana Bosco', reason: 'Late Arrival', date: 'Today, 08:45', severity: 'Minor' },
                { student: 'Umuhoza Aline', reason: 'Dress Code', date: 'Yesterday', severity: 'Warning' },
                { student: 'Gasana Eric', reason: 'Gate Jump', date: 'Oct 10', severity: 'Major' }
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl hover:bg-red-50 transition-all group">
                   <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white text-gray-400 group-hover:text-red-500 rounded-2xl"><UserX size={20} /></div>
                      <div>
                         <p className="font-black text-gray-900">{log.student}</p>
                         <p className="text-[10px] font-black text-gray-400 uppercase">{log.reason} • {log.date}</p>
                      </div>
                   </div>
                   <span className={`px-3 py-1 text-[9px] font-black uppercase rounded-full ${log.severity === 'Major' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{log.severity}</span>
                </div>
              ))}
           </div>
           <button className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 transition-all">View All History</button>
        </div>
      </div>
    </div>
  );
};

export default DODDashboard;
