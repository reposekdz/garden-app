
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck, GraduationCap, ClipboardList, Book, Calculator, Package, Settings } from 'lucide-react';

const roles = [
  { id: 'dos', name: 'Director of Study', icon: GraduationCap, color: 'bg-blue-500' },
  { id: 'dod', name: 'Director of Discipline', icon: ClipboardList, color: 'bg-red-500' },
  { id: 'hm', name: 'Head Master', icon: UserCheck, color: 'bg-purple-500' },
  { id: 'teacher', name: 'Teacher', icon: Book, color: 'bg-green-500' },
  { id: 'acc', name: 'Accountant', icon: Calculator, color: 'bg-yellow-500' },
  { id: 'stock', name: 'Stock Manager', icon: Package, color: 'bg-orange-500' },
  { id: 'admin', name: 'Admin', icon: Settings, color: 'bg-gray-900' },
];

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black tracking-tight">Access <span className="text-green-400">Restricted</span></h1>
          <p className="text-gray-400 text-xl">Please select your administrative role to continue to your dashboard.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => navigate(`/dashboard/${role.id}`)}
                className="group relative bg-gray-800 border border-gray-700 p-8 rounded-[2.5rem] text-center hover:bg-gray-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-20 h-20 ${role.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                  <Icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{role.name}</h3>
                <p className="text-gray-500 text-sm">Authorized personnel only. Logs are maintained.</p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </button>
            );
          })}
        </div>
        
        <div className="text-center pt-8">
          <button 
            onClick={() => navigate('/login')}
            className="text-gray-500 hover:text-white transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>Back to Public Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
