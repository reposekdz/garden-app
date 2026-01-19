
import React, { useState } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';

const SearchPage: React.FC = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  
  // Mock data for search
  const mockResults = [
    { id: '1', title: 'Python Programming', type: 'Course', desc: 'Basics to advanced software development with Python.' },
    { id: '2', title: 'Brick Laying 101', type: 'Course', desc: 'Fundamental techniques in building construction.' },
    { id: '3', title: 'John Doe', type: 'Student', desc: 'Year 3 - Software Development' },
    { id: '4', title: 'Engine Overhaul', type: 'Event', desc: 'Workshop on diesel engine repair next Friday.' },
    { id: '5', title: 'Automobile Lab', type: 'Facility', desc: 'Located in Block C, fully equipped with diagnostic tools.' },
  ];

  const filteredResults = mockResults.filter(r => 
    r.title.toLowerCase().includes(query.toLowerCase()) || 
    r.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-black">Search <span className="gradient-text">Garden TVET</span></h1>
          <div className="relative">
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Courses, students, staff, facilities..."
              className="w-full px-8 py-6 rounded-3xl bg-white shadow-2xl text-xl focus:ring-4 focus:ring-green-400 outline-none transition-all border-none"
            />
            <Search className="absolute right-8 top-6 text-gray-400" size={32} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {['All', 'Courses', 'Students', 'Staff', 'Events', 'Facilities'].map(filter => (
            <button key={filter} className="px-6 py-2 rounded-full bg-white border border-gray-200 text-sm font-bold hover:bg-green-50 hover:text-green-600 transition-all">
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center px-4">
            <span className="text-gray-500 font-medium">{filteredResults.length} results found</span>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-900">
              <Filter size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Sort by Relevant</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {filteredResults.length > 0 ? filteredResults.map(result => (
              <div key={result.id} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">{result.type}</span>
                    <h3 className="text-2xl font-bold group-hover:text-green-600 transition-colors">{result.title}</h3>
                    <p className="text-gray-500 max-w-xl">{result.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            )) : (
              <div className="py-20 text-center text-gray-400">
                <Search size={64} className="mx-auto mb-4 opacity-20" />
                <p className="text-xl">No matching results found for "{query}"</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
