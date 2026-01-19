
import React, { useState } from 'react';
import { 
  GraduationCap, Star, Target, Users, PenTool, Layout, BookOpen, 
  ChevronRight, Search, Bell, Download, Filter, Plus, Calendar as CalendarIcon,
  CheckCircle, AlertCircle, BarChart3, Activity, Layers, UserPlus, UserX, ShieldCheck,
  TrendingUp, Clock, Book, UserCheck, Shield, MoreHorizontal, PieChart as PieIcon,
  // Fix: Import missing Award icon
  Award
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, LineChart, Line, AreaChart, Area, PieChart, Pie
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const DOSDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeWorkflow, setActiveWorkflow] = useState<'registry' | 'syllabus' | 'attendance'>('registry');
  
  const staffAttendance = [
    { name: 'Mon', present: 22, late: 2 },
    { name: 'Tue', present: 24, late: 0 },
    { name: 'Wed', present: 21, late: 3 },
    { name: 'Thu', present: 23, late: 1 },
    { name: 'Fri', present: 20, late: 4 },
  ];

  const curriculumData = [
    { name: 'Covered', value: 75, color: '#3b82f6' },
    { name: 'Pending', value: 25, color: 'rgba(255,255,255,0.05)' }
  ];

  return (
    <div className="p-8 lg:p-16 space-y-16 bg-[#f4f5f7] min-h-screen font-['Plus_Jakarta_Sans']">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <div className="p-5 bg-white shadow-xl border border-gray-100 rounded-[1.8rem] text-gray-950"><Layers size={32} /></div>
            <div>
               <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight">Academic Engine</h1>
               <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>High-Performance Node</span>
               </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
             <BookOpen size={18} />
             <span>Syllabus Audit</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-5 bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
             <UserPlus size={18} />
             <span>Deploy Staff</span>
          </button>
        </div>
      </header>

      {/* Primary Analytics Rings & Lines */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {[
          { label: 'Syllabus Pulse', value: '75%', icon: PieIcon, color: '#3b82f6', isRing: true },
          { label: 'Academic Standing', value: 'A-', icon: Award, color: '#22c55e', isArea: true },
          { label: 'Staff Efficiency', value: '92%', icon: Activity, color: '#a855f7' },
          { label: 'System Uptime', value: '99.9%', icon: ShieldCheck, color: '#64748b' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
             <div className="relative z-10 flex justify-between">
                <div className="space-y-1">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
                </div>
                <div className="w-16 h-16 opacity-10 group-hover:opacity-100 transition-opacity">
                   {stat.isRing && (
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie data={curriculumData} cx="50%" cy="50%" innerRadius={20} outerRadius={30} dataKey="value" startAngle={90} endAngle={-270}>
                              <Cell fill={stat.color} />
                              <Cell fill="#f1f5f9" />
                           </Pie>
                        </PieChart>
                     </ResponsiveContainer>
                   )}
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <div className="flex justify-between items-center">
              <h4 className="text-2xl font-black tracking-tighter text-gray-950">Staff Attendance Optimization</h4>
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                 <span className="text-[9px] font-black uppercase text-blue-600 tracking-widest">Live Flow</span>
              </div>
           </div>
           <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={staffAttendance}>
                    <defs>
                       <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                    <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)'}} />
                    <Area type="monotone" dataKey="present" stroke="#3b82f6" strokeWidth={5} fill="url(#colorPresent)" dot={{r: 6, fill: '#3b82f6', strokeWidth: 3, stroke: '#fff'}} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-gray-950 p-12 rounded-[4rem] shadow-2xl space-y-10 flex flex-col justify-between">
           <div className="space-y-6">
              <h4 className="text-2xl font-black tracking-tighter text-white">Academic Health Index</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Real-time aggregation of class averages across all technical divisions.</p>
           </div>
           <div className="space-y-4">
              {[
                { label: 'Software Dev', val: 88, color: '#3b82f6' },
                { label: 'Construction', val: 72, color: '#22c55e' },
                { label: 'Automotive', val: 84, color: '#f59e0b' }
              ].map((division, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-white/60">{division.label}</span>
                      <span className="text-white">{division.val}%</span>
                   </div>
                   <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${division.val}%`, backgroundColor: division.color }}></div>
                   </div>
                </div>
              ))}
           </div>
           <button className="w-full py-5 bg-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">Generate Audit Report</button>
        </div>
      </div>

      <footer className="flex justify-between items-center text-gray-400">
         <div className="flex items-center space-x-4">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Academic Control Node V3.5 (Dimmed)</span>
         </div>
      </footer>
    </div>
  );
};

export default DOSDashboard;
