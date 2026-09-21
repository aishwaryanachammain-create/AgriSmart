import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Shield,
  Activity,
  Sprout,
  Network,
  ChevronRight,
  Radio,
  FileCheck2,
  Users,
  Bell,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  LogIn,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#081C15] text-[#ECFDF5] font-sans relative selection:bg-[#84CC16] selection:text-[#081C15] overflow-x-hidden">
      {/* 1. ATMOSPHERIC 90px x 90px BOTANICAL GRID OVERLAY */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167, 243, 208, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(167, 243, 208, 0.15) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
        }}
      />

      {/* 2. TOP BOTANICAL NAVIGATION BAR */}
      <header className="relative z-30 border-b border-[#34D399]/20 bg-[#081C15]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Official Emblem & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#84CC16] text-[#081C15] font-black flex items-center justify-center text-sm shadow-[0_0_20px_rgba(132,204,22,0.4)]">
              TN
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wider uppercase text-white font-serif">
                  AgriSmart
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#34D399]/20 text-[#34D399] border border-[#34D399]/30">
                  Gov Portal
                </span>
              </div>
              <span className="text-[11px] text-[#A7F3D0]/70 hidden sm:block">
                Department of Agriculture · Government of Tamil Nadu
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#A7F3D0]/80">
            <Link
              to="/dashboard"
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
            >
              <span>· Dashboard</span>
            </Link>
            <Link
              to="/node-dashboard"
              className="hover:text-[#34D399] transition-colors flex items-center gap-1.5 text-[#34D399] font-semibold"
            >
              <Network className="w-3.5 h-3.5" />
              <span>· 3D Node Graph AI</span>
            </Link>
            <Link
              to="/alerts"
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
            >
              <span>· Risk Dispatch</span>
            </Link>
            <Link
              to="/farmers"
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
            >
              <span>· Farmers</span>
            </Link>
            <Link
              to="/reports"
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
            >
              <span>· Reports</span>
            </Link>
          </nav>

          {/* Header Action & Compliance Pill */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D281F] border border-[#34D399]/30 text-[11px] text-[#A7F3D0]">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span>GIGW 3.0 · WCAG 2.1 AA</span>
            </div>

            <Link
              to="/login"
              className="px-4 py-2 bg-[#0D281F] hover:bg-[#143d30] text-[#A7F3D0] hover:text-white border-2 border-[#34D399]/50 hover:border-[#84CC16] font-bold text-xs rounded-xl transition-all shadow-[0_0_15px_rgba(52,211,153,0.2)] hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>Officer Login</span>
            </Link>

            <Link
              to="/dashboard"
              className="px-4 py-2 bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] font-bold text-xs rounded-xl transition-all shadow-[0_0_15px_rgba(132,204,22,0.3)] hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Command Center</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION: DRONE AGRICULTURAL IMAGERY + GEOMETRIC VECTOR RAYS */}
      <section className="relative z-10 overflow-hidden border-b border-[#34D399]/20">
        {/* Full-Bleed Drone Agricultural Imagery with Dark Botanical Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85"
            alt="Drone agricultural surveillance over fertile farmland"
            className="w-full h-full object-cover object-center opacity-25 filter saturate-150 brightness-75 scale-105"
          />
          {/* Deep Forest Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081C15] via-[#081C15]/90 to-[#081C15]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-[#081C15]/80" />
        </div>

        {/* Geometric Vector Ray Overlay Lines (APC Architectural Rays) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-1 opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="70%"
            stroke="#A7F3D0"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />
          <line
            x1="15%"
            y1="0"
            x2="85%"
            y2="100%"
            stroke="#34D399"
            strokeWidth="0.8"
          />
          <line
            x1="100%"
            y1="20%"
            x2="25%"
            y2="100%"
            stroke="#84CC16"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="75%"
            cy="35%"
            r="160"
            stroke="rgba(167, 243, 208, 0.2)"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="75%"
            cy="35%"
            r="280"
            stroke="rgba(52, 211, 153, 0.15)"
            strokeWidth="0.8"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 sm:pt-24 pb-20 sm:pb-28">
          <div className="max-w-4xl space-y-8">
            {/* Single-Dot Pill & Compliance Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#0D281F]/90 border border-[#34D399]/40 text-xs text-[#A7F3D0] font-mono flex items-center gap-2 shadow-inner">
                <Radio className="w-3.5 h-3.5 text-[#84CC16] animate-pulse" />
                <span>· Telemetry Active: 38 Districts Ingested</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 text-xs text-[#34D399] font-medium">
                · GIGW 3.0 Government Standard
              </span>
              <span className="px-3 py-1 rounded-full bg-[#84CC16]/10 border border-[#84CC16]/30 text-xs text-[#84CC16] font-medium">
                · Deep Botanical Architecture
              </span>
            </div>

            {/* Editorial Header (Editorial Styling with Large Serif) */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white tracking-tight leading-[1.08]">
                Precision Quality with Certified Agrarian Governance.
              </h1>
              <p className="text-lg sm:text-2xl font-serif text-[#A7F3D0]/90 italic font-light">
                “Dedication to agrarian precision, regulatory integrity, and predictive intelligence.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#A7F3D0]/80 max-w-2xl leading-relaxed">
              Unifying Tamil Nadu’s agricultural governance into a cohesive digital ecosystem.
              From drone-derived satellite NDVI vegetation telemetry and Aadhaar-verified farmer dossiers
              to real-time 3D node-graph AI policy analytics.
            </p>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] font-bold text-sm rounded-2xl transition-all shadow-[0_0_25px_rgba(132,204,22,0.45)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group"
              >
                <span>Launch Executive Command Center</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/node-dashboard"
                className="px-8 py-4 bg-[#0D281F]/90 hover:bg-[#0D281F] text-[#34D399] border border-[#34D399]/40 hover:border-[#34D399] font-bold text-sm rounded-2xl transition-all backdrop-blur-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
              >
                <Network className="w-4 h-4 text-[#84CC16]" />
                <span>Explore 3D Node Graph AI</span>
                <ChevronRight className="w-4 h-4 text-[#34D399]/60" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAGE FEATURE GRID (SHARP #A7F3D0 LIGHT SAGE CARDS) */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#34D399]/20 pb-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-[#84CC16] block">
              · System Architecture Modules
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white">
              Certified Precision Across Four Core Modules
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A7F3D0]/70 max-w-md">
            Four specialized modules delivering full-spectrum field monitoring,
            policy impact evaluation, and citizen welfare dispatch.
          </p>
        </div>

        {/* 4-Column Responsive Grid with Sharp Light Sage #A7F3D0 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Module 01 - Crop Telemetry */}
          <Link
            to="/dashboard"
            className="group bg-[#A7F3D0] text-[#081C15] p-7 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(167,243,208,0.25)] border-2 border-transparent hover:border-[#84CC16]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-[#081C15]/10 border border-[#081C15]/15">
                  Module · 01
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#081C15] text-[#A7F3D0] flex items-center justify-center shadow-xs">
                  <Sprout className="w-5 h-5 text-[#84CC16]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#081C15] group-hover:text-emerald-950 transition-colors">
                Crop Telemetry
              </h3>
              <p className="text-xs text-[#081C15]/80 mt-3 leading-relaxed">
                Automated Sentinel & Landsat NDVI indices, soil moisture deficits,
                and microclimate spatial raster heatmaps.
              </p>
            </div>

            <div className="pt-6 border-t border-[#081C15]/15 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#081C15]/70">
                · NDVI & Spatial Map
              </span>
              <div className="w-10 h-10 rounded-full border border-[#081C15]/30 bg-[#081C15]/5 flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-[#081C15] group-hover:text-[#A7F3D0]">
                <ArrowUpRight className="w-5 h-5 text-[#081C15] group-hover:text-[#A7F3D0]" />
              </div>
            </div>
          </Link>

          {/* Card 2: Module 02 - 3D Node Intelligence */}
          <Link
            to="/node-dashboard"
            className="group bg-[#A7F3D0] text-[#081C15] p-7 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(167,243,208,0.25)] border-2 border-transparent hover:border-[#84CC16]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-[#081C15]/10 border border-[#081C15]/15">
                  Module · 02
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#081C15] text-[#A7F3D0] flex items-center justify-center shadow-xs">
                  <Network className="w-5 h-5 text-[#84CC16]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#081C15] group-hover:text-emerald-950 transition-colors">
                Node Intelligence
              </h3>
              <p className="text-xs text-[#081C15]/80 mt-3 leading-relaxed">
                3D force-directed node graph visualizer correlating administrative decrees,
                spatial zones, and bioluminescent pest outbreaks.
              </p>
            </div>

            <div className="pt-6 border-t border-[#081C15]/15 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#081C15]/70">
                · 3D Force Graph AI
              </span>
              <div className="w-10 h-10 rounded-full border border-[#081C15]/30 bg-[#081C15]/5 flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-[#081C15] group-hover:text-[#A7F3D0]">
                <ArrowUpRight className="w-5 h-5 text-[#081C15] group-hover:text-[#A7F3D0]" />
              </div>
            </div>
          </Link>

          {/* Card 3: Module 03 - Risk Dispatch */}
          <Link
            to="/alerts"
            className="group bg-[#A7F3D0] text-[#081C15] p-7 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(167,243,208,0.25)] border-2 border-transparent hover:border-[#84CC16]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-[#081C15]/10 border border-[#081C15]/15">
                  Module · 03
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#081C15] text-[#A7F3D0] flex items-center justify-center shadow-xs">
                  <Activity className="w-5 h-5 text-[#F43F5E]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#081C15] group-hover:text-emerald-950 transition-colors">
                Risk Dispatch
              </h3>
              <p className="text-xs text-[#081C15]/80 mt-3 leading-relaxed">
                Emergency disease advisory dispatch, automated Firebase RTDB broadcast triggers,
                and direct officer SMS/WhatsApp dispatch pipelines.
              </p>
            </div>

            <div className="pt-6 border-t border-[#081C15]/15 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#081C15]/70">
                · Early Warning RTDB
              </span>
              <div className="w-10 h-10 rounded-full border border-[#081C15]/30 bg-[#081C15]/5 flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-[#081C15] group-hover:text-[#A7F3D0]">
                <ArrowUpRight className="w-5 h-5 text-[#081C15] group-hover:text-[#A7F3D0]" />
              </div>
            </div>
          </Link>

          {/* Card 4: Module 04 - Farmer Dossier */}
          <Link
            to="/farmers"
            className="group bg-[#A7F3D0] text-[#081C15] p-7 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(167,243,208,0.25)] border-2 border-transparent hover:border-[#84CC16]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full bg-[#081C15]/10 border border-[#081C15]/15">
                  Module · 04
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#081C15] text-[#A7F3D0] flex items-center justify-center shadow-xs">
                  <Shield className="w-5 h-5 text-[#84CC16]" />
                </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#081C15] group-hover:text-emerald-950 transition-colors">
                Farmer Dossier
              </h3>
              <p className="text-xs text-[#081C15]/80 mt-3 leading-relaxed">
                Aadhaar-verified field registry, landholding parcel geofences,
                seasonal yield estimations, and official audit exports.
              </p>
            </div>

            <div className="pt-6 border-t border-[#081C15]/15 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#081C15]/70">
                · Verified Registry
              </span>
              <div className="w-10 h-10 rounded-full border border-[#081C15]/30 bg-[#081C15]/5 flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:bg-[#081C15] group-hover:text-[#A7F3D0]">
                <ArrowUpRight className="w-5 h-5 text-[#081C15] group-hover:text-[#A7F3D0]" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 5. EDITORIAL DEEP BOTANICAL SPECIFICATIONS & MANIFESTO */}
      <section className="relative z-10 border-t border-[#34D399]/20 bg-[#0D281F]/40 backdrop-blur-xl py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Manifesto */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#84CC16] block">
                · Policy Architecture & Real-Time Execution
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
                Sustainable Agrarian Intelligence for Public Trust & Welfare.
              </h2>
              <div className="space-y-4 text-sm text-[#A7F3D0]/80 leading-relaxed font-light">
                <p>
                  Built in strict adherence to <strong>GIGW 3.0 (Guidelines for Indian Government Websites)</strong> and 
                  <strong>WCAG 2.1 AA</strong> accessibility requirements. Every visual element adheres to high-contrast 
                  organic hues, semantic structure, and low-latency synchronization.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#081C15] border border-[#34D399]/30">
                    <span className="text-xs font-bold text-[#84CC16] block mb-1">· Real-Time Satellite Telemetry</span>
                    <span className="text-xs text-[#A7F3D0]/70">Automated NDVI raster computing with 100% daily freshness.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#081C15] border border-[#34D399]/30">
                    <span className="text-xs font-bold text-[#34D399] block mb-1">· 3D Policy Graph AI</span>
                    <span className="text-xs text-[#A7F3D0]/70">Correlating federal decrees with localized pest risk vectors.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right KPI Card Stack */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#081C15] border border-[#34D399]/30 flex flex-col justify-between">
                <span className="text-xs text-[#A7F3D0]/60 font-mono uppercase">Farmers Registered</span>
                <div className="my-4">
                  <span className="text-4xl font-serif font-bold text-white">1,248</span>
                  <span className="text-xs text-[#84CC16] block mt-1">· 100% Aadhaar Verified</span>
                </div>
                <span className="text-[11px] text-[#A7F3D0]/70">Across Nilgiris, Madurai & Coimbatore</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#081C15] border border-[#34D399]/30 flex flex-col justify-between">
                <span className="text-xs text-[#A7F3D0]/60 font-mono uppercase">Audit Compliance</span>
                <div className="my-4">
                  <span className="text-4xl font-serif font-bold text-[#84CC16]">98.4%</span>
                  <span className="text-xs text-[#34D399] block mt-1">· GIGW 3.0 Audited</span>
                </div>
                <span className="text-[11px] text-[#A7F3D0]/70">Zero accessibility violations</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#081C15] border border-[#34D399]/30 flex flex-col justify-between">
                <span className="text-xs text-[#A7F3D0]/60 font-mono uppercase">RTDB Latency</span>
                <div className="my-4">
                  <span className="text-4xl font-serif font-bold text-white">&lt; 1.2s</span>
                  <span className="text-xs text-[#84CC16] block mt-1">· Live Firebase Node</span>
                </div>
                <span className="text-[11px] text-[#A7F3D0]/70">Automated SMS/WhatsApp alerts</span>
              </div>

              <div className="p-6 rounded-2xl bg-[#081C15] border border-[#34D399]/30 flex flex-col justify-between">
                <span className="text-xs text-[#A7F3D0]/60 font-mono uppercase">District Coverage</span>
                <div className="my-4">
                  <span className="text-4xl font-serif font-bold text-[#34D399]">38</span>
                  <span className="text-xs text-[#84CC16] block mt-1">· Administrative Units</span>
                </div>
                <span className="text-[11px] text-[#A7F3D0]/70">Statewide spatial geo-layers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="p-10 rounded-3xl bg-gradient-to-r from-[#0D281F] via-[#081C15] to-[#0D281F] border border-[#34D399]/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#84CC16]">
              · Direct Command Access
            </span>
            <h3 className="text-3xl font-serif font-bold text-white">
              Ready to inspect the live state agronomy telemetry?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7F3D0]/80">
              Access real-time field diagnostics, generate compliant audit dossiers, or execute emergency early-warning broadcasts.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/dashboard"
              className="px-6 py-3.5 bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] font-bold text-xs rounded-xl transition-all shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center gap-2 hover:scale-105"
            >
              <span>Command Center</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/node-dashboard"
              className="px-6 py-3.5 bg-[#A7F3D0] hover:bg-white text-[#081C15] font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2 hover:scale-105"
            >
              <Network className="w-4 h-4" />
              <span>3D Node AI Graph</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BOTANICAL FOOTER */}
      <footer className="relative z-10 border-t border-[#34D399]/20 bg-[#081C15] py-12 text-[#A7F3D0]/70 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#84CC16] text-[#081C15] font-bold flex items-center justify-center text-xs">
              TN
            </div>
            <span>
              AgriSmart Gov Portal · Department of Agriculture, Government of Tamil Nadu
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-[#A7F3D0]/60">
              GIGW 3.0 Certified · WCAG 2.1 Level AA
            </span>
            <Link to="/login" className="text-[#84CC16] hover:underline font-semibold">
              Officer Portal Login
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
