
import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  LogOut, Settings, Layout, Bell, Search, Mail, Download, ChevronRight, UserCircle 
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

  const renderRoleDashboard = () => {
    switch (role) {
      case 'acc': return <AccountantDashboard />;
      case 'dos': return <DOSDashboard />;
      case 'dod': return <DODDashboard />;
      case 'teacher': return <TeacherDashboard />;
      case 'stock': return <StockManagerDashboard />;
      case 'hm': return <HeadMasterDashboard />;
      default: return <div className="p-20 text-center font-black">Role dashboard is currently under configuration. Contact Admin.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex font-['Plus_Jakarta_Sans']">
      {/* Shared Sidebar - Clean Light Mode */}
      <aside className="w-20 lg:w-80 bg-white border-r border-gray-100 p-6 lg:p-10 flex flex-col sticky top-0 h-screen overflow-hidden shadow-sm">
        <div className="flex-1 space-y-12 overflow-y-auto custom-scrollbar">
          <Link to="/" className="flex items-center space-x-4 mb-10 group">
             <div className="w-12 h-12 bg-gray-950 rounded-2xl flex items-center justify-center font-black text-2xl text-white group-hover:bg-green-600 transition-all shadow-2xl">G</div>
             <div className="hidden lg:block">
                <p className="text-xl font-black text-gray-900 leading-none">Garden TVET</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 tracking-[0.2em]">Smart Portal</p>
             </div>
          </Link>

          <nav className="space-y-4">
            {[
              { id: 'overview', label: t('overview'), icon: Layout },
              { id: 'management', label: t('management'), icon: UserCircle },
              { id: 'reports', label: t('reports'), icon: Download },
              { id: 'settings', label: t('settings'), icon: Settings }
            ].map((item) => (
              <button key={item.id} className="w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all group text-gray-400 hover:text-gray-900 hover:bg-gray-50">
                <div className="p-2 rounded-xl bg-gray-100 text-gray-400 group-hover:bg-white group-hover:text-green-600 shadow-sm transition-all">
                   <item.icon size={20} />
                </div>
                <span className="font-black text-sm hidden lg:inline">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-gray-100 space-y-4">
           <Link to="/login" className="w-full flex items-center space-x-4 px-5 py-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all">
              <LogOut size={20} />
              <span className="font-black text-sm hidden lg:inline">{t('logout')}</span>
           </Link>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 overflow-y-auto w-full">
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-black animate-pulse text-green-600">Loading Garden TVET Engine...</div>}>
          {renderRoleDashboard()}
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
