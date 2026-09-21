import React, { useState } from "react";
import { Link } from "react-router-dom";
import CropHealthMap from "./CropHealthMap";
import {
  Users as UsersIcon,
  FileText,
  AlertTriangle as AlertIcon,
  Sprout as SproutIcon,
  TrendingUp as TrendingIcon,
  ShieldCheck as ShieldIcon,
  CheckCircle2,
  Thermometer,
  Droplets,
  Network,
  ArrowUpRight,
  Radio,
  ExternalLink,
} from "lucide-react";

export default function Dashboard() {
  const [focusedZone, setFocusedZone] = useState("Nilgiris District");

  return (
    <div className="relative min-h-screen bg-[#081C15] text-[#ECFDF5] p-4 sm:p-6 space-y-6 overflow-hidden">
      {/* ATMOSPHERE: 90px x 90px Vector Grid Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167, 243, 208, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(167, 243, 208, 0.15) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        {/* 1. DISTINCT FOREST-GREEN HERO BANNER WITH SATELLITE TELEMETRY & ZONE SELECTION */}
        <div className="bg-gradient-to-r from-[#0D281F] via-[#081C15] to-[#0D281F] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#34D399]/30 relative overflow-hidden">
          {/* Background Atmospheric Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-[#84CC16]/20 text-[#84CC16] border border-[#84CC16]/40 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-[0_0_12px_rgba(132,204,22,0.3)]">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                  · Live Satellite Telemetry
                </span>
                <span className="text-xs text-[#A7F3D0]/80 font-mono flex items-center gap-1">
                  <ShieldIcon className="w-3.5 h-3.5 text-[#34D399]" />
                  · GIGW 3.0 Standard
                </span>
                <span className="text-xs text-[#A7F3D0]/80 font-mono">
                  · Deep Botanical Core
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                Agricultural Monitoring Executive Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-[#A7F3D0]/80 max-w-2xl leading-relaxed">
                Real-time Sentinel NDVI vegetation health indices, microclimate vector analysis,
                and district-level farmer landholding registry across Tamil Nadu.
              </p>
            </div>

            {/* Regional Focus Dropdown, Telemetry Stream & 3D Bridge */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 bg-[#081C15]/80 p-4 rounded-2xl border border-[#34D399]/30 backdrop-blur-xl">
              <div className="text-xs">
                <span className="text-[10px] text-[#A7F3D0]/70 uppercase tracking-wider block font-bold mb-1">
                  · Focus District Zone
                </span>
                <select
                  value={focusedZone}
                  onChange={(e) => setFocusedZone(e.target.value)}
                  className="bg-[#0D281F] text-[#84CC16] font-bold border border-[#34D399]/40 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#84CC16]/40 cursor-pointer"
                >
                  <option value="Nilgiris District">Nilgiris District (Zone 4)</option>
                  <option value="Madurai Region">Madurai Region</option>
                  <option value="Coimbatore Zone">Coimbatore Zone</option>
                  <option value="All Districts (Statewide)">All Districts (Statewide)</option>
                </select>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-[#34D399]/20 pt-3 sm:pt-0 sm:pl-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#A7F3D0]/70 uppercase tracking-wider block font-bold">
                    · Telemetry Stream
                  </span>
                  <span className="text-xs font-bold text-[#34D399] flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" /> 100% Synced
                  </span>
                </div>

                <Link
                  to="/node-dashboard"
                  className="mt-2 text-[11px] font-bold text-[#84CC16] hover:underline flex items-center gap-1"
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>3D Node Graph AI →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THREE DISTINCT KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* KPI Card 1: Farmers Registered */}
          <div className="bg-[#0D281F]/80 p-6 rounded-3xl border border-[#34D399]/30 shadow-xl hover-lift relative overflow-hidden flex flex-col justify-between backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#A7F3D0]/70 uppercase tracking-wider block">
                  · Farmers Registered
                </span>
                <div className="text-4xl font-bold text-white font-serif mt-2">1,248</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#081C15] text-[#84CC16] border border-[#84CC16]/30 flex items-center justify-center shadow-[0_0_15px_rgba(132,204,22,0.25)]">
                <UsersIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-[#34D399]/15">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#84CC16]/20 text-[#84CC16] border border-[#84CC16]/30 inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16]" />
                · 100% Aadhaar Verified
              </span>
            </div>
          </div>

          {/* KPI Card 2: Reports Generated */}
          <div className="bg-[#0D281F]/80 p-6 rounded-3xl border border-[#34D399]/30 shadow-xl hover-lift relative overflow-hidden flex flex-col justify-between backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#A7F3D0]/70 uppercase tracking-wider block">
                  · Reports Generated
                </span>
                <div className="text-4xl font-bold text-[#34D399] font-serif mt-2">87</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#081C15] text-[#34D399] border border-[#34D399]/30 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.25)]">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-[#34D399]/15">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/30 inline-flex items-center gap-1.5">
                · Automated Audit Exports
              </span>
            </div>
          </div>

          {/* KPI Card 3: Active Threat Alerts (Crimson Accent) */}
          <div className="bg-gradient-to-br from-[#0D281F] via-[#081C15] to-[#2D0F16] p-6 rounded-3xl border border-[#F43F5E]/40 shadow-xl hover-lift relative overflow-hidden flex flex-col justify-between sm:col-span-2 lg:col-span-1 backdrop-blur-xl">
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="text-xs font-mono font-bold text-[#F43F5E] uppercase tracking-wider block">
                  · Active Threat Alerts
                </span>
                <div className="text-4xl font-bold text-white font-serif mt-2">
                  12 <span className="text-sm font-normal text-[#F43F5E]">Flagged</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#081C15] text-[#F43F5E] border border-[#F43F5E]/40 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.35)]">
                <AlertIcon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-[#F43F5E]/20 relative z-10">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30 inline-flex items-center gap-1.5">
                <AlertIcon className="w-3.5 h-3.5 text-[#F43F5E]" />
                · Disease Vectors & Water Deficits
              </span>
            </div>
          </div>
        </div>

        {/* 3. FIELD GROWTH STAGES DISTRIBUTION & HEALTH METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Field Growth Stages Breakdown */}
          <div className="bg-[#0D281F]/75 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-[#34D399]/30 shadow-xl lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between border-b border-[#34D399]/20 pb-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white font-serif flex items-center gap-2">
                  <SproutIcon className="w-5 h-5 text-[#84CC16]" />
                  <span>Regional Field Growth Stages</span>
                </h2>
                <p className="text-xs text-[#A7F3D0]/70 mt-0.5">
                  · Acreage distribution across active crop maturation cycles in {focusedZone}.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 bg-[#081C15] text-[#84CC16] rounded-xl border border-[#84CC16]/30">
                Season 2026
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-[#081C15] border border-[#34D399]/20 rounded-2xl space-y-1.5 text-center transition-all hover:border-[#84CC16]/40">
                <span className="text-3xl font-bold text-[#84CC16] font-serif">35%</span>
                <span className="text-xs font-semibold text-[#A7F3D0] block">· Early Sowing</span>
                <span className="text-[10px] text-[#A7F3D0]/50 block font-mono">Days 0–15</span>
              </div>

              <div className="p-4 bg-[#081C15] border border-[#34D399]/20 rounded-2xl space-y-1.5 text-center transition-all hover:border-[#34D399]/40">
                <span className="text-3xl font-bold text-[#34D399] font-serif">28%</span>
                <span className="text-xs font-semibold text-[#A7F3D0] block">· Vegetative</span>
                <span className="text-[10px] text-[#A7F3D0]/50 block font-mono">Days 16–45</span>
              </div>

              <div className="p-4 bg-[#081C15] border border-[#34D399]/20 rounded-2xl space-y-1.5 text-center transition-all hover:border-amber-400/40">
                <span className="text-3xl font-bold text-amber-300 font-serif">22%</span>
                <span className="text-xs font-semibold text-[#A7F3D0] block">· Tuber Formation</span>
                <span className="text-[10px] text-[#A7F3D0]/50 block font-mono">Days 46–75</span>
              </div>

              <div className="p-4 bg-[#081C15] border border-[#34D399]/20 rounded-2xl space-y-1.5 text-center transition-all hover:border-purple-400/40">
                <span className="text-3xl font-bold text-purple-300 font-serif">15%</span>
                <span className="text-xs font-semibold text-[#A7F3D0] block">· Maturation/Harvest</span>
                <span className="text-[10px] text-[#A7F3D0]/50 block font-mono">Days 76–110</span>
              </div>
            </div>
          </div>

          {/* Regional NDVI & Nutrient Diagnostics */}
          <div className="bg-[#0D281F]/75 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-[#34D399]/30 shadow-xl space-y-5">
            <h2 className="text-lg font-bold text-white font-serif flex items-center gap-2 border-b border-[#34D399]/20 pb-4">
              <TrendingIcon className="w-5 h-5 text-[#84CC16]" />
              <span>· Vegetation & Health Diagnostics</span>
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-[#081C15] border border-[#34D399]/20 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#A7F3D0]/70 uppercase tracking-wider block">
                    · Avg Regional NDVI
                  </span>
                  <div className="text-2xl font-bold text-[#84CC16] font-serif mt-1">
                    0.72 <span className="text-xs font-sans font-semibold text-[#34D399]">(Healthy)</span>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#0D281F] text-[#84CC16] border border-[#84CC16]/30 flex items-center justify-center font-bold text-xs shadow-xs">
                  0.72
                </div>
              </div>

              <div className="p-4 bg-[#081C15] border border-[#F43F5E]/30 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#F43F5E] uppercase tracking-wider">
                    · Nutrient Deficiency Stress
                  </span>
                  <span className="text-xs font-bold text-[#F43F5E]">18% Fields</span>
                </div>
                <div className="w-full bg-[#2D0F16] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#F43F5E] h-full rounded-full" style={{ width: "18%" }} />
                </div>
                <p className="text-[11px] text-[#A7F3D0]/70">
                  Nitrogen deficit flagged in {focusedZone} North sectors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SPATIAL CROP HEALTH HEATMAP CONTAINER */}
        <div className="bg-[#0D281F]/80 backdrop-blur-xl rounded-3xl border border-[#34D399]/30 p-6 sm:p-7 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#34D399]/20 pb-4 gap-2">
            <div>
              <h2 className="text-xl font-bold text-white font-serif">
                Spatial Crop Health Heatmap
              </h2>
              <p className="text-xs text-[#A7F3D0]/70">
                · Interactive deck.gl density layers integrated with real-time district API telemetry.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#84CC16]">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>· Live Raster Sensor Mesh</span>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#34D399]/20">
            <CropHealthMap />
          </div>
        </div>
      </div>
    </div>
  );
}
