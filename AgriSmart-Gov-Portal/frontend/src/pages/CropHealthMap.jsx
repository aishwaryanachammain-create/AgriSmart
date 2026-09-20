import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { useReports } from "../hooks/useApi";
import { MapPin, ShieldCheck, RefreshCw, X, Users, AlertTriangle, Sprout, ChevronRight } from "lucide-react";

const SAMPLE_DATA = [
  { position: [80.2707, 13.0827], weight: 1, city: "chennai", name: "Chennai", farmers: 840 },
  { position: [76.9558, 11.0168], weight: 2, city: "coimbatore", name: "Coimbatore", farmers: 1205 },
  { position: [78.1198, 9.9252], weight: 4, city: "madurai", name: "Madurai", farmers: 650 },
  { position: [78.7047, 10.7905], weight: 3, city: "trichy", name: "Trichy", farmers: 410 },
  { position: [78.146, 11.6643], weight: 7, city: "salem", name: "Salem", farmers: 920 },
  { position: [78.6569, 11.1271], weight: 1, city: "erode", name: "Erode", farmers: 310 },
  { position: [79.84, 10.7656], weight: 1, city: "thanjavur", name: "Thanjavur", farmers: 1150 },
  { position: [79.1378, 10.79], weight: 8, city: "tirunelveli", name: "Tirunelveli", farmers: 780 },
];

const COLOR_RANGE = [
  [239, 68, 68, 180],   // Poor - Red
  [249, 115, 22, 200],  // Weak - Orange
  [234, 179, 8, 200],   // Medium - Yellow
  [74, 222, 128, 220],  // Good - Light Green
  [22, 101, 52, 255],   // Healthy - Dark Forest Green
];

export default function CropHealthMap() {
  const { reports, loading, error } = useReports();
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const overlayRef = useRef(null);

  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // 1. Initialize MapLibre Instance
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [78.9629, 10.787],
      zoom: 6.8,
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");
    mapRef.current = map;

    return () => {
      if (overlayRef.current) {
        mapRef.current?.removeControl(overlayRef.current);
      }
      mapRef.current?.remove();
    };
  }, []);

  // 2. Attach deck.gl Heatmap Overlay
  useEffect(() => {
    if (!mapRef.current || loading) return;

    if (overlayRef.current) {
      mapRef.current.removeControl(overlayRef.current);
    }

    const overlay = new MapboxOverlay({
      layers: [
        new HeatmapLayer({
          id: "crop-health-heatmap",
          data: SAMPLE_DATA,
          getPosition: (d) => d.position,
          getWeight: (d) => (reports && reports[d.city] ? reports[d.city] * 25 : d.weight * 10),
          radiusPixels: 90,
          intensity: 2.2,
          threshold: 0.03,
          colorRange: COLOR_RANGE,
        }),
      ],
    });

    mapRef.current.addControl(overlay);
    overlayRef.current = overlay;
  }, [reports, loading]);

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-6 relative overflow-hidden">
      
      {/* MAP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-emerald-950 font-serif">Crop Health Heatmap — Tamil Nadu</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Live NDVI Stream
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Aggregated deck.gl spatial health density mapped against active district reports.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {loading && (
            <span className="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 flex items-center gap-1.5 font-medium animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Syncing Heatmap...
            </span>
          )}
          {error && (
            <span className="text-xs text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200 font-medium">
              Offline Fallback Mode
            </span>
          )}
        </div>
      </div>

      {/* MAP VIEWPORT & INTERACTIVE DISTRICT OVERLAYS */}
      <div className="relative w-full h-[520px] rounded-xl border border-slate-200 overflow-hidden bg-slate-100 shadow-inner">
        
        {/* Map Container */}
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* CLICKABLE DISTRICT MARKER OVERLAYS */}
        {SAMPLE_DATA.map((district) => {
          const reportVal = reports && reports[district.city] ? reports[district.city] : district.weight;
          const isSelected = selectedDistrict?.city === district.city;

          return (
            <button
              key={district.city}
              onClick={() => setSelectedDistrict({ ...district, currentWeight: reportVal })}
              title={`Click to view ${district.name} diagnostics`}
              style={{
                // Approximate coordinate mapping overlay buttons over map
                top: `${50 - (district.position[1] - 10.787) * 42}%`,
                left: `${50 + (district.position[0] - 78.9629) * 22}%`,
              }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 cursor-pointer z-20 press-scale ${
                isSelected ? "scale-110 z-30" : "hover:scale-105"
              }`}
            >
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs shadow-md border ${
                reportVal > 5 
                  ? "bg-emerald-950 text-amber-300 border-emerald-800" 
                  : "bg-amber-500 text-white border-amber-600"
              }`}>
                <MapPin className="w-3.5 h-3.5" />
                <span>{district.name}</span>
                <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[10px] font-mono">
                  {reportVal}
                </span>
              </div>
            </button>
          );
        })}

        {/* CLICKABLE DISTRICT POPUP CARD */}
        {selectedDistrict && (
          <div className="absolute bottom-4 left-4 z-40 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200/90 max-w-xs w-full animate-in slide-in-from-bottom-3 duration-200 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-sm font-serif">{selectedDistrict.name} District</h3>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                  {selectedDistrict.currentWeight > 5 ? "Optimal" : "Attention"}
                </span>
              </div>
              <button 
                onClick={() => setSelectedDistrict(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-emerald-800" /> Monitored Farmers:</span>
                <strong className="text-slate-900 font-semibold">{selectedDistrict.farmers}</strong>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5"><Sprout className="w-3.5 h-3.5 text-emerald-800" /> Health Weight Factor:</span>
                <strong className="text-emerald-700 font-bold">{selectedDistrict.currentWeight} / 10</strong>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span className="flex items-center gap-1.5"><AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Disease Vectors:</span>
                <strong className={selectedDistrict.currentWeight < 4 ? "text-amber-600 font-bold" : "text-emerald-700"}>
                  {selectedDistrict.currentWeight < 4 ? "Fungal Stress Flagged" : "Clear / Low Risk"}
                </strong>
              </div>
            </div>

            <button 
              onClick={() => setSelectedDistrict(null)}
              className="w-full mt-2 py-2 bg-emerald-900 hover:bg-emerald-950 text-emerald-50 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 shadow-xs press-scale"
            >
              Close Diagnostic Drawer
            </button>
          </div>
        )}

      </div>

      {/* ATMOSPHERIC LEGEND BAR */}
      <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs">
        <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
          NDVI Density Scale:
        </span>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-red-500 shadow-2xs"></span>
            <span className="text-slate-700 font-medium">Poor (&lt; 0.3)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-orange-500 shadow-2xs"></span>
            <span className="text-slate-700 font-medium">Weak (0.3 – 0.5)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-yellow-500 shadow-2xs"></span>
            <span className="text-slate-700 font-medium">Medium (0.5 – 0.65)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-green-400 shadow-2xs"></span>
            <span className="text-slate-700 font-medium">Good (0.65 – 0.8)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-md bg-emerald-800 shadow-2xs"></span>
            <span className="text-slate-700 font-medium">Healthy (&gt; 0.8)</span>
          </div>
        </div>
      </div>

    </div>
  );
}
