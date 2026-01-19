
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserCheck, GraduationCap, ClipboardList, Book, Calculator, Package, 
  Settings, ShieldCheck, ChevronRight, ChevronLeft, Search, Info, Activity, Fingerprint,
  Plus, X, Shield, Lock, Eye, CheckCircle2, MoreHorizontal
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

interface Role {
  id: string;
  name: string;
  icon: any;
  color: string;
  users: number;
  perms: string[];
  detailedPerms?: string[];
}

const initialRoles: Role[] = [
  { id: 'dos', name: 'Director of Study', icon: GraduationCap, color: 'bg-blue-500', users: 2, perms: ['Curriculum', 'Assessment', 'Staff Assignment'], detailedPerms: ['Manage Syllabus', 'Approve Results', 'Create Timetables', 'Allocate Classrooms'] },
  { id: 'dod', name: 'Director of Discipline', icon: ClipboardList, color: 'bg-red-500', users: 1, perms: ['Student Conduct', 'Attendance', 'Reporting'], detailedPerms: ['Issue Gate Passes', 'Record Discipline Cases', 'Monitor Daily Attendance', 'Contact Parents'] },
  { id: 'hm', name: 'Head Master', icon: UserCheck, color: 'bg-purple-500', users: 1, perms: ['Global Metrics', 'Financial Finality', 'System Audit'], detailedPerms: ['View Full Financials', 'System-wide Reports', 'Staff Evaluation', 'Policy Management'] },
  { id: 'teacher', name: 'Teacher', icon: Book, color: 'bg-green-500', users: 24, perms: ['Grade Management', 'Student Logs', 'Material Share'], detailedPerms: ['Mark Attendance', 'Submit Marks', 'Upload Lessons', 'Message Students'] },
  { id: 'acc', name: 'Accountant', icon: Calculator, color: 'bg-yellow-500', users: 3, perms: ['Fees Collection', 'Payroll', 'Expense Tracking'], detailedPerms: ['Invoice Printing', 'Payment Reconciliation', 'Manage Petty Cash', 'Salary Processing'] },
  { id: 'stock', name: 'Stock Manager', icon: Package, color: 'bg-orange-500', users: 1, perms: ['Inventory Flow', 'Procurement', 'Workshop Tools'], detailedPerms: ['Asset Tracking', 'Requisition Approval', 'Inventory Audit', 'Supplier Liaison'] },
  { id: 'admin', name: 'Admin', icon: Settings, color: 'bg-gray-900', users: 1, perms: ['Full Access', 'Database Mgmt', 'Security Protocols'], detailedPerms: ['User Provisioning', 'System Logs', 'Database Backups', 'API Configuration'] },
];

const RoleSelection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  
  // Modals state
  const [selectedRoleForDetails, setSelectedRoleForDetails] = useState<Role | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // New Role Form state
  const [newRoleName, setNewRoleName] = useState('');
  const [newRolePerms, setNewRolePerms] = useState<string[]>([]);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const availablePerms = ['Academic Access', 'Financial View', 'Discipline Logs', 'Stock Management', 'HR Control', 'Public Portal', 'System Settings'];

  const filteredRoles = roles.filter(r => r.name.toLowerCase().includes(search.toLowerCase()));

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleName.trim()) return;

    const newRole: Role = {
      id: `custom-${Date.now()}`,
      name: newRoleName,
      icon: Shield,
      color: 'bg-indigo-600',
      users: 0,
      perms: newRolePerms.length > 0 ? newRolePerms : ['Custom Access'],
      detailedPerms: newRolePerms
    };

    setRoles([...roles, newRole]);
    setShowCreateModal(false);
    setNewRoleName('');
    setNewRolePerms([]);
  };

  const togglePerm = (perm: string) => {
    setNewRolePerms(prev => 
      prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 sm:p-12 lg:p-24 relative overflow-hidden flex flex-col">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 flex-1">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
           <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-green-400">
                   <ShieldCheck size={12} />
                   <span>Authorized Staff Portal</span>
                </div>
                <button 
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isAdminMode ? 'bg-red-500 text-white' : 'bg-white/5 text-gray-500 border border-white/10 hover:text-white'}`}
                >
                  {isAdminMode ? 'Disable Admin UI' : 'Enable Admin UI'}
                </button>
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
                className="group relative bg-[#111] border border-white/5 rounded-[2.5rem] p-10 cursor-default transition-all duration-500 hover:bg-white/[0.03] hover:border-white/20 hover:-translate-y-2 card-perspective"
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-20 h-20 ${role.color} rounded-[2rem] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon size={40} />
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedRoleForDetails(role); }}
                      className="p-3 bg-white/5 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                    >
                      <Info size={18} />
                    </button>
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
                        {role.perms.slice(0, 3).map(p => (
                          <span key={p} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-gray-400 border border-white/5">{p}</span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4">
                     <button 
                        onClick={() => navigate(`/dashboard/${role.id}`)}
                        className="w-full py-4 bg-white/5 group-hover:bg-green-500 group-hover:text-white rounded-2xl flex items-center justify-center space-x-2 transition-all font-black text-xs"
                     >
                        <span>Enter Dashboard</span>
                        <Fingerprint size={16} />
                     </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>
              </div>
            );
          })}

          {/* Admin: Create New Role Card */}
          {isAdminMode && (
            <button 
              onClick={() => setShowCreateModal(true)}
              className="group relative bg-white/5 border-2 border-dashed border-white/10 rounded-[2.5rem] p-10 cursor-pointer flex flex-col items-center justify-center space-y-4 hover:border-green-500 hover:bg-green-500/5 transition-all animate-pulse-slow"
            >
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-500 group-hover:text-green-500 group-hover:scale-110 transition-all">
                  <Plus size={32} />
               </div>
               <p className="text-xl font-black tracking-tight text-gray-500 group-hover:text-white">Create Custom Role</p>
               <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest text-center">Define specific permissions for unique staff members</p>
            </button>
          )}
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
              <ChevronLeft size={16} />
              <span>Gusubira Inyuma</span>
           </button>
        </footer>
      </div>

      {/* Permission Detail Modal */}
      {selectedRoleForDetails && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-gray-950/80 backdrop-blur-xl animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-2xl rounded-[3rem] p-10 sm:p-12 shadow-2xl relative overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <button onClick={() => setSelectedRoleForDetails(null)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-colors"><X /></button>
              
              <div className="space-y-10">
                 <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 ${selectedRoleForDetails.color} rounded-2xl flex items-center justify-center text-white shadow-xl`}><selectedRoleForDetails.icon size={32} /></div>
                    <div className="space-y-1">
                       <h2 className="text-3xl font-black text-gray-900 tracking-tighter">{selectedRoleForDetails.name}</h2>
                       <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Detailed Permission Profile</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedRoleForDetails.detailedPerms?.map((p, i) => (
                      <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl group hover:bg-green-50 transition-colors">
                         <div className="p-2 bg-white rounded-lg text-green-500 shadow-sm"><CheckCircle2 size={14} /></div>
                         <span className="text-sm font-bold text-gray-700">{p}</span>
                      </div>
                    ))}
                 </div>

                 <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-400 italic text-sm">
                       <Lock size={14} />
                       <span>Role restricted by Head Office</span>
                    </div>
                    <button 
                      onClick={() => { navigate(`/dashboard/${selectedRoleForDetails.id}`); }}
                      className="px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl"
                    >
                      Authenticate Role
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Create Custom Role Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-950/90 backdrop-blur-md animate-in fade-in duration-300">
           <div className="bg-[#111] w-full max-w-xl rounded-[3rem] p-10 sm:p-12 border border-white/10 shadow-2xl relative animate-in slide-in-from-top-12 duration-500">
              <button onClick={() => setShowCreateModal(false)} className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white"><X /></button>
              
              <div className="space-y-10">
                 <div className="space-y-3">
                    <h2 className="text-3xl font-black tracking-tighter text-white">New Custom Role</h2>
                    <p className="text-gray-500 font-medium">Define a unique administrative role with tailored access.</p>
                 </div>

                 <form onSubmit={handleCreateRole} className="space-y-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Role Designation Name</label>
                       <input 
                         autoFocus
                         type="text" 
                         value={newRoleName}
                         onChange={(e) => setNewRoleName(e.target.value)}
                         className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-green-500 font-bold text-lg"
                         placeholder="e.g. Lab Technician"
                       />
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Select Access Permissions</label>
                       <div className="grid grid-cols-2 gap-3">
                          {availablePerms.map(perm => (
                            <button 
                              type="button"
                              key={perm}
                              onClick={() => togglePerm(perm)}
                              className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${newRolePerms.includes(perm) ? 'bg-green-500 border-green-500 text-white' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20'}`}
                            >
                               <span className="text-xs font-black">{perm}</span>
                               {newRolePerms.includes(perm) && <CheckCircle2 size={14} />}
                            </button>
                          ))}
                       </div>
                    </div>

                    <div className="pt-4 grid grid-cols-2 gap-4">
                       <button type="button" onClick={() => setShowCreateModal(false)} className="py-5 bg-white/5 rounded-2xl font-black text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-all">Cancel</button>
                       <button type="submit" className="py-5 bg-green-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-green-500/20 hover:bg-green-600 transition-all">Provision Role</button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default RoleSelection;
