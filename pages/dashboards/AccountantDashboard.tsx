
import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, Activity, Clock, AlertTriangle, 
  Search, Bell, Download, Filter, Plus, UserCheck, Calculator, Package, FileText, ChevronRight,
  Briefcase, CreditCard, PieChart as PieIcon, User, Layers, ArrowUpRight, BarChart3, ShieldCheck,
  RefreshCw, Wallet, LayoutGrid, CheckCircle2, MoreHorizontal
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar, LineChart, Line
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const AccountantDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [activeView, setActiveView] = useState<'realtime' | 'forecast'>('realtime');
  
  const financialHealth = [
    { name: 'Sep', revenue: 4000, expenses: 2400, projection: 2000 },
    { name: 'Oct', revenue: 3000, expenses: 2200, projection: 3500 },
    { name: 'Nov', revenue: 6000, expenses: 2800, projection: 5500 },
    { name: 'Dec', revenue: 5780, expenses: 3908, projection: 6000 },
    { name: 'Jan', revenue: 7000, expenses: 3100, projection: 7200 },
  ];

  const collectionProgress = [
    { name: 'Collected', value: 78, color: '#22c55e' },
    { name: 'Pending', value: 22, color: 'rgba(255,255,255,0.05)' }
  ];

  const budgetAllocation = [
    { name: 'Academic Lab', current: 12000000, target: 15000000, color: '#3b82f6' },
    { name: 'Staff Welfare', current: 8000000, target: 10000000, color: '#a855f7' },
    { name: 'Infrastructure', current: 5000000, target: 12000000, color: '#f59e0b' },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-16 bg-[#f4f5f7] min-h-screen font-['Plus_Jakarta_Sans']">
      
      {/* Dynamic Header */}
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <div className="p-5 bg-white shadow-xl border border-gray-100 rounded-[1.8rem] text-gray-950"><Wallet size={32} /></div>
            <div>
               <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight">Capital Portal</h1>
               <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Treasury Management Active</span>
               </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">
             <RefreshCw size={18} />
             <span>Reconcile Accounts</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-5 bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
             <Plus size={18} />
             <span>Disburse Funds</span>
          </button>
        </div>
      </header>

      {/* Advanced Rings & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Collection Ring Card */}
        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden flex items-center justify-between">
            <div className="space-y-1 relative z-10">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Fee Collection</p>
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">78%</h3>
            </div>
            <div className="w-20 h-20 relative">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                     <Pie data={collectionProgress} cx="50%" cy="50%" innerRadius={25} outerRadius={35} dataKey="value" startAngle={90} endAngle={-270}>
                        <Cell fill="#22c55e" />
                        <Cell fill="#f1f5f9" />
                     </Pie>
                  </PieChart>
               </ResponsiveContainer>
            </div>
        </div>

        {[
          { label: 'Burn Rate', value: '450K/Day', sub: '-5.2% Trend', icon: TrendingDown, color: 'text-red-500' },
          { label: 'Verified Income', value: '14.2M', sub: 'Audit Ready', icon: ShieldCheck, color: 'text-blue-500' },
          { label: 'Global Liquidity', value: '2.8M', sub: 'In Cash-flow', icon: DollarSign, color: 'text-indigo-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group">
             <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl bg-[#f8f9fb] ${stat.color} group-hover:scale-110 transition-transform`}><stat.icon size={26} /></div>
                <span className="px-3 py-1 bg-gray-50 text-[10px] font-black text-gray-400 uppercase rounded-full tracking-widest">{stat.sub}</span>
             </div>
             <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Powerful Interactive Chart Area */}
        <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <div className="flex justify-between items-center">
              <div className="space-y-1">
                 <h4 className="text-2xl font-black tracking-tighter text-gray-950">Fiscal Performance Monitor</h4>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-time Stream vs Predictive Model</p>
              </div>
              <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
                 <button onClick={() => setActiveView('realtime')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeView === 'realtime' ? 'bg-white shadow-md text-gray-950' : 'text-gray-400'}`}>Real-time</button>
                 <button onClick={() => setActiveView('forecast')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeView === 'forecast' ? 'bg-white shadow-md text-gray-950' : 'text-gray-400'}`}>Forecast</button>
              </div>
           </div>
           
           <div className="h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                 {activeView === 'realtime' ? (
                   <AreaChart data={financialHealth}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient>
                        <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/><stop offset="95%" stopColor="#ef4444" stopOpacity={0}/></linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                      <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)'}} />
                      <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={5} fill="url(#colorRev)" />
                      <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={5} fill="url(#colorExp)" />
                   </AreaChart>
                 ) : (
                   <LineChart data={financialHealth}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                      <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none'}} />
                      <Line type="monotone" dataKey="projection" stroke="#a855f7" strokeWidth={5} strokeDasharray="10 10" dot={{r: 6, fill: '#a855f7', strokeWidth: 4, stroke: '#fff'}} />
                      <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={5} dot={{r: 6, fill: '#3b82f6', strokeWidth: 4, stroke: '#fff'}} />
                   </LineChart>
                 )}
              </ResponsiveContainer>
           </div>
        </div>

        {/* Powerful Reconcile / Budget Widget */}
        <div className="bg-gray-950 p-12 rounded-[4rem] flex flex-col justify-between text-white overflow-hidden relative shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
           <div className="space-y-10 relative z-10">
              <div className="flex justify-between items-center">
                 <h4 className="text-2xl font-black tracking-tighter">Budget Utilization</h4>
                 <LayoutGrid size={24} className="text-gray-500" />
              </div>
              
              <div className="space-y-8">
                 {budgetAllocation.map((item, i) => (
                   <div key={i} className="space-y-3">
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.name}</span>
                         <span className="text-xs font-black">{Math.round((item.current/item.target)*100)}%</span>
                      </div>
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(item.current/item.target)*100}%`, backgroundColor: item.color }}></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="pt-10 space-y-4 relative z-10 border-t border-white/5 mt-10">
              <div className="p-6 bg-white/5 rounded-[2rem] border border-white/5 flex items-center justify-between">
                 <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-xl flex items-center justify-center"><CheckCircle2 size={20} /></div>
                    <div>
                       <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Bank Sync</p>
                       <p className="text-sm font-black">Connected</p>
                    </div>
                 </div>
                 <button className="text-blue-500 font-black text-[10px] uppercase tracking-widest">Update</button>
              </div>
              <button className="w-full py-5 bg-white text-gray-950 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl">Deploy Strategic Fund</button>
           </div>
        </div>
      </div>

      {/* Advanced Ledger Table */}
      <section className="bg-white p-12 lg:p-16 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-2">
               <h3 className="text-3xl font-black tracking-tighter leading-none">Fiscal Ledger Audit</h3>
               <p className="text-gray-500 font-medium italic">"Ubuhamya bw'iyinjira n'isohoka ry'imari muri Garden TVET."</p>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-96 group">
                  <input type="text" placeholder="Search ledger by Ref or Purpose..." className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-blue-500 transition-all font-bold text-sm" />
                  <Search className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500" size={18} />
               </div>
               <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 transition-all"><Filter size={20} /></button>
            </div>
         </div>

         <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-separate border-spacing-y-2">
               <thead>
                  <tr className="border-b border-gray-50">
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Ref ID</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Transaction Node</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Volume</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6">Verification</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-6 text-right">Audit</th>
                  </tr>
               </thead>
               <tbody>
                  {[
                    { id: '#TR-8821', name: 'RTB Equipment Purchase', amount: '2.5M RWF', status: 'Verified', date: 'Today' },
                    { id: '#TR-8822', name: 'Staff Salary (Nov)', amount: '6.2M RWF', status: 'Pending', date: 'Yesterday' },
                    { id: '#TR-8823', name: 'Utility Bills', amount: '850K RWF', status: 'Verified', date: 'Dec 28' },
                    { id: '#TR-8824', name: 'Software Licenses', amount: '1.4M RWF', status: 'Reviewing', date: 'Dec 25' },
                  ].map((tr) => (
                    <tr key={tr.id} className="group bg-white border border-gray-50 rounded-3xl overflow-hidden hover:shadow-xl hover:bg-gray-50 transition-all cursor-pointer">
                       <td className="py-7 px-6 font-black text-xs text-gray-400 group-hover:text-blue-600 transition-colors">{tr.id}</td>
                       <td className="py-7 px-6 font-black text-gray-900">{tr.name}</td>
                       <td className="py-7 px-6 font-black text-gray-900">{tr.amount}</td>
                       <td className="py-7 px-6">
                          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            tr.status === 'Verified' ? 'bg-green-50 text-green-600' : 
                            tr.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'
                          }`}>{tr.status}</span>
                       </td>
                       <td className="py-7 px-6 text-right">
                          <button className="p-3 text-gray-300 hover:text-gray-950 transition-all"><MoreHorizontal size={20} /></button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </section>

      {/* Footer Meta */}
      <footer className="flex justify-between items-center text-gray-400">
         <div className="flex items-center space-x-4">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fiscal Control Matrix V4.0 (Enhanced)</span>
         </div>
         <p className="text-[10px] font-black uppercase tracking-widest italic opacity-50">Monitoring Liquidity Stream</p>
      </footer>
    </div>
  );
};

export default AccountantDashboard;
