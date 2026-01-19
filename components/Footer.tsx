
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">G</div>
              <span className="text-2xl font-bold tracking-tight">Garden <span className="text-green-400">TVET</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Excellence in vocational training and skills development. Empowering the next generation of industry leaders.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Admission Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Career Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Trades</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('sod')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('bdc')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">{t('auto')}</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Short Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1 flex-shrink-0" size={18} />
                <span>123 Knowledge Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <span>+250 788 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-green-400 flex-shrink-0" size={18} />
                <span>info@gardentvet.rw</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Garden TVET School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
