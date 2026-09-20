import React, { useState } from 'react';
import { 
  ShieldCheck, Globe, Bell, Moon, Sun, Type, Database, 
  CheckCircle2, Save, Sliders, RefreshCw, Cpu
} from 'lucide-react';

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [language, setLanguage] = useState('EN');
  const [district, setDistrict] = useState('Nilgiris');
  const [smsAutoDispatch, setSmsAutoDispatch] = useState(true);
  const [humidityThreshold, setHumidityThreshold] = useState('85');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-slate-800 p-6 overflow-hidden">
      
      {/* ATMOSPHERE: Contour Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-contour-pattern opacity-60 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xs border border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-emerald-950 font-serif">System & Accessibility Settings</h1>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900 text-amber-300 border border-emerald-800 shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> GIGW 3.0 Standard
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Configure regional operational defaults, automated risk dispatches, and public sector accessibility compliance.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-emerald-50 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-2 press-scale shrink-0"
          >
            {saved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-amber-300" /> Preferences Saved!
              </>
            ) : (
              <>
                <Save className="w-4 h-4 text-amber-400" /> Save Configuration
              </>
            )}
          </button>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. GIGW ACCESSIBILITY STANDARDS */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
              <Type className="w-5 h-5 text-emerald-800" />
              GIGW / WCAG 2.1 Accessibility
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">High Contrast Mode</span>
                  <span className="text-slate-500 text-[11px]">Enhances text readability for field operations</span>
                </div>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    highContrast ? 'bg-emerald-900' : 'bg-slate-200'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    highContrast ? 'translate-x-6 bg-amber-400' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">Base Font Scaling</span>
                <div className="grid grid-cols-3 gap-2">
                  {['normal', 'large', 'xlarge'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`py-2 rounded-xl border text-xs font-bold capitalize transition-all ${
                        fontSize === size 
                          ? 'bg-emerald-950 text-amber-300 border-emerald-900 shadow-xs' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. REGIONAL & LANGUAGE DEFAULTS */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
              <Globe className="w-5 h-5 text-emerald-800" />
              Regional & Operational Defaults
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Portal Primary Language</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`py-2.5 rounded-xl border font-bold text-xs transition-all ${
                      language === 'EN' 
                        ? 'bg-emerald-950 text-amber-300 border-emerald-900 shadow-xs' 
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    English (US/IN)
                  </button>
                  <button
                    onClick={() => setLanguage('TA')}
                    className={`py-2.5 rounded-xl border font-bold text-xs transition-all ${
                      language === 'TA' 
                        ? 'bg-emerald-950 text-amber-300 border-emerald-900 shadow-xs' 
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}
                  >
                    தமிழ் (Tamil)
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <label className="block font-bold text-slate-800 mb-1">Default Operational Zone Focus</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                >
                  <option value="Nilgiris">Nilgiris District (Zone 4)</option>
                  <option value="Madurai">Madurai Region</option>
                  <option value="Coimbatore">Coimbatore Zone</option>
                  <option value="Salem">Salem District</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. AUTOMATED RISK DISPATCH THRESHOLDS */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
              <Sliders className="w-5 h-5 text-emerald-800" />
              Automated Disease Dispatch Triggers
            </h2>

            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">Auto-SMS Broadcast</span>
                  <span className="text-slate-500 text-[11px]">Dispatch SMS to zone farmers when threshold breached</span>
                </div>
                <button
                  onClick={() => setSmsAutoDispatch(!smsAutoDispatch)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    smsAutoDispatch ? 'bg-emerald-900' : 'bg-slate-200'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    smsAutoDispatch ? 'translate-x-6 bg-amber-400' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <label className="block font-bold text-slate-800 mb-1">
                  Relative Moisture Stress Threshold (%)
                </label>
                <input
                  type="range"
                  min="50"
                  max="95"
                  value={humidityThreshold}
                  onChange={(e) => setHumidityThreshold(e.target.value)}
                  className="w-full accent-emerald-900 cursor-pointer"
                />
                <span className="text-xs font-bold text-emerald-800 block mt-1">
                  Trigger at: {humidityThreshold}% Relative Humidity
                </span>
              </div>
            </div>
          </div>

          {/* 4. SYSTEM HEALTH MONITOR */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
              <Cpu className="w-5 h-5 text-emerald-800" />
              Backend & Database Sync Status
            </h2>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-slate-800">Firebase Realtime DB</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Connected (24ms)
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-slate-800">Express REST API (Port 5001)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
