
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserCheck, GraduationCap, ClipboardList, Book, Calculator, Package, 
  Settings, ShieldCheck, ChevronRight, ChevronLeft, Search, Info, Activity, Fingerprint
} from 'lucide-react';

const roles = [
  { id: 'dos', name: 'Director of Study', icon: GraduationCap, color: 'bg-blue-500', users: 2, perms: ['Curriculum', 'Assessment', 'Staff Assignment'] },
  { id: 'dod', name: 'Director of Discipline', icon: ClipboardList, color: 'bg-red-500', users: 1, perms: ['Student Conduct', 'Attendance', 'Reporting'] },
  { id: 'hm', name: 'Head Master', icon: UserCheck, color: 'bg-purple-500', users: 1, perms: ['Global Metrics', 'Financial Finality', 'System Audit'] },
  { id: 'teacher', name: 'Teacher', icon: Book, color: 'bg-green-500', users: 24, perms: ['Grade Management', 'Student Logs', 'Material Share'] },
  { id: 'acc', name: 'Accountant', icon: Calculator, color: 'bg-yellow-500', users: 3, perms: ['Fees Collection', 'Payroll', 'Expense Tracking'] },
  { id: 'stock', name: 'Stock Manager', icon: Package, color: 'bg-orange-500', users: 1, perms: ['Inventory Flow', 'Procurement', 'Workshop Tools'] },
  { id: 'admin', name: 'Admin', icon: Settings, color: 'bg-gray-900', users: 1, perms: ['Full Access', 'Database Mgmt', 'Security Protocols'] },
];

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const filteredRoles = roles.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 sm:p-12 lg:p-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
           <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-green-400">
                 <ShieldCheck size={12} />
                 <span>Authorized Staff Portal</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">Hitamo Umwirondoro <br /><span className="gradient-text">Wawe.</span></h1>
              <p className="text-gray-500 font-medium text-lg max-w-xl">Hitamo inshingano yawe kugira ngo ukomeze muri sisitemu yo gucunga ishuri ya Garden TVET.</p>
           </div>
           
           <div className="w-full lg:w-96 space-y-4">
              <div className="relative group">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Shakisha inshingano..." 
                  className="w-full pl-12 pr-6 py-5 bg-white/5 border border-white/10 rounded-[2rem] outline-none focus:ring-4 focus:ring-green-400/20 focus:border-green-400 transition-all font-bold"
                />
                <Search className="absolute left-5 top-5 text-gray-500 group-focus-within:text-green-500" size={20} />
              </div>
              <div className="flex items-center justify-between px-4">
                 <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">System Status: Active</span>
                 </div>
                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{roles.length} Roles Found</span>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredRoles.map((role) => {
            const Icon = role.icon;
            const isHovered = hoveredRole === role.id;
            
            return (
              <div
                key={role.id}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => navigate(`/dashboard/${role.id}`)}
                className="group relative bg-[#111] border border-white/5 rounded-[2.5rem] p-10 cursor-pointer transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-2 card-perspective"
              >
                <div className="space-y-8 relative z-10">
                  <div className={`w-20 h-20 ${role.color} rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon size={40} />
                  </div>
                  
                  <div className="space-y-2">
                     <h3 className="text-3xl font-black tracking-tighter leading-none">{role.name}</h3>
                     <div className="flex items-center space-x-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                        <Activity size={10} className="text-green-500" />
                        <span>{role.users} Active Session</span>
                     </div>
                  </div>

                  <div className={`space-y-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                     <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] border-b border-white/5 pb-2">Capabilities</p>
                     <div className="flex flex-wrap gap-2">
                        {role.perms.map(p => (
                          <span key={p} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-gray-400 border border-white/5">{p}</span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4">
                     <div className="w-full py-4 bg-white/5 group-hover:bg-green-500 group-hover:text-white rounded-2xl flex items-center justify-center space-x-2 transition-all font-black text-xs">
                        <span>Enter Dashboard</span>
                        <Fingerprint size={16} />
                     </div>
                  </div>
                </div>

                {/* Perspective Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              </div>
            );
          })}
        </div>

        <footer className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
           <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors">
                 <Info size={16} />
                 <span className="text-xs font-bold">Inyobora-mfashanyo</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors">
                 <ShieldCheck size={16} />
                 <span className="text-xs font-bold">Umutekano</span>
              </button>
           </div>
           <button 
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full text-xs font-black transition-all flex items-center space-x-3"
           >
              {/* Fix: added ChevronLeft to lucide-react imports */}
              <ChevronLeft size={16} />
              <span>Gusubira Inyuma</span>
           </button>
        </footer>
      </div>
    </div>
  );
};

export default RoleSelection;
