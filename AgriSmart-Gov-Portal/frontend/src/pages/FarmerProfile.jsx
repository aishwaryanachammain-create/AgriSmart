import React, { useState } from 'react';
import { 
  User, Phone, MapPin, Calendar, Sprout, AlertTriangle, 
  CheckCircle, ShieldCheck, ChevronRight, Download, Send, 
  Droplet, Sun, Thermometer, Layers, Info, Award
} from 'lucide-react';

const CROP_STAGES = [
  {
    id: 'sowing',
    name: 'Sowing & Germination',
    duration: 'Days 0–15',
    status: 'completed',
    healthIndex: '98%',
    description: 'Seed placement and early sprout establishment in balanced soil.',
    advisory: 'Maintain optimal surface moisture. Monitor for early seedling rot.',
    inputs: 'NPK Basal Dose, Bio-fertilizer'
  },
  {
    id: 'vegetative',
    name: 'Vegetative Growth',
    duration: 'Days 16–45',
    status: 'completed',
    healthIndex: '92%',
    description: 'Rapid canopy and root expansion. High nitrogen demand phase.',
    advisory: 'Apply scheduled nitrogen top-dressing. Inspect foliage for early blight vectors.',
    inputs: 'Urea Spray, Drip Fertigation'
  },
  {
    id: 'tuber',
    name: 'Tuber Initiation',
    duration: 'Days 46–75',
    status: 'active',
    healthIndex: '85%',
    description: 'Stolon tips swell to form tubers. Critical moisture sensitivity period.',
    advisory: 'Maintain consistent soil moisture at 65-70%. Flagged for mild moisture stress on North plot.',
    inputs: 'Potash Boost, Soil Sensor Check'
  },
  {
    id: 'harvest',
    name: 'Maturation & Harvest',
    duration: 'Days 76–110',
    status: 'upcoming',
    healthIndex: 'Pending',
    description: 'Skin set completion, foliage senescence, and mechanical harvest window.',
    advisory: 'Schedule irrigation stop 10 days prior to target harvest date.',
    inputs: 'Pre-harvest Inspection'
  }
];

export default function FarmerProfile() {
  const [activeStage, setActiveStage] = useState('tuber');

  const farmer = {
    id: 'FARM-TN-2026-8842',
    name: 'Ramanathan K.',
    village: 'Nilgiris District, Zone 4',
    phone: '+91 98421 77210',
    fieldSize: '4.2 Acres',
    crop: 'Potato (Kufri Jyoti)',
    soilHealth: 'Optimal (pH 6.4)',
    ndvi: 0.74,
    status: 'Action Required',
    joinedDate: 'March 2024'
  };

  const selectedStage = CROP_STAGES.find(s => s.id === activeStage);

  return (
    <div className="space-y-6 p-6 bg-[#fcfbf9] min-h-screen text-slate-800">
      
      {/* 1. FARMER SPOTLIGHT HERO CARD */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50 -z-0 pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
          
          {/* Left Profile Identity */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-2xl shadow-md border border-emerald-800 shrink-0">
              {farmer.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold text-emerald-950 font-serif">{farmer.name}</h1>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {farmer.status}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  GIGW Verified
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-emerald-700" /> ID: {farmer.id}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" /> {farmer.village}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" /> {farmer.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Right Executive Quick-Actions */}
          <div className="flex items-center gap-3 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
            <button className="px-4 py-2 rounded-xl bg-emerald-900 text-emerald-50 hover:bg-emerald-950 transition-all text-xs font-medium flex items-center gap-2 shadow-sm">
              <Send className="w-3.5 h-3.5 text-amber-400" />
              Dispatch SMS Alert
            </button>
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all text-xs font-medium flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Export Dossier
            </button>
          </div>

        </div>

        {/* Quick Spec Bar */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">Land Holding</span>
            <span className="text-sm font-semibold text-slate-800">{farmer.fieldSize}</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">Primary Crop</span>
            <span className="text-sm font-semibold text-emerald-900">{farmer.crop}</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">NDVI Index</span>
            <span className="text-sm font-semibold text-emerald-700">{farmer.ndvi} (Healthy)</span>
          </div>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400 block">Soil Profile</span>
            <span className="text-sm font-semibold text-slate-800">{farmer.soilHealth}</span>
          </div>
        </div>

      </div>

      {/* 2. INTERACTIVE "TRACE CROP STAGE" STEPPER */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-emerald-950 font-serif flex items-center gap-2">
              <Sprout className="w-5 h-5 text-emerald-700" />
              Trace Crop Progression Stage
            </h2>
            <p className="text-xs text-slate-500">Click any stage to view contextual diagnostic advisories and recommended intervention protocols.</p>
          </div>
          <span className="text-xs font-semibold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200">
            Current: Stage 3 (Tuber Initiation)
          </span>
        </div>

        {/* Stepper Steps Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {CROP_STAGES.map((stage, idx) => {
            const isSelected = activeStage === stage.id;
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`text-left p-4 rounded-xl border transition-all relative cursor-pointer ${
                  isSelected 
                    ? 'border-emerald-700 bg-emerald-900/5 ring-2 ring-emerald-700/20 shadow-sm' 
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Stage 0{idx + 1}
                  </span>
                  {isCompleted && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />}
                </div>

                <div className="font-semibold text-sm text-slate-900 mb-1">{stage.name}</div>
                <div className="text-xs text-slate-500">{stage.duration}</div>

                {isSelected && (
                  <div className="mt-3 text-[11px] font-medium text-emerald-800 flex items-center gap-1">
                    Inspecting Advisory <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Advisory Details Card */}
        {selectedStage && (
          <div className="mt-6 bg-[#FAF8F5] border border-amber-200/60 rounded-xl p-5 relative">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-bold text-slate-900 text-sm">
                    {selectedStage.name} — Technical Overview
                  </h3>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                    Target Health Score: {selectedStage.healthIndex}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedStage.description}</p>
                
                <div className="pt-3 border-t border-amber-200/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-amber-950 block mb-1">Officer Action Advisory:</span>
                    <p className="text-slate-700 bg-white p-2.5 rounded-lg border border-amber-100">{selectedStage.advisory}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-amber-950 block mb-1">Recommended Inputs / Subsidies:</span>
                    <p className="text-slate-700 bg-white p-2.5 rounded-lg border border-amber-100">{selectedStage.inputs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}