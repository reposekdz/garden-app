
import React from 'react';
import { 
  GraduationCap, Star, Target, Users, PenTool, Layout, BookOpen, 
  ChevronRight, Search, Bell, Download, Filter, Plus, Calendar as CalendarIcon,
  CheckCircle, AlertCircle, BarChart3, Activity, Layers
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, RadialBarChart, RadialBar, Legend 
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const DOSDashboard: React.FC = () => {
  const { t } = useLanguage();
  
  const classPerformance = [
    { name: 'SOD L5', avg: 85, target: 80 },
    { name: 'SOD L4', avg: 72, target: 80 },
    { name: 'BDC L5', avg: 78, target: 80 },
    { name: 'AUT L5', avg: 90, target: 80 },
  ];

  const syllabusTracking = [
    { name: 'SOD 5C', progress: 85, fill: '#3b82f6' },
    { name: 'BDC 4B', progress: 45, fill: '#22c55e' },
    { name: 'AUT 3A', progress: 68, fill: '#f59e0b' },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><Layers className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Academic Ops</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Portal y'Umuyobozi w'Amasomo - Systems Control</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl">
             <BookOpen size={18} />
             <span>View Syllabus</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-4 bg-green-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
             <Plus size={18} />
             <span>Assign Staff</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Avg Achievement', value: '82.1%', sub: 'Target 85%', icon: Star, color: 'text-yellow-500' },
          { label: 'Syllabus Comp.', value: '68%', sub: '+4% This Week', icon: Target, color: 'text-blue-500' },
          { label: 'Teaching Staff', value: '45/45', sub: 'Fully Allocated', icon: Users, color: 'text-green-500' },
          { label: 'Active Modules', value: '18', sub: 'Across 3 Trades', icon: Activity, color: 'text-purple-500' },
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
              <h4 className="text-2xl font-black tracking-tighter">Syllabus Coverage Tracking</h4>
              <div className="px-5 py-2 bg-gray-50 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-500">Live Feedback</div>
           </div>
           <div className="space-y-8">
              {syllabusTracking.map((s, i) => (
                <div key={i} className="space-y-3">
                   <div className="flex justify-between items-end">
                      <p className="text-lg font-black text-gray-900">{s.name}</p>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest">{s.progress}% Complete</p>
                   </div>
                   <div className="w-full h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${s.progress}%`, backgroundColor: s.fill }}></div>
                   </div>
                </div>
              ))}
           </div>
           <div className="pt-6 border-t border-gray-50">
              <button className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Generate Academic Report</button>
           </div>
        </div>

        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <h4 className="text-2xl font-black tracking-tighter">Staff Workload</h4>
           <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
              {[
                { name: 'Dr. Karasira Peter', load: '18h', status: 'Full' },
                { name: 'Mugisha Alice', load: '12h', status: 'Available' },
                { name: 'Gasana Eric', load: '20h', status: 'Overload' },
                { name: 'Umwali Solange', load: '15h', status: 'Full' }
              ].map((staff, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between group hover:bg-gray-950 hover:text-white transition-all">
                   <div className="space-y-1">
                      <p className="text-sm font-black tracking-tight leading-none">{staff.name}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-gray-500">Lecturer • {staff.load}/week</p>
                   </div>
                   <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${staff.status === 'Overload' ? 'bg-red-500 text-white' : 'bg-white border border-gray-100 text-gray-950'}`}>{staff.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default DOSDashboard;
