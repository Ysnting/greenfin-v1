

import { useState } from "react";

import FarmerLogin from "@/pages/farmer/farmer_components/FarmerLogin";
import FarmerSidebar from "@/pages/farmer/farmer_components/FarmerSidebar";
import FarmerTopbar from "@/pages/farmer/farmer_components/FarmerTopbar";
import FarmerDisclaimer from "@/pages/farmer/farmer_components/FarmerDisclaimer";
import FarmerExperienceCard from "@/pages/farmer/farmer_components/FarmerExperienceCard";
import FarmerIndicatorCard from "@/pages/farmer/farmer_components/FarmerIndicatorCard";
import FarmerDataHealthCard from "@/pages/farmer/farmer_components/FarmerDataHealthCard";
import FarmerTodoCard from "@/pages/farmer/farmer_components/FarmerTodoCard";

import {
  farmerProfile,
  fourIndicators,
  dataHealth,
  todoList,
} from "@/pages/farmer/farmer_data/farmer_mockData";

export default function FarmerPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [transactionVerified, setTransactionVerified] = useState(false);

  // 登入
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // 登出
  const handleLogout = () => {
    setIsLoggedIn(false);
    setTransactionVerified(false);
  };

  // 尚未登入 → 顯示 Login
  if (!isLoggedIn) {
    return <FarmerLogin onLogin={handleLogin} />;
  }

  // 登入後 → Farmer Dashboard
  return (
    <main className="app-shell">
      {/* 左側導覽列 */}
      <FarmerSidebar />

      {/* 主要內容 */}
      <section className="main-content">
        {/* 上方 Topbar */}
        <FarmerTopbar />

        <div className="dashboard">
          {/* =========================
              Welcome
          ========================== */}
          <section className="welcome">
            <div>
              <p className="eyebrow">
                GREENFIN FARMER PORTAL
              </p>

              <h1>
                早安，{farmerProfile.name} 👋
              </h1>

              <p>
                以下是您目前的綠色履歷、資料狀態與待辦事項。
              </p>
            </div>
          </section>

          {/* =========================
              Disclaimer
          ========================== */}
          <FarmerDisclaimer />

          {/* =========================
              Experience
          ========================== */}
          <FarmerExperienceCard />

          {/* =========================
              四大分析指標
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  資料與經營狀態
                </span>

                <h2>
                  四大分析指標
                </h2>
              </div>

              <a
                href="/farmer/farmer_app/farmer_indicators"
                className="text-button"
              >
                查看歷史趨勢 →
              </a>
            </div>

            <div className="indicator-grid">
              {fourIndicators.map((indicator) => (
                <FarmerIndicatorCard
                  key={indicator.id}
                  name={indicator.name}
                  level={indicator.level}
                  score={indicator.score}
                  description={indicator.description}
                />
              ))}
            </div>
          </section>

          {/* =========================
              Data Health
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  資料品質診斷
                </span>

                <h2>
                  Data Health
                </h2>
              </div>

              <a
                href="/farmer/farmer_app/farmer_health"
                className="text-button"
              >
                查看全部 →
              </a>
            </div>

            <FarmerDataHealthCard
              items={dataHealth.map((item) => {
                if (
                  item.id === "transaction" &&
                  transactionVerified
                ) {
                  return {
                    ...item,
                    status: "green",
                    title: "資料正常",
                    message: "資料已驗證，可正常使用",
                    action: "查看資料",
                  };
                }

                return item;
              })}
            />
          </section>

          {/* =========================
              待辦事項
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  需要您的注意
                </span>

                <h2>
                  待辦事項
                </h2>
              </div>
            </div>

            <div className="todo-grid">
              {todoList.map((todo) => (
                <FarmerTodoCard
                  key={todo.id}
                  type={todo.type}
                  title={todo.title}
                  description={todo.description}
                  action={todo.action}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
