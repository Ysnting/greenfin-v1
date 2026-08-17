import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerDisclaimer from "@/pages/farmer/farmer_components/FarmerDisclaimer";
import FarmerExperienceCard from "@/pages/farmer/farmer_components/FarmerExperienceCard";
import FarmerIndicatorCard from "@/pages/farmer/farmer_components/FarmerIndicatorCard";
import FarmerDataHealthCard from "@/pages/farmer/farmer_components/FarmerDataHealthCard";
import FarmerTodoCard from "@/pages/farmer/farmer_components/FarmerTodoCard";
import FarmerHealthClient from "../../farmer_app/farmer_health/FarmerHealthClient";

import {
  farmerProfile,
  fourIndicators,
  dataHealth,
  todoList,
} from "../../farmer_data/farmer_mockData";


export default function FarmerHome() {
  return (
    <main className="app-shell">
      <FarmerSidebar />

      <section className="main-content">
        <FarmerTopbar />

        <div className="dashboard">
          {/* Header */}
          <section className="welcome">
            <div>
              <p className="eyebrow">GREENFIN FARMER PORTAL</p>

              <h1>早安，{farmerProfile.name} 👋</h1>

              <p>
                 以下是您目前的綠色履歷、資料狀態與待辦事項。
              </p>
            </div>
          </section>
            {/* Disclaimer */}
          <FarmerDisclaimer />

          {/* Experience */}
          <FarmerExperienceCard />

           {/* 四大分析指標 */}
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

              <Link
                to="/farmer/indicators"
                className="text-button"
              >
                查看歷史趨勢 →
              </Link>
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
          
          
        
          {/* 待辦事項 */}
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

