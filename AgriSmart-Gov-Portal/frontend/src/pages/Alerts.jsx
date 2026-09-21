import React, { useState, useEffect, useMemo } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push, set } from "firebase/database";
import { 
  CloudRain, Bug, Droplets, Thermometer, FlaskConical, 
  Bell, AlertCircle, Plus, MapPin, Calendar, CheckCircle2, 
  X, Send, ShieldCheck, Flame, Filter, Info, Share2
} from "lucide-react";

// Firebase config (retained verbatim)
const firebaseConfig = {
  apiKey: "AIzaSyCYKrvHUvyh6L5Y7bWxZqHuYGjwsNSCrZM",
  authDomain: "agrismartfinal.firebaseapp.com",
  databaseURL: "https://agrismartfinal-default-rtdb.firebaseio.com",
  projectId: "agrismartfinal",
  storageBucket: "agrismartfinal.firebasestorage.app",
  messagingSenderId: "583584318964",
  appId: "1:583584318964:web:16850b877ce782a54825a1",
  measurementId: "G-73FV7DC2P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("rain");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Alerts");
  const [hoveredAlertId, setHoveredAlertId] = useState(null);
  const [dispatchedSms, setDispatchedSms] = useState([]);

  const today = new Date();
  const dateToday = today.toISOString().split("T")[0];

  // Fetch alerts in real-time from Firebase
  useEffect(() => {
    const alertsRef = ref(db, "alerts");
    const unsubscribe = onValue(alertsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const alertList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setAlerts(alertList.reverse()); // Show latest first
      } else {
        setAlerts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Add new alert to Firebase
  const addAlert = () => {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }
    const newAlertRef = push(ref(db, "alerts"));
    set(newAlertRef, {
      type,
      title,
      description,
      location,
      timestamp: dateToday,
      status: "Active"
    });
    setTitle("");
    setDescription("");
    setType("rain");
    setShowForm(false);
    setLocation("");
  };

  // Dynamic filter logic
  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      if (activeFilter === "All Alerts") return true;
      if (activeFilter === "Active") return alert.status === "Active";
      if (activeFilter === "Weather") return alert.type === "rain" || alert.type === "temperature";
      if (activeFilter === "Pest") return alert.type === "pest";
      if (activeFilter === "Irrigation") return alert.type === "irrigation";
      return true;
    });
  }, [alerts, activeFilter]);

  const activeAlertsCount = alerts.filter((a) => a.status === "Active").length;
  const pestCount = alerts.filter((a) => a.type === "pest").length;
  const moistureCount = alerts.filter((a) => a.type === "irrigation" || a.type === "rain").length;

  const getAlertIcon = (alertType) => {
    switch (alertType) {
      case "rain": return <CloudRain className="w-5 h-5 text-sky-600" />;
      case "pest": return <Bug className="w-5 h-5 text-amber-600" />;
      case "irrigation": return <Droplets className="w-5 h-5 text-blue-600" />;
      case "temperature": return <Thermometer className="w-5 h-5 text-red-600" />;
      case "fertilizer": return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      default: return <Bell className="w-5 h-5 text-slate-600" />;
    }
  };

  const handleDispatchSms = (alertId) => {
    setDispatchedSms((prev) => [...prev, alertId]);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-slate-800 p-4 sm:p-6 space-y-6 overflow-hidden">
      
      {/* ATMOSPHERE: Contour Overlay Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-contour-pattern opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* 1. DISTINCT EMERGENCY DISPATCH HERO HEADER */}
        <div className="bg-white rounded-2xl border-2 border-red-500/80 p-6 shadow-md relative overflow-hidden">
          {/* Top Gradient Threat Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-1">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-red-100 text-red-950 border border-red-300 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" /> Critical Threat Monitoring
                </span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Firebase RTDB Engine
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                Disease & Early-Warning Advisory Dispatch
              </h1>
              <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                Automated disease vector tracking, soil moisture deficit alerts, and direct SMS/WhatsApp broadcast dispatch controls for field officers.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowForm(true)}
                className="px-5 py-3 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 press-scale touch-target"
              >
                <Plus className="w-4 h-4 text-amber-300" />
                Broadcast Emergency Alert
              </button>
            </div>
          </div>

          {/* Priority Threat Breakdown Bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-red-50/80 p-3 rounded-xl border border-red-100">
              <span className="text-[10px] text-red-700 font-bold uppercase block">· Active Red Flags</span>
              <span className="text-xl font-bold text-red-950 font-serif mt-0.5 block">{activeAlertsCount} Threats</span>
            </div>
            <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-100">
              <span className="text-[10px] text-amber-800 font-bold uppercase block">· Pest Vectors</span>
              <span className="text-xl font-bold text-amber-950 font-serif mt-0.5 block">{pestCount} Active</span>
            </div>
            <div className="bg-sky-50/80 p-3 rounded-xl border border-sky-100">
              <span className="text-[10px] text-sky-800 font-bold uppercase block">· Moisture Deficits</span>
              <span className="text-xl font-bold text-sky-950 font-serif mt-0.5 block">{moistureCount} Flagged</span>
            </div>
            <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
              <span className="text-[10px] text-emerald-800 font-bold uppercase block">· Broadcast Coverage</span>
              <span className="text-xl font-bold text-emerald-950 font-serif mt-0.5 block">100% Farmers</span>
            </div>
          </div>
        </div>

        {/* 2. FUNCTIONAL FILTER BAR */}
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-full border border-slate-200 text-xs overflow-x-auto">
            {["All Alerts", "Active", "Weather", "Pest", "Irrigation"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all press-scale ${
                  activeFilter === f
                    ? "bg-emerald-950 text-amber-300 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-slate-400">
            Showing <strong className="text-slate-800">{filteredAlerts.length}</strong> Records
          </span>
        </div>

        {/* 3. ALERT CARDS LIST */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
          <h2 className="text-lg font-bold text-emerald-950 font-serif flex items-center gap-2 border-b border-slate-100 pb-3">
            <Bell className="w-5 h-5 text-emerald-800" />
            Recent Field Alerts & Broadcasts
          </h2>

          {filteredAlerts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredAlerts.map((alertItem) => {
                const isHovered = hoveredAlertId === alertItem.id;
                const isDispatched = dispatchedSms.includes(alertItem.id);

                return (
                  <div
                    key={alertItem.id}
                    onMouseEnter={() => setHoveredAlertId(alertItem.id)}
                    onMouseLeave={() => setHoveredAlertId(null)}
                    className="bg-slate-50/60 rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-emerald-300 transition-all duration-200 relative overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      
                      <div className="flex items-start gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                          {getAlertIcon(alertItem.type)}
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
                              {alertItem.type}
                            </span>
                            {alertItem.location && (
                              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                                {alertItem.location}
                              </span>
                            )}
                          </div>

                          <h3 className="text-base font-bold text-slate-900 font-serif">{alertItem.title}</h3>
                          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{alertItem.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-red-100 text-red-800 border border-red-200 capitalize">
                          {alertItem.status || "Active"}
                        </span>
                        
                        <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {alertItem.timestamp ? new Date(alertItem.timestamp).toLocaleDateString() : dateToday}
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          {/* WhatsApp Direct Share Button */}
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(
                              `*AgriSmart Official Advisory*: ${alertItem.title}\nZone: ${alertItem.location || 'Statewide'}\nDetails:${alertItem.description}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 transition-all flex items-center gap-1.5 touch-target press-scale"
                          >
                            <Share2 className="w-3.5 h-3.5 text-emerald-700" /> WhatsApp
                          </a>

                          {/* SMS Direct Dispatch Button */}
                          <button
                            onClick={() => handleDispatchSms(alertItem.id)}
                            disabled={isDispatched}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 press-scale shadow-2xs touch-target ${
                              isDispatched
                                ? "bg-emerald-100 text-emerald-900 border border-emerald-300 cursor-default"
                                : "bg-emerald-900 hover:bg-emerald-950 text-emerald-50"
                            }`}
                          >
                            {isDispatched ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Sent
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5 text-amber-400" /> SMS
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* HOVER REVEAL DETAIL */}
                    {isHovered && (
                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 bg-white/80 p-3 rounded-xl border border-slate-100">
                        <span className="flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-amber-600" /> Firebase Doc ID: <strong className="font-mono text-slate-700">{alertItem.id}</strong>
                        </span>
                        <span className="text-emerald-800 font-medium hidden sm:inline">Hover diagnostic active</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs">
              No alerts found matching filter "<strong className="text-slate-600">{activeFilter}</strong>".
            </div>
          )}
        </div>

      </div>

      {/* 4. CREATE ALERT MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4 relative animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <div className="w-9 h-9 rounded-xl bg-red-700 text-amber-300 flex items-center justify-center font-bold shadow-xs">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">Create New Advisory Alert</h3>
                <p className="text-xs text-slate-500">Pushes in real-time to Firebase database</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Alert Category
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 font-medium text-slate-800"
                >
                  <option value="rain">Rain / Downpour</option>
                  <option value="irrigation">Irrigation / Deficit</option>
                  <option value="pest">Pest Vector / Disease</option>
                  <option value="fertilizer">Fertilizer Advisory</option>
                  <option value="temperature">Temperature Spike</option>
                  <option value="normal">General Broadcast</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Alert Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Unseasonal Heavy Rainfall Advisory"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 font-medium text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Target Location / Zone
                </label>
                <input
                  type="text"
                  placeholder="e.g., Nilgiris Zone 4 or Coimbatore District"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 font-medium text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-500 font-semibold uppercase tracking-wider text-[10px] mb-1">
                  Advisory Details
                </label>
                <textarea
                  rows="3"
                  placeholder="Provide precise officer action guidance or preventive steps..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 font-medium text-slate-800 resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 text-xs font-semibold"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl text-xs font-semibold press-scale shadow-xs"
                onClick={addAlert}
              >
                Save & Push Alert
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}