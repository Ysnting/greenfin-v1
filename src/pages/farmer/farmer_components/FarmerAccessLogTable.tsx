import AuthorizationScopes from "./FarmerAuthorizationScopes";

type Log = {
  id: string;
  accessedAt: string;
  institutionName: string;
  userName: string;
  purpose: string;
  dataScopes: string[];
  result: string;
};

type Props = {
  logs: Log[];
};

export default function AccessLogTable({
  logs,
}: Props) {
  return (
    <section className="authorization-card">
      <div className="section-heading">
        <div>
          <span className="card-label">
            AUDIT LOG
          </span>

          <h2>
            調閱紀錄
          </h2>
        </div>

        <span className="audit-description">
          所有資料調閱皆會留下紀錄
        </span>
      </div>

      <div className="access-log-table">
        <div className="access-log-header">
          <span>
            時間
          </span>

          <span>
            調閱機構
          </span>

          <span>
            調閱人員
          </span>

          <span>
            調閱目的
          </span>

          <span>
            資料範圍
          </span>

          <span>
            結果
          </span>
        </div>

        {logs.map((log) => (
          <div
            className="access-log-row"
            key={log.id}
          >
            <span>
              {log.accessedAt}
            </span>

            <strong>
              {log.institutionName}
            </strong>

            <span>
              {log.userName}
            </span>

            <span>
              {log.purpose}
            </span>

            <AuthorizationScopes
              scopes={log.dataScopes}
            />

            <span className="access-success">
              ✓ {log.result}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}