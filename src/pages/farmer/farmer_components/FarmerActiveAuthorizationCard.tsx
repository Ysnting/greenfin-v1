import AuthorizationStatus from "./FarmerAuthorizationStatus";
import AuthorizationScopes from "./FarmerAuthorizationScopes";

type Authorization = {
  id: string;
  institutionName: string;
  institutionType: string;
  purpose: string;
  status: string;
  startDate: string;
  endDate: string;
  dataScopes: string[];
  createdAt: string;
  lastAccessedAt: string;
};

type Props = {
  authorization: Authorization;
  onRevoke: () => void;
};

export default function ActiveAuthorizationCard({
  authorization,
  onRevoke,
}: Props) {
  return (
    <section className="authorization-card">
      <div className="authorization-card-header">
        <div className="institution-avatar">
          銀
        </div>

        <div>
          <span className="card-label">
            FINANCIAL INSTITUTION
          </span>

          <h3>
            {authorization.institutionName}
          </h3>

          <p>
            {authorization.institutionType}
          </p>
        </div>

        <AuthorizationStatus
          status={authorization.status}
        />
      </div>

      <div className="authorization-purpose">
        <span>
          授權目的
        </span>

        <strong>
          {authorization.purpose}
        </strong>
      </div>

      <div className="authorization-section">
        <span className="authorization-label">
          已授權資料範圍
        </span>

        <AuthorizationScopes
          scopes={
            authorization.dataScopes
          }
        />
      </div>

      <div className="authorization-period">
        <div>
          <span>
            授權開始
          </span>

          <strong>
            {authorization.startDate}
          </strong>
        </div>

        <div>
          <span>
            授權到期
          </span>

          <strong>
            {authorization.endDate}
          </strong>
        </div>

        <div>
          <span>
            最近調閱
          </span>

          <strong>
            {authorization.lastAccessedAt}
          </strong>
        </div>
      </div>

      <div className="authorization-footer">
        <span>
          授權建立於{" "}
          {authorization.createdAt}
        </span>

        <button
          type="button"
          className="revoke-button"
          onClick={onRevoke}
          disabled={authorization.status !== "active"}
        >
          {authorization.status === "active"
    ? "撤回授權"
    : "已撤回"}
        </button>
      </div>
    </section>
  );
}