import React from 'react';
import { ArrowUpRight, Shield, Activity, Sprout, Network, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingHero() {
  return (
    <div className="relative min-h-screen bg-[#081C15] text-[#ECFDF5] font-sans overflow-hidden">
      
      {/* Subtle Botanical Grid Lines Overlay (APC Style) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167,243,208,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(167,243,208,0.15) 1px, transparent 1px)`,
          backgroundSize: '90px 90px'
        }}
      />

      {/* Hero Section Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-16">
        
        {/* Top Branding Pill & Status */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#84CC16] text-[#081C15] font-bold flex items-center justify-center text-sm shadow-md">
              TN
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#A7F3D0]">
              AgriSmart Gov Portal
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs text-[#A7F3D0]">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span>GIGW 3.0 / WCAG 2.1 Compliant</span>
          </div>
        </div>

        {/* Hero Title & Main Narrative (APC Typographic Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-serif font-normal text-white leading-tight">
              Precision Agriculture & Sustainable Crop Monitoring.
            </h1>
            <p className="text-base text-[#A7F3D0]/80 max-w-2xl leading-relaxed">
              Integrating real-time satellite telemetry, district-level farmer landholdings, and predictive node-graph intelligence for Tamil Nadu agricultural monitoring.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] rounded-2xl font-bold text-sm transition-all shadow-lg hover:scale-[1.02] press-scale"
            >
              <span>Launch Command Center</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Category Feature Cards (APC Palette: Sage #A7F3D0 Backgrounds) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          
          {/* Card 1 */}
          <div className="bg-[#A7F3D0] text-[#081C15] p-6 rounded-2xl flex flex-col justify-between h-56 transition-all hover:-translate-y-1 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-60">Module 01</span>
                <Sprout className="w-5 h-5 text-[#081C15]" />
              </div>
              <h3 className="text-xl font-bold font-serif">Crop Telemetry</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">NDVI index tracking & soil moisture vectors.</p>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full border border-[#081C15]/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#A7F3D0] text-[#081C15] p-6 rounded-2xl flex flex-col justify-between h-56 transition-all hover:-translate-y-1 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-60">Module 02</span>
                <Network className="w-5 h-5 text-[#081C15]" />
              </div>
              <h3 className="text-xl font-bold font-serif">Node Intelligence</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Interactive policy and spatial node graphs.</p>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full border border-[#081C15]/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#A7F3D0] text-[#081C15] p-6 rounded-2xl flex flex-col justify-between h-56 transition-all hover:-translate-y-1 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-60">Module 03</span>
                <Activity className="w-5 h-5 text-[#081C15]" />
              </div>
              <h3 className="text-xl font-bold font-serif">Risk Dispatch</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Real-time Firebase RTDB alert broadcasting.</p>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full border border-[#081C15]/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#A7F3D0] text-[#081C15] p-6 rounded-2xl flex flex-col justify-between h-56 transition-all hover:-translate-y-1 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider font-bold opacity-60">Module 04</span>
                <Shield className="w-5 h-5 text-[#081C15]" />
              </div>
              <h3 className="text-xl font-bold font-serif">Farmer Dossier</h3>
              <p className="text-xs mt-2 opacity-80 leading-relaxed">Aadhaar-verified field landholding records.</p>
            </div>
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full border border-[#081C15]/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
