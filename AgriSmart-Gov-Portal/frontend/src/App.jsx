import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import NodeDashboard from "./pages/NodeDashboard";
import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmers";
import FarmerProfile from "./pages/FarmerProfile";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Phase A: APC-Style Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Phase B: 3D Node Graph AI Dashboard */}
        <Route path="/node-dashboard" element={<NodeDashboard />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Main Administrative Portal Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/farmers/:id" element={<FarmerProfile />} />
          <Route path="/farmer-profile" element={<FarmerProfile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
