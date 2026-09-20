import React, { useState, useEffect } from 'react';
import { 
  Sun, Globe, Menu, X, Wifi, WifiOff, 
  Users, BarChart2, Bell, Settings, Home 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const location = useLocation();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleFontSizeChange = (size) => {
    setFontSize(size);
    if (size === 'large') document.documentElement.style.fontSize = '17px';
    else if (size === 'xlarge') document.documentElement.style.fontSize = '18px';
    else document.documentElement.style.fontSize = '16px';
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Farmers', path: '/farmers', icon: Users },
    { name: 'Reports', path: '/reports', icon: BarChart2 },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      <header className="bg-emerald-950 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-emerald-900 shadow-sm z-30 relative no-print">
        
        {/* Left Branding & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-emerald-200 hover:text-white rounded-lg focus:outline-none touch-target"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="w-8 h-8 rounded-lg bg-amber-400 text-emerald-950 font-bold flex items-center justify-center text-xs shadow-inner">
            TN
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">AgriSmart Gov Portal</span>
            <span className="text-[10px] text-emerald-200/80 hidden sm:block">Department of Agriculture, Tamil Nadu</span>
          </div>
        </div>

        {/* Right Accessibility & Status Tools */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          
          {/* Offline / Online Sync Indicator */}
          <div className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
            isOnline 
              ? 'bg-emerald-900/80 text-emerald-200 border-emerald-800' 
              : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
          }`}>
            {isOnline ? <Wifi className="w-3.5 h-3.5 text-emerald-400" /> : <WifiOff className="w-3.5 h-3.5 text-amber-400" />}
            <span>{isOnline ? 'Live Sync Active' : 'Offline Cache Ready'}</span>
          </div>

          {/* Font Scaling */}
          <div className="hidden md:flex items-center gap-1 bg-emerald-900/80 p-1 rounded-lg border border-emerald-800">
            <button 
              onClick={() => handleFontSizeChange('normal')} 
              className={`px-2 py-0.5 rounded font-bold transition-all touch-target ${fontSize === 'normal' ? 'bg-amber-400 text-emerald-950' : 'text-emerald-200 hover:text-white'}`}
            >
              A
            </button>
            <button 
              onClick={() => handleFontSizeChange('large')} 
              className={`px-2 py-0.5 rounded font-bold transition-all touch-target ${fontSize === 'large' ? 'bg-amber-400 text-emerald-950' : 'text-emerald-200 hover:text-white'}`}
            >
              A+
            </button>
          </div>

          {/* High Contrast */}
          <button 
            onClick={toggleHighContrast}
            className={`p-1.5 rounded-lg border transition-all flex items-center gap-1 touch-target ${
              highContrast ? 'bg-amber-400 text-emerald-950 border-amber-300' : 'bg-emerald-900/80 border-emerald-800 text-emerald-200 hover:text-white'
            }`}
            title="Toggle High Contrast"
          >
            <Sun className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(language === 'EN' ? 'TA' : 'EN')}
            className="px-2.5 py-1 rounded-lg bg-emerald-900/80 border border-emerald-800 text-emerald-200 hover:text-white transition-all font-bold text-[11px] touch-target"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400 mr-1 inline" />
            <span>{language === 'EN' ? 'EN' : 'தமிழ்'}</span>
          </button>
        </div>

      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-emerald-950 w-64 h-full p-6 text-white space-y-6 shadow-2xl border-r border-emerald-900" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-emerald-900 pb-4">
              <span className="font-serif font-bold text-lg text-amber-300">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-xs transition-all ${
                      isActive ? 'bg-amber-400 text-emerald-950 font-bold' : 'text-emerald-100 hover:bg-emerald-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
