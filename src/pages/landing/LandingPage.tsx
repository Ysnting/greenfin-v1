import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
          <span className="logo-icon">🌱</span>
          <span>GreenFin</span>
        </div>

        <button
          className="header-login-button"
          onClick={() => navigate("/login")}
        >
          登入
        </button>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              🌿 農業 × 綠色金融 × 數位科技
            </div>

            <h1>
              讓每一份
              <br />
              <span>綠色農業努力</span>
              <br />
              都成為金融價值
            </h1>

            <p>
              GreenFin 小農綠色數位融資履歷平台，
              <br />
              將農業經營、綠色行動與數位資料轉化為可信的融資履歷。
            </p>

            <button
              className="start-button"
              onClick={() => navigate("/login")}
            >
              開始使用
              <span>→</span>
            </button>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-icon">🌾</div>

              <h3>Green Farming</h3>

              <p>
                綠色農業資料
                <br />
                數位化紀錄
              </p>
            </div>

            <div className="visual-card card-right">
              <div className="visual-icon">💳</div>

              <h3>Green Finance</h3>

              <p>
                讓金融機構
                <br />
                看見農業價值
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>綠色農業</h3>
            <p>記錄低碳、生態與循環農業行動</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>數位履歷</h3>
            <p>建立完整、可信的農業經營資料</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏦</div>
            <h3>綠色融資</h3>
            <p>協助金融機構理解農業經營價值</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;