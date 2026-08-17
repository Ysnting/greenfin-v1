import AuthorizationScopes from "./FarmerAuthorizationScopes";

type Request = {
  id: string;
  institutionName: string;
  institutionType: string;
  purpose: string;
  requestedAt: string;
  startDate: string;
  endDate: string;
  dataScopes: string[];
  description: string;
};

type Props = {
  request: Request;

  onApprove: () => void;

  onReject: () => void;
};

export default function PendingAuthorizationCard({
  request,
  onApprove,
  onReject,
}: Props) {
  return (
    <section className="authorization-card pending-card">

      <div className="authorization-card-header">

        <div className="institution-avatar">
          銀
        </div>

        <div>

          <span className="card-label">
            AUTHORIZATION REQUEST
          </span>

          <h3>
            {request.institutionName}
          </h3>

          <p>
            {request.institutionType}
          </p>

        </div>

        <span className="pending-badge">
          待確認
        </span>

      </div>


      <div className="authorization-purpose">

        <span>
          授權目的
        </span>

        <strong>
          {request.purpose}
        </strong>

      </div>


      <p className="authorization-description">
        {request.description}
      </p>


      <div className="authorization-section">

        <span className="authorization-label">
          要求查看的資料
        </span>

        <AuthorizationScopes
          scopes={
            request.dataScopes
          }
        />

      </div>


      <div className="authorization-period">

        <div>

          <span>
            授權開始
          </span>

          <strong>
            {request.startDate}
          </strong>

        </div>


        <div>

          <span>
            授權結束
          </span>

          <strong>
            {request.endDate}
          </strong>

        </div>


        <div>

          <span>
            申請時間
          </span>

          <strong>
            {request.requestedAt}
          </strong>

        </div>

      </div>


      <div className="authorization-actions">

        <button
          type="button"
          className="authorization-reject"
          onClick={onReject}
        >
          拒絕
        </button>


        <button
          type="button"
          className="authorization-approve"
          onClick={onApprove}
        >
          同意授權
        </button>

      </div>

    </section>
  );
}