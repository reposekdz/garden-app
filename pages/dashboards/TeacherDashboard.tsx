
import React, { useState, useMemo } from 'react';
import { 
  Book, PenTool, Layout, Users, FileText, Star, 
  Search, Bell, Plus, ChevronRight, MessageSquare, StarHalf, Monitor, BookOpen, UserCheck,
  Filter, ArrowUpRight, GraduationCap, Clock, MoreHorizontal, X, Phone, Mail, User, ShieldCheck,
  Activity, Calendar, BarChart3, Clipboard
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

interface Student {
  id: string;
  name: string;
  class: string;
  grade: number;
  attendance: string;
  email: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  dob: string;
  gender: string;
  modules: { name: string; score: number }[];
}

const TeacherDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  
  const classStats = [
    { name: 'SOD 3A', students: 45, avg: 82 },
    { name: 'SOD 4B', students: 38, avg: 75 },
    { name: 'SOD 5C', students: 42, avg: 88 },
  ];

  const students: Student[] = useMemo(() => [
    { 
      id: 'GT-001', name: 'Habimana Jean Bosco', class: 'SOD 5C', grade: 92, attendance: '98%',
      email: 'j.habimana@student.gardentvet.rw', phone: '+250 788 111 222',
      parentName: 'Habimana Silas', parentPhone: '+250 788 333 444', parentEmail: 'silas.h@gmail.com',
      dob: '2004-05-12', gender: 'Male',
      modules: [
        { name: 'JS Frameworks', score: 95 },
        { name: 'Cloud Computing', score: 88 },
        { name: 'UI/UX Design', score: 92 },
        { name: 'DevOps Intro', score: 93 }
      ]
    },
    { 
      id: 'GT-012', name: 'Mukamana Solange', class: 'SOD 5C', grade: 88, attendance: '95%',
      email: 's.mukamana@student.gardentvet.rw', phone: '+250 788 555 666',
      parentName: 'Karasira Leonie', parentPhone: '+250 788 777 888', parentEmail: 'leonie.k@yahoo.fr',
      dob: '2005-02-28', gender: 'Female',
      modules: [
        { name: 'JS Frameworks', score: 85 },
        { name: 'Cloud Computing', score: 92 },
        { name: 'UI/UX Design', score: 88 },
        { name: 'DevOps Intro', score: 87 }
      ]
    },
    { 
      id: 'GT-045', name: 'Gasana Eric', class: 'SOD 5C', grade: 84, attendance: '92%',
      email: 'e.gasana@student.gardentvet.rw', phone: '+250 788 999 000',
      parentName: 'Gasana Callixte', parentPhone: '+250 788 222 333', parentEmail: 'gasana.c@gmail.com',
      dob: '2004-11-05', gender: 'Male',
      modules: [
        { name: 'JS Frameworks', score: 82 },
        { name: 'Cloud Computing', score: 80 },
        { name: 'UI/UX Design', score: 86 },
        { name: 'DevOps Intro', score: 88 }
      ]
    }
  ], []);

  const filteredStudents = useMemo(() => {
    return students.filter(s => s.name.toLowerCase().includes(studentSearch.toLowerCase()));
  }, [studentSearch, students]);

  return (
    <div className="p-8 lg:p-16 space-y-16 relative">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><Book className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Classroom Portal</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Mwarimu - My Classes & Students</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-green-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
             <Plus size={18} />
             <span>Tanga Ikoroshwa (Test)</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Assigned Classes', value: '3', sub: 'Active', icon: Layout, color: 'text-blue-500' },
          { label: 'Total Students', value: '125', sub: 'Managed', icon: Users, color: 'text-indigo-500' },
          { label: 'Avg Attendance', value: '92%', sub: 'Healthy', icon: UserCheck, color: 'text-green-500' },
          { label: 'Pending Grades', value: '14', sub: 'Review needed', icon: PenTool, color: 'text-orange-500' },
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
        {/* Performance Bar Chart */}
        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <h4 className="text-2xl font-black tracking-tighter">Class Performance Overview</h4>
           <div className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={classStats}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 900}} />
                 <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem'}} />
                 <Bar dataKey="avg" radius={[10, 10, 0, 0]} fill="#3b82f6" />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Lesson Planner (NEW SECTION) */}
        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <div className="flex justify-between items-center">
              <h4 className="text-2xl font-black tracking-tighter">Lesson Planner</h4>
              <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-green-500 transition-colors"><Plus size={18} /></button>
           </div>
           <div className="space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar pr-4">
              {[
                { title: 'React State Management', time: 'Tomorrow, 08:30', class: 'SOD 5C', status: 'Draft' },
                { title: 'Database Normalization', time: 'Wednesday, 10:45', class: 'SOD 4B', status: 'Ready' },
                { title: 'UI UX Prototyping', time: 'Friday, 14:00', class: 'SOD 3A', status: 'Reviewing' }
              ].map((plan, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-3xl flex items-center justify-between group hover:bg-gray-950 hover:text-white transition-all">
                   <div className="space-y-1">
                      <p className="text-lg font-black tracking-tight leading-none">{plan.title}</p>
                      <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-gray-500">
                         <Clock size={12} />
                         <span>{plan.time} • {plan.class}</span>
                      </div>
                   </div>
                   <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest">{plan.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Student Management Section */}
      <section className="bg-white p-12 lg:p-16 rounded-[4rem] border border-gray-100 shadow-sm space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-tighter">{t('students')}</h2>
              <p className="text-gray-500 font-medium">Manage grades and attendance for your assigned students.</p>
           </div>
           <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80 group">
                 <input 
                    type="text" 
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder="Search students by name..." 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 font-bold text-sm transition-all"
                 />
                 <Search className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500" size={18} />
              </div>
              <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 transition-all"><Filter size={20} /></button>
        </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-4">
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b border-gray-100">
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Student ID</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Full Name</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Class</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Avg Grade</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Attendance</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {filteredStudents.map((student, i) => (
                    <tr key={student.id} className="group hover:bg-gray-50 transition-colors">
                       <td 
                        onClick={() => setSelectedStudent(student)}
                        className="py-6 px-4 font-black text-sm text-gray-400 cursor-pointer hover:text-green-500 transition-colors"
                       >
                        {student.id}
                       </td>
                       <td 
                        onClick={() => setSelectedStudent(student)}
                        className="py-6 px-4 cursor-pointer"
                       >
                          <div className="flex items-center space-x-3">
                             <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center font-black text-[10px]">{student.name.charAt(0)}</div>
                             <span className="font-black text-gray-900 group-hover:text-green-500 transition-colors">{student.name}</span>
                          </div>
                       </td>
                       <td className="py-6 px-4 font-bold text-sm text-gray-500">{student.class}</td>
                       <td className="py-6 px-4">
                          <div className="flex items-center space-x-2">
                             <div className={`w-2 h-2 rounded-full ${student.grade >= 80 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                             <span className="font-black text-gray-900">{student.grade}%</span>
                          </div>
                       </td>
                       <td className="py-6 px-4 font-bold text-sm text-gray-500">{student.attendance}</td>
                       <td className="py-6 px-4 text-right">
                          <button 
                            onClick={() => setSelectedStudent(student)}
                            className="p-2 text-gray-300 hover:text-gray-950 hover:bg-white rounded-lg transition-all"
                          >
                            <MoreHorizontal size={18} />
                          </button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-950/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-5xl h-[90vh] sm:h-auto max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden relative flex flex-col sm:flex-row">
            <button onClick={() => setSelectedStudent(null)} className="absolute top-6 right-6 z-20 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 transition-all"><X size={20} /></button>
            <div className="w-full sm:w-80 bg-gray-50 p-10 flex flex-col items-center text-center space-y-6 border-b sm:border-b-0 sm:border-r border-gray-100 overflow-y-auto">
               <div className="w-32 h-32 bg-indigo-100 text-indigo-500 rounded-[2.5rem] flex items-center justify-center font-black text-4xl shadow-inner border-4 border-white">{selectedStudent.name.charAt(0)}</div>
               <div className="space-y-1"><h3 className="text-2xl font-black tracking-tighter text-gray-950">{selectedStudent.name}</h3><p className="text-xs font-black text-gray-400 uppercase tracking-widest">{selectedStudent.id}</p></div>
               <div className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">Level 5 {selectedStudent.class.split(' ')[0]}</div>
               <div className="w-full pt-6 space-y-4 text-left">
                  <div className="flex items-center space-x-3 text-gray-500"><div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400"><Calendar size={14} /></div><span className="text-xs font-bold">Born: {selectedStudent.dob}</span></div>
                  <div className="flex items-center space-x-3 text-gray-500"><div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400"><User size={14} /></div><span className="text-xs font-bold">Gender: {selectedStudent.gender}</span></div>
               </div>
               <div className="w-full p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4">
                  <div className="flex justify-between items-center"><span className="text-[10px] font-black text-gray-400 uppercase">Avg Performance</span><span className="text-xl font-black text-green-500">{selectedStudent.grade}%</span></div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-green-500" style={{width: `${selectedStudent.grade}%`}}></div></div>
               </div>
            </div>
            <div className="flex-1 p-8 lg:p-12 overflow-y-auto custom-scrollbar space-y-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-gray-950"><Phone size={18} className="text-blue-500" /><h4 className="text-sm font-black uppercase tracking-widest">Student Contact</h4></div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                       <div className="flex justify-between items-center"><span className="text-[10px] font-black text-gray-400 uppercase">Phone</span><span className="text-xs font-bold text-gray-900">{selectedStudent.phone}</span></div>
                       <div className="flex justify-between items-center"><span className="text-[10px] font-black text-gray-400 uppercase">Institutional Email</span><span className="text-xs font-bold text-gray-900">{selectedStudent.email}</span></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 text-gray-950"><ShieldCheck size={18} className="text-green-500" /><h4 className="text-sm font-black uppercase tracking-widest">Parent Details</h4></div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4">
                       <div className="flex justify-between items-center"><span className="text-[10px] font-black text-gray-400 uppercase">Guardian Name</span><span className="text-xs font-bold text-gray-900">{selectedStudent.parentName}</span></div>
                       <div className="flex justify-between items-center"><span className="text-[10px] font-black text-gray-400 uppercase">Phone</span><span className="text-xs font-bold text-gray-900">{selectedStudent.parentPhone}</span></div>
                    </div>
                  </div>
               </div>
               <div className="space-y-6 pt-4">
                  <div className="flex items-center space-x-2 text-gray-950"><BarChart3 size={18} className="text-indigo-500" /><h4 className="text-sm font-black uppercase tracking-widest">Module Performance</h4></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {selectedStudent.modules.map((mod, i) => (
                         <div key={i} className="p-5 bg-white border border-gray-100 rounded-2xl flex items-center justify-between shadow-sm">
                            <div className="space-y-1"><p className="text-xs font-black text-gray-900">{mod.name}</p><p className="text-[9px] font-black text-gray-400 uppercase">Current Term</p></div>
                            <div className="text-lg font-black text-indigo-600">{mod.score}%</div>
                         </div>
                       ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
