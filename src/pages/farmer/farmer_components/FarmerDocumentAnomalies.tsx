type Anomaly = {
  type: string;
  title: string;
  message: string;
};

type Props = {
  anomalies: Anomaly[];
};

export default function DocumentAnomalies({
  anomalies,
}: Props) {
  if (anomalies.length === 0) {
    return (
      <section className="detail-card">
        <div className="section-heading">
          <div>
            <span className="card-label">
              DATA CHECK
            </span>

            <h2>
              異常與提醒
            </h2>
          </div>
        </div>

        <div className="no-anomaly">
          <span>✓</span>

          <div>
            <strong>
              目前沒有異常
            </strong>

            <p>
              此筆資料目前沒有需要處理的異常項目。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detail-card">
      <div className="section-heading">
        <div>
          <span className="card-label">
            DATA CHECK
          </span>

          <h2>
            異常與提醒
          </h2>
        </div>
      </div>

      <div className="anomaly-list">
        {anomalies.map(
          (anomaly, index) => (
            <div
              className="anomaly-item"
              key={index}
            >
              <span className="anomaly-icon">
                !
              </span>

              <div>
                <strong>
                  {anomaly.title}
                </strong>

                <p>
                  {anomaly.message}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}