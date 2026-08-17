import { Link, useParams } from "react-router-dom";

import FarmerSidebar from "@/pages/farmer/farmer_components/FarmerSidebar";
import FarmerTopbar from "@/pages/farmer/farmer_components/FarmerTopbar";

import FarmerDocumentDetailHeader from "@/pages/farmer/farmer_components/FarmerDocumentDetailHeader";
import FarmerOcrResultCard from "@/pages/farmer/farmer_components/FarmerOcrResultCard";
import FarmerVerificationTimeline from "@/pages/farmer/farmer_components/FarmerVerificationTimeline";
import FarmerDocumentAnomalies from "@/pages/farmer/farmer_components/FarmerDocumentAnomalies";

import { documentDetails } from "@/pages/farmer/farmer_data/farmer_mockData";

export default function DocumentDetailPage() {
  const { id } = useParams<{ id: string }>();

  const document = id
    ? documentDetails[
        id as keyof typeof documentDetails
      ]
    : undefined;

  if (!document) {
    return (
      <main className="app-shell">
        <FarmerSidebar />

        <section className="main-content">
          <FarmerTopbar />

          <div className="dashboard">
            <h1>找不到資料</h1>

            <Link to="/farmer/my-data">
              返回我的資料
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app-shell">
      <FarmerSidebar />

      <section className="main-content">
        <FarmerTopbar />

        <div className="dashboard">
          <div className="breadcrumb">
            <Link to="/farmer/my-data">
              我的資料
            </Link>

            <span>/</span>

            <span>資料詳細檢視</span>
          </div>

          <FarmerDocumentDetailHeader
            document={document}
          />

          <div className="detail-info-grid">
            <div className="detail-info-item">
              <span>資料日期</span>

              <strong>
                {document.dataDate}
              </strong>
            </div>

            <div className="detail-info-item">
              <span>上傳時間</span>

              <strong>
                {document.uploadedAt}
              </strong>
            </div>

            <div className="detail-info-item">
              <span>到期日</span>

              <strong>
                {document.expiresAt}
              </strong>
            </div>

            <div className="detail-info-item">
              <span>驗證結果</span>

              <strong>
                {document.verification.result}
              </strong>
            </div>
          </div>

          <FarmerOcrResultCard
            ocr={document.ocr}
          />

          <FarmerVerificationTimeline
            history={document.history}
          />

          <FarmerDocumentAnomalies
            anomalies={document.anomalies}
          />

          <section className="detail-card">
            <div className="section-heading">
              <div>
                <span className="card-label">
                  SOURCE
                </span>

                <h2>資料來源資訊</h2>
              </div>
            </div>

            <div className="source-detail-grid">
              <div>
                <span>來源名稱</span>

                <strong>
                  {document.sourceName}
                </strong>
              </div>

              <div>
                <span>來源等級</span>

                <strong>
                  {document.sourceLevel}
                </strong>
              </div>

              <div>
                <span>文件格式</span>

                <strong>
                  {document.fileType}
                </strong>
              </div>

              <div>
                <span>驗證方式</span>

                <strong>
                  {document.verification.verifiedBy ??
                    "尚未完成"}
                </strong>
              </div>
            </div>
          </section>

          <div className="detail-footer">
            <Link
              to="/farmer/my-data"
              className="secondary-button"
            >
              ← 返回我的資料
            </Link>

            {document.status !== "verified" && (
              <Link
                to="/farmer/upload"
                className="primary-button"
              >
                更新或補件
              </Link>
            )}
          </div>

          <div className="disclaimer">
            <span className="disclaimer-icon">
              ⓘ
            </span>

            <div>
              <strong>
                GreenFin 資料說明
              </strong>

              <p>
                本頁呈現的是資料來源、驗證狀態及處理歷程，
                並不代表金融機構的核貸決策或信用評分。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}