
import React, { useState } from 'react';
import { 
  Package, Box, Truck, AlertCircle, Search, Filter, Plus, 
  Download, Archive, ArrowRight, Clipboard, Trash2, CheckCircle, Clock
} from 'lucide-react';
import { useLanguage } from '../../components/LanguageContext';

const StockManagerDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const inventory = [
    { id: 'SKU-001', name: 'MacBook Air M2', category: 'IT Tools', stock: 12, status: 'Healthy', price: '1.2M' },
    { id: 'SKU-042', name: 'Cement Bags (50kg)', category: 'BDC Workshop', stock: 4, status: 'Low Stock', price: '12K' },
    { id: 'SKU-099', name: 'Hydraulic Oil', category: 'Auto Workshop', stock: 0, status: 'Out of Stock', price: '45K' },
    { id: 'SKU-105', name: 'Level 5 SOD Syllabus', category: 'Academic', stock: 150, status: 'Healthy', price: '500' },
  ];

  const filteredInventory = inventory.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-8 lg:p-16 space-y-12">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-white shadow-xl border border-gray-100 rounded-[1.5rem]"><Package className="text-gray-950" /></div>
            <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter">Inventory Engine</h1>
          </div>
          <p className="text-gray-400 font-medium ml-16">Ushinzwe Ububiko n'Ibikoresho by'Ishuri</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-3 px-8 py-4 bg-gray-950 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
             <Plus size={18} />
             <span>Add Item</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl">
             <Truck size={18} />
             <span>New Procurement</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {[
          { label: 'Total Assets', value: '450', sub: 'Active Items', icon: Box, color: 'text-blue-500' },
          { label: 'Low Stock Items', value: '8', sub: 'Reorder Soon', icon: AlertCircle, color: 'text-orange-500' },
          { label: 'Pending Requisitions', value: '14', sub: 'Review Needed', icon: Clipboard, color: 'text-purple-500' },
          { label: 'Stock Value', value: '45.2M', sub: 'Current Estimate', icon: Archive, color: 'text-green-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden relative">
             <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gray-50 ${stat.color}`}><stat.icon size={26} /></div>
                <span className="px-3 py-1 bg-gray-50 text-[10px] font-black text-gray-400 uppercase rounded-full">{stat.sub}</span>
             </div>
             <div className="relative z-10">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-gray-950 tracking-tighter">{stat.value}</h3>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-12 lg:p-16 rounded-[4rem] border border-gray-100 shadow-sm space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="space-y-2">
              <h2 className="text-3xl font-black tracking-tighter">Live Inventory</h2>
              <p className="text-gray-500 font-medium">Real-time tracking of workshop tools and IT assets.</p>
           </div>
           <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80 group">
                 <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by name or SKU..." 
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 font-bold text-sm transition-all"
                 />
                 <Search className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500" size={18} />
              </div>
              <button className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-400 hover:text-gray-950 transition-all"><Filter size={20} /></button>
           </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar pb-4">
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b border-gray-100">
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">SKU ID</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Item Name</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Category</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">In Stock</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4">Status</th>
                    <th className="pb-6 text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {filteredInventory.map((item) => (
                    <tr key={item.id} className="group hover:bg-gray-50 transition-colors">
                       <td className="py-6 px-4 font-black text-sm text-gray-400">{item.id}</td>
                       <td className="py-6 px-4 font-black text-gray-900 group-hover:text-green-500 transition-colors">{item.name}</td>
                       <td className="py-6 px-4 font-bold text-sm text-gray-500">{item.category}</td>
                       <td className="py-6 px-4 font-black text-gray-900">{item.stock}</td>
                       <td className="py-6 px-4">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                            item.status === 'Healthy' ? 'bg-green-100 text-green-600' : 
                            item.status === 'Low Stock' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                          }`}>{item.status}</span>
                       </td>
                       <td className="py-6 px-4 text-right">
                          <button className="p-2 text-gray-300 hover:text-gray-950 transition-all"><ArrowRight size={18} /></button>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
};

export default StockManagerDashboard;
