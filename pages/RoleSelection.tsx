
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
  { id: 'dos', name: 'Director of Study', icon: GraduationCap, color: 'bg-blue-600', users: 2, perms: ['Curriculum', 'Assessment', 'Staff Assignment'], detailedPerms: ['Manage Syllabus', 'Approve Results', 'Create Timetables', 'Allocate Classrooms'] },
  { id: 'dod', name: 'Director of Discipline', icon: ClipboardList, color: 'bg-red-600', users: 1, perms: ['Student Conduct', 'Attendance', 'Reporting'], detailedPerms: ['Issue Gate Passes', 'Record Discipline Cases', 'Monitor Daily Attendance', 'Contact Parents'] },
  { id: 'hm', name: 'Head Master', icon: UserCheck, color: 'bg-purple-600', users: 1, perms: ['Global Metrics', 'Financial Finality', 'System Audit'], detailedPerms: ['View Full Financials', 'System-wide Reports', 'Staff Evaluation', 'Policy Management'] },
  { id: 'teacher', name: 'Teacher', icon: Book, color: 'bg-green-600', users: 24, perms: ['Grade Management', 'Student Logs', 'Material Share'], detailedPerms: ['Mark Attendance', 'Submit Marks', 'Upload Lessons', 'Message Students'] },
  { id: 'acc', name: 'Accountant', icon: Calculator, color: 'bg-yellow-600', users: 3, perms: ['Fees Collection', 'Payroll', 'Expense Tracking'], detailedPerms: ['Invoice Printing', 'Payment Reconciliation', 'Manage Petty Cash', 'Salary Processing'] },
  { id: 'stock', name: 'Stock Manager', icon: Package, color: 'bg-orange-600', users: 1, perms: ['Inventory Flow', 'Procurement', 'Workshop Tools'], detailedPerms: ['Asset Tracking', 'Requisition Approval', 'Inventory Audit', 'Supplier Liaison'] },
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
    <div className="min-h-screen bg-white text-gray-900 p-6 sm:p-12 lg:p-24 relative overflow-hidden flex flex-col">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-50 rounded-full blur-[160px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[160px] opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 flex-1">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
           <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-[10px] font-black uppercase tracking-widest text-green-700">
                   <ShieldCheck size={12} />
                   <span>Authorized Staff Portal</span>
                </div>
                <button 
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${isAdminMode ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 text-gray-500 border border-gray-200 hover:text-gray-900'}`}
                >
                  {isAdminMode ? 'Disable Admin UI' : 'Enable Admin UI'}
                </button>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none text-gray-950">Hitamo Umwirondoro <br /><span className="gradient-text">Wawe.</span></h1>
              <p className="text-gray-500 font-bold text-xl max-w-xl">Hitamo inshingano yawe muri Garden TVET kugira ngo ukomeze muri sisitemu.</p>
           </div>
           
           <div className="w-full lg:w-96 space-y-4">
              <div className="relative group">
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Shakisha inshingano..." 
                  className="w-full pl-12 pr-6 py-5 bg-white border border-gray-100 rounded-[2rem] outline-none focus:ring-4 focus:ring-green-600/10 focus:border-green-600 transition-all font-bold shadow-sm"
                />
                <Search className="absolute left-5 top-5 text-gray-400 group-focus-within:text-green-600" size={20} />
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
                className="group relative bg-white border border-gray-100 rounded-[3rem] p-10 cursor-default transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="space-y-8 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className={`w-20 h-20 ${role.color} rounded-[2rem] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                      <Icon size={40} />
                    </div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedRoleForDetails(role); }}
                      className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-950 hover:bg-white transition-all shadow-sm"
                    >
                      <Info size={18} />
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                     <h3 className="text-3xl font-black tracking-tighter leading-none text-gray-900">{role.name}</h3>
                     <div className="flex items-center space-x-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <Activity size={10} className="text-green-600" />
                        <span>{role.users} Active Sessions</span>
                     </div>
                  </div>

                  <div className={`space-y-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                     <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 pb-2">Capabilities</p>
                     <div className="flex flex-wrap gap-2">
                        {role.perms.slice(0, 3).map(p => (
                          <span key={p} className="px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-bold text-gray-500 border border-gray-100">{p}</span>
                        ))}
                     </div>
                  </div>

                  <div className="pt-4">
                     <button 
                        onClick={() => navigate(`/dashboard/${role.id}`)}
                        className="w-full py-5 bg-gray-950 text-white group-hover:bg-green-600 rounded-2xl flex items-center justify-center space-x-3 transition-all font-black text-xs uppercase tracking-widest shadow-xl"
                     >
                        <span>Enter Dashboard</span>
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
              className="group relative bg-gray-50 border-4 border-dashed border-gray-200 rounded-[3rem] p-10 cursor-pointer flex flex-col items-center justify-center space-y-4 hover:border-green-600 hover:bg-white transition-all shadow-sm"
            >
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-400 group-hover:text-green-600 group-hover:scale-110 transition-all shadow-md">
                  <Plus size={32} />
               </div>
               <p className="text-xl font-black tracking-tight text-gray-500 group-hover:text-gray-900">Create Custom Role</p>
            </button>
          )}
        </div>

        <footer className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
           <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-3 text-gray-400 hover:text-gray-950 transition-colors">
                 <Info size={18} />
                 <span className="text-sm font-black uppercase tracking-widest">Inyobora-mfashanyo</span>
              </button>
              <button className="flex items-center space-x-3 text-gray-400 hover:text-gray-950 transition-colors">
                 <ShieldCheck size={18} />
                 <span className="text-sm font-black uppercase tracking-widest">Umutekano</span>
              </button>
           </div>
           <button 
              onClick={() => navigate('/login')}
              className="px-10 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-xs font-black uppercase tracking-widest transition-all flex items-center space-x-3 text-gray-500 hover:text-gray-900"
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
