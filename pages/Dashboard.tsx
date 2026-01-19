
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  Users, Calendar, FileText, Bell, LogOut, Settings, Layout, PieChart, Activity, 
  Plus, CheckCircle, Search, ClipboardList, TrendingUp, ShieldAlert, Package, Calculator,
  BookOpen, MessageSquare, Briefcase, GraduationCap, ChevronRight, PenTool
} from 'lucide-react';

const data = [
  { name: 'Mon', students: 4000, revenue: 2400 },
  { name: 'Tue', students: 3000, revenue: 1398 },
  { name: 'Wed', students: 2000, revenue: 9800 },
  { name: 'Thu', students: 2780, revenue: 3908 },
  { name: 'Fri', students: 1890, revenue: 4800 },
  { name: 'Sat', students: 2390, revenue: 3800 },
];

const Dashboard: React.FC = () => {
  const { role } = useParams();
  const [activeView, setActiveView] = useState('Overview');
  const [note, setNote] = useState('');

  const getRoleTitle = () => {
    switch(role) {
      case 'dos': return 'Director of Study';
      case 'dod': return 'Director of Discipline';
      case 'hm': return 'Head Master';
      case 'teacher': return 'Academic Staff';
      case 'acc': return 'Financial Services';
      case 'stock': return 'Inventory & Stock';
      case 'admin': return 'System Administrator';
      default: return 'Management';
    }
  };

  const navSections = [
    {
      title: 'Main',
      items: [
        { icon: Layout, label: 'Overview' },
        { icon: Activity, label: 'Real-time Monitoring' },
      ]
    },
    {
      title: 'Academic',
      items: [
        { icon: Users, label: 'Student Records' },
        { icon: GraduationCap, label: 'Curriculum' },
        { icon: Calendar, label: 'Timetable' },
      ]
    },
    {
      title: 'Administrative',
      items: [
        { icon: FileText, label: 'Audit Reports' },
        { icon: Package, label: 'Asset Management' },
        { icon: Settings, label: 'Preferences' },
      ]
    }
  ];

  const renderRoleSpecificPanel = () => {
    switch(role) {
      case 'dos':
        return (
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-xl font-black">Module Management</h3>
            <div className="space-y-3">
              {['SOD L3 Algorithms', 'BDC L5 Structural Analysis', 'AUT L4B Electrical Systems'].map(m => (
                <div key={m} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-blue-100">
                  <span className="font-bold text-gray-700 text-sm">{m}</span>
                  <button className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-lg font-black text-[10px] hover:bg-blue-600 hover:text-white transition-colors">ASSIGN</button>
                </div>
              ))}
            </div>
            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black flex items-center justify-center space-x-2 transform hover:scale-[1.02] transition-transform shadow-xl">
              <Plus size={16} />
              <span className="text-xs">CREATE CURRICULUM</span>
            </button>
          </div>
        );
      case 'dod':
        return (
          <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-gray-100 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-red-600 flex items-center space-x-2">
              <ShieldAlert size={18} />
              <span>Incident Reports</span>
            </h3>
            <div className="space-y-3">
              {[
                { name: 'M. Jean', issue: 'Late Arrival', level: 'SOD L5', urgent: true },
                { name: 'K. Alice', issue: 'Uniform Breach', level: 'BDC L4', urgent: false }
              ].map((report, i) => (
                <div key={i} className={`p-4 border rounded-2xl flex justify-between items-center transition-all ${report.urgent ? 'bg-red-50 border-red-100' : 'border-gray-100'}`}>
                  <div>
                    <p className="font-bold text-sm">{report.name} ({report.level})</p>
                    <p className="text-[11px] text-gray-500">{report.issue}</p>
                  </div>
                  <button className={`p-2 rounded-xl transition-all ${report.urgent ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <ClipboardList size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-6 sm:p-8 rounded-[2rem] text-white space-y-6 shadow-2xl relative overflow-hidden group">
            <h3 className="text-lg font-black flex items-center space-x-2 relative z-10">
              <TrendingUp size={18} className="text-green-400" />
              <span>Efficiency Score</span>
            </h3>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="text-5xl font-black text-green-400 tracking-tighter">98.2%</div>
              <p className="text-gray-400 text-xs">Real-time performance metrics across units.</p>
            </div>
            <div className="pt-4 border-t border-white/10 relative z-10">
              <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors text-xs">Full Report</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      {/* Enhanced Sidebar with Logo at Bottom */}
      <aside className="w-20 lg:w-80 bg-gray-900 text-white p-4 lg:p-8 flex flex-col border-r border-white/5 sticky top-0 h-screen overflow-hidden">
        <div className="flex-1 space-y-6 lg:space-y-10 overflow-y-auto pr-0 lg:pr-2 custom-scrollbar">
          {navSections.map((section) => (
            <div key={section.title} className="space-y-2 lg:space-y-4">
              <h4 className="px-2 text-[8px] lg:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] lg:tracking-[0.3em] text-center lg:text-left">{section.title}</h4>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button 
                    key={item.label} 
                    onClick={() => setActiveView(item.label)}
                    className={`w-full flex items-center justify-center lg:justify-between px-2 lg:px-4 py-3 rounded-xl transition-all group ${
                      activeView === item.label ? 'bg-green-500 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                    title={item.label}
                  >
                    <div className="flex items-center space-x-3">
                        <item.icon size={20} className={activeView === item.label ? 'text-white' : 'group-hover:text-green-400'} />
                        <span className="font-bold text-sm hidden lg:inline">{item.label}</span>
                    </div>
                    {activeView === item.label && <ChevronRight size={14} className="hidden lg:inline" />}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* New Quick Note Feature in Sidebar */}
          <div className="px-2 lg:px-4 pt-6 mt-6 border-t border-white/5 hidden lg:block">
             <div className="bg-gray-800/50 p-4 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-xs font-black text-gray-500 uppercase">
                    <PenTool size={14} />
                    <span>Admin Draft</span>
                </div>
                <textarea 
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Type reminder..."
                    className="w-full bg-transparent border-none text-[10px] text-gray-300 resize-none focus:ring-0 placeholder:text-gray-600 p-0 h-20"
                />
             </div>
          </div>
        </div>

        {/* Logo and Name Moved to End of Aside */}
        <div className="mt-6 lg:mt-10 pt-6 lg:pt-10 border-t border-white/10">
          <Link to="/" className="group flex items-center justify-center lg:justify-start space-x-3 mb-4 lg:mb-6 p-2 rounded-2xl hover:bg-white/5 transition-colors">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500 rounded-xl flex items-center justify-center font-black text-lg lg:text-xl shadow-xl group-hover:scale-110 transition-transform flex-shrink-0">G</div>
            <div className="hidden lg:block overflow-hidden">
                <p className="text-lg font-black leading-none truncate">Garden <span className="text-green-400">TVET</span></p>
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mt-1">School Portal</p>
            </div>
          </Link>
          
          <div className="space-y-1">
              <Link to="/login" className="flex items-center justify-center lg:justify-start space-x-3 px-2 lg:px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all group" title="Logout">
                <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-bold text-sm hidden lg:inline">Logout</span>
              </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Filling Screen Edges */}
      <main className="flex-1 p-4 sm:p-8 lg:p-12 overflow-y-auto w-full">
        <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 mb-12">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-blue-100 text-blue-600 text-[9px] font-black uppercase rounded-lg tracking-widest">
              <ShieldAlert size={10} />
              <span>SECURE ACCESS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tighter">{getRoleTitle()}</h1>
            <p className="text-gray-500 text-sm sm:text-lg">System: <span className="text-green-600 font-bold">Optimal</span> • {new Date().toLocaleTimeString()}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full xl:w-auto justify-end">
            <div className="relative group w-full sm:w-64">
              <input 
                type="text" 
                placeholder="Search records..." 
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-xs focus:ring-4 focus:ring-green-400/10 outline-none transition-all"
              />
              <Search className="absolute left-4 top-3 text-gray-400 group-focus-within:text-green-500 transition-colors" size={18} />
            </div>
            
            <button className="p-3 bg-white rounded-2xl border border-gray-100 text-gray-400 hover:text-green-500 transition-all relative">
              <Bell size={20} />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
            </button>

            <div className="flex items-center space-x-3 bg-white p-2 pr-4 lg:pr-6 rounded-2xl shadow-sm border border-gray-100 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-black group-hover:scale-105 transition-transform">AD</div>
              <div className="hidden sm:block">
                <p className="text-xs font-black text-gray-900">Root Admin</p>
                <p className="text-[9px] text-gray-400 uppercase font-black">Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12">
          {[
            { label: 'Total Students', value: '1,245', growth: '+12%', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Uptime', value: '99.9%', growth: 'Stable', icon: Activity, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Progress', value: '74%', growth: '+8%', icon: PieChart, color: 'text-purple-500', bg: 'bg-purple-50' },
            { label: 'Attendance', value: '38/42', growth: '90%', icon: CheckCircle, color: 'text-orange-500', bg: 'bg-orange-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-gray-100 group hover:border-green-400 hover:-translate-y-1 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={24} />
                </div>
                <span className={`px-2 py-1 rounded-lg text-[9px] font-black ${stat.growth.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {stat.growth}
                </span>
              </div>
              <h3 className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                <h3 className="text-2xl font-black text-gray-900">Performance</h3>
                <div className="flex bg-gray-50 p-1 rounded-xl">
                  {['Weekly', 'Monthly'].map(t => (
                    <button key={t} className={`px-4 py-1.5 text-[10px] font-black rounded-lg transition-all ${t === 'Weekly' ? 'bg-white shadow text-gray-900' : 'text-gray-400'}`}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="h-72 sm:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ADFF2F" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#ADFF2F" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10, fontWeight: 700}} />
                    <Tooltip contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                    <Area type="monotone" dataKey="students" stroke="#ADFF2F" fillOpacity={1} fill="url(#colorStudents)" strokeWidth={4} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-gray-100 group">
                <h3 className="text-xl font-black mb-6">Activity</h3>
                <div className="space-y-6">
                  {[
                    { text: 'SOD L5 assessments published', time: '12m ago', user: 'DOS' },
                    { text: 'Stock Manager parts request', time: '1h ago', user: 'Admin' }
                  ].map((act, i) => (
                    <div key={i} className="flex space-x-4 border-l-2 border-gray-100 pl-4">
                      <div className="space-y-0.5">
                        <p className="text-xs font-black text-gray-800 leading-tight">{act.text}</p>
                        <p className="text-[10px] text-blue-500 font-bold">{act.time} • @{act.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-xl font-black mb-6">Priority Tasks</h3>
                <div className="space-y-4">
                  {[
                    { task: 'Approve annual budget', done: false, tag: 'Finance' },
                    { task: 'Review security logs', done: false, tag: 'IT' }
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-md border-2 border-gray-200 bg-white"></div>
                        <span className="text-xs font-black text-gray-700">{t.task}</span>
                      </div>
                      <span className="text-[8px] font-black uppercase px-2 py-1 bg-white rounded-md shadow-sm">{t.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            {renderRoleSpecificPanel()}
            
            <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-gray-100">
              <h3 className="text-xl font-black mb-6">System Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Plus, label: 'ADD', color: 'hover:bg-green-500' },
                  { icon: Search, label: 'FIND', color: 'hover:bg-blue-500' },
                  { icon: FileText, label: 'PDF', color: 'hover:bg-purple-500' },
                  { icon: Bell, label: 'ALERTS', color: 'hover:bg-red-500' }
                ].map((action, idx) => (
                  <button key={idx} className={`flex flex-col items-center justify-center p-5 bg-gray-50 rounded-2xl transition-all space-y-2 group/btn ${action.color} hover:text-white`}>
                    <action.icon size={20} />
                    <span className="text-[9px] font-black">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-green-500 p-8 rounded-[2.5rem] text-white shadow-xl shadow-green-500/20">
              <h4 className="font-black text-lg mb-2">Live Monitor</h4>
              <p className="text-green-50 text-xs mb-6 leading-relaxed">System status 100% operational.</p>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping"></div>
                <span className="font-black text-[10px] uppercase tracking-widest">Active</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
