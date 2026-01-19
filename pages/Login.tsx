
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ShieldAlert, X } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const Login: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [showMSModal, setShowMSModal] = useState(false);
  const [msCode, setMSCode] = useState('');
  const [error, setError] = useState('');

  const handleMSAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (msCode === 'g@2026') {
      navigate('/role-selection');
    } else {
      setError('Invalid Access Code');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500"></div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2">Welcome Back</h2>
          <p className="text-gray-500">Login to your student or parent account</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Username or Email</label>
            <div className="relative">
              <input 
                type="text" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-400 transition-all outline-none"
                placeholder="Enter your id"
              />
              <User className="absolute left-4 top-4 text-gray-400" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Password</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-400 transition-all outline-none"
                placeholder="••••••••"
              />
              <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-black rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Login Now
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 text-gray-500 cursor-pointer">
            <input type="checkbox" className="rounded text-green-500 focus:ring-green-400" />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-blue-600 font-bold hover:underline">Forgot Password?</a>
        </div>

        <div className="mt-10 pt-10 border-t border-gray-100 flex flex-col items-center space-y-4">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">Administrative Access</p>
          <button 
            onClick={() => setShowMSModal(true)}
            className="px-6 py-2 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all uppercase tracking-tighter text-sm"
          >
            ms
          </button>
        </div>
      </div>

      {/* Secret Auth Modal */}
      {showMSModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl relative">
            <button 
              onClick={() => setShowMSModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900"
            >
              <X />
            </button>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-2xl font-black">Authorized Only</h3>
              <p className="text-gray-500 text-sm">Enter the secondary authorization code to proceed to staff roles.</p>
              <form onSubmit={handleMSAuth} className="space-y-4">
                <input 
                  type="password" 
                  value={msCode}
                  onChange={(e) => setMSCode(e.target.value)}
                  className={`w-full px-6 py-4 bg-gray-100 rounded-2xl text-center text-xl tracking-[0.5em] font-black focus:ring-2 focus:ring-red-500 outline-none border-none transition-all ${error ? 'animate-shake ring-2 ring-red-500' : ''}`}
                  placeholder="••••••"
                  autoFocus
                />
                {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
                <button className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all">
                  Verify Access
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
