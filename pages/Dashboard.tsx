
import React, { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  LogOut, Settings, Layout, Bell, Search, Mail, Download, ChevronRight 
} from 'lucide-react';

// Lazy load role-specific dashboards to keep code clean and performance high
const AccountantDashboard = lazy(() => import('./dashboards/AccountantDashboard'));
const DOSDashboard = lazy(() => import('./dashboards/DOSDashboard'));
const DODDashboard = lazy(() => import('./dashboards/DODDashboard'));
const TeacherDashboard = lazy(() => import('./dashboards/TeacherDashboard'));

const Dashboard: React.FC = () => {
  const { role } = useParams();

  const renderRoleDashboard = () => {
    switch (role) {
      case 'acc': return <AccountantDashboard />;
      case 'dos': return <DOSDashboard />;
      case 'dod': return <DODDashboard />;
      case 'teacher': return <TeacherDashboard />;
      default: return <div className="p-20 text-center font-black">Role not configured yet.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex font-['Plus_Jakarta_Sans']">
      {/* Shared Sidebar */}
      <aside className="w-20 lg:w-80 bg-gray-950/95 backdrop-blur-3xl text-white p-6 lg:p-10 flex flex-col border-r border-white/5 sticky top-0 h-screen overflow-hidden">
        <div className="flex-1 space-y-12 overflow-y-auto custom-scrollbar">
          <Link to="/" className="flex items-center space-x-4 mb-10 group">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-2xl text-gray-900 group-hover:bg-green-500 group-hover:text-white transition-all shadow-2xl">G</div>
             <div className="hidden lg:block">
                <p className="text-xl font-black text-white leading-none">Garden TVET</p>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1 tracking-[0.2em]">Smart Portal</p>
             </div>
          </Link>

          <nav className="space-y-6">
            {['Inshamake', 'Management', 'Reports', 'Settings'].map((item) => (
              <button key={item} className="w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all group text-gray-500 hover:text-white hover:bg-white/5">
                <div className="p-2 rounded-xl bg-white/5 text-gray-400 group-hover:bg-white/10">
                   <Layout size={18} />
                </div>
                <span className="font-black text-sm hidden lg:inline">{item}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-10 border-t border-white/5 space-y-4">
           <Link to="/login" className="w-full flex items-center space-x-4 px-5 py-4 text-red-500 hover:bg-red-500/10 rounded-2xl transition-all">
              <LogOut size={20} />
              <span className="font-black text-sm hidden lg:inline">Sign Out</span>
           </Link>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 overflow-y-auto w-full">
        <Suspense fallback={<div className="h-screen flex items-center justify-center font-black animate-pulse">Loading Module...</div>}>
          {renderRoleDashboard()}
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
