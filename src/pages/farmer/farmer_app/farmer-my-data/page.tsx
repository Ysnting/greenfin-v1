import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import FarmerSidebar from "../../farmer_components/FarmerSidebar";
import FarmerTopbar from "../../farmer_components/FarmerTopbar";
import FarmerDocumentTable from "../../farmer_components/FarmerDocumentTable";

import { farmerDocuments } from "../../farmer_data/farmer_mockData";

export default function MyDataPage() {
  const [documents, setDocuments] = useState(farmerDocuments);

  const [searchParams] = useSearchParams();

  const categoryNames: Record<string, string> = {
    identity: "身分與資格",
    land: "土地與作物",
    transaction: "經營與交易",
    equipment: "投入與設備",
    "green-action": "綠色行動與認證",
    loan: "申貸用途",
  };

  const selectedCategory = searchParams.get("category");

  const filteredDocuments = selectedCategory
    ? documents.filter(
        (document) =>
          document.categoryId === selectedCategory
      )
    : documents;

  useEffect(() => {
    const transactionVerified = localStorage.getItem(
      "greenfin_transaction_verified"
    );

    if (transactionVerified === "true") {
      setDocuments((current) =>
        current.map((document) => {
          if (
            document.categoryId === "transaction" &&
            document.status === "expiring"
          ) {
            return {
              ...document,
              status: "verified",
              sourceLevel: "V2",
              sourceName: "小農上傳＋文件驗證",
            };
          }

          return document;
        })
      );
    }
  }, []);

  return (
    <main className="app-shell">
      <FarmerSidebar />

      <section className="main-content">
        <FarmerTopbar />

        <div className="dashboard">
          <section className="welcome">
            <div>
              <p className="eyebrow">
                GREENFIN DATA CENTER
              </p>

              <h1>我的資料</h1>

              <p>
                查看您已提供的資料、驗證狀態、來源等級與有效期限。
              </p>
            </div>

            <Link
              to="/farmer/upload"
              className="primary-button upload-link"
            >
              ＋ 上傳資料
            </Link>
          </section>

          <div className="data-summary-grid">
            <div className="data-summary-card">
              <span>全部資料</span>

              <strong>
                {filteredDocuments.length}
              </strong>

              <small>筆資料</small>
            </div>

            <div className="data-summary-card">
              <span>已驗證</span>

              <strong>
                {
                  filteredDocuments.filter(
                    (doc) => doc.status === "verified"
                  ).length
                }
              </strong>

              <small>可供後續分析使用</small>
            </div>

            <div className="data-summary-card">
              <span>待確認</span>

              <strong>
                {
                  filteredDocuments.filter(
                    (doc) => doc.status === "pending"
                  ).length
                }
              </strong>

              <small>需要人工確認</small>
            </div>

            <div className="data-summary-card">
              <span>即將到期</span>

              <strong>
                {
                  filteredDocuments.filter(
                    (doc) => doc.status === "expiring"
                  ).length
                }
              </strong>

              <small>建議更新資料</small>
            </div>
          </div>

          <div className="disclaimer">
            <span className="disclaimer-icon">
              ⓘ
            </span>

            <div>
              <strong>資料來源提醒</strong>

              <p>
                資料來源等級僅用於呈現資料來源與驗證狀態。
                實際資料可信度仍需依平台正式規則進行判定。
              </p>
            </div>
          </div>

          {selectedCategory && (
            <div className="selected-category-banner">
              <span>目前查看</span>

              <strong>
                {categoryNames[selectedCategory] || "資料"}
              </strong>

              <Link to="/farmer/my-data">
                查看全部資料
              </Link>
            </div>
          )}

          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  DOCUMENTS
                </span>

                <h2>我的資料清單</h2>
              </div>

              <button className="text-button">
                篩選資料
              </button>
            </div>

            <FarmerDocumentTable
              documents={filteredDocuments}
            />
          </section>

          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  DATA GOVERNANCE
                </span>

                <h2>資料治理說明</h2>
              </div>
            </div>

            <div className="governance-grid">
              <div>
                <strong>原始資料</strong>

                <p>
                  平台保留原始文件與來源資訊，
                  供後續查核使用。
                </p>
              </div>

              <div>
                <strong>驗證紀錄</strong>

                <p>
                  資料經過處理或人工確認時，
                  應保留相應的驗證紀錄。
                </p>
              </div>

              <div>
                <strong>到期管理</strong>

                <p>
                  具有有效期限的資料，
                  到期前應提醒小農更新。
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}