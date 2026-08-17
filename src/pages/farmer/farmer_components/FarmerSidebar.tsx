import { NavLink } from "react-router-dom";
import { farmerProfile } from "../farmer_data/farmer_mockData";

// 定義 Props 型態
type FarmerSidebarProps = {
  onLogout?: () => void;
};

export default function FarmerSidebar({
  onLogout,
}: FarmerSidebarProps) {
  return (
    <aside className="sidebar">
      {/* GreenFin Logo */}
      <div className="logo">
        <div className="logo-mark">G</div>

        <div>
          <div className="logo-title">GreenFin</div>

          <div className="logo-subtitle">
            小農綠色數位融資履歷
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <NavLink
          to="/farmer/dashboard"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⌂</span>
          我的首頁
        </NavLink>

        <NavLink
          to="/farmer/resume"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>🌱</span>
          綠色履歷
        </NavLink>

        <NavLink
          to="/farmer/indicators"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◈</span>
          分析指標
        </NavLink>

        <NavLink
          to="/farmer/health"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>◉</span>
          Data Health
        </NavLink>

        <NavLink
          to="/farmer/my-data"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>▣</span>
          我的資料
        </NavLink>

        <NavLink
          to="/farmer/upload"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>↑</span>
          上傳資料
        </NavLink>

        <NavLink
          to="/farmer/authorization"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>♧</span>
          授權中心
        </NavLink>
      </nav>

      {/* Bottom Area */}
      <div className="sidebar-bottom">
        <NavLink
          to="/farmer/settings"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active" : ""}`
          }
        >
          <span>⚙</span>
          設定
        </NavLink>

        

        {/* Farmer Mini Profile */}
        <div className="farmer-mini">
          <div className="avatar">
            {farmerProfile.name.charAt(0)}
          </div>

          <div>
            <div className="farmer-name">
              {farmerProfile.name}
            </div>

            <div className="farmer-farm">
              {farmerProfile.farmName}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}