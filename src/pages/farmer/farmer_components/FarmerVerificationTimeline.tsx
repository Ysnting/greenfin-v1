type HistoryItem = {
  time: string;
  title: string;
  description: string;
  status: string;
};

type Props = {
  history: HistoryItem[];
};

export default function VerificationTimeline({
  history,
}: Props) {
  return (
    <section className="detail-card">
      <div className="section-heading">
        <div>
          <span className="card-label">
            AUDIT TRAIL
          </span>

          <h2>
            驗證歷程
          </h2>
        </div>
      </div>

      <div className="verification-timeline">
        {history.map(
          (item, index) => (
            <div
              className="timeline-item"
              key={`${item.time}-${index}`}
            >
              <div
                className={`timeline-dot ${item.status}`}
              />

              <div className="timeline-content">
                <div className="timeline-top">
                  <strong>
                    {item.title}
                  </strong>

                  <span>
                    {item.time}
                  </span>
                </div>

                <p>
                  {item.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}