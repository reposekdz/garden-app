
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, User, ShieldAlert, X, ArrowRight, Github, Mail, Eye, EyeOff, 
  ChevronLeft, Sparkles, ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showMSModal, setShowMSModal] = useState(false);
  const [msCode, setMSCode] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleMSAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (msCode === 'g@2026') {
      navigate('/role-selection');
    } else {
      setError('Icode ntabwo ariyo');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Column: Visual Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gray-950 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-xl space-y-12">
          <Link to="/" className="inline-flex items-center space-x-4 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-[1.5rem] flex items-center justify-center text-white font-black text-3xl shadow-2xl group-hover:rotate-12 transition-all">G</div>
            <span className="text-3xl font-black text-white tracking-tighter italic">Garden <span className="text-green-400">TVET</span></span>
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Ubumenyi <br /> 
              <span className="gradient-text">Ni Ubukire.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Injira mu muryango w'abahanga mu ikoranabuhanga, ubwubatsi, n'ibinyabiziga kugira ngo wubake ejo hazaza hawe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-10">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl space-y-2">
              <p className="text-3xl font-black text-white">95%</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Ababonye Akazi</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl space-y-2">
              <p className="text-3xl font-black text-white">1.2K+</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Abanyeshuri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-gray-50 relative">
        <div className="absolute top-8 left-8 lg:hidden">
          <Link to="/" className="w-10 h-10 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-900 shadow-xl">
             <ChevronLeft size={20} />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Murakaza neza!</h2>
            <p className="text-gray-500 font-medium">Injira kugira ngo ukomeze urugendo rwawe rw'ubumenyi.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Izina cyangwa Imeri</label>
              <div className="relative group">
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-green-400/10 focus:border-green-400 transition-all outline-none font-bold"
                  placeholder="ID yawe"
                />
                <User className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Ijambo ry'ibanga</label>
              <div className="relative group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full pl-12 pr-12 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-green-400/10 focus:border-green-400 transition-all outline-none font-bold"
                  placeholder="••••••••"
                />
                <Lock className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <div className="w-5 h-5 border-2 border-gray-200 rounded-lg flex items-center justify-center group-hover:border-green-400 transition-all">
                   <div className="w-2.5 h-2.5 bg-green-500 rounded-sm scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <span className="text-sm font-bold text-gray-500 group-hover:text-gray-900">Nyibuka</span>
              </label>
              <a href="#" className="text-sm font-black text-blue-600 hover:text-blue-700">Wibagiwe ijambo?</a>
            </div>

            <button className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl shadow-2xl hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4 group">
              <span>Injira ubu</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase font-black tracking-widest"><span className="bg-gray-50 px-4 text-gray-400">Cyangwa ukoreshe</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button className="flex items-center justify-center space-x-3 py-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-100 transition-all font-bold text-sm">
                <Mail size={18} className="text-red-500" />
                <span>Google</span>
             </button>
             <button className="flex items-center justify-center space-x-3 py-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-100 transition-all font-bold text-sm">
                <Github size={18} className="text-gray-900" />
                <span>Github</span>
             </button>
          </div>

          <p className="text-center text-gray-500 font-bold">
            Ntabwo ufite konti? <Link to="/register" className="text-green-600 hover:underline">Kwiyandikisha</Link>
          </p>

          <div className="pt-8 border-t border-gray-100 flex flex-col items-center">
            {/* Fix: removed calls to undefined setShowNotifications and showNotifications variables */}
            <button 
              onClick={() => setShowMSModal(true)}
              className="px-6 py-2 bg-gray-900/5 text-gray-400 font-black rounded-xl hover:bg-gray-900 hover:text-white transition-all uppercase tracking-widest text-[10px]"
            >
              Urugero rwa MS
            </button>
          </div>
        </div>
      </div>

      {/* Secret Auth Modal */}
      {showMSModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-sm rounded-[2.5rem] p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
            <button onClick={() => setShowMSModal(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900">
              <X />
            </button>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-[2rem] flex items-center justify-center mx-auto animate-bounce-slow">
                <ShieldAlert size={40} />
              </div>
              <h3 className="text-2xl font-black tracking-tighter text-gray-900">Akarere k'Abakozi</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Shyiramo code yo kwinjira mu nshingano z'ubuyobozi.</p>
              <form onSubmit={handleMSAuth} className="space-y-4">
                <input 
                  type="password" 
                  value={msCode}
                  onChange={(e) => setMSCode(e.target.value)}
                  className={`w-full px-6 py-5 bg-gray-100 rounded-2xl text-center text-2xl tracking-[0.5em] font-black focus:ring-4 focus:ring-red-500/20 outline-none border-none transition-all ${error ? 'ring-2 ring-red-500' : ''}`}
                  placeholder="••••••"
                  autoFocus
                />
                {error && <p className="text-red-500 text-xs font-black uppercase tracking-widest">{error}</p>}
                <button className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all shadow-xl">
                  Genzura
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
