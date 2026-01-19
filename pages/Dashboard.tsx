
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, RadialBarChart, RadialBar, Legend
} from 'recharts';
import { 
  Users, Calendar, FileText, Bell, LogOut, Settings, Layout, Activity, 
  Plus, CheckCircle, Search, ClipboardList, TrendingUp, ShieldAlert, Package, Calculator,
  BookOpen, MessageSquare, Briefcase, GraduationCap, ChevronRight, PenTool, ArrowUpRight,
  TrendingDown, DollarSign, Clock, AlertTriangle, UserCheck, ShieldCheck, Download, 
  MoreHorizontal, Filter, Mail, Trash2, Edit3, Eye, Zap, Target, Star, Hammer
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { role } = useParams();
  const [activeTab, setActiveTab] = useState('Inshamake');

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#a855f7'];

  // Data mocks
  const revenueStats = [
    { name: 'Sep', total: 4000, collected: 2400 },
    { name: 'Oct', total: 3000, collected: 1398 },
    { name: 'Nov', total: 2000, collected: 9800 },
    { name: 'Dec', total: 2780, collected: 3908 },
    { name: 'Jan', total: 5000, collected: 4800 },
  ];

  const classPerformance = [
    { subject: 'Software', avg: 85, top: 98, students: 45 },
    { subject: 'Construction', avg: 72, top: 90, students: 38 },
    { subject: 'Auto Engine', avg: 78, top: 95, students: 42 },
    { subject: 'Electricity', avg: 90, top: 100, students: 25 },
    { subject: 'Welding', avg: 65, top: 82, students: 50 },
  ];

  const attendanceHeatmap = [
    { day: 'Mon', rate: 95 },
    { day: 'Tue', rate: 98 },
    { day: 'Wed', rate: 92 },
    { day: 'Thu', rate: 94 },
    { day: 'Fri', rate: 88 },
  ];

  const getRoleContent = () => {
    switch(role) {
      case 'acc':
        return {
          title: 'Financial Management',
          icon: Calculator,
          stats: [
            { label: 'Total Revenue', value: 'RWF 14.5M', sub: '+12% vs last term', icon: DollarSign, color: 'text-green-500' },
            { label: 'Arrears (Debt)', value: 'RWF 3.2M', sub: 'From 52 students', icon: TrendingDown, color: 'text-red-500' },
            { label: 'Collection Rate', value: '84%', sub: 'Payments velocity', icon: Activity, color: 'text-blue-500' },
            { label: 'Pending Payroll', value: 'RWF 8.4M', sub: 'Staff salaries', icon: Clock, color: 'text-purple-500' },
          ],
          charts: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl font-black tracking-tighter">Collection Velocity</h4>
                    <select className="bg-gray-50 px-4 py-2 rounded-xl text-xs font-black border-none outline-none cursor-pointer">
                       <option>Last 6 Months</option>
                       <option>Full Year</option>
                    </select>
                  </div>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={revenueStats}>
                          <defs>
                             <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                          <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'}} />
                          <Area type="monotone" dataKey="collected" stroke="#22c55e" strokeWidth={4} fill="url(#colorRev)" />
                       </AreaChart>
                    </ResponsiveContainer>
                  </div>
               </div>
               <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
                  <h4 className="text-xl font-black tracking-tighter">Payment Status by Trade</h4>
                  <div className="h-[350px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={classPerformance}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                           <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem'}} />
                           <Bar dataKey="students" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </div>
            </div>
          )
        };
      case 'dos':
        return {
          title: 'Academic Performance',
          icon: GraduationCap,
          stats: [
            { label: 'Overall Average', value: '78.4%', sub: 'Target: 80%', icon: Star, color: 'text-yellow-500' },
            { label: 'Syllabus Completion', value: '64%', sub: 'On schedule', icon: Target, color: 'text-blue-500' },
            { label: 'Active Teachers', value: '42', sub: 'All sessions covered', icon: Users, color: 'text-green-500' },
            { label: 'Assessment Count', value: '154', sub: 'In progress', icon: PenTool, color: 'text-purple-500' },
          ],
          charts: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
                  <h4 className="text-xl font-black tracking-tighter">Class Performance Heatmap</h4>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={classPerformance}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                          <Tooltip contentStyle={{borderRadius: '1.5rem'}} />
                          <Bar dataKey="avg" radius={[10, 10, 0, 0]}>
                             {classPerformance.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                  </div>
               </div>
               <div className="bg-gray-950 p-10 rounded-[3rem] text-white flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform"><GraduationCap size={150} /></div>
                  <div className="space-y-10 relative z-10">
                     <h4 className="text-2xl font-black tracking-tighter">Syllabus Coverage Tracking</h4>
                     <div className="space-y-6">
                        {[
                          { l: 'Software Level 3', p: 85 },
                          { l: 'Building Level 4', p: 42 },
                          { l: 'Auto Level 5', p: 92 }
                        ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                                 <span>{item.l}</span>
                                 <span>{item.p}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                 <div className="h-full bg-green-500" style={{width: `${item.p}%`}}></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <button className="relative z-10 mt-10 py-5 bg-white text-gray-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all">Export Report</button>
               </div>
            </div>
          )
        };
      case 'dod':
        return {
          title: 'Discipline & Attendance',
          icon: ClipboardList,
          stats: [
            { label: 'Attendance Rate', value: '94.2%', sub: 'Current Term', icon: UserCheck, color: 'text-green-500' },
            { label: 'Open Incidents', value: '4', sub: 'Requiring Action', icon: ShieldAlert, color: 'text-red-500' },
            { label: 'Gate Passes', value: '18', sub: 'Today Active', icon: Activity, color: 'text-blue-500' },
            { label: 'Discipline Points', value: 'Avg 85', sub: 'Overall School', icon: Star, color: 'text-purple-500' },
          ],
          charts: (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
               <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
                  <h4 className="text-xl font-black tracking-tighter">Daily Attendance Trends</h4>
                  <div className="h-[350px]">
                     <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={attendanceHeatmap}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                           <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                           <Tooltip contentStyle={{borderRadius: '1.5rem'}} />
                           <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={4} dot={{r: 6, fill: '#ef4444', strokeWidth: 0}} activeDot={{r: 8}} />
                        </LineChart>
                     </ResponsiveContainer>
                  </div>
               </div>
               <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col justify-center text-center space-y-6">
                  <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto shadow-xl"><ShieldAlert size={48} /></div>
                  <h4 className="text-2xl font-black tracking-tighter">Urgent Review</h4>
                  <p className="text-sm text-gray-500 font-medium">There are 4 students flagged for excessive absenteeism in the last 7 days.</p>
                  <button className="py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-500 transition-all">Review Students</button>
               </div>
            </div>
          )
        };
      default:
        return {
          title: 'Management Dashboard',
          icon: Layout,
          stats: [
            { label: 'Total Students', value: '1,245', sub: '+8% vs 2023', icon: Users, color: 'text-green-500' },
            { label: 'System Uptime', value: '99.9%', sub: 'Cloud hosting', icon: Zap, color: 'text-blue-500' },
            { label: 'Global Notifications', value: '14', sub: 'Unread', icon: Bell, color: 'text-purple-500' },
            { label: 'Audit Compliance', value: 'A+', sub: 'Verified', icon: ShieldCheck, color: 'text-orange-500' },
          ],
          charts: null
        };
    }
  };

  const content = getRoleContent();

  return (
    <div className="min-h-screen bg-gray-50 flex font-['Plus_Jakarta_Sans']">
      {/* Sidebar - Pure High Blur Glass */}
      <aside className="w-20 lg:w-80 bg-gray-950/95 backdrop-blur-3xl text-white p-6 lg:p-10 flex flex-col border-r border-white/5 sticky top-0 h-screen overflow-hidden">
        <div className="flex-1 space-y-12 overflow-y-auto custom-scrollbar">
          <Link to="/" className="flex items-center space-x-4 mb-10 group">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-2xl text-gray-900 group-hover:bg-green-500 group-hover:text-white transition-all shadow-2xl">G</div>
             <div className="hidden lg:block">
                <p className="text-xl font-black text-white leading-none">Garden TVET</p>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1 tracking-[0.2em]">Management Suite</p>
             </div>
          </Link>

          <nav className="space-y-6">
            {['Inshamake', 'Management', 'Reports', 'Settings'].map((item) => (
              <button 
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all group ${
                  activeTab === item ? 'bg-white/10 text-white shadow-xl border border-white/10' : 'text-gray-500 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-xl ${activeTab === item ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                   <Layout size={18} />
                </div>
                <span className="font-black text-sm hidden lg:inline">{item}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-4">
           <button className="w-full flex items-center space-x-4 px-5 py-4 text-gray-500 hover:text-white transition-all group">
              <Settings size={20} className="group-hover:rotate-90 transition-transform" />
              <span className="font-black text-sm hidden lg:inline">Igenamiterere</span>
           </button>
           <Link to="/login" className="w-full flex items-center space-x-4 px-5 py-4 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all">
              <LogOut size={20} />
              <span className="font-black text-sm hidden lg:inline">Sign Out</span>
           </Link>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-8 lg:p-16 overflow-y-auto w-full space-y-16">
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
           <div className="space-y-2">
              <div className="flex items-center space-x-4">
                 <div className="p-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm"><content.icon size={28} className="text-gray-950" /></div>
                 <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-none">{content.title}</h1>
              </div>
              <p className="text-gray-400 font-medium ml-16">Advanced Analytics and Control Center</p>
           </div>
           
           <div className="flex items-center space-x-4 w-full xl:w-auto">
              <div className="relative flex-1 xl:w-80 group">
                <input type="text" placeholder="Global search..." className="w-full pl-12 pr-6 py-4.5 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 transition-all font-bold text-sm" />
                <Search className="absolute left-4.5 top-4.5 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
              </div>
              <button className="p-4.5 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 hover:shadow-xl transition-all relative">
                <Bell size={22} />
                <div className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>
              </button>
              <div className="hidden sm:flex items-center space-x-4 p-2 bg-white border border-gray-100 rounded-2xl shadow-sm pr-6">
                 <img src="https://i.pravatar.cc/100?u=staff" className="w-10 h-10 rounded-xl object-cover shadow-lg" alt="profile" />
                 <div className="flex flex-col">
                    <p className="text-xs font-black text-gray-950 leading-none">Eric G.</p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{role?.toUpperCase()}</p>
                 </div>
              </div>
           </div>
        </header>

        {/* Dynamic Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {content.stats.map((stat, i) => (
            <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-150 transition-transform"><stat.icon size={100} /></div>
               <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gray-50 ${stat.color} group-hover:scale-110 transition-transform`}>
                     <stat.icon size={26} />
                  </div>
                  <span className="px-3 py-1 bg-gray-50 text-[9px] font-black text-gray-400 uppercase tracking-widest rounded-full">{stat.sub}</span>
               </div>
               <div className="relative z-10">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <h3 className="text-4xl font-black text-gray-950 tracking-tighter leading-none">{stat.value}</h3>
               </div>
            </div>
          ))}
        </div>

        {/* Powerful Role-Based Analytics Section */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {content.charts}
        </div>

        {/* Management & Action Cards */}
        <div className="space-y-10">
           <div className="flex justify-between items-end border-b border-gray-100 pb-8">
              <div className="space-y-2">
                 <h4 className="text-3xl font-black tracking-tighter">Feature Management</h4>
                 <p className="text-gray-400 font-medium italic">Execute daily operations with precision.</p>
              </div>
              <div className="flex space-x-4">
                 <button className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 transition-all"><Filter size={20} /></button>
                 <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
                    <Plus size={18} />
                    <span>Nshya</span>
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                { name: 'Student Logs', desc: 'Daily activity & attendance records.', icon: UserCheck, color: 'bg-green-50 text-green-500' },
                { name: 'Exam Grades', desc: 'Input and verify assessment data.', icon: PenTool, color: 'bg-blue-50 text-blue-500' },
                { name: 'Fee Invoices', desc: 'Generate and track billings.', icon: DollarSign, color: 'bg-yellow-50 text-yellow-500' },
                { name: 'Library Logs', desc: 'Book movement and research data.', icon: BookOpen, color: 'bg-purple-50 text-purple-500' },
                { name: 'Staff Shifts', desc: 'Management of teacher schedules.', icon: Calendar, color: 'bg-red-50 text-red-500' },
                { name: 'Infrastructure', desc: 'Maintenance of workshop tools.', icon: Hammer, color: 'bg-gray-100 text-gray-900' },
                { name: 'Messages', desc: 'Staff communications & broadcasts.', icon: MessageSquare, color: 'bg-orange-50 text-orange-500' },
                { name: 'Reports', desc: 'Custom data export engine.', icon: FileText, color: 'bg-indigo-50 text-indigo-500' },
              ].map((feat, i) => (
                <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-green-400/20 transition-all cursor-pointer">
                   <div className={`w-14 h-14 ${feat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feat.icon size={26} />
                   </div>
                   <h5 className="text-lg font-black text-gray-950 mb-2 leading-none">{feat.name}</h5>
                   <p className="text-gray-400 text-xs font-medium leading-relaxed">{feat.desc}</p>
                   <div className="mt-6 flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-green-500 group-hover:text-white transition-all">
                         <ChevronRight size={16} />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
