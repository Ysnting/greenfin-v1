import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";

import FarmerAuthorizationClient from "./FarmerAuthorizationClient";

import { authorizationData } from "../../farmer_data/farmer_mockData";

export default function FarmerAuthorizationPage() {
  return (
    <main className="app-shell">
      <FarmerSidebar />

      <section className="main-content">
        <FarmerTopbar />

        <div className="dashboard">
          <header className="page-header">
            <div>
              <span className="eyebrow">DATA GOVERNANCE</span>

              <h1>授權中心</h1>

              <p>
                由您決定哪些金融機構可以查看哪些資料。
              </p>
            </div>
          </header>

          <section className="authorization-notice">
            <div className="notice-icon">🔐</div>

            <div>
              <strong>您擁有資料授權控制權</strong>

              <p>
                金融機構只能查看您明確授權的資料，
                並且只能在指定期間及指定目的下使用。
                所有資料調閱都會留下稽核紀錄。
              </p>
            </div>
          </section>

          <FarmerAuthorizationClient
            initialPendingRequests={authorizationData.pendingRequests}
            initialActiveAuthorizations={
              authorizationData.activeAuthorizations
            }
            initialAccessLogs={authorizationData.accessLogs}
          />
        </div>
      </section>
    </main>
  );
}