import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  TrendingUp, Calendar, Download, FileText, Sprout, 
  Award, ShieldCheck, ChevronRight, Info, Filter, ArrowUpRight
} from 'lucide-react';

// Sample Dataset mapped across Time Windows (7D, 30D, YTD)
const TIME_WINDOW_DATA = {
  '7d': [
    { period: 'Mon', yield: 42, ndvi: 0.72, stressScore: 12 },
    { period: 'Tue', yield: 45, ndvi: 0.74, stressScore: 10 },
    { period: 'Wed', yield: 41, ndvi: 0.71, stressScore: 15 },
    { period: 'Thu', yield: 48, ndvi: 0.76, stressScore: 8 },
    { period: 'Fri', yield: 52, ndvi: 0.79, stressScore: 6 },
    { period: 'Sat', yield: 50, ndvi: 0.77, stressScore: 7 },
    { period: 'Sun', yield: 55, ndvi: 0.81, stressScore: 5 },
  ],
  '30d': [
    { period: 'Week 1', yield: 210, ndvi: 0.68, stressScore: 18 },
    { period: 'Week 2', yield: 245, ndvi: 0.73, stressScore: 14 },
    { period: 'Week 3', yield: 280, ndvi: 0.78, stressScore: 9 },
    { period: 'Week 4', yield: 310, ndvi: 0.82, stressScore: 6 },
  ],
  'ytd': [
    { period: 'Jan', yield: 850, ndvi: 0.65, stressScore: 22 },
    { period: 'Feb', yield: 920, ndvi: 0.69, stressScore: 19 },
    { period: 'Mar', yield: 1100, ndvi: 0.74, stressScore: 14 },
    { period: 'Apr', yield: 1250, ndvi: 0.78, stressScore: 10 },
    { period: 'May', yield: 980, ndvi: 0.70, stressScore: 16 },
    { period: 'Jun', yield: 1400, ndvi: 0.83, stressScore: 5 },
  ]
};

// Seasonal Crop Calendar Data (Tamil Nadu Agricultural Seasons)
const CROPPING_CALENDAR = [
  {
    month: 'Jan',
    season: 'Rabi Harvest',
    crop: 'Potato / Paddy',
    targetYield: '14.2 Tons/Ha',
    subsidyWindow: 'Pre-harvest Subsidy',
    advisory: 'Stop irrigation 10 days before target harvest. Conduct tuber skin firmness tests.'
  },
  {
    month: 'Feb',
    season: 'Late Rabi',
    crop: 'Pulses & Oilseeds',
    targetYield: '8.5 Tons/Ha',
    subsidyWindow: 'Seed Subsidy Distribution',
    advisory: 'Inspect soil moisture in dryland zones. Clear residue prior to Zaid preparation.'
  },
  {
    month: 'Mar',
    season: 'Zaid Sowing',
    crop: 'Vegetables / Watermelon',
    targetYield: '18.0 Tons/Ha',
    subsidyWindow: 'Micro-Irrigation Clearance',
    advisory: 'Deploy drip fertigation. Flag zones experiencing early heatwave stress.'
  },
  {
    month: 'Apr',
    season: 'Zaid Peak',
    crop: 'Horticulture',
    targetYield: '21.5 Tons/Ha',
    subsidyWindow: 'Solar Pump Subsidies',
    advisory: 'Monitor pest infestation vectors during peak temperature spikes.'
  },
  {
    month: 'May',
    season: 'Pre-Kharif Prep',
    crop: 'Green Manure',
    targetYield: 'N/A (Soil Build)',
    subsidyWindow: 'Bio-Fertilizer Grants',
    advisory: 'Sow Sesbania / Crotalaria for organic nitrogen fixation before monsoon.'
  },
  {
    month: 'Jun',
    season: 'Kharif Sowing',
    crop: 'Paddy (Kuruvai)',
    targetYield: '16.8 Tons/Ha',
    subsidyWindow: 'Urea & NPK Allocations',
    advisory: 'Ensure nursery bed drainage setup ahead of early monsoon runoff.'
  }
];

export default function Reports() {
  const [timeWindow, setTimeWindow] = useState('30d');
  const [selectedMonth, setSelectedMonth] = useState('Mar');

  const currentMonthData = CROPPING_CALENDAR.find(m => m.month === selectedMonth);
  const activeChartData = TIME_WINDOW_DATA[timeWindow];

  return (
    <div className="p-6 bg-[#FAF8F5] min-h-screen text-slate-800 space-y-6 relative overflow-hidden">
      
      {/* ATMOSPHERE: Fixed Contour Overlay Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-contour-pattern opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* PAGE HEADER BANNER */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xs border border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-emerald-950 font-serif">Analytics & Executive Reports</h1>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900 text-amber-300 border border-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> GIGW Audit Compliant
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              District yield forecasting, live vegetation health indices (NDVI), and regional crop calendar projections.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="px-4 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-emerald-50 rounded-xl text-xs font-semibold transition-all shadow-xs flex items-center gap-2 press-scale">
              <FileText className="w-4 h-4 text-amber-400" />
              Download Full PDF
            </button>
            <button className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium transition-all flex items-center gap-2 press-scale">
              <Download className="w-4 h-4 text-slate-500" />
              Export CSV
            </button>
          </div>
        </div>

        {/* TIME-WINDOW CHART CONTROLS & PRIMARY YIELD/NDVI CHART */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg font-bold text-emerald-950 font-serif flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-800" />
                Yield Performance & NDVI Vegetation Progression
              </h2>
              <p className="text-xs text-slate-500">Comparing estimated total yield tonnage against remote sensing NDVI canopy health.</p>
            </div>

            {/* SEGMENTED TIME WINDOW PILL CONTROLS */}
            <div className="bg-slate-100 p-1 rounded-full border border-slate-200 flex items-center gap-1 text-xs shrink-0">
              <button
                onClick={() => setTimeWindow('7d')}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all press-scale ${
                  timeWindow === '7d' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                7 Days
              </button>
              <button
                onClick={() => setTimeWindow('30d')}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all press-scale ${
                  timeWindow === '30d' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                30 Days
              </button>
              <button
                onClick={() => setTimeWindow('ytd')}
                className={`px-4 py-1.5 rounded-full font-semibold transition-all press-scale ${
                  timeWindow === 'ytd' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Season YTD
              </button>
            </div>
          </div>

          {/* RECHARTS YIELD DUAL AXIS GRAPH */}
          <div className="h-80 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activeChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="period" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis yAxisId="left" stroke="#065f46" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#d97706" fontSize={12} tickLine={false} axisLine={false} domain={[0, 1]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', borderColor: '#e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }} 
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Line yAxisId="left" type="monotone" dataKey="yield" name="Yield Tonnage (Tons)" stroke="#065f46" strokeWidth={3} dot={{ r: 4, fill: '#065f46' }} activeDot={{ r: 6 }} />
                <Line yAxisId="right" type="monotone" dataKey="ndvi" name="Avg NDVI Canopy Score" stroke="#d97706" strokeWidth={2.5} strokeDasharray="4 4" dot={{ r: 4, fill: '#d97706' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* INTERACTIVE SEASONAL CROP CALENDAR WHEEL */}
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-emerald-950 font-serif flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-800" />
                Tamil Nadu Regional Cropping Calendar & Intervention Wheel
              </h2>
              <p className="text-xs text-slate-500">Select a month window to inspect target yield projections and scheduled subsidy disbursement windows.</p>
            </div>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full border border-emerald-200 hidden sm:inline-block">
              Active Cycle: Rabi / Zaid Transition
            </span>
          </div>

          {/* Month Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CROPPING_CALENDAR.map((item) => {
              const isSelected = selectedMonth === item.month;

              return (
                <button
                  key={item.month}
                  onClick={() => setSelectedMonth(item.month)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer press-scale ${
                    isSelected 
                      ? 'bg-emerald-900 text-white border-emerald-800 shadow-md ring-2 ring-emerald-700/30' 
                      : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-emerald-900'}`}>
                      {item.month}
                    </span>
                    {isSelected && <Award className="w-3.5 h-3.5 text-amber-300" />}
                  </div>
                  <div className={`text-xs font-semibold truncate ${isSelected ? 'text-emerald-100' : 'text-slate-900'}`}>
                    {item.season}
                  </div>
                  <div className={`text-[11px] mt-1 truncate ${isSelected ? 'text-emerald-200/80' : 'text-slate-400'}`}>
                    {item.crop}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Month Details Overlay */}
          {currentMonthData && (
            <div className="bg-[#FAF8F5] border border-amber-200/70 rounded-2xl p-5 relative space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/50 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shadow-2xs">
                    {currentMonthData.month}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-serif">
                      {currentMonthData.season} Phase — {currentMonthData.crop}
                    </h3>
                    <p className="text-[11px] text-slate-500">Regional Technical Directive</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white rounded-lg border border-amber-200 text-xs font-semibold text-emerald-950">
                    Target Yield: <strong>{currentMonthData.targetYield}</strong>
                  </span>
                  <span className="px-3 py-1 bg-emerald-900 text-amber-300 rounded-lg text-xs font-semibold">
                    {currentMonthData.subsidyWindow}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  <strong>Officer Directive:</strong> {currentMonthData.advisory}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
