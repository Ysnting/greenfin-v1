import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerResumeClient from "./FarmerResumeClient";

import {
  greenResume,
  recentGreenActions,
} from "../../farmer_data/farmer_mockData";

export default function FarmerResumePage() {
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
                綠色履歷
              </h1>

              <p>
                查看您的綠色行動累積、經驗值與歷史紀錄。
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="authorization-notice">
            <div className="notice-icon">
              ⓘ
            </div>

            <div>
              <strong>
                綠色履歷說明
              </strong>

              <p>
                {greenResume.disclaimer}
              </p>
            </div>
          </section>

          {/* Green Resume */}
          <FarmerResumeClient
            initialResume={greenResume}
            initialActions={recentGreenActions}
          />
        </div>
      </section>
    </main>
  );
}