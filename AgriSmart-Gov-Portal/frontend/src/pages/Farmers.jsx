import React, { useState, useMemo } from 'react';
import { 
  Users, Search, Phone, MapPin, Eye, AlertCircle, 
  CheckCircle2, Download, Plus, X, Sprout, Calendar,
  TrendingUp, ShieldCheck
} from 'lucide-react';

const MOCK_FARMERS = [
  {
    id: 'divyanshu',
    name: 'Divyanshu Karmakar',
    phone: '8103222607',
    village: 'Chennai',
    fieldSize: '100',
    lastUpdated: '20/09/2026',
    status: 'active',
    crop: 'Potato (Kufri Jyoti)',
    ndvi: 0.78,
    soilMoisture: '68%',
    riskLevel: 'Low Risk'
  },
  {
    id: 'sagar',
    name: 'Sagar Awasthi',
    phone: '7859623569',
    village: 'Madurai',
    fieldSize: '302',
    lastUpdated: '20/09/2026',
    status: 'active',
    crop: 'Paddy / Rice',
    ndvi: 0.65,
    soilMoisture: '54%',
    riskLevel: 'Moderate Stress'
  },
  {
    id: 'uday',
    name: 'Uday Trivedi',
    phone: '9658263545',
    village: 'Vellore',
    fieldSize: '213',
    lastUpdated: '20/09/2026',
    status: 'active',
    crop: 'Sugarcane',
    ndvi: 0.82,
    soilMoisture: '72%',
    riskLevel: 'Optimal'
  }
];

export default function Farmers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedFarmer, setSelectedFarmer] = useState(null);
  const [hoveredRowId, setHoveredRowId] = useState(null);

  const filteredFarmers = useMemo(() => {
    return MOCK_FARMERS.filter(farmer => {
      const matchesSearch = 
        farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farmer.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farmer.phone.includes(searchTerm) ||
        farmer.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || farmer.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const activeCount = MOCK_FARMERS.filter(f => f.status === 'active').length;
  const pendingCount = MOCK_FARMERS.filter(f => f.status === 'pending').length;
  const totalAcres = MOCK_FARMERS.reduce((acc, curr) => acc + parseInt(curr.fieldSize || 0), 0);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-slate-800 p-6 overflow-hidden">
      
      {/* ATMOSPHERE: Fixed Corner Radial Gradient Blobs & Fixed Contour Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-contour-pattern opacity-60 z-0" />
      <div className="fixed -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* PAGE HEADER: Banner Card Treatment */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-slate-200/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-emerald-950 font-serif">Farmer Directory & Field Monitoring</h1>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900 text-amber-300 border border-emerald-800 shadow-xs flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> GIGW Verified Portal
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Real-time regional monitoring of registered agricultural landholders, remote NDVI values, and field diagnostics.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button className="px-4 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-emerald-50 rounded-xl text-xs font-semibold transition-all shadow-sm flex items-center gap-2 press-scale">
              <Plus className="w-4 h-4 text-amber-400" />
              Register Farmer
            </button>
            <button className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium transition-all flex items-center gap-2 press-scale">
              <Download className="w-4 h-4 text-slate-500" />
              Export CSV
            </button>
          </div>
        </div>

        {/* STAT CARDS: Top-right icon boxes + contextual pill badges + Hero Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          
          {/* Card 1: Active Farmers */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover-lift relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Farmers</span>
                <div className="text-3xl font-bold text-emerald-950 font-serif mt-1">{activeCount}</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100/80 text-emerald-900 border border-emerald-200 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-700" /> 100% Verified
              </span>
            </div>
          </div>

          {/* Card 2: Pending Updates */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover-lift relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Updates</span>
                <div className="text-3xl font-bold text-slate-900 font-serif mt-1">{pendingCount}</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 border border-amber-100 flex items-center justify-center font-bold">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-100/80 text-amber-900 border border-amber-200 inline-flex items-center gap-1">
                Action Ready
              </span>
            </div>
          </div>

          {/* HERO CARD: Distinguishing Accent Border/Gradient */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 rounded-2xl border-2 border-emerald-700 shadow-md hover-lift relative overflow-hidden text-white flex flex-col justify-between">
            <div className="flex items-start justify-between relative z-10">
              <div>
                <span className="text-xs font-bold text-emerald-200/80 uppercase tracking-wider">Total Monitored Land</span>
                <div className="text-3xl font-bold text-amber-300 font-serif mt-1">{totalAcres} <span className="text-sm font-normal text-emerald-100">Acres</span></div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-emerald-800/80 text-amber-300 border border-emerald-600 flex items-center justify-center font-bold shadow-inner">
                <Sprout className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 relative z-10">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-800/80 text-emerald-50 border border-emerald-600 inline-flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-amber-300" /> Across 3 Districts
              </span>
            </div>
          </div>

        </div>

        {/* CONTROLS: Rounded Pill Search + Segmented Pill Filter */}
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Full Rounded Pill Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by farmer name, district, phone, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 text-xs bg-slate-50/80 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all placeholder:text-slate-400"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Segmented Pill Control */}
          <div className="bg-slate-100/80 p-1 rounded-full border border-slate-200/80 flex items-center gap-1 text-xs">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all press-scale ${
                statusFilter === 'all' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Status
            </button>
            <button
              onClick={() => setStatusFilter('active')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all press-scale ${
                statusFilter === 'active' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Active Only
            </button>
            <button
              onClick={() => setStatusFilter('pending')}
              className={`px-4 py-1.5 rounded-full font-medium transition-all press-scale ${
                statusFilter === 'pending' ? 'bg-emerald-950 text-amber-300 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pending
            </button>
          </div>

        </div>

        {/* FARMER TABLE WITH HOVER-REVEAL DETAILS */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/90 text-slate-500 border-b border-slate-200/80 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4">Farmer Details</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">District / Village</th>
                  <th className="p-4">Field Size</th>
                  <th className="p-4">Last Sync</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredFarmers.map((farmer) => {
                  const isHovered = hoveredRowId === farmer.id;

                  return (
                    <React.Fragment key={farmer.id}>
                      <tr 
                        onMouseEnter={() => setHoveredRowId(farmer.id)}
                        onMouseLeave={() => setHoveredRowId(null)}
                        className={`transition-colors cursor-pointer ${
                          isHovered ? 'bg-emerald-50/40' : 'hover:bg-slate-50/60'
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-sm shadow-xs">
                              {farmer.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm">{farmer.name}</div>
                              <div className="text-[11px] text-slate-400 font-mono">ID: {farmer.id}</div>
                            </div>
                          </div>
                        </td>

                        <td className="p-4 text-slate-600">
                          <span className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-emerald-800" />
                            {farmer.phone}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                            <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                            {farmer.village}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-[11px] font-semibold border border-slate-200">
                            {farmer.fieldSize} Acres
                          </span>
                        </td>

                        <td className="p-4 text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {farmer.lastUpdated}
                          </span>
                        </td>

                        <td className="p-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                            {farmer.status}
                          </span>
                        </td>

                        {/* Action: Filled Pill Button */}
                        <td className="p-4 text-right">
                          <button 
                            onClick={() => setSelectedFarmer(farmer)}
                            className="px-3.5 py-1.5 bg-emerald-900 text-emerald-50 hover:bg-emerald-950 rounded-full font-semibold text-xs transition-all flex items-center gap-1.5 ml-auto shadow-xs press-scale"
                          >
                            <Eye className="w-3.5 h-3.5 text-amber-400" />
                            Inspect Dossier
                          </button>
                        </td>
                      </tr>

                      {/* HOVER REVEAL DYNAMIC ROW DETAIL */}
                      {isHovered && (
                        <tr className="bg-emerald-50/20 border-b border-emerald-100/60 animate-in fade-in duration-150">
                          <td colSpan="7" className="px-6 py-3 text-xs">
                            <div className="flex items-center justify-between text-slate-600 bg-white/80 p-3 rounded-xl border border-emerald-100 shadow-2xs">
                              <div className="flex items-center gap-6">
                                <span>Crop: <strong className="text-emerald-950">{farmer.crop}</strong></span>
                                <span>Soil Moisture: <strong className="text-slate-800">{farmer.soilMoisture}</strong></span>
                                <span>NDVI Health Index: <strong className="text-emerald-700">{farmer.ndvi}</strong></span>
                              </div>
                              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                                {farmer.riskLevel}
                              </span>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* INSPECTION MODAL */}
      {selectedFarmer && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-100 space-y-5 relative">
            <button onClick={() => setSelectedFarmer(null)} className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-amber-300 flex items-center justify-center font-bold text-lg">
                {selectedFarmer.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">{selectedFarmer.name}</h3>
                <p className="text-xs text-slate-500">Record ID: {selectedFarmer.id}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div><span className="text-slate-400 block text-[10px]">Village</span><strong className="text-slate-800">{selectedFarmer.village}</strong></div>
              <div><span className="text-slate-400 block text-[10px]">Contact</span><strong className="text-slate-800">{selectedFarmer.phone}</strong></div>
              <div><span className="text-slate-400 block text-[10px]">Field Area</span><strong className="text-emerald-900">{selectedFarmer.fieldSize} Acres</strong></div>
              <div><span className="text-slate-400 block text-[10px]">Crop Type</span><strong className="text-slate-800">{selectedFarmer.crop}</strong></div>
            </div>
            <button onClick={() => setSelectedFarmer(null)} className="w-full py-2 bg-emerald-900 text-white rounded-xl text-xs font-semibold hover:bg-emerald-950">
              Close Summary
            </button>
          </div>
        </div>
      )}

    </div>
  );
}