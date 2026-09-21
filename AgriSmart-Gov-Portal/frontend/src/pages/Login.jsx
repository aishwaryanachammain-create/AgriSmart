import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Lock,
  Mail,
  User,
  Check,
  LogIn,
} from "lucide-react";

const carouselSlides = [
  {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    title: "Precision Satellite Telemetry",
    subtitle: "Real-time NDVI vegetation tracking across 38 administrative districts.",
  },
  {
    url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200",
    title: "Automated Vector Analysis",
    subtitle: "Early warning disease dispatch and soil moisture deficit monitoring.",
  },
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    title: "Empowering District Officers",
    subtitle: "Instant field SMS broadcast and direct WhatsApp advisory dispatch.",
  },
];

export default function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoginView, setIsLoginView] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const navigate = useNavigate();

  // Auto-play dynamic farm media carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // Redirect to Command Center Dashboard on success
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#081C15] text-[#ECFDF5] font-sans flex items-center justify-center p-4 sm:p-6 lg:p-8 relative selection:bg-[#84CC16] selection:text-[#081C15] overflow-x-hidden">
      {/* Subtle Botanical Grid Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167,243,208,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(167,243,208,0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* DUAL PANEL MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-6xl bg-[#0D281F]/90 backdrop-blur-2xl rounded-3xl border border-emerald-500/20 shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* LEFT PANEL: DYNAMIC FARM MEDIA CAROUSEL */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-between p-8 overflow-hidden rounded-2xl m-3 bg-[#081C15]">
          {/* Background Images with Fade Transition */}
          {carouselSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-40" : "opacity-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover mix-blend-luminosity scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-[#081C15]/40 to-transparent" />
            </div>
          ))}

          {/* Left Top Bar Overlay */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#84CC16] text-[#081C15] font-bold flex items-center justify-center text-xs shadow-md font-mono">
                TN
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#A7F3D0]">
                AgriSmart
              </span>
            </div>

            <Link
              className="px-3 py-1.5 rounded-full bg-[#081C15]/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-semibold text-[#A7F3D0] hover:text-white transition-all flex items-center gap-1.5"
              to="/"
            >
              <span>Back to website</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#84CC16]" />
            </Link>
          </div>

          {/* Left Bottom Narrative & Dynamic Dash Indicator */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif text-white font-normal leading-tight">
                {carouselSlides[currentSlide].title}
              </h2>
              <p className="text-xs text-[#A7F3D0]/80 leading-relaxed max-w-sm">
                {carouselSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Dynamic Dash Indicators */}
            <div className="flex items-center gap-2 pt-2">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-8 bg-[#84CC16]"
                      : "w-2 bg-emerald-500/30 hover:bg-emerald-500/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: AUTHENTICATION FORM */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-6">
          {/* Header & Toggle */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                {isLoginView ? "Welcome back" : "Create an officer account"}
              </h1>
              <Link
                className="lg:hidden text-xs text-[#84CC16] flex items-center gap-1 font-semibold"
                to="/"
              >
                Website <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <p className="text-xs text-[#A7F3D0]/70">
              {isLoginView
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLoginView(!isLoginView)}
                className="text-[#84CC16] font-bold hover:underline"
              >
                {isLoginView ? "Request Access" : "Log in"}
              </button>
            </p>
          </div>

          {/* Form Controls */}
          <form onSubmit={handleAuthSubmit} className="space-y-4 text-xs">
            {/* Registration First/Last Name Inputs */}
            {!isLoginView && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-emerald-300/80 tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full p-3 rounded-xl bg-[#05140E]/80 border border-emerald-500/20 text-[#ECFDF5] placeholder:text-emerald-500/40 focus:outline-none focus:border-[#84CC16]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-emerald-300/80 tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full p-3 rounded-xl bg-[#05140E]/80 border border-emerald-500/20 text-[#ECFDF5] placeholder:text-emerald-500/40 focus:outline-none focus:border-[#84CC16]"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-emerald-300/80 tracking-wider">
                Official Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="officer@tn.gov.in"
                  className="w-full p-3 pl-10 rounded-xl bg-[#05140E]/80 border border-emerald-500/20 text-[#ECFDF5] placeholder:text-emerald-500/40 focus:outline-none focus:border-[#84CC16]"
                />
                <Mail className="w-4 h-4 text-emerald-500/60 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-emerald-300/80 tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 pl-10 pr-10 rounded-xl bg-[#05140E]/80 border border-emerald-500/20 text-[#ECFDF5] placeholder:text-emerald-500/40 focus:outline-none focus:border-[#84CC16]"
                />
                <Lock className="w-4 h-4 text-emerald-500/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500/60 hover:text-[#A7F3D0]"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Policy Checkbox */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-emerald-500/30 bg-[#05140E] text-[#84CC16] focus:ring-0 cursor-pointer"
              />
              <label htmlFor="terms" className="text-[11px] text-[#A7F3D0]/80 cursor-pointer">
                I agree to the{" "}
                <span className="underline text-[#84CC16]">
                  GIGW Security Terms & Conditions
                </span>
              </label>
            </div>

            {/* Big, High-Visibility, Instantly Identifiable Submit CTA */}
            <button
              type="submit"
              className="group relative w-full py-4 sm:py-5 px-8 bg-gradient-to-r from-[#84CC16] via-[#9ae62d] to-[#84CC16] hover:from-[#9ae62d] hover:to-[#84CC16] text-[#081C15] rounded-2xl font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-200 shadow-[0_0_35px_rgba(132,204,22,0.6)] hover:shadow-[0_0_55px_rgba(132,204,22,0.9)] border-2 border-[#bef264] hover:scale-[1.02] active:scale-[0.98] mt-3 flex items-center justify-center gap-3 cursor-pointer ring-4 ring-[#84CC16]/25"
            >
              <LogIn className="w-6 h-6 transition-transform group-hover:scale-110 text-[#081C15] shrink-0" />
              <span className="font-extrabold">{isLoginView ? "Log In to Portal" : "Create Officer Account"}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5 text-[#081C15] shrink-0" />
            </button>
          </form>

          {/* SSO Divider */}
          <div className="relative flex items-center justify-center pt-2">
            <div className="border-t border-emerald-500/20 w-full" />
            <span className="bg-[#0D281F] px-3 text-[10px] text-emerald-400/60 uppercase font-mono shrink-0">
              Or authenticate with
            </span>
            <div className="border-t border-emerald-500/20 w-full" />
          </div>

          {/* Social / State Single Sign-On Buttons */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="py-2.5 px-4 bg-[#05140E]/80 hover:bg-[#05140E] border border-emerald-500/20 rounded-xl font-semibold text-[#A7F3D0] flex items-center justify-center gap-2 transition-all hover:border-[#84CC16]/40"
            >
              <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
              <span>State Government SSO</span>
            </button>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="py-2.5 px-4 bg-[#05140E]/80 hover:bg-[#05140E] border border-emerald-500/20 rounded-xl font-semibold text-[#A7F3D0] flex items-center justify-center gap-2 transition-all hover:border-[#84CC16]/40"
            >
              <span>Google Workspace</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
