import { farmerProfile } from "../farmer_data/farmer_mockData";

export default function Topbar() {
  return (
    <header className="topbar">
      <div>
        <div className="breadcrumb">
          小農端 / 我的首頁
        </div>
      </div>

      <div className="topbar-actions">
        <button
          className="notification-button"
          aria-label="通知"
        >
          🔔
        </button>

        <div className="profile">
          <div className="avatar small">
            {farmerProfile.name.charAt(0)}
          </div>

          <span>{farmerProfile.name}</span>

          <span>⌄</span>
        </div>
      </div>
    </header>
  );
}