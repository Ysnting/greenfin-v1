
import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerIndicatorsClient from "./FarmerIndicatorsClient";

import { fourIndicators } from "../../farmer_data/farmer_mockData";

export default function IndicatorsPage() {
  return (
    <main className="app-shell">
      {/* 左側導覽列 */}
      <FarmerSidebar />

      {/* 主要內容 */}
      <section className="main-content">
        {/* Topbar */}
        <FarmerTopbar />

        <div className="dashboard">
          {/* =========================
              Header
          ========================== */}
          <section className="welcome">
            <div>
              <p className="eyebrow">
                GREENFIN FARMER PORTAL
              </p>

              <h1>
                分析指標
              </h1>

              <p>
                查看目前資料、經營狀態與綠色行動所呈現的四大分析指標。
              </p>
            </div>
          </section>

          {/* =========================
              Disclaimer
          ========================== */}
          <section className="authorization-notice">
            <div className="notice-icon">
              ⓘ
            </div>

            <div>
              <strong>
                重要提醒
              </strong>

              <p>
                四大分析指標為授信補充資訊，不保證核貸，亦不取代金融機構既有的徵信與授信決策。
              </p>
            </div>
          </section>

          {/* =========================
              Indicators Client
          ========================== */}
          <FarmerIndicatorsClient
            initialIndicators={fourIndicators}
          />
        </div>
      </section>
    </main>
  );
}

