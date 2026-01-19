
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, User, X, ArrowRight, Github, Mail, Eye, EyeOff, 
  ChevronLeft, Sparkles, Phone, Briefcase, GraduationCap,
  Users, Layers, MapPin, ShieldCheck, Activity
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Register: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userRole, setUserRole] = useState<'Student' | 'Parent'>('Student');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Registration successful! Redirecting to login...');
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Left Column: Visual Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-xl space-y-12">
          <Link to="/" className="inline-flex items-center space-x-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl group-hover:rotate-12 transition-all">G</div>
            <span className="text-3xl font-black text-white tracking-tighter italic">Garden <span className="text-green-400">TVET</span></span>
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Tangira <br /> 
              <span className="gradient-text">Urugendo.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Fungura konti yawe uyu munsi kugira ngo utangire inyigisho zijyanye n'umwuga wifuza mo ejo hazaza heza.
            </p>
          </div>

          <div className="space-y-8 pt-10">
            {[
               { icon: GraduationCap, title: "Inyigisho zo ku rwego rwa Hejuru", desc: "Zemewe n'amategeko mu Rwanda." },
               { icon: Briefcase, title: "Amashirahamwe bafatanya", desc: "Kugira ngo ubone akazi neza." }
            ].map((feat, i) => (
              <div key={i} className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-green-400">
                  <feat.icon size={28} />
                </div>
                <div>
                   <h4 className="text-white font-black text-lg">{feat.title}</h4>
                   <p className="text-gray-500 text-sm font-medium">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-gray-50 relative overflow-y-auto custom-scrollbar">
        <div className="absolute top-8 left-8 lg:hidden">
          <Link to="/" className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-900 shadow-xl">
             <ChevronLeft size={20} />
          </Link>
        </div>

        <div className="w-full max-w-xl space-y-12 animate-in fade-in slide-in-from-right-8 duration-700 py-10">
          <div className="space-y-3">
            <h2 className="text-5xl font-black text-gray-900 tracking-tighter">Kwiyandikisha</h2>
            <p className="text-gray-500 font-bold text-lg italic">"Wubake ubumenyi, ufungure amarembo y'ejo hazaza."</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-10">
            {/* Role Switcher */}
            <div className="p-2 bg-white border border-gray-200 rounded-[2rem] flex shadow-sm">
               <button 
                type="button" 
                onClick={() => setUserRole('Student')}
                className={`flex-1 py-4 rounded-[1.8rem] font-black text-xs uppercase tracking-widest transition-all ${userRole === 'Student' ? 'bg-gray-950 text-white shadow-xl' : 'text-gray-400'}`}
               >
                  Umunyeshuri
               </button>
               <button 
                type="button" 
                onClick={() => setUserRole('Parent')}
                className={`flex-1 py-4 rounded-[1.8rem] font-black text-xs uppercase tracking-widest transition-all ${userRole === 'Parent' ? 'bg-gray-950 text-white shadow-xl' : 'text-gray-400'}`}
               >
                  Umubyeyi
               </button>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">Amakuru y'Ibanze (Personal Details)</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Izina rya Mbere</label>
                       <input required type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="Jean" />
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Izina rya Kabiri</label>
                       <input required type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="Bosco" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Imeri (Email)</label>
                       <div className="relative">
                          <input required type="email" className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="imeri@gmail.com" />
                          <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
                       </div>
                    </div>
                    <div className="space-y-1.5">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Telefone</label>
                       <div className="relative">
                          <input required type="tel" className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="+250..." />
                          <Phone className="absolute left-4 top-4 text-gray-400" size={18} />
                       </div>
                    </div>
                 </div>
              </div>

              {userRole === 'Student' && (
                <div className="space-y-8 animate-in fade-in duration-500">
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">Academic & Career Path</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Hitamo Umwuga (Trade)</label>
                            <div className="relative">
                               <select required className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm appearance-none">
                                  <option value="">Select Trade...</option>
                                  <option>Software Development</option>
                                  <option>Building Construction</option>
                                  <option>Automobile Technology</option>
                               </select>
                               <Briefcase className="absolute left-4 top-4 text-gray-400" size={18} />
                            </div>
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Urwego (Level)</label>
                            <div className="relative">
                               <select required className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm appearance-none">
                                  <option value="">Select Level...</option>
                                  <option>Level 3</option>
                                  <option>Level 4</option>
                                  <option>Level 5</option>
                               </select>
                               <Layers className="absolute left-4 top-4 text-gray-400" size={18} />
                            </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">Umubyeyi / Ushinzwe Umunyeshuri</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Izina ry'Umubyeyi</label>
                            <input required type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="Parent Full Name" />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Telefone y'Umubyeyi</label>
                            <input required type="tel" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="+250..." />
                         </div>
                      </div>
                   </div>
                </div>
              )}

              <div className="space-y-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-100 pb-2">Security</p>
                 <div className="space-y-1.5">
                   <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ijambo ry'ibanga</label>
                   <div className="relative">
                     <input required type={showPassword ? "text" : "password"} className="w-full pl-12 pr-12 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400 shadow-sm" placeholder="••••••••" />
                     <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                     <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                     </button>
                   </div>
                 </div>
              </div>
            </div>

            <div className="pt-4">
               <button 
                disabled={isSubmitting}
                className="w-full py-6 bg-gray-900 text-white font-black rounded-3xl shadow-2xl hover:bg-green-600 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4 group disabled:opacity-50"
               >
                 {isSubmitting ? (
                   <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                 ) : (
                   <>
                     <span>Komeza Kwiyandikisha</span>
                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                   </>
                 )}
               </button>
            </div>
          </form>

          <p className="text-center text-gray-500 font-bold">
            Ufite konti? <Link to="/login" className="text-green-600 hover:underline">Injira</Link>
          </p>
          
          <div className="pt-10 flex items-center justify-center space-x-6">
             <div className="flex items-center space-x-2">
                <ShieldCheck size={16} className="text-green-500" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Secure Data Storage</span>
             </div>
             <div className="flex items-center space-x-2">
                <Activity size={16} className="text-blue-500" />
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Real-time Approval</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
