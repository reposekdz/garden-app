
import React from 'react';
import { 
  GraduationCap, Star, Target, Users, PenTool, Layout, BookOpen, 
  ChevronRight, Search, Bell, Download, Filter, Plus
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Cell, RadialBarChart, RadialBar, Legend 
} from 'recharts';

const DOSDashboard: React.FC = () => {
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
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Academic Control</h1>
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

        <div className="bg-gray-950 p-12 rounded-[4rem] text-white space-y-10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform"><Target size={200} /></div>
           <h4 className="text-2xl font-black tracking-tighter relative z-10">Module Progress</h4>
           <div className="space-y-8 relative z-10">
              {syllabusData.map((item, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                      <span>{item.name}</span>
                      <span>{item.p}%</span>
                   </div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full" style={{width: `${item.p}%`, backgroundColor: item.fill}}></div>
                   </div>
                </div>
              ))}
           </div>
           <button className="w-full py-5 bg-white text-gray-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">Syllabus Audit</button>
        </div>
      </div>
    </div>
  );
};

export default DOSDashboard;
