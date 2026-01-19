
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, User, X, ArrowRight, Github, Mail, Eye, EyeOff, 
  ChevronLeft, Sparkles, Phone, Briefcase, GraduationCap
} from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-gray-50 relative">
        <div className="absolute top-8 left-8 lg:hidden">
          <Link to="/" className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-900 shadow-xl">
             <ChevronLeft size={20} />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Kwiyandikisha</h2>
            <p className="text-gray-500 font-medium">Uzuza aya makuru akurikira kugira ngo ufungure konti.</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Izina rya Mbere</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400" placeholder="Jean" />
               </div>
               <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Izina rya Kabiri</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400" placeholder="Bosco" />
               </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Imeri</label>
              <div className="relative">
                <input type="email" className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400" placeholder="imeri@gmail.com" />
                <Mail className="absolute left-4 top-4 text-gray-400" size={18} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ijambo ry'ibanga</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} className="w-full pl-12 pr-12 py-4 bg-white border border-gray-100 rounded-2xl outline-none font-bold text-sm focus:border-green-400" placeholder="••••••••" />
                <Lock className="absolute left-4 top-4 text-gray-400" size={18} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl space-y-2">
               <label className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Hitamo Icyo Urwaye</label>
               <select className="w-full bg-transparent font-bold text-blue-900 outline-none cursor-pointer">
                  <option>Umunyeshuri</option>
                  <option>Umubyeyi</option>
               </select>
            </div>

            <button className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl shadow-2xl hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4 group">
              <span>Fungura Konti</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-gray-500 font-bold">
            Ufite konti? <Link to="/login" className="text-green-600 hover:underline">Injira</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
