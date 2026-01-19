
import React from 'react';
import { 
  GraduationCap, Star, Target, Users, PenTool, Layout, BookOpen, 
  ChevronRight, Search, Bell, Download, Filter, Plus, Calendar as CalendarIcon,
  CheckCircle, AlertCircle
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, RadialBarChart, RadialBar, Legend 
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const DOSDashboard: React.FC = () => {
  const { t } = useLanguage();
  const classPerformance = [
    { name: 'Software', avg: 85 },
    { name: 'Construction', avg: 72 },
    { name: 'Auto Engine', avg: 78 },
    { name: 'Electricity', avg: 90 },
    { name: 'Welding', avg: 65 },
  ];

  const syllabusData = [
    { name: 'SOD 3', p: 85, fill: '#22c55e' },
    { name: 'BDC 4', p: 42, fill: '#3b82f6' },
    { name: 'AUT 5', p: 92, fill: '#ef4444' },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><GraduationCap className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">{t('academics')}</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Umuyobozi w'Amasomo n'Inyigisho</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all">
             <Plus size={18} />
             <span>Gahunda Nshya</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Avg School Grade', value: '78.4%', sub: 'Target 80%', icon: Star, color: 'text-yellow-500' },
          { label: 'Syllabus Comp.', value: '64%', sub: 'In Progress', icon: Target, color: 'text-blue-500' },
          { label: 'Teacher Load', value: '42/45', sub: 'Assigned', icon: Users, color: 'text-green-500' },
          { label: 'Assessments', value: '154', sub: 'This Term', icon: PenTool, color: 'text-purple-500' },
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
           <h4 className="text-2xl font-black tracking-tighter">Performance Heatmap by Trade</h4>
           <div className="h-[400px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={classPerformance}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                 <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem'}} />
                 <Bar dataKey="avg" radius={[10, 10, 0, 0]} fill="#3b82f6" />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Academic Calendar (NEW) */}
        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <h4 className="text-2xl font-black tracking-tighter">Academic Calendar</h4>
           <div className="space-y-6">
              {[
                { event: 'Mid-term Exams', date: 'Oct 12 - 18', type: 'Exam' },
                { event: 'Workshop Audit', date: 'Oct 25', type: 'Audit' },
                { event: 'Graduation Prep', date: 'Nov 02', type: 'Meeting' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-3xl transition-all">
                   <div className="p-3 bg-gray-950 text-white rounded-2xl"><CalendarIcon size={20} /></div>
                   <div>
                      <p className="font-black text-gray-900">{item.event}</p>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.date} • {item.type}</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:shadow-xl transition-all">Edit Calendar</button>
        </div>
      </div>
    </div>
  );
};

export default DOSDashboard;
