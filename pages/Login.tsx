
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Lock, User, ShieldAlert, X, ArrowRight, Mail, Eye, EyeOff, 
  ChevronLeft, Sparkles, ShieldCheck, Home, Phone, Smartphone, CheckCircle2, Shield,
  Key, Command
} from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  
  // MS Secret Access State
  const [showMsPrompt, setShowMsPrompt] = useState(false);
  const [msCode, setMsCode] = useState('');

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(2);
      setTimeout(() => setStep(3), 2000);
    }, 1500);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    if (val && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleFinalAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join('') === '123456') {
      navigate('/role-selection');
    } else {
      alert('Icode ntabwo ariyo!');
    }
  };

  const handleMsAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (msCode === 'g@2026') {
      navigate('/role-selection');
    } else {
      alert('Invalid Access Code');
      setMsCode('');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#f4f5f7] overflow-hidden relative">
      {/* Secret MS Access Button */}
      <button 
        onClick={() => setShowMsPrompt(true)}
        className="fixed top-6 right-6 z-[100] w-12 h-12 bg-gray-900/80 backdrop-blur-md text-white rounded-2xl flex items-center justify-center font-black text-xs hover:bg-green-600 transition-all shadow-xl border border-white/10"
      >
        MS
      </button>

      {/* MS Code Prompt Modal */}
      {showMsPrompt && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
           <div className="absolute inset-0 bg-gray-950/70 backdrop-blur-md" onClick={() => setShowMsPrompt(false)}></div>
           <div className="relative w-full max-w-sm bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 animate-in zoom-in duration-300">
              <div className="space-y-6 text-center">
                 <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto"><Key size={32} /></div>
                 <div className="space-y-1">
                    <h3 className="text-2xl font-black tracking-tighter">System Access</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Enter Admin Secret</p>
                 </div>
                 <form onSubmit={handleMsAccess} className="space-y-4">
                    <input 
                      autoFocus
                      type="password"
                      value={msCode}
                      onChange={(e) => setMsCode(e.target.value)}
                      placeholder="Access Code"
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-center font-black tracking-[0.5em] outline-none focus:border-green-500 transition-all"
                    />
                    <button className="w-full py-4 bg-gray-950 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all">Authorize Entry</button>
                 </form>
              </div>
           </div>
        </div>
      )}

      {/* Visual Branding Column */}
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
              Umutekano <br /> 
              <span className="gradient-text">Ni Uwambere.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Muri Garden TVET, gucunga amakuru yawe mu buryo bwizewe niyo ntego yacu ya mbere.
            </p>
          </div>
        </div>
      </div>

      {/* Auth Interaction Column */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-[#f4f5f7] relative">
        <div className="w-full max-w-md space-y-10">
          {step === 1 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="space-y-3">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">{t('loginTitle')}</h2>
                <p className="text-gray-500 font-medium">{t('loginSubtitle')}</p>
              </div>

              <form onSubmit={handleCredentialsSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email cyangwa Telefone</label>
                  <div className="relative group">
                    <input required type="text" value={credentials.identifier} onChange={(e) => setCredentials({...credentials, identifier: e.target.value})} className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-400 transition-all outline-none font-bold" placeholder="imeri@gmail.com" />
                    <Mail className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Ijambo ry'ibanga</label>
                  <div className="relative group">
                    <input required type={showPassword ? "text" : "password"} value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:border-green-400 transition-all outline-none font-bold" placeholder="••••••••" />
                    <Lock className="absolute left-4 top-4 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400 hover:text-gray-900">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <button disabled={isVerifying} className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:bg-green-500 hover:-translate-y-1 transition-all flex items-center justify-center space-x-4 group disabled:opacity-50">
                  {isVerifying ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <><span>Next: System Check</span><ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </form>
            </div>
          )}
          {/* Steps 2 and 3 omitted for brevity, logic remains same */}
          {step === 2 && (
            <div className="space-y-8 text-center animate-in zoom-in duration-500">
               <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner border-4 border-white animate-pulse">
                  <CheckCircle2 size={48} />
               </div>
               <div className="space-y-2">
                  <h3 className="text-3xl font-black tracking-tighter">Verified</h3>
                  <p className="text-gray-500 font-medium italic">Checking Director Registry...</p>
               </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="space-y-3">
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Enter OTP</h2>
                <p className="text-gray-500 font-medium">Verify your identity via code.</p>
              </div>
              <form onSubmit={handleFinalAuth} className="space-y-8">
                <div className="flex justify-between gap-3">
                  {otp.map((digit, i) => (
                    <input key={i} id={`otp-${i}`} type="text" maxLength={1} value={digit} onChange={(e) => handleOtpChange(i, e.target.value)} className="w-full h-16 bg-white border border-gray-200 rounded-2xl text-center text-2xl font-black focus:border-green-500 outline-none transition-all" />
                  ))}
                </div>
                <button className="w-full py-5 bg-green-600 text-white font-black rounded-2xl shadow-xl hover:bg-green-700 hover:-translate-y-1 transition-all">Authorize Login</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
