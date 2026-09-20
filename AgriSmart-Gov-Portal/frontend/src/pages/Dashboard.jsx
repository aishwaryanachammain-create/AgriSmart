import React, { useState } from "react";
import CropHealthMap from "./CropHealthMap";
import { 
  Users as UsersIcon, FileText, AlertTriangle as AlertIcon, 
  Sprout as SproutIcon, TrendingUp as TrendingIcon, ShieldCheck as ShieldIcon,
  CheckCircle2, Thermometer, Droplets
} from "lucide-react";

export default function Dashboard() {
  const [focusedZone, setFocusedZone] = useState("All Districts (Statewide)");

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-slate-800 p-4 sm:p-6 space-y-6 overflow-hidden">
      
      {/* ATMOSPHERE: Contour Overlay Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-contour-pattern opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* 1. DISTINCT COMMAND CENTER HERO HEADER */}
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-emerald-800/60 relative overflow-hidden">
          {/* Background Atmospheric Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" /> Command Center Live
                </span>
                <span className="text-xs text-emerald-200/80 font-mono flex items-center gap-1">
                  <ShieldIcon className="w-3.5 h-3.5 text-emerald-400" /> GIGW Audit Compliant
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Agricultural Monitoring Executive Dashboard
              </h1>
              <p className="text-xs text-emerald-100/70 max-w-2xl leading-relaxed">
                Real-time satellite NDVI vegetation indexes, weather vector analysis, and district-level farmer landholding metrics across administrative districts.
              </p>
            </div>

            {/* Regional Focus Dropdown & Sync Telemetry */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/60 backdrop-blur-xs">
              <div className="text-xs">
                <span className="text-[10px] text-emerald-200 uppercase tracking-wider block font-bold mb-0.5">Focus District Zone</span>
                <select 
                  value={focusedZone}
                  onChange={(e) => setFocusedZone(e.target.value)}
                  className="bg-emerald-950 text-amber-300 font-bold border border-emerald-700 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400/30"
                >
                  <option value="All Districts (Statewide)">All Districts (Statewide)</option>
                  <option value="Nilgiris District">Nilgiris District (Zone 4)</option>
                  <option value="Madurai Region">Madurai Region</option>
                  <option value="Coimbatore Zone">Coimbatore Zone</option>
                  <option value="Salem District">Salem District</option>
                </select>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-emerald-700/60 pt-2 sm:pt-0 sm:pl-3 text-right">
                <span className="text-[10px] text-emerald-300 uppercase tracking-wider block font-bold">Telemetry Stream</span>
                <span className="text-xs font-bold text-emerald-100 flex items-center gap-1 justify-end">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" /> 100% Sync
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. STAT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Farmers Registered */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover-lift relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Farmers Registered</span>
                <div className="text-3xl font-bold text-emerald-950 font-serif mt-1">1,248</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center font-bold">
                <UsersIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/80 text-emerald-900 border border-emerald-200 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" /> 100% Aadhaar Verified
              </span>
            </div>
          </div>

          {/* Card 2: Reports Generated */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover-lift relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reports Generated</span>
                <div className="text-3xl font-bold text-slate-900 font-serif mt-1">87</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-800 border border-sky-100 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-sky-100/80 text-sky-900 border border-sky-200 inline-flex items-center gap-1">
                Automated Audit Exports
              </span>
            </div>
          </div>

          {/* HERO CARD 3: Active Alerts (Distinguishing Accent Styling) */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-2xl border-2 border-amber-400 shadow-md hover-lift relative overflow-hidden text-white flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="text-xs font-bold text-amber-100 uppercase tracking-wider">Active Threat Alerts</span>
                <div className="text-3xl font-bold text-white font-serif mt-1">12 <span className="text-xs font-normal text-amber-100">Flagged</span></div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-amber-700/60 text-white border border-amber-300/40 flex items-center justify-center font-bold shadow-inner">
                <AlertIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 relative z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-950/40 text-amber-100 border border-amber-300/30 inline-flex items-center gap-1">
                <AlertIcon className="w-3 h-3 text-amber-300" /> Disease Vectors & Water Deficits
              </span>
            </div>
          </div>

        </div>

        {/* 3. DIAGNOSTICS & FIELD METRICS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Field Growth Stages Breakdown */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2">
                  <SproutIcon className="w-5 h-5 text-emerald-800" />
                  Regional Field Growth Stages
                </h2>
                <p className="text-xs text-slate-500">Acreage distribution across active crop maturation phases.</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100">
                Season 2026
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-emerald-50/80 border border-emerald-100 rounded-xl space-y-1 text-center">
                <span className="text-2xl font-bold text-emerald-950 font-serif">35%</span>
                <span className="text-xs font-semibold text-emerald-800 block">Early Sowing</span>
                <span className="text-[10px] text-slate-400 block">Days 0–15</span>
              </div>

              <div className="p-4 bg-sky-50/80 border border-sky-100 rounded-xl space-y-1 text-center">
                <span className="text-2xl font-bold text-sky-950 font-serif">28%</span>
                <span className="text-xs font-semibold text-sky-800 block">Vegetative</span>
                <span className="text-[10px] text-slate-400 block">Days 16–45</span>
              </div>

              <div className="p-4 bg-amber-50/80 border border-amber-100 rounded-xl space-y-1 text-center">
                <span className="text-2xl font-bold text-amber-950 font-serif">22%</span>
                <span className="text-xs font-semibold text-amber-800 block">Tuber Formation</span>
                <span className="text-[10px] text-slate-400 block">Days 46–75</span>
              </div>

              <div className="p-4 bg-purple-50/80 border border-purple-100 rounded-xl space-y-1 text-center">
                <span className="text-2xl font-bold text-purple-950 font-serif">15%</span>
                <span className="text-xs font-semibold text-purple-800 block">Maturation/Harvest</span>
                <span className="text-[10px] text-slate-400 block">Days 76–110</span>
              </div>
            </div>
          </div>

          {/* Regional NDVI & Nutrient Diagnostics */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
              <TrendingIcon className="w-5 h-5 text-emerald-800" />
              Vegetation & Nutrient Health
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Avg Regional NDVI</span>
                  <div className="text-2xl font-bold text-emerald-900 font-serif">0.72 <span className="text-xs font-semibold text-emerald-700">(Healthy)</span></div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-xs shadow-xs">
                  0.72
                </div>
              </div>

              <div className="p-4 bg-red-50/60 border border-red-100 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-red-900 uppercase tracking-wider">Nutrient Deficiency Stress</span>
                  <span className="text-xs font-bold text-red-700">18% Fields</span>
                </div>
                <div className="w-full bg-red-200/60 h-2 rounded-full overflow-hidden">
                  <div className="bg-red-600 h-full rounded-full" style={{ width: '18%' }} />
                </div>
                <p className="text-[11px] text-slate-500">Nitrogen deficit flagged in Zone 4 North sectors.</p>
              </div>
            </div>
          </div>

        </div>

        {/* 4. CROP HEALTH HEATMAP CONTAINER */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-lg font-bold text-emerald-950 font-serif">Spatial Crop Health Heatmap</h2>
              <p className="text-xs text-slate-500">Interactive deck.gl density layers integrated with real-time district API telemetry.</p>
            </div>
          </div>
          
          <CropHealthMap />
        </div>

      </div>

    </div>
  );
}


