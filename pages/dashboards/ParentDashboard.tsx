
import React, { useState } from 'react';
import { 
  ShieldCheck, Search, Users, GraduationCap, BookOpen, Activity, 
  Star, Clock, AlertCircle, CheckCircle2, FileText, ArrowRight,
  User, Mail, Phone, MapPin, TrendingUp, Award, Layers
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';

interface ChildData {
  name: string;
  id: string;
  trade: string;
  class: string;
  attendance: string;
  grade: number;
  conduct: string;
  history: { month: string; score: number }[];
  performance: { subject: string; score: number }[];
}

const ParentDashboard: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    studentClass: '',
    studentTrade: ''
  });

  const [authorizedChild, setAuthorizedChild] = useState<ChildData | null>(null);

  const handleAuthorization = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate system check logic
    setTimeout(() => {
      // Mock validation logic
      if (formData.studentName && formData.studentClass && formData.studentTrade) {
        setAuthorizedChild({
          name: formData.studentName,
          id: 'GT-2024-089',
          trade: formData.studentTrade,
          class: formData.studentClass,
          attendance: '98%',
          grade: 88,
          conduct: 'Excellent',
          history: [
            { month: 'Sep', score: 75 },
            { month: 'Oct', score: 82 },
            { month: 'Nov', score: 88 },
            { month: 'Dec', score: 85 },
            { month: 'Jan', score: 92 },
          ],
          performance: [
            { subject: 'Theory', score: 95 },
            { subject: 'Practical', score: 90 },
            { subject: 'Conduct', score: 100 },
            { subject: 'Innovation', score: 85 }
          ]
        });
        setIsAuthorized(true);
      } else {
        alert('Nta munyeshuri ufite iyo myirondoro wabonetse.');
      }
      setIsChecking(false);
    }, 2000);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center p-6 lg:p-12 font-['Plus_Jakarta_Sans']">
        <div className="w-full max-w-2xl bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100 space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
           <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner border border-green-100">
                 <ShieldCheck size={40} />
              </div>
              <h1 className="text-4xl font-black text-gray-950 tracking-tighter">Child Access Portal</h1>
              <p className="text-gray-500 font-bold max-w-sm mx-auto">Injiza imyirondoro y'umwana wawe kugira ngo ubone amakuru ye mu buryo bwizewe.</p>
           </div>

           <form onSubmit={handleAuthorization} className="space-y-8">
              <div className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Izina ry'Umunyeshuri (Full Name)</label>
                    <div className="relative group">
                       <input 
                         required
                         type="text" 
                         value={formData.studentName}
                         onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                         className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-green-400/10 focus:border-green-400 transition-all font-bold text-lg" 
                         placeholder="Ingabire Marie Louise"
                       />
                       <User className="absolute left-5 top-5 text-gray-400 group-focus-within:text-green-500" size={24} />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Ishuri (Class)</label>
                       <select 
                         required
                         value={formData.studentClass}
                         onChange={(e) => setFormData({...formData, studentClass: e.target.value})}
                         className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-400 transition-all font-bold text-lg"
                       >
                          <option value="">Hitamo...</option>
                          <option>SOD Level 3</option>
                          <option>SOD Level 4</option>
                          <option>SOD Level 5</option>
                          <option>BDC Level 3</option>
                          <option>BDC Level 4</option>
                          <option>BDC Level 5</option>
                          <option>AUT Level 3</option>
                          <option>AUT Level 5</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Umwuga (Trade)</label>
                       <select 
                         required
                         value={formData.studentTrade}
                         onChange={(e) => setFormData({...formData, studentTrade: e.target.value})}
                         className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-green-400 transition-all font-bold text-lg"
                       >
                          <option value="">Hitamo...</option>
                          <option>Software Development</option>
                          <option>Building Construction</option>
                          <option>Automobile Technology</option>
                       </select>
                    </div>
                 </div>
              </div>

              <button 
                disabled={isChecking}
                className="w-full py-6 bg-gray-950 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-green-600/10 flex items-center justify-center space-x-4 disabled:opacity-50"
              >
                 {isChecking ? (
                   <>
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                     <span>Checking Registry...</span>
                   </>
                 ) : (
                   <>
                     <span>Retrieve Information</span>
                     <ArrowRight size={20} />
                   </>
                 )}
              </button>
           </form>

           <div className="pt-8 border-t border-gray-50 flex items-center justify-center space-x-3 text-gray-400">
              <Activity size={18} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Authorized Parent Link • 256-bit Encrypted</span>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-16 space-y-16 bg-[#f4f5f7] min-h-screen font-['Plus_Jakarta_Sans']">
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10">
        <div className="space-y-3">
          <div className="flex items-center space-x-5">
            <div className="p-5 bg-white shadow-xl border border-gray-100 rounded-[1.8rem] text-gray-950"><Users size={32} /></div>
            <div>
               <h1 className="text-4xl lg:text-6xl font-black text-gray-950 tracking-tighter leading-tight">Parent Pulse</h1>
               <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Secure Family Portal Connected</span>
               </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsAuthorized(false)} className="flex items-center space-x-3 px-8 py-5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all shadow-sm">
             <ArrowRight className="rotate-180" size={18} />
             <span>Change Child</span>
          </button>
          <button className="flex items-center space-x-3 px-8 py-5 bg-gray-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl">
             <FileText size={18} />
             <span>Download Report Card</span>
          </button>
        </div>
      </header>

      {/* Child Information Header Card */}
      <div className="bg-gray-950 p-12 lg:p-16 rounded-[4rem] text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full"></div>
         <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white/10 rounded-[3rem] flex items-center justify-center text-6xl font-black border border-white/10 shadow-2xl relative z-10">
            {authorizedChild?.name.charAt(0)}
         </div>
         <div className="space-y-6 relative z-10 flex-1 text-center lg:text-left">
            <div className="space-y-1">
               <h2 className="text-4xl lg:text-7xl font-black tracking-tighter">{authorizedChild?.name}</h2>
               <p className="text-lg lg:text-2xl font-bold text-gray-400">{authorizedChild?.id} • {authorizedChild?.class}</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
               <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3">
                  <GraduationCap className="text-green-500" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">{authorizedChild?.trade}</span>
               </div>
               <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-3">
                  <Star className="text-yellow-400" size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">Conduct: {authorizedChild?.conduct}</span>
               </div>
            </div>
         </div>
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] text-center space-y-2 relative z-10 min-w-[240px]">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Term Average</p>
            <h3 className="text-6xl font-black text-green-500">{authorizedChild?.grade}%</h3>
            <p className="text-xs font-bold text-gray-400">+4.2% from mid-term</p>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
         {/* Performance Trend */}
         <div className="xl:col-span-2 bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
            <div className="flex justify-between items-center">
               <h4 className="text-2xl font-black tracking-tighter text-gray-950">Academic Progression</h4>
               <TrendingUp className="text-green-500" />
            </div>
            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={authorizedChild?.history}>
                     <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                     <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                     <Tooltip contentStyle={{borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)'}} />
                     <Area type="monotone" dataKey="score" stroke="#22c55e" strokeWidth={5} fill="url(#colorScore)" dot={{r: 6, fill: '#22c55e', strokeWidth: 4, stroke: '#fff'}} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Subject Pulse */}
         <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm space-y-10">
            <h4 className="text-2xl font-black tracking-tighter text-gray-950">Module Mastery</h4>
            <div className="space-y-8">
               {authorizedChild?.performance.map((item, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.subject}</span>
                       <span className="text-xs font-black text-gray-950">{item.score}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-50 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 rounded-full transition-all duration-1000" style={{ width: `${item.score}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex items-center space-x-6">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-500 shadow-sm"><CheckCircle2 size={24} /></div>
               <div>
                  <p className="text-xs font-black text-blue-900 uppercase tracking-widest">Attendance Status</p>
                  <p className="text-2xl font-black text-blue-600">{authorizedChild?.attendance}</p>
               </div>
            </div>
         </div>
      </div>

      <footer className="flex justify-between items-center text-gray-400">
         <div className="flex items-center space-x-4">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Family Security Portal V1.2</span>
         </div>
      </footer>
    </div>
  );
};

export default ParentDashboard;
