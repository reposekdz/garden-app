
import React, { Suspense, lazy, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  LogOut, Settings, Layout, Download, UserCircle, Menu, X, Shield, Bell, HelpCircle
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const AccountantDashboard = lazy(() => import('./dashboards/AccountantDashboard'));
const DOSDashboard = lazy(() => import('./dashboards/DOSDashboard'));
const DODDashboard = lazy(() => import('./dashboards/DODDashboard'));
const TeacherDashboard = lazy(() => import('./dashboards/TeacherDashboard'));
const StockManagerDashboard = lazy(() => import('./dashboards/StockManagerDashboard'));
const HeadMasterDashboard = lazy(() => import('./dashboards/HeadMasterDashboard'));

const Dashboard: React.FC = () => {
  const { role } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear any potential session data here if needed
    navigate('/login');
  };

  const renderRoleDashboard = () => {
    switch (role) {
      case 'acc': return <AccountantDashboard />;
      case 'dos': return <DOSDashboard />;
      case 'dod': return <DODDashboard />;
      case 'teacher': return <TeacherDashboard />;
      case 'stock': return <StockManagerDashboard />;
      case 'hm': return <HeadMasterDashboard />;
      default: return (
        <div className="h-full flex items-center justify-center p-20 text-center flex-col space-y-6">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300"><Shield size={40} /></div>
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-gray-950 tracking-tighter">Portal Under Configuration</h2>
            <p className="text-gray-400 font-bold max-w-sm mx-auto">This customized role profile has been created but specific dashboard widgets are still being deployed.</p>
          </div>
          <button onClick={() => navigate('/role-selection')} className="px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all">Go Back</button>
        </div>
      );
    }
  };

  const sidebarLinks = [
    { id: 'overview', label: t('overview'), icon: Layout },
    { id: 'management', label: t('management'), icon: UserCircle },
    { id: 'reports', label: t('reports'), icon: Download },
    { id: 'notifications', label: 'Updates', icon: Bell },
    { id: 'support', label: 'Help Desk', icon: HelpCircle },
    { id: 'settings', label: t('settings'), icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex flex-col lg:flex-row font-['Plus_Jakarta_Sans']">
      
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between p-6 bg-white border-b border-gray-100 sticky top-0 z-[100] shadow-sm">
          <Link to="/" className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-gray-950 rounded-xl flex items-center justify-center font-black text-white text-xl">G</div>
             <span className="font-black text-gray-900 uppercase text-[10px] tracking-[0.2em] leading-none">Smart Portal</span>
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 bg-[#f8f9fb] rounded-xl text-gray-950 active:scale-90 transition-transform"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </div>

      {/* Shared Sidebar */}
      <aside className={`
        fixed inset-0 z-[110] lg:relative lg:z-0 lg:flex
        w-full lg:w-80 bg-white border-r border-gray-100 p-8 lg:p-10 
        flex-col sticky top-0 h-screen overflow-hidden shadow-sm
        transition-transform duration-500 lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex-1 space-y-12 overflow-y-auto hide-scrollbar">
          <Link to="/" className="hidden lg:flex items-center space-x-4 mb-14 group">
             <div className="w-14 h-14 bg-gray-950 rounded-[1.5rem] flex items-center justify-center font-black text-3xl text-white group-hover:bg-green-600 transition-all shadow-xl group-hover:rotate-6">G</div>
             <div>
                <p className="text-2xl font-black text-gray-950 leading-none tracking-tighter">Garden TVET</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1.5 tracking-[0.2em]">Operational Node</p>
             </div>
          </Link>

          <nav className="space-y-3">
            {sidebarLinks.map((item) => (
              <button 
                key={item.id} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center space-x-5 px-6 py-5 rounded-[1.8rem] transition-all group text-gray-400 hover:text-gray-950 hover:bg-[#f8f9fb] border border-transparent hover:border-gray-50 shadow-none hover:shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-[#f8f9fb] text-gray-400 group-hover:bg-white group-hover:text-green-600 shadow-sm transition-all border border-gray-50">
                   <item.icon size={20} />
                </div>
                <span className="font-black text-sm tracking-tight">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-gray-50 space-y-4 mt-10">
           <button 
             onClick={handleLogout}
             className="w-full flex items-center space-x-5 px-6 py-5 text-red-500 hover:bg-red-50 rounded-[1.8rem] transition-all group border border-transparent hover:border-red-100"
           >
              <div className="p-2.5 rounded-xl bg-red-50 text-red-500 group-hover:bg-white transition-all border border-red-50 shadow-sm">
                 <LogOut size={20} />
              </div>
              <span className="font-black text-sm tracking-tight">{t('logout')}</span>
           </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 overflow-y-auto w-full custom-scrollbar">
        <Suspense fallback={
          <div className="h-screen flex items-center justify-center flex-col gap-6 font-black animate-pulse text-green-600 p-10">
            <div className="w-16 h-16 border-[6px] border-green-600/10 border-t-green-600 rounded-full animate-spin"></div>
            <div className="text-center">
               <span className="text-2xl tracking-tighter text-gray-950">Decrypting Portal...</span>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Security Handshake in Progress</p>
            </div>
          </div>
        }>
          {renderRoleDashboard()}
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
