

import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerSettingsClient from "./FarmerSettingsClient";



export default function FarmerSettingsPage() {
  return (
    <main className="app-shell">
      <FarmerSidebar />

      <section className="main-content">
        <FarmerTopbar />

        <div className="dashboard">
          {/* Header */}
          <section className="welcome">
            <div>
              <p className="eyebrow">
                GREENFIN FARMER PORTAL
              </p>

              <h1>
                設定
              </h1>

              <p>
                管理您的帳號、通知與資料使用偏好。
              </p>
            </div>
          </section>

          {/* Settings */}
          <FarmerSettingsClient />
        </div>
      </section>
    </main>
  );
}