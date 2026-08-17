import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerHealthClient from "../../farmer_app/farmer_health/FarmerHealthClient";
import { dataHealth } from "../../farmer_data/farmer_mockData";

export default function FarmerHealthPage() {
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

              <h1>Data Health</h1>

              <p>
                查看目前各項資料的完整性、驗證狀態與可使用程度。
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="authorization-notice">
            <div className="notice-icon">
              ⓘ
            </div>

            <div>
              <strong>資料品質說明</strong>

              <p>
                Data Health 用於呈現目前資料狀態，
                不代表金融機構的信用評分或核貸結果。
              </p>
            </div>
          </section>

          {/* Data Health */}
          <FarmerHealthClient initialHealthItems={dataHealth} />
        </div>
      </section>
    </main>
  );
}