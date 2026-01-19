
import React from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, Activity, Clock, AlertTriangle, 
  Search, Bell, Download, Filter, Plus, UserCheck, Calculator, Package, FileText, ChevronRight,
  Briefcase, CreditCard, PieChart as PieIcon, User
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, BarChart, Bar 
} from 'recharts';
import { useLanguage } from '../../components/LanguageContext';

const AccountantDashboard: React.FC = () => {
  const { t } = useLanguage();
  const paymentStats = [
    { name: 'Sep', total: 4000, collected: 2400 },
    { name: 'Oct', total: 3000, collected: 3200 },
    { name: 'Nov', total: 2000, collected: 5800 },
    { name: 'Dec', total: 2780, collected: 3908 },
    { name: 'Jan', total: 5000, collected: 4800 },
  ];

  const arrearsData = [
    { name: 'SOD', value: 45 },
    { name: 'BDC', value: 25 },
    { name: 'AUTO', value: 30 },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#ef4444'];

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><Calculator className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">{t('finance')}</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Ushinzwe Imari n'Imicungire y'Ishuri</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group w-80">
            <input type="text" placeholder="Shakisha umunyeshuri..." className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-2xl outline-none shadow-sm focus:ring-4 focus:ring-green-400/10 focus:border-green-400 font-bold transition-all" />
            <Search className="absolute left-4 top-4 text-gray-400" size={18} />
          </div>
          <button className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 hover:shadow-xl transition-all"><Bell size={22} /></button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Total Revenue', value: '14.2M', sub: '+12.5%', icon: DollarSign, color: 'text-green-500' },
          { label: 'Arrears', value: '3.4M', sub: 'Debt', icon: TrendingDown, color: 'text-red-500' },
          { label: 'Velocity', value: '82%', sub: 'Healthy', icon: TrendingUp, color: 'text-blue-500' },
          { label: 'Pending', value: '12', sub: 'Invoices', icon: Clock, color: 'text-purple-500' },
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-8">
          <h4 className="text-2xl font-black tracking-tighter">Collection Performance</h4>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={paymentStats}>
                <defs>
                  <linearGradient id="colorColl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none'}} />
                <Area type="monotone" dataKey="collected" stroke="#22c55e" strokeWidth={4} fill="url(#colorColl)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Staff Payroll Section (NEW) */}
        <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-8">
           <div className="flex justify-between items-center">
              <h4 className="text-2xl font-black tracking-tighter">{t('payroll')}</h4>
              <button className="px-6 py-2 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Process All</button>
           </div>
           <div className="space-y-4">
              {[
                { name: 'Dr. Karasira Peter', role: 'Teacher', amount: '450,000 RWF', status: 'Pending' },
                { name: 'Mugisha Alice', role: 'DOS', amount: '620,000 RWF', status: 'Approved' },
                { name: 'Gasana Eric', role: 'Support', amount: '120,000 RWF', status: 'Paid' }
              ].map((staff, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-[2.5rem] hover:shadow-lg transition-all">
                   <div className="flex items-center space-x-4">
                      {/* Fixed: Added missing User icon import */}
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500"><User size={20} /></div>
                      <div>
                         <p className="font-black text-gray-900">{staff.name}</p>
                         <p className="text-[10px] font-black text-gray-400 uppercase">{staff.role}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="font-black text-gray-900">{staff.amount}</p>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${staff.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>{staff.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { name: 'Fee Invoices', icon: DollarSign, color: 'bg-green-50 text-green-500' },
          { name: 'Payroll Logs', icon: Clock, color: 'bg-blue-50 text-blue-500' },
          { name: 'Stock Costs', icon: Package, color: 'bg-red-50 text-red-500' },
          { name: 'Audit Reports', icon: FileText, color: 'bg-gray-100 text-gray-900' },
        ].map((feat, i) => (
          <div key={i} className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all cursor-pointer">
             <div className={`w-14 h-14 ${feat.color} rounded-2xl flex items-center justify-center mb-6`}><feat.icon size={24} /></div>
             <h5 className="text-xl font-black text-gray-950">{feat.name}</h5>
             <div className="mt-4 flex justify-end text-gray-300 group-hover:text-green-500 transition-colors"><ChevronRight /></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountantDashboard;
