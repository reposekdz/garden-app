
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RoleSelection from './pages/RoleSelection';
import Dashboard from './pages/Dashboard';
import TradeDetail from './pages/TradeDetail';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/role-selection', '/login', '/register'];
  const isDashboard = location.pathname.startsWith('/dashboard');
  const hideLayout = noHeaderFooterRoutes.includes(location.pathname) || isDashboard;

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div className="h-screen flex items-center justify-center font-black text-2xl animate-pulse">Loading Garden TVET...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/role-selection" element={<RoleSelection />} />
              <Route path="/dashboard/:role" element={<Dashboard />} />
              <Route path="/trades/:id" element={<TradeDetail />} />
              <Route path="/sports" element={<div className="py-20 text-center font-bold">Sports & Games - Explore Our Teams</div>} />
              <Route path="/services" element={<div className="py-20 text-center font-bold">Student Services & Support</div>} />
              <Route path="/contact" element={<div className="py-20 text-center font-bold">Get In Touch with Garden TVET</div>} />
              <Route path="/support" element={<div className="py-20 text-center font-bold">Help Center & Technical Support</div>} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;
