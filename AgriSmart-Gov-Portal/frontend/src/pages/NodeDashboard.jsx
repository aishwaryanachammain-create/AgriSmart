import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Network,
  Shield,
  AlertTriangle,
  Search,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Cpu,
  RefreshCw,
  Maximize2,
  Minimize2,
  Info,
  Sliders,
  CheckCircle2,
  Compass,
  ArrowLeft,
} from "lucide-react";

// Predefined 3D Nodes: Spatial Zones, Policies, and Pest Threats
const INITIAL_NODES = [
  // Policies (Lime / Emerald)
  {
    id: "decree-42",
    label: "Federal Decree-Law No. (42)",
    type: "policy",
    color: "#84CC16", // Lime
    glow: "rgba(132, 204, 22, 0.6)",
    x: 0,
    y: -40,
    z: 20,
    radius: 18,
    details: {
      header: "Critical Concerns | Federal Decree-Law No. (42)",
      subVector: "Proposed De-regulation Vector",
      complianceRate: "98%",
      totalLaws: "165K",
      implementation: "57%",
      summary:
        "Mandatory biosecurity buffers, strict pesticide residue ceilings, and emergency fungicide allocation protocols for commercial potato and horticulture zones.",
      affectedZone: "Nilgiris & Salem Agrarian Sectors",
      status: "Active Enforcement",
    },
  },
  {
    id: "decree-18b",
    label: "Decree 18-B (Aquifer Extraction)",
    type: "policy",
    color: "#34D399", // Emerald
    glow: "rgba(52, 211, 153, 0.6)",
    x: -160,
    y: 60,
    z: -40,
    radius: 14,
    details: {
      header: "Groundwater Rights | Decree 18-B",
      subVector: "Micro-Irrigation Priority Subsidy",
      complianceRate: "94%",
      totalLaws: "42K",
      implementation: "81%",
      summary:
        "Restricts heavy borehole pumping during pre-monsoon dry spells, routing subsidized solar drip-irrigation to smallholders.",
      affectedZone: "Coimbatore & Madurai Basin",
      status: "Verified Compliant",
    },
  },
  {
    id: "go-102",
    label: "State G.O. 102 (Cold Chain Storage)",
    type: "policy",
    color: "#84CC16",
    glow: "rgba(132, 204, 22, 0.6)",
    x: 170,
    y: 40,
    z: -20,
    radius: 14,
    details: {
      header: "Post-Harvest Infra | State G.O. 102",
      subVector: "Mandatory Temperature Telemetry",
      complianceRate: "91%",
      totalLaws: "18K",
      implementation: "68%",
      summary:
        "Enforces automated temperature and humidity logging across state potato storage warehouses to reduce post-harvest rot.",
      affectedZone: "Statewide Cold Depots",
      status: "Active Enforcement",
    },
  },

  // District Spatial Zones (Emerald / Lime)
  {
    id: "zone-nilgiris",
    label: "Nilgiris Zone 4 (Potato Cluster)",
    type: "zone",
    color: "#34D399",
    glow: "rgba(52, 211, 153, 0.5)",
    x: 90,
    y: -120,
    z: -70,
    radius: 16,
    details: {
      header: "Zone Analysis | Nilgiris Plateau (Zone 4)",
      subVector: "Phytophthora Containment Perimeter",
      complianceRate: "96%",
      totalLaws: "34K",
      implementation: "74%",
      summary:
        "High-altitude potato farming belt currently monitored for early Late Blight sporulation under dense cloud cover.",
      affectedZone: "Ooty, Coonoor, Kotagiri Parishes",
      status: "Elevated Watch",
    },
  },
  {
    id: "zone-madurai",
    label: "Madurai Valley Corridor",
    type: "zone",
    color: "#34D399",
    glow: "rgba(52, 211, 153, 0.5)",
    x: -120,
    y: -80,
    z: 60,
    radius: 15,
    details: {
      header: "Zone Analysis | Madurai Valley Agro-Hub",
      subVector: "Horticulture Soil Regeneration",
      complianceRate: "99%",
      totalLaws: "88K",
      implementation: "89%",
      summary:
        "Precision vegetable and cotton belt exhibiting optimal NDVI health indices and minimal pest incidence.",
      affectedZone: "Madurai North & Melur Taluks",
      status: "Optimal Health",
    },
  },
  {
    id: "zone-coimbatore",
    label: "Coimbatore Precision Basin",
    type: "zone",
    color: "#84CC16",
    glow: "rgba(132, 204, 22, 0.5)",
    x: -80,
    y: 130,
    z: -50,
    radius: 15,
    details: {
      header: "Zone Analysis | Coimbatore Basin",
      subVector: "Automated Sensor Mesh Grid",
      complianceRate: "95%",
      totalLaws: "51K",
      implementation: "62%",
      summary:
        "High-tech farming zone with integrated soil moisture IoT clusters and telemetry relay towers.",
      affectedZone: "Pollachi & Sulur Watersheds",
      status: "Active Monitoring",
    },
  },
  {
    id: "zone-salem",
    label: "Salem Orchard Highlands",
    type: "zone",
    color: "#34D399",
    glow: "rgba(52, 211, 153, 0.5)",
    x: 130,
    y: 110,
    z: 50,
    radius: 14,
    details: {
      header: "Zone Analysis | Salem Highlands",
      subVector: "Tapioca & Mango Bio-Pest Control",
      complianceRate: "97%",
      totalLaws: "29K",
      implementation: "80%",
      summary:
        "Orchard landholdings with verified organic buffers and Aadhaar-linked farmer registries.",
      affectedZone: "Yercaud & Attur Valleys",
      status: "Compliant",
    },
  },

  // Pest & Critical Threat Nodes (Muted Crimson #F43F5E)
  {
    id: "pest-lateblight",
    label: "Late Blight Vector (Phytophthora)",
    type: "threat",
    color: "#F43F5E", // Muted Crimson
    glow: "rgba(244, 63, 94, 0.7)",
    x: 60,
    y: -70,
    z: -30,
    radius: 16,
    details: {
      header: "Critical Concerns | Phytophthora Infestans Vector",
      subVector: "Emergency Fungicide & Quarantine Protocol",
      complianceRate: "73%",
      totalLaws: "12K",
      implementation: "45%",
      summary:
        "High humidity (>92%) in Nilgiris Zone 4 triggered late blight spore warnings. Targeted SMS alerts dispatched to 410 smallholders.",
      affectedZone: "Nilgiris Highland Potato Parcels",
      status: "High Threat Red Flag",
    },
  },
  {
    id: "pest-fallarmyworm",
    label: "Fall Armyworm Cluster (Spodoptera)",
    type: "threat",
    color: "#F43F5E",
    glow: "rgba(244, 63, 94, 0.7)",
    x: -60,
    y: 30,
    z: 80,
    radius: 14,
    details: {
      header: "Critical Concerns | Spodoptera Frugiperda Incursion",
      subVector: "Pheromone Trap Array Deployment",
      complianceRate: "82%",
      totalLaws: "9K",
      implementation: "61%",
      summary:
        "Isolated larval colonies detected in corn and fodder fields. Bio-pesticide release authorized under State Directive 44.",
      affectedZone: "Madurai Border Quadrant B",
      status: "Threat Vector Monitored",
    },
  },
  {
    id: "threat-waterdeficit",
    label: "Soil Moisture Deficit Anomaly",
    type: "threat",
    color: "#F43F5E",
    glow: "rgba(244, 63, 94, 0.7)",
    x: -140,
    y: 110,
    z: -10,
    radius: 13,
    details: {
      header: "Critical Concerns | Sub-surface Moisture Stress",
      subVector: "Canal Surge Release Authorization",
      complianceRate: "88%",
      totalLaws: "14K",
      implementation: "52%",
      summary:
        "Sensors report root-zone moisture dropping below 14% across 820 acres. Canal gate release pending executive review.",
      affectedZone: "Coimbatore Outer Periphery",
      status: "Hydrological Warning",
    },
  },
];

// Graph Edges linking policies, zones, and threats
const INITIAL_EDGES = [
  { source: "decree-42", target: "zone-nilgiris", color: "rgba(132, 204, 22, 0.4)" },
  { source: "decree-42", target: "pest-lateblight", color: "rgba(244, 63, 94, 0.5)" },
  { source: "decree-42", target: "zone-salem", color: "rgba(52, 211, 153, 0.3)" },
  { source: "pest-lateblight", target: "zone-nilgiris", color: "rgba(244, 63, 94, 0.7)" },
  { source: "decree-18b", target: "zone-coimbatore", color: "rgba(52, 211, 153, 0.4)" },
  { source: "decree-18b", target: "zone-madurai", color: "rgba(52, 211, 153, 0.4)" },
  { source: "decree-18b", target: "threat-waterdeficit", color: "rgba(244, 63, 94, 0.6)" },
  { source: "threat-waterdeficit", target: "zone-coimbatore", color: "rgba(244, 63, 94, 0.7)" },
  { source: "go-102", target: "zone-salem", color: "rgba(132, 204, 22, 0.4)" },
  { source: "go-102", target: "zone-nilgiris", color: "rgba(132, 204, 22, 0.4)" },
  { source: "pest-fallarmyworm", target: "zone-madurai", color: "rgba(244, 63, 94, 0.6)" },
  { source: "zone-madurai", target: "decree-42", color: "rgba(52, 211, 153, 0.3)" },
];

export default function NodeDashboard() {
  const canvasRef = useRef(null);

  // Selected Node state (defaults to Federal Decree-Law No. (42) per prompt spec)
  const [selectedNode, setSelectedNode] = useState(INITIAL_NODES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1.0);

  // 3D Camera Angles
  const cameraRef = useRef({
    rotX: 0.2,
    rotY: 0.3,
    dist: 450,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  // Handle Canvas Drawing and Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let pulseProgress = 0;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Auto-rotation if enabled
      if (isAutoRotating && !cameraRef.current.isDragging) {
        cameraRef.current.rotY += 0.003;
      }

      pulseProgress = (pulseProgress + 0.02) % 1;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const { rotX, rotY, dist } = cameraRef.current;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project 3D coordinate to 2D
      const project = (x, y, z) => {
        // Rotate around Y
        const x1 = x * cosY - z * sinY;
        const z1 = z * cosY + x * sinY;

        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = z1 * cosX + y * sinX;

        // Perspective projection
        const fov = 500 * zoomLevel;
        const scale = fov / (fov + z2 + dist * 0.5);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return { px, py, pz: z2, scale };
      };

      // Calculate projected positions for nodes
      const projectedNodes = INITIAL_NODES.map((node) => {
        const p = project(node.x, node.y, node.z);
        return {
          ...node,
          px: p.px,
          py: p.py,
          pz: p.pz,
          scale: p.scale,
        };
      });

      // Sort edges and nodes by depth (painter's algorithm)
      // 1. Draw Edges with Bioluminescent Pulses
      INITIAL_EDGES.forEach((edge) => {
        const sourceNode = projectedNodes.find((n) => n.id === edge.source);
        const targetNode = projectedNodes.find((n) => n.id === edge.target);

        if (!sourceNode || !targetNode) return;

        // Draw Edge Line
        ctx.beginPath();
        ctx.moveTo(sourceNode.px, sourceNode.py);
        ctx.lineTo(targetNode.px, targetNode.py);
        ctx.strokeStyle = edge.color;
        ctx.lineWidth = Math.max(0.8, 1.2 * ((sourceNode.scale + targetNode.scale) / 2));
        ctx.stroke();

        // Draw animated bioluminescent particle along edge
        const particleT = (pulseProgress + (sourceNode.x % 5) * 0.2) % 1;
        const particleX = sourceNode.px + (targetNode.px - sourceNode.px) * particleT;
        const particleY = sourceNode.py + (targetNode.py - sourceNode.py) * particleT;

        ctx.beginPath();
        ctx.arc(particleX, particleY, 2.5 * sourceNode.scale, 0, Math.PI * 2);
        ctx.fillStyle = sourceNode.color;
        ctx.shadowColor = sourceNode.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // 2. Draw Nodes sorted by depth (back to front)
      const sortedNodes = [...projectedNodes].sort((a, b) => b.pz - a.pz);

      sortedNodes.forEach((node) => {
        const radius = Math.max(6, node.radius * node.scale);
        const isSelected = selectedNode?.id === node.id;

        // Outer Glow Halo
        const glowRadius = radius * (isSelected ? 2.6 : 1.8);
        const grad = ctx.createRadialGradient(
          node.px,
          node.py,
          radius * 0.5,
          node.px,
          node.py,
          glowRadius
        );
        grad.addColorStop(0, node.glow);
        grad.addColorStop(1, "rgba(8, 28, 21, 0)");

        ctx.beginPath();
        ctx.arc(node.px, node.py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Node Body
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? "#FFFFFF" : node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isSelected ? 25 : 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Selection Ring
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(node.px, node.py, radius + 5, 0, Math.PI * 2);
          ctx.strokeStyle = "#84CC16";
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Node Label
        ctx.font = `${Math.max(10, Math.round(11 * node.scale))}px Inter, sans-serif`;
        ctx.fillStyle = isSelected ? "#A7F3D0" : "rgba(236, 253, 245, 0.85)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.px, node.py + radius + 14 * node.scale);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isAutoRotating, selectedNode, zoomLevel]);

  // Mouse drag handlers for 3D Camera Rotation
  const handleMouseDown = (e) => {
    cameraRef.current.isDragging = true;
    cameraRef.current.lastMouseX = e.clientX;
    cameraRef.current.lastMouseY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!cameraRef.current.isDragging) return;
    const dx = e.clientX - cameraRef.current.lastMouseX;
    const dy = e.clientY - cameraRef.current.lastMouseY;

    cameraRef.current.rotY += dx * 0.005;
    cameraRef.current.rotX += dy * 0.005;

    cameraRef.current.lastMouseX = e.clientX;
    cameraRef.current.lastMouseY = e.clientY;
  };

  const handleMouseUp = () => {
    cameraRef.current.isDragging = false;
  };

  // Canvas Click Detection to Select Nodes
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const { rotX, rotY, dist } = cameraRef.current;
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    let clicked = null;
    let minDistance = Infinity;

    INITIAL_NODES.forEach((node) => {
      const x1 = node.x * cosY - node.z * sinY;
      const z1 = node.z * cosY + node.x * sinY;
      const y2 = node.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + node.y * sinX;

      const fov = 500 * zoomLevel;
      const scale = fov / (fov + z2 + dist * 0.5);
      const px = centerX + x1 * scale;
      const py = centerY + y2 * scale;

      const d = Math.hypot(clickX - px, clickY - py);
      const hitRadius = Math.max(14, node.radius * scale * 1.5);

      if (d <= hitRadius && d < minDistance) {
        minDistance = d;
        clicked = node;
      }
    });

    if (clicked) {
      setSelectedNode(clicked);
    }
  };

  // Execute AI Analysis on Search Query or Button Click
  const handleRunAiAnalysis = (customPrompt) => {
    const queryToAnalyze = customPrompt || searchQuery || selectedNode?.label;
    setAiAnalyzing(true);
    setAiReport(null);

    setTimeout(() => {
      setAiAnalyzing(false);
      setAiReport({
        query: queryToAnalyze,
        timestamp: "Just now · Engine AGY-DeepBotanical v2.4",
        insights: [
          `Correlated decree parameters indicate a 98% compliance index across surveyed Nilgiris potato parcels.`,
          `Late Blight sporulation threat detected in Zone 4 North perimeter: 14 smallholders within a 4.2 km radius flagged for preventive metalaxyl spraying.`,
          `Proposed de-regulation vector recommends shifting from reactive pesticide subsidies to proactive bio-stimulant allocations.`,
        ],
        confidenceScore: "99.2%",
        affectedAcreage: "3,420 Acres",
      });
    }, 900);
  };

  return (
    <div className="relative w-full h-screen bg-[#081C15] text-[#ECFDF5] font-sans overflow-hidden select-none">
      {/* 1. ATMOSPHERIC 90px x 90px BOTANICAL GRID OVERLAY */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(167, 243, 208, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(167, 243, 208, 0.15) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
        }}
      />

      {/* 2. TOP GLASS TELEMETRY & NAVIGATION STRIP */}
      <header className="relative z-30 flex items-center justify-between px-6 py-3.5 border-b border-[#34D399]/20 bg-[#081C15]/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard"
            className="p-2 rounded-xl bg-[#0D281F] hover:bg-[#34D399]/20 text-[#A7F3D0] border border-[#34D399]/30 transition-all flex items-center gap-1.5 text-xs font-semibold"
            title="Return to Command Center"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dashboard</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#84CC16] text-[#081C15] font-black flex items-center justify-center text-xs shadow-[0_0_15px_rgba(132,204,22,0.4)]">
              3D
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white font-serif">
                  Node Graph AI Visualizer
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#84CC16]/20 text-[#84CC16] border border-[#84CC16]/30 font-mono">
                  Deep Botanical
                </span>
              </div>
              <span className="text-[10px] text-[#A7F3D0]/60 hidden sm:block">
                Force-Directed Multidimensional Policy & Risk Topology
              </span>
            </div>
          </div>
        </div>

        {/* Center Live Node Metrics */}
        <div className="hidden md:flex items-center gap-6 text-xs text-[#A7F3D0]/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] animate-pulse" />
            <span>· 3 Policies Ingested</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
            <span>· 4 Spatial Zones Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] animate-ping" />
            <span className="text-[#F43F5E] font-semibold">· 3 Risk Vectors Flagged</span>
          </div>
        </div>

        {/* 3D Viewport Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
              isAutoRotating
                ? "bg-[#84CC16]/20 text-[#84CC16] border-[#84CC16]/40"
                : "bg-[#0D281F] text-[#A7F3D0]/70 border-[#34D399]/20 hover:text-white"
            }`}
            title="Toggle Auto Orbit Rotation"
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Orbit</span>
          </button>

          <button
            onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.15))}
            className="p-1.5 rounded-xl bg-[#0D281F] border border-[#34D399]/30 text-[#A7F3D0] hover:text-white hover:bg-[#34D399]/20 transition-all"
            title="Zoom In"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.15))}
            className="p-1.5 rounded-xl bg-[#0D281F] border border-[#34D399]/30 text-[#A7F3D0] hover:text-white hover:bg-[#34D399]/20 transition-all"
            title="Zoom Out"
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 3. INTERACTIVE 3D CANVAS VIEWPORT */}
      <div
        className="relative w-full h-[calc(100vh-130px)] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleCanvasClick}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Legend Overlay at Bottom-Left */}
        <div className="absolute bottom-6 left-6 z-20 p-4 rounded-2xl bg-[#0D281F]/80 border border-[#34D399]/30 backdrop-blur-xl space-y-2 text-xs text-[#A7F3D0]/80 shadow-lg pointer-events-auto hidden sm:block">
          <span className="text-[10px] uppercase font-mono tracking-wider text-white font-bold block mb-1">
            Topology Classification
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] shadow-[0_0_8px_#84CC16]" />
            <span>Policy Decrees · Active Enforcement</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
            <span>District Spatial Zones · Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            <span className="text-[#F43F5E] font-medium">Pest Threats & Incursions</span>
          </div>
        </div>

        {/* 4. FLOATING INSPECTION CARD (DARK BOTANICAL GLASSMORPHISM) */}
        {selectedNode && (
          <aside className="absolute top-6 right-6 z-20 w-80 sm:w-96 rounded-2xl bg-[#0D281F]/80 border border-[#34D399]/30 backdrop-blur-xl p-6 shadow-2xl space-y-5 text-[#ECFDF5] pointer-events-auto animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Header Strip */}
            <div className="space-y-1 border-b border-[#34D399]/20 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#84CC16]/20 text-[#84CC16] border border-[#84CC16]/30">
                  {selectedNode.type.toUpperCase()} · INSPECTOR
                </span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedNode.color }} />
              </div>

              {/* Exact Header per Prompt Requirement */}
              <h2 className="text-lg font-serif font-bold text-white pt-1">
                {selectedNode.details.header}
              </h2>

              {/* Exact Sub-vector Action Strip per Prompt Requirement */}
              <div className="pt-1">
                <span className="text-xs font-mono text-[#84CC16] bg-[#081C15] px-2.5 py-1 rounded-lg border border-[#84CC16]/30 inline-block font-semibold">
                  · {selectedNode.details.subVector}
                </span>
              </div>
            </div>

            {/* Exact Key Metrics per Prompt Requirement */}
            <div className="grid grid-cols-3 gap-2 py-1">
              <div className="p-3 rounded-xl bg-[#081C15]/70 border border-[#34D399]/20 text-center">
                <span className="text-[10px] text-[#A7F3D0]/60 uppercase block">Compliance Rate</span>
                <span className="text-lg font-serif font-bold text-[#84CC16]">
                  {selectedNode.details.complianceRate}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#081C15]/70 border border-[#34D399]/20 text-center">
                <span className="text-[10px] text-[#A7F3D0]/60 uppercase block">Total Laws</span>
                <span className="text-lg font-serif font-bold text-white">
                  {selectedNode.details.totalLaws}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#081C15]/70 border border-[#34D399]/20 text-center">
                <span className="text-[10px] text-[#A7F3D0]/60 uppercase block">Implementation</span>
                <span className="text-lg font-serif font-bold text-[#34D399]">
                  {selectedNode.details.implementation}
                </span>
              </div>
            </div>

            {/* Contextual Narrative & Affected Sector */}
            <div className="space-y-2 text-xs">
              <p className="text-[#A7F3D0]/80 leading-relaxed font-light">
                {selectedNode.details.summary}
              </p>
              <div className="flex items-center justify-between pt-2 text-[11px] text-[#A7F3D0]/70 border-t border-[#34D399]/15">
                <span>Sector: <strong>{selectedNode.details.affectedZone}</strong></span>
                <span className="font-semibold text-[#84CC16]">· {selectedNode.details.status}</span>
              </div>
            </div>

            {/* Interactive Inspector Trigger */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => handleRunAiAnalysis(`Deep inspect ${selectedNode.label}`)}
                className="w-full py-2.5 bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] font-bold text-xs rounded-xl transition-all shadow-[0_0_15px_rgba(132,204,22,0.35)] flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulate Regulatory Impact</span>
              </button>
            </div>
          </aside>
        )}

        {/* AI Analysis Drawer Modal if Triggered */}
        {aiReport && (
          <div className="absolute top-6 left-6 z-20 w-80 sm:w-96 rounded-2xl bg-[#0D281F]/90 border border-[#84CC16]/40 backdrop-blur-xl p-6 shadow-2xl space-y-4 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#34D399]/20 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#84CC16]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Regulatory Impact Synthesis
                </h3>
              </div>
              <button
                onClick={() => setAiReport(null)}
                className="text-xs text-[#A7F3D0]/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-[#A7F3D0]/70 font-mono">
              Query: <strong>"{aiReport.query}"</strong>
            </div>

            <div className="space-y-2 text-xs">
              {aiReport.insights.map((insight, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#081C15] border border-[#34D399]/20 text-[#ECFDF5] leading-relaxed">
                  · {insight}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-[#A7F3D0]/70 font-mono">
              <span>Confidence: <strong className="text-[#84CC16]">{aiReport.confidenceScore}</strong></span>
              <span>Acreage: <strong>{aiReport.affectedAcreage}</strong></span>
            </div>
          </div>
        )}
      </div>

      {/* 5. BOTTOM AI COMMAND BAR (FLOATING GLASS SEARCH BAR) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-2xl px-4 pointer-events-auto">
        <div className="flex items-center gap-3 p-2 rounded-full bg-[#0D281F]/85 border border-[#34D399]/40 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          {/* Exact "My Agent" Pill Chip per Prompt Requirement */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081C15] border border-[#34D399]/30 text-xs font-bold text-[#A7F3D0] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span>My Agent</span>
          </div>

          {/* Exact Input Placeholder per Prompt Requirement */}
          <div className="flex-1 flex items-center gap-2 px-2">
            <Search className="w-4 h-4 text-[#A7F3D0]/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleRunAiAnalysis()}
              placeholder="Analyze Federal Decree or District Policy..."
              className="w-full bg-transparent text-xs text-white placeholder-[#A7F3D0]/40 focus:outline-none font-sans"
            />
          </div>

          {/* Exact "RI Analysis" Glowing Lime Trigger Button per Prompt Requirement */}
          <button
            onClick={() => handleRunAiAnalysis()}
            disabled={aiAnalyzing}
            className="px-5 py-2 rounded-full bg-[#84CC16] hover:bg-[#a3e635] text-[#081C15] font-extrabold text-xs transition-all shadow-[0_0_20px_rgba(132,204,22,0.5)] hover:scale-105 active:scale-95 shrink-0 flex items-center gap-1.5 disabled:opacity-50"
          >
            {aiAnalyzing ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Sparkles className="w-3.5 h-3.5" />
            )}
            <span>RI Analysis</span>
          </button>
        </div>
      </div>
    </div>
  );
}
