
import React, { useState, useMemo } from 'react';
import { 
  Book, PenTool, Layout, Users, FileText, Star, 
  Search, Bell, Plus, ChevronRight, MessageSquare, StarHalf, Monitor, BookOpen, UserCheck,
  Filter, ArrowUpRight, GraduationCap, Clock, MoreHorizontal, X, Phone, Mail, User, ShieldCheck,
  Activity, Calendar, BarChart3, Clipboard, UploadCloud, CheckCircle, Save, FolderOpen, Send, Sparkles, Trash2,
  MapPin, Heart, Info, TrendingUp, AlertCircle, Share2, MessageCircle, UserPlus
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, LineChart, Line,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PieChart, Pie, Legend
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
  performanceData: { subject: string; score: number; average: number }[];
  history: { month: string; score: number }[];
}

const TeacherDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isMessagingOpen, setIsMessagingOpen] = useState(false);
  const [messageRecipient, setMessageRecipient] = useState<'student' | 'parent'>('student');
  const [messageText, setMessageText] = useState('');

  const students: Student[] = useMemo(() => [
    { 
      id: 'GT-001', 
      name: 'Habimana Jean Bosco', 
      class: 'SOD 5C', 
      grade: 92, 
      attendance: '98%',
      email: 'j.habimana@gardentvet.rw',
      phone: '+250 788 123 456',
      parentName: 'Habimana Silas',
      parentPhone: '+250 788 999 000',
      performanceData: [
        { subject: 'Coding', score: 95, average: 75 },
        { subject: 'Math', score: 88, average: 70 },
        { subject: 'UI/UX', score: 92, average: 65 },
        { subject: 'DB', score: 85, average: 80 }
      ],
      history: [
        { month: 'Sep', score: 82 },
        { month: 'Oct', score: 85 },
        { month: 'Nov', score: 92 },
        { month: 'Dec', score: 88 },
        { month: 'Jan', score: 95 },
      ]
    },
    { 
      id: 'GT-012', 
      name: 'Mukamana Solange', 
      class: 'SOD 5C', 
      grade: 88, 
      attendance: '95%',
      email: 's.mukamana@gardentvet.rw',
      phone: '+250 788 222 333',
      parentName: 'Mukamana Epiphanie',
      parentPhone: '+250 788 777 666',
      performanceData: [
        { subject: 'Coding', score: 85, average: 75 },
        { subject: 'Math', score: 95, average: 70 },
        { subject: 'UI/UX', score: 88, average: 65 },
        { subject: 'DB', score: 90, average: 80 }
      ],
      history: [
        { month: 'Sep', score: 75 },
        { month: 'Oct', score: 80 },
        { month: 'Nov', score: 88 },
        { month: 'Dec', score: 90 },
        { month: 'Jan', score: 88 },
      ]
    }
  ], []);

  const filteredStudents = useMemo(() => {
    return students.filter(s => 
      s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.id.toLowerCase().includes(studentSearch.toLowerCase())
    );
  }, [studentSearch, students]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    alert(`Message sent to ${messageRecipient === 'student' ? selectedStudent?.name : selectedStudent?.parentName}: ${messageText}`);
    setMessageText('');
    setIsMessagingOpen(false);
  };

  return (
    <div className="p-8 lg:p-16 space-y-16 relative bg-[#f4f5f7] min-h-screen">
      
      {/* Advanced Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-8 animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-xl" onClick={() => setSelectedStudent(null)}></div>
           <div className="relative w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-12 duration-500 border border-white/20 grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]">
              
              {/* Profile Sidebar */}
              <div className="lg:col-span-4 bg-gray-950 p-10 text-white flex flex-col space-y-10 overflow-y-auto custom-scrollbar">
                 <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-32 bg-green-500 rounded-[2.5rem] flex items-center justify-center text-5xl font-black shadow-2xl shadow-green-500/30">
                       {selectedStudent.name.charAt(0)}
                    </div>
                    <div>
                       <h3 className="text-3xl font-black tracking-tighter">{selectedStudent.name}</h3>
                       <p className="text-xs font-black text-gray-500 uppercase tracking-widest mt-1">{selectedStudent.id} • {selectedStudent.class}</p>
                    </div>
                 </div>

                 <div className="space-y-6 pt-10 border-t border-white/10">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Performance Barometer</p>
                       <div className="h-48 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                             <PieChart>
                                <Pie 
                                   data={[{value: selectedStudent.grade}, {value: 100 - selectedStudent.grade}]} 
                                   cx="50%" cy="50%" innerRadius={50} outerRadius={70} 
                                   startAngle={90} endAngle={-270} dataKey="value" stroke="none"
                                >
                                   <Cell fill="#22c55e" />
                                   <Cell fill="rgba(255,255,255,0.05)" />
                                </Pie>
                             </PieChart>
                          </ResponsiveContainer>
                          <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
                             <p className="text-4xl font-black">{selectedStudent.grade}%</p>
                             <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Aggregate</p>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <button 
                         onClick={() => { setMessageRecipient('student'); setIsMessagingOpen(true); }}
                         className="w-full py-4 bg-white/10 hover:bg-green-600 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-3"
                       >
                          <MessageCircle size={16} />
                          <span>Message Student</span>
                       </button>
                       <button 
                         onClick={() => { setMessageRecipient('parent'); setIsMessagingOpen(true); }}
                         className="w-full py-4 bg-white/10 hover:bg-blue-600 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-3"
                       >
                          <UserPlus size={16} />
                          <span>Contact Parent</span>
                       </button>
                    </div>
                 </div>
              </div>

              {/* Advanced Analytics Panel */}
              <div className="lg:col-span-8 p-10 lg:p-16 overflow-y-auto custom-scrollbar bg-gray-50/50 space-y-12">
                 <div className="flex justify-between items-center">
                    <div className="space-y-1">
                       <h4 className="text-3xl font-black tracking-tighter text-gray-900">Academic Deep-Dive</h4>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Performance trends & competency analysis</p>
                    </div>
                    <button onClick={() => setSelectedStudent(null)} className="p-4 bg-white rounded-2xl text-gray-400 hover:text-gray-950 transition-all shadow-sm border border-gray-100">
                       <X size={20} />
                    </button>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Line Trend Chart */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                       <h5 className="text-lg font-black tracking-tighter">Performance Evolution</h5>
                       <div className="h-48">
                          <ResponsiveContainer width="100%" height="100%">
                             <LineChart data={selectedStudent.history}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                                <YAxis hide />
                                <Tooltip contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)'}} />
                                <Line type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={4} dot={{r: 6, fill: '#22c55e', strokeWidth: 4, stroke: '#fff'}} />
                             </LineChart>
                          </ResponsiveContainer>
                       </div>
                    </div>

                    {/* Radar Chart */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                       <h5 className="text-lg font-black tracking-tighter">Competency Spectrum</h5>
                       <div className="h-48">
                          <ResponsiveContainer width="100%" height="100%">
                             <RadarChart cx="50%" cy="50%" outerRadius="80%" data={selectedStudent.performanceData}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 8, fontWeight: 900 }} />
                                <Radar name="Student" dataKey="score" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} />
                                <Radar name="Avg" dataKey="average" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.1} />
                             </RadarChart>
                          </ResponsiveContainer>
                       </div>
                    </div>
                 </div>

                 {/* Messaging Sub-Modal Overlay */}
                 {isMessagingOpen && (
                   <div className="absolute inset-0 z-50 flex items-center justify-center p-10">
                      <div className="absolute inset-0 bg-gray-950/40 backdrop-blur-md rounded-[3rem]" onClick={() => setIsMessagingOpen(false)}></div>
                      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 animate-in zoom-in duration-300">
                         <div className="space-y-6">
                            <div className="flex justify-between items-center">
                               <h5 className="text-xl font-black tracking-tighter">New Secure Message</h5>
                               <button onClick={() => setIsMessagingOpen(false)}><X size={20} className="text-gray-400" /></button>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl flex items-center space-x-4">
                               <div className="w-10 h-10 bg-gray-950 text-white rounded-xl flex items-center justify-center text-xs font-black">
                                  {messageRecipient === 'student' ? 'ST' : 'PR'}
                               </div>
                               <div>
                                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Recipient</p>
                                  <p className="font-bold text-gray-900">{messageRecipient === 'student' ? selectedStudent.name : selectedStudent.parentName}</p>
                                </div>
                            </div>
                            <textarea 
                               value={messageText}
                               onChange={(e) => setMessageText(e.target.value)}
                               placeholder="Type your secure message here..."
                               className="w-full h-40 p-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:border-green-500 font-bold transition-all resize-none text-sm"
                            />
                            <button 
                              onClick={handleSendMessage}
                              className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center space-x-3"
                            >
                               <Send size={18} />
                               <span>Transmit Encrypted</span>
                            </button>
                         </div>
                      </div>
                   </div>
                 )}
              </div>
           </div>
        </div>
      )}

      {/* Header Section */}
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <div className="p-5 bg-white shadow-lg border border-gray-100 rounded-3xl text-gray-950"><Monitor size={28} /></div>
            <div>
               <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight">Teacher Command</h1>
               <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Operational Control Hub</span>
               </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">
             <UploadCloud size={18} />
             <span>Upload Marks</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-5 bg-green-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-500/20">
             <Plus size={18} />
             <span>Create Lesson</span>
          </button>
        </div>
      </header>

      {/* Advanced Analytic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Term Progression', value: '72%', sub: 'Weeks 8/12', icon: Activity, color: 'text-blue-500', isRing: true },
          { label: 'Avg Competency', value: '84.5', sub: 'Class Metrics', icon: TrendingUp, color: 'text-green-500', isLine: true },
          { label: 'Attendance Rate', value: '96.2%', sub: 'Healthy', icon: UserCheck, color: 'text-indigo-500' },
          { label: 'Parent Engagement', value: '88%', sub: 'High Impact', icon: Heart, color: 'text-red-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group relative overflow-hidden">
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-[#f8f9fb] ${stat.color} group-hover:scale-110 transition-transform`}><stat.icon size={26} /></div>
                <span className="px-3 py-1 bg-[#f8f9fb] text-[10px] font-black text-gray-400 uppercase rounded-full tracking-widest">{stat.sub}</span>
             </div>
             
             <div className="relative z-10">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
             </div>

             {/* Background Decoration for "Powerful Development" feel */}
             <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 pointer-events-none group-hover:opacity-10 transition-all">
                {stat.isRing && (
                   <ResponsiveContainer width="100%" height="100%">
                      <PieChart><Pie data={[{v:72},{v:28}]} innerRadius={30} outerRadius={50} dataKey="v"><Cell fill="#3b82f6"/><Cell fill="transparent"/></Pie></PieChart>
                   </ResponsiveContainer>
                )}
             </div>
          </div>
        ))}
      </div>

      {/* Main Work Area: Student List & Detailed Management */}
      <section className="bg-white p-10 lg:p-14 rounded-[3rem] border border-gray-100 shadow-sm space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-50 pb-10">
           <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-tighter">Student Registry</h2>
              <p className="text-gray-400 font-bold text-sm italic">"Encrypted access to performance logs & guardian contact portal."</p>
           </div>
           <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-[400px] group">
                 <input 
                    type="text" 
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder="Quick search by name or ID..." 
                    className="w-full pl-12 pr-6 py-5 bg-[#f8f9fb] border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 font-bold text-sm transition-all"
                 />
                 <Search className="absolute left-4 top-5 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
              </div>
              <button className="p-5 bg-[#f8f9fb] border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 transition-all"><Filter size={20} /></button>
           </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
           {filteredStudents.length > 0 ? (
             <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                   <tr>
                      <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Ident</th>
                      <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Full Name</th>
                      <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Grade</th>
                      <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Health</th>
                      <th className="pb-4 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Action</th>
                   </tr>
                </thead>
                <tbody className="space-y-4">
                   {filteredStudents.map((student) => (
                      <tr 
                        key={student.id} 
                        onClick={() => setSelectedStudent(student)}
                        className="group bg-white border border-gray-50 rounded-3xl overflow-hidden hover:bg-[#f8f9fb] transition-all cursor-pointer shadow-sm hover:shadow-md"
                      >
                         <td className="py-7 px-6 font-black text-xs text-gray-400 group-hover:text-green-600 transition-colors">{student.id}</td>
                         <td className="py-7 px-6">
                            <div className="flex items-center space-x-4">
                               <div className="w-11 h-11 rounded-2xl bg-[#f4f5f7] text-gray-900 flex items-center justify-center font-black text-sm group-hover:bg-green-500 group-hover:text-white transition-all shadow-sm">{student.name.charAt(0)}</div>
                               <span className="font-black text-gray-900 group-hover:text-green-600 transition-colors">{student.name}</span>
                            </div>
                         </td>
                         <td className="py-7 px-6">
                            <div className="flex items-center space-x-2">
                               <div className={`w-2 h-2 rounded-full ${student.grade >= 80 ? 'bg-green-500' : 'bg-orange-400'}`}></div>
                               <span className="font-black text-gray-900">{student.grade}%</span>
                            </div>
                         </td>
                         <td className="py-7 px-6">
                            <div className="w-24 h-8">
                               <ResponsiveContainer width="100%" height="100%">
                                  <AreaChart data={student.history}>
                                     <Area type="monotone" dataKey="score" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} strokeWidth={2} />
                                  </AreaChart>
                               </ResponsiveContainer>
                            </div>
                         </td>
                         <td className="py-7 px-6">
                            <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-950 transition-all hover:bg-white border border-transparent hover:border-gray-200">
                               <ChevronRight size={18} />
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
           ) : (
             <div className="py-32 text-center space-y-6">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300"><Search size={48} /></div>
                <p className="text-2xl font-black text-gray-950 tracking-tighter">No Personnel Matches Found</p>
                <button onClick={() => setStudentSearch('')} className="text-green-600 font-black text-xs uppercase tracking-widest border-b-2 border-green-600 pb-1">Reset Search Matrix</button>
             </div>
           )}
        </div>
      </section>

      {/* Footer Meta */}
      <footer className="flex justify-between items-center text-gray-400">
         <div className="flex items-center space-x-4">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Academic Control Node V3.5 Dim-Mode</span>
         </div>
         <p className="text-[10px] font-black uppercase tracking-widest italic opacity-50">Monitoring Operations In Progress</p>
      </footer>
    </div>
  );
};

export default TeacherDashboard;
