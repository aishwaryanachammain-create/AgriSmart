import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { to: "/node-dashboard", label: "3D Node AI Graph", icon: "hub" },
  { to: "/farmers", label: "Farmer Management", icon: "people" },
  { to: "/reports", label: "Analytics & Reports", icon: "analytics" },
  { to: "/alerts", label: "Alerts & Notifications", icon: "notifications" },
  { to: "/settings", label: "Settings", icon: "settings" },
];

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="sidebar flex flex-col justify-between">
      <div>
        <div className="mb-8 flex flex-col justify-center items-center">
          <Link to="/" title="Go to Landing Page">
            <img
              src="/assets/leaf.svg"
              alt="Government Agriculture Department logo"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
          <h1 className="text-2xl text-[#4a944e] font-family-poppins font-bold mt-2">AgriSmart</h1>
          <span className="text-[10px] text-slate-400 font-mono">TN Gov Agri Portal</span>
        </div>

        <div className="nav-items">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-item ${active ? "bg-[#4a944e] text-white" : ""}`}
              >
                <span className="material-icons mr-3">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100 text-center">
        <Link
          to="/"
          className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold inline-flex items-center gap-1"
        >
          <span>← Portal Landing</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
