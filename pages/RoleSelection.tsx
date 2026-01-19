
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserCheck, GraduationCap, ClipboardList, Book, Calculator, Package, 
  Settings, ShieldCheck, ChevronRight, ChevronLeft, Search, Info, Activity, Fingerprint,
  Plus, X, Shield, Lock, Eye, CheckCircle2, MoreHorizontal, Layout, Zap, Users
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

interface Role {
  id: string;
  name: string;
  icon: any;
  color: string;
  users: number;
  perms: string[];
  detailedPerms: string[];
}

const initialRoles: Role[] = [
  { id: 'dos', name: 'Director of Study', icon: GraduationCap, color: 'bg-blue-600', users: 2, perms: ['Curriculum', 'Assessment', 'Staff Assignment'], detailedPerms: ['Manage Syllabus', 'Approve Results', 'Create Timetables', 'Allocate Classrooms', 'Moderate Department Meetings'] },
  { id: 'dod', name: 'Director of Discipline', icon: ClipboardList, color: 'bg-red-600', users: 1, perms: ['Student Conduct', 'Attendance', 'Reporting'], detailedPerms: ['Issue Gate Passes', 'Record Discipline Cases', 'Monitor Daily Attendance', 'Contact Parents', 'Review Uniform Standards'] },
  { id: 'hm', name: 'Head Master', icon: UserCheck, color: 'bg-purple-600', users: 1, perms: ['Global Metrics', 'Financial Finality', 'System Audit'], detailedPerms: ['View Full Financials', 'System-wide Reports', 'Staff Evaluation', 'Policy Management', 'Stakeholder Liaison'] },
  { id: 'teacher', name: 'Teacher', icon: Book, color: 'bg-green-600', users: 24, perms: ['Grade Management', 'Student Logs', 'Material Share'], detailedPerms: ['Mark Attendance', 'Submit Marks', 'Upload Lessons', 'Message Students', 'Track Module Progress'] },
  { id: 'acc', name: 'Accountant', icon: Calculator, color: 'bg-yellow-600', users: 3, perms: ['Fees Collection', 'Payroll', 'Expense Tracking'], detailedPerms: ['Invoice Printing', 'Payment Reconciliation', 'Manage Petty Cash', 'Salary Processing', 'Tax Compliance Reports'] },
  { id: 'stock', name: 'Stock Manager', icon: Package, color: 'bg-orange-600', users: 1, perms: ['Inventory Flow', 'Procurement', 'Workshop Tools'], detailedPerms: ['Asset Tracking', 'Requisition Approval', 'Inventory Audit', 'Supplier Liaison', 'Tool Maintenance Logs'] },
  { id: 'admin', name: 'Admin', icon: Settings, color: 'bg-gray-900', users: 1, perms: ['Full Access', 'Database Mgmt', 'Security Protocols'], detailedPerms: ['User Provisioning', 'System Logs', 'Database Backups', 'API Configuration', 'Role Customization'] },
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

  const availablePerms = ['Academic Access', 'Financial View', 'Discipline Logs', 'Stock Management', 'HR Control', 'Public Portal', 'System Settings', 'Cloud Storage', 'Live Chat Support'];

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
      perms: newRolePerms.length > 0 ? newRolePerms.slice(0, 3) : ['Custom Access'],
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
    <div className="min-h-screen bg-[#f4f5f7] text-gray-900 p-6 sm:p-12 lg:p-24 relative overflow-hidden flex flex-col font-['Plus_Jakarta_Sans']">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Details Modal */}
      {selectedRoleForDetails && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md" onClick={() => setSelectedRoleForDetails(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl animate-in zoom-in duration-300 border border-white/20">
            <button onClick={() => setSelectedRoleForDetails(null)} className="absolute top-8 right-8 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <X size={24} />
            </button>
            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className={`w-20 h-20 ${selectedRoleForDetails.color} rounded-3xl flex items-center justify-center text-white shadow-xl`}>
                  <selectedRoleForDetails.icon size={40} />
                </div>
                <div>
                  <h3 className="text-4xl font-black tracking-tighter">{selectedRoleForDetails.name}</h3>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Full Permission Spectrum</p>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] border-b border-gray-100 pb-2">Authorized Capabilities</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedRoleForDetails.detailedPerms.map((p, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="font-bold text-sm text-gray-700">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => {
                  const roleId = selectedRoleForDetails.id;
                  setSelectedRoleForDetails(null);
                  navigate(`/dashboard/${roleId}`);
                }}
                className="w-full py-6 bg-gray-950 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl"
              >
                Access this Portal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md" onClick={() => setShowCreateModal(false)}></div>
          <div className="relative w-full max-w-3xl bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl animate-in slide-in-from-bottom-12 duration-500">
            <div className="space-y-10">
              <div className="space-y-2">
                <h3 className="text-4xl font-black tracking-tighter">New System Profile</h3>
                <p className="text-gray-400 font-bold">Define access levels for custom staff requirements.</p>
              </div>
              <form onSubmit={handleCreateRole} className="space-y-10">
                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Profile Name</label>
                  <input 
                    autoFocus
                    required
                    type="text" 
                    value={newRoleName}
                    onChange={(e) => setNewRoleName(e.target.value)}
                    placeholder="e.g. Lab Technician"
                    className="w-full px-8 py-5 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 transition-all font-bold text-lg"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">Permissions Assignment</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availablePerms.map(p => (
                      <button 
                        key={p}
                        type="button"
                        onClick={() => togglePerm(p)}
                        className={`p-4 rounded-2xl border font-black text-[10px] uppercase tracking-widest transition-all ${
                          newRolePerms.includes(p) 
                          ? 'bg-green-600 text-white border-green-600 shadow-lg' 
                          : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 py-5 bg-gray-50 text-gray-500 rounded-2xl font-black text-xs uppercase tracking-widest">Cancel</button>
                  <button type="submit" className="flex-1 py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">Deploy Profile</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 flex-1 w-full">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
           <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-[10px] font-black uppercase tracking-widest text-green-700">
                   <ShieldCheck size={12} />
                   <span>Authorized Staff Portal</span>
                </div>
                <button 
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isAdminMode ? 'bg-red-600 text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-400 hover:text-gray-900 shadow-sm'}`}
                >
                  {isAdminMode ? 'Admin Control Active' : 'Enable Dev Mode'}
                </button>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-gray-950">Hitamo Umwirondoro <br /><span className="gradient-text">Wawe.</span></h1>
              <p className="text-gray-500 font-bold text-xl max-w-xl">Portal yizewe ikoreshwa n'abakozi ba Garden TVET mu gucunga ishuri.</p>
           </div>
           
           <div className="w-full lg:w-96 space-y-4">
              <div className="relative group">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Shakisha inshingano..." 
                  className="w-full pl-12 pr-6 py-5 bg-white border border-gray-100 rounded-3xl outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-400 transition-all font-bold shadow-xl text-lg"
                />
                <Search className="absolute left-5 top-6 text-gray-400 group-focus-within:text-green-600" size={20} />
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
                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 cursor-default transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 -mr-16 -mt-16 rounded-full group-hover:bg-green-50 transition-colors"></div>
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 ${role.color} rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      <Icon size={32} />
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedRoleForDetails(role); }}
                      className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-950 hover:bg-white transition-all shadow-sm border border-transparent hover:border-gray-200"
                    >
                      <Info size={18} />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                     <h3 className="text-2xl font-black tracking-tighter leading-none text-gray-900 group-hover:text-green-600 transition-colors">{role.name}</h3>
                     <div className="flex items-center space-x-2 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                        <Activity size={10} className="text-green-600" />
                        <span>{role.users} Current Sessions</span>
                     </div>
                  </div>

                  <div className={`space-y-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 pb-2">Core Access</p>
                     <div className="flex flex-wrap gap-2">
                        {role.perms.slice(0, 3).map(p => (
                          <span key={p} className="px-3 py-1 bg-gray-50 rounded-lg text-[8px] font-bold text-gray-500 border border-gray-100">{p}</span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4">
                     <button 
                        onClick={() => navigate(`/dashboard/${role.id}`)}
                        className="w-full py-5 bg-gray-950 text-white group-hover:bg-green-600 rounded-2xl flex items-center justify-center space-x-3 transition-all font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95"
                     >
                        <span>Enter Portal</span>
                        <Fingerprint size={18} />
                     </button>
                  </div>
                </div>
              </div>
            );
          })}

          {isAdminMode && (
            <button 
              onClick={() => setShowCreateModal(true)}
              className="group relative bg-white border-4 border-dashed border-gray-200 rounded-[2.5rem] p-10 cursor-pointer flex flex-col items-center justify-center space-y-6 hover:border-green-600 hover:bg-green-50/20 transition-all shadow-sm"
            >
               <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-green-600 group-hover:scale-110 group-hover:bg-white transition-all shadow-md">
                  <Plus size={32} />
               </div>
               <div className="text-center">
                  <p className="text-xl font-black tracking-tight text-gray-950">Add Custom Profile</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Configure Permissions</p>
               </div>
            </button>
          )}
        </div>

        <footer className="pt-12 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-8">
           <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-3 text-gray-400 hover:text-gray-950 transition-colors group">
                 <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-all"><Zap size={16} /></div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Inyobora-mfashanyo</span>
              </button>
              <button className="flex items-center space-x-3 text-gray-400 hover:text-gray-950 transition-colors group">
                 <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-all"><Lock size={16} /></div>
                 <span className="text-[10px] font-black uppercase tracking-widest">Security Audit</span>
              </button>
           </div>
           <button 
              onClick={() => navigate('/login')}
              className="px-10 py-4 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center space-x-3 text-gray-500 hover:text-gray-950 shadow-sm hover:shadow-md"
           >
              <ChevronLeft size={18} />
              <span>Gusubira Inyuma</span>
           </button>
        </footer>
      </div>
    </div>
  );
};

export default RoleSelection;
