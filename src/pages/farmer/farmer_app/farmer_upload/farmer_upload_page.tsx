import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

type UploadStatus =
  | "waiting"
  | "processing"
  | "review"
  | "verified";

const documentTypes = [
  {
    id: "transaction",
    name: "經營與交易",
    description: "產銷、出貨、交易紀錄",
  },
  {
    id: "land",
    name: "土地與作物",
    description: "土地、作物與耕作資料",
  },
  {
    id: "green",
    name: "綠色行動與認證",
    description: "低碳、友善耕作與認證",
  },
  {
    id: "equipment",
    name: "投入與設備",
    description: "水電、農機與設備",
  },
  {
    id: "loan",
    name: "申貸用途",
    description: "資金需求與報價單",
  },
];

const uploadConfig: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  transaction: {
    title: "更新經營與交易資料",
    description: "請上傳最新的產銷、交易或出貨證明。",
  },

  equipment: {
    title: "新增投入與設備資料",
    description: "請提供水電、設備或投入相關資料。",
  },

  loan: {
    title: "補件：申貸用途",
    description: "請提供資金用途說明及最新報價單。",
  },

  land: {
    title: "更新土地與作物資料",
    description: "請上傳土地權狀、租約或耕作相關證明。",
  },

  green: {
    title: "更新綠色行動與認證",
    description: "請提供低碳、友善耕作或相關綠色認證資料。",
  },
};

export default function UploadPage() {
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");

  const [selectedType, setSelectedType] =
    useState<string>("transaction");

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [status, setStatus] =
    useState<UploadStatus>("waiting");

  /**
   * 當 URL 的 ?type=xxx 改變時，
   * 自動更新目前選擇的資料類型。
   *
   * 例如：
   * /farmer/upload?type=transaction
   * /farmer/upload?type=loan-purpose
   */
  useEffect(() => {
    if (!typeParam) {
      return;
    }

    // loan-purpose → loan
    const mappedType =
      typeParam === "loan-purpose"
        ? "loan"
        : typeParam;

    const isValidType = documentTypes.some(
      (type) => type.id === mappedType
    );

    if (isValidType) {
      setSelectedType(mappedType);
    }
  }, [typeParam]);

  /**
   * 取得目前資料類型的設定。
   *
   * 優先使用 URL 的 type，
   * 如果沒有則使用 selectedType。
   */
  const configType =
    typeParam === "loan-purpose"
      ? "loan"
      : typeParam || selectedType;

  const currentConfig =
    uploadConfig[configType] || {
      title: "上傳資料",
      description:
        "補充您的農業經營與綠色行動資料，建立更完整的數位履歷。",
    };

  /**
   * 使用者選擇檔案
   */
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);
    setStatus("waiting");
  };

  /**
   * 開始上傳
   *
   * Demo：
   * waiting → processing → review
   */
  const handleUpload = () => {
    if (!selectedFile) {
      return;
    }

    setStatus("processing");

    setTimeout(() => {
      setStatus("review");
    }, 2500);
  };

  /**
   * 確認 OCR 結果
   */
  const handleVerify = () => {
    setStatus("verified");

    localStorage.setItem(
      `greenfin_${selectedType}_verified`,
      "true"
    );
  };

  return (
    <main className="app-shell">
      {/* =========================
          Sidebar
      ========================== */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">
            G
          </div>

          <div>
            <div className="logo-title">
              GreenFin
            </div>

            <div className="logo-subtitle">
              小農綠色數位融資履歷
            </div>
          </div>
        </div>

        <nav className="navigation">
          <Link
            className="nav-item"
            to="/farmer/dashboard"
          >
            <span>⌂</span>
            我的首頁
          </Link>

          <Link
            className="nav-item"
            to="/farmer/resume"
          >
            <span>🌱</span>
            綠色履歷
          </Link>

          <Link
            className="nav-item"
            to="/farmer/indicators"
          >
            <span>◈</span>
            分析指標
          </Link>

          <Link
            className="nav-item"
            to="/farmer/health"
          >
            <span>◉</span>
            Data Health
          </Link>

          <Link
            className="nav-item"
            to="/farmer/my-data"
          >
            <span>▣</span>
            我的資料
          </Link>

          <Link
            className="nav-item active"
            to="/farmer/upload"
          >
            <span>↑</span>
            上傳資料
          </Link>

          <Link
            className="nav-item"
            to="/farmer/authorization"
          >
            <span>♧</span>
            授權中心
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <Link
            className="nav-item"
            to="/farmer/settings"
          >
            <span>⚙</span>
            設定
          </Link>

          <div className="farmer-mini">
            <div className="avatar">
              陳
            </div>

            <div>
              <div className="farmer-name">
                陳小農
              </div>

              <div className="farmer-farm">
                快樂農場
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================
          Main Content
      ========================== */}
      <section className="main-content">
        {/* Topbar */}
        <header className="topbar">
          <div>
            <div className="breadcrumb">
              小農端 / 上傳資料
            </div>
          </div>

          <div className="topbar-actions">
            <button
              type="button"
              className="notification-button"
            >
              🔔
            </button>

            <div className="profile">
              <div className="avatar small">
                陳
              </div>

              <span>
                陳小農
              </span>

              <span>
                ⌄
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        <div className="dashboard">
          {/* =========================
              Welcome
          ========================== */}
          <section className="welcome">
            <div>
              <p className="eyebrow">
                GREENFIN DATA CENTER
              </p>

              <h1>
                {currentConfig.title}
              </h1>

              <p>
                {currentConfig.description}
              </p>
            </div>
          </section>

          {/* =========================
              Disclaimer
          ========================== */}
          <div className="disclaimer">
            <span className="disclaimer-icon">
              ⓘ
            </span>

            <div>
              <strong>
                資料使用提醒
              </strong>

              <p>
                上傳的資料將依您授權的範圍進行處理，
                並用於建立授信補充資訊。
              </p>
            </div>
          </div>

          {/* =========================
              STEP 01
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  STEP 01
                </span>

                <h2>
                  選擇資料類型
                </h2>
              </div>
            </div>

            <div className="upload-type-grid">
              {documentTypes.map((type) => (
                <button
                  type="button"
                  key={type.id}
                  className={`upload-type-card ${
                    selectedType === type.id
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedType(type.id)
                  }
                >
                  <div className="upload-type-icon">
                    {type.id === "transaction" &&
                      "▣"}

                    {type.id === "land" &&
                      "⌂"}

                    {type.id === "green" &&
                      "🌱"}

                    {type.id === "equipment" &&
                      "⚙"}

                    {type.id === "loan" &&
                      "◇"}
                  </div>

                  <strong>
                    {type.name}
                  </strong>

                  <span>
                    {type.description}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* =========================
              STEP 02
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  STEP 02
                </span>

                <h2>
                  選擇檔案
                </h2>
              </div>
            </div>

            <div className="upload-box">
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.xlsx,.xls,.csv"
                onChange={handleFileChange}
              />

              <label htmlFor="file-upload">
                <div className="upload-icon">
                  ↑
                </div>

                <strong>
                  點擊選擇檔案
                </strong>

                <span>
                  支援 PDF、JPG、PNG、Excel、CSV
                </span>
              </label>

              {selectedFile && (
                <div className="selected-file">
                  <span>
                    📄
                  </span>

                  <div>
                    <strong>
                      {selectedFile.name}
                    </strong>

                    <small>
                      {(
                        selectedFile.size /
                        1024
                      ).toFixed(1)}{" "}
                      KB
                    </small>
                  </div>
                </div>
              )}

              {selectedFile &&
                status === "waiting" && (
                  <button
                    type="button"
                    className="primary-button upload-start-button"
                    onClick={handleUpload}
                  >
                    開始上傳
                  </button>
                )}
            </div>
          </section>

          {/* =========================
              STEP 03
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  STEP 03
                </span>

                <h2>
                  資料處理
                </h2>
              </div>
            </div>

            <div className="processing-card">
              {/* Step 1 */}
              <div
                className={`processing-step ${
                  status !== "waiting"
                    ? "done"
                    : "current"
                }`}
              >
                <span>
                  1
                </span>

                <div>
                  <strong>
                    文件接收
                  </strong>

                  <p>
                    確認檔案格式與基本資訊
                  </p>
                </div>
              </div>

              <div
                className={`processing-line ${
                  status !== "waiting"
                    ? "done"
                    : ""
                }`}
              />

              {/* Step 2 */}
              <div
                className={`processing-step ${
                  status === "processing" ||
                  status === "review" ||
                  status === "verified"
                    ? "done"
                    : ""
                }`}
              >
                <span>
                  2
                </span>

                <div>
                  <strong>
                    OCR / 資料擷取
                  </strong>

                  <p>
                    擷取文件中的結構化資料
                  </p>
                </div>
              </div>

              <div
                className={`processing-line ${
                  status === "review" ||
                  status === "verified"
                    ? "done"
                    : ""
                }`}
              />

              {/* Step 3 */}
              <div
                className={`processing-step ${
                  status === "review" ||
                  status === "verified"
                    ? "done"
                    : ""
                }`}
              >
                <span>
                  3
                </span>

                <div>
                  <strong>
                    人工確認
                  </strong>

                  <p>
                    確認 OCR 擷取結果
                  </p>
                </div>
              </div>

              <div
                className={`processing-line ${
                  status === "verified"
                    ? "done"
                    : ""
                }`}
              />

              {/* Step 4 */}
              <div
                className={`processing-step ${
                  status === "verified"
                    ? "done"
                    : ""
                }`}
              >
                <span>
                  4
                </span>

                <div>
                  <strong>
                    驗證完成
                  </strong>

                  <p>
                    建立可使用的資料紀錄
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =========================
              Processing
          ========================== */}
          {status === "processing" && (
            <div className="upload-status processing">
              <div className="status-spinner" />

              <div>
                <strong>
                  正在處理資料...
                </strong>

                <p>
                  Demo 系統正在模擬 OCR
                  與資料標準化流程。
                </p>
              </div>
            </div>
          )}

          {/* =========================
              OCR Review
          ========================== */}
          {status === "review" && (
            <div className="review-card">
              <div className="review-header">
                <div>
                  <span className="card-label">
                    OCR RESULT
                  </span>

                  <h2>
                    請確認擷取結果
                  </h2>
                </div>

                <span className="review-badge">
                  待人工確認
                </span>
              </div>

              <div className="review-grid">
                <div>
                  <span>
                    文件類型
                  </span>

                  <strong>
                    {
                      documentTypes.find(
                        (type) =>
                          type.id ===
                          selectedType
                      )?.name
                    }
                  </strong>
                </div>

                <div>
                  <span>
                    文件日期
                  </span>

                  <strong>
                    2026-08-01
                  </strong>
                </div>

                <div>
                  <span>
                    資料來源
                  </span>

                  <strong>
                    小農上傳
                  </strong>
                </div>

                <div>
                  <span>
                    OCR 信心程度
                  </span>

                  <strong>
                    94%
                  </strong>
                </div>
              </div>

              <div className="review-notice">
                Demo：實際系統應保留人工修正軌跡，
                並記錄原始資料與修正後資料。
              </div>

              <div className="review-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() =>
                    setStatus("waiting")
                  }
                >
                  返回修改
                </button>

                <button
                  type="button"
                  className="primary-button"
                  onClick={handleVerify}
                >
                  確認資料
                </button>
              </div>
            </div>
          )}

          {/* =========================
              Verified
          ========================== */}
          {status === "verified" && (
            <div className="upload-status verified">
              <div className="success-icon">
                ✓
              </div>

              <div>
                <strong>
                  資料驗證完成
                </strong>

                <p>
                  此筆資料已建立驗證紀錄，
                  Demo 中將其視為可供後續指標計算使用。
                </p>
              </div>
            </div>
          )}

          {/* =========================
              Data Quality
          ========================== */}
          <section>
            <div className="section-heading">
              <div>
                <span className="card-label">
                  DATA QUALITY
                </span>

                <h2>
                  上傳注意事項
                </h2>
              </div>
            </div>

            <div className="notice-grid">
              <div className="notice-item">
                <strong>
                  ① 資料來源
                </strong>

                <p>
                  優先提供具有可驗證來源、
                  日期或發證資訊的資料。
                </p>
              </div>

              <div className="notice-item">
                <strong>
                  ② 文件品質
                </strong>

                <p>
                  請確保文件清晰完整，
                  避免 OCR 無法辨識。
                </p>
              </div>

              <div className="notice-item">
                <strong>
                  ③ 資料一致性
                </strong>

                <p>
                  不同來源的資料若有矛盾，
                  系統可能標記為異常。
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}