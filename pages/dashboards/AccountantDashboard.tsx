
import React from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, Activity, Clock, AlertTriangle, 
  Search, Bell, Download, Filter, Plus, UserCheck, Calculator, Package, FileText, ChevronRight,
  Briefcase, CreditCard, PieChart as PieIcon, User, Layers, ArrowUpRight
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar 
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const AccountantDashboard: React.FC = () => {
  const { t } = useLanguage();
  
  const financialHealth = [
    { name: 'Sep', revenue: 4000, expenses: 2400 },
    { name: 'Oct', revenue: 3000, expenses: 2200 },
    { name: 'Nov', revenue: 6000, expenses: 2800 },
    { name: 'Dec', revenue: 5780, expenses: 3908 },
    { name: 'Jan', revenue: 7000, expenses: 3100 },
  ];

  const expenseAllocation = [
    { name: 'Staff Salaries', value: 45, color: '#3b82f6' },
    { name: 'Infrastructure', value: 25, color: '#22c55e' },
    { name: 'Workshop Tools', value: 20, color: '#f59e0b' },
    { name: 'Utilities', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><CreditCard className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Finance Hub</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Ushinzwe Imari n'Imicungire y'Ishuri - Advanced Insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
             <Plus size={18} />
             <span>New Invoice</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
             <Download size={18} />
             <span>Export Audit</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Total Revenue', value: '14.2M', sub: '+12.5%', icon: DollarSign, color: 'text-green-500' },
          { label: 'Total Expenses', value: '8.1M', sub: 'On Track', icon: TrendingDown, color: 'text-red-500' },
          { label: 'Profit Margin', value: '42%', sub: 'Healthy', icon: PieIcon, color: 'text-blue-500' },
          { label: 'Pending Dues', value: '2.8M', sub: 'High Risk', icon: AlertTriangle, color: 'text-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-gray-50 ${stat.color} group-hover:scale-110 transition-transform`}><stat.icon size={26} /></div>
                <span className="px-3 py-1 bg-gray-50 text-[10px] font-black text-gray-400 uppercase tracking-widest rounded-full">{stat.sub}</span>
             </div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
             <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
          <div className="flex justify-between items-center">
             <h4 className="text-2xl font-black tracking-tighter">Revenue vs Expenses</h4>
             <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><span className="text-[10px] font-black uppercase text-gray-400">Revenue</span></div>
                <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><span className="text-[10px] font-black uppercase text-gray-400">Expenses</span></div>
             </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialHealth}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/><stop offset="95%" stopColor="#ef4444" stopOpacity={0}/></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)'}} />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={4} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={4} fill="url(#colorExp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
           <h4 className="text-2xl font-black tracking-tighter">Expense Allocation</h4>
           <div className="space-y-6">
              {expenseAllocation.map((item, i) => (
                <div key={i} className="space-y-2">
                   <div className="flex justify-between items-center px-1">
                      <span className="text-xs font-black text-gray-900">{item.name}</span>
                      <span className="text-xs font-black text-gray-400">{item.value}%</span>
                   </div>
                   <div className="w-full h-3 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                      <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
                   </div>
                </div>
              ))}
           </div>
           <div className="pt-6 border-t border-gray-100">
              <button className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all">Optimize Budget</button>
           </div>
        </div>
      </div>

      <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
         <div className="flex justify-between items-center">
            <h4 className="text-2xl font-black tracking-tighter">Recent Transactions</h4>
            <button className="flex items-center space-x-2 text-blue-600 font-black text-xs uppercase tracking-widest">
               <span>View All</span>
               <ArrowUpRight size={16} />
            </button>
         </div>
         <div className="overflow-x-auto custom-scrollbar pb-4">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-gray-100">
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Transaction ID</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Entity / Purpose</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Amount</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Status</th>
                     <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 text-right">Date</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-50">
                  {[
                    { id: '#TR-8821', name: 'RTB Equipment Purchase', amount: '2.5M RWF', status: 'Completed', date: 'Today' },
                    { id: '#TR-8822', name: 'Staff Salary (Nov)', amount: '6.2M RWF', status: 'Pending', date: 'Yesterday' },
                    { id: '#TR-8823', name: 'Utility Bills', amount: '850K RWF', status: 'Completed', date: 'Dec 28' },
                  ].map((tr) => (
                    <tr key={tr.id} className="group hover:bg-gray-50 transition-colors">
                       <td className="py-6 px-4 font-black text-sm text-gray-400">{tr.id}</td>
                       <td className="py-6 px-4 font-black text-gray-900">{tr.name}</td>
                       <td className="py-6 px-4 font-black text-gray-900">{tr.amount}</td>
                       <td className="py-6 px-4">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${tr.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{tr.status}</span>
                       </td>
                       <td className="py-6 px-4 text-right text-sm font-bold text-gray-400">{tr.date}</td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default AccountantDashboard;
