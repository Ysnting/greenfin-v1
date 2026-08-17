import DocumentStatus from "./FarmerDocumentStatus";
import SourceLevel from "./FarmerSourceLevel";

type Props = {
  document: {
    documentName: string;
    category: string;
    status: string;
    sourceLevel: string;
    sourceName: string;
  };
};

export default function DocumentDetailHeader({
  document,
}: Props) {
  return (
    <section className="document-detail-header">
      <div className="detail-header-top">
        <div>
          <p className="eyebrow">
            DATA RECORD
          </p>

          <h1>
            {document.documentName}
          </h1>

          <p className="detail-category">
            {document.category}
          </p>
        </div>

        <DocumentStatus
          status={document.status}
        />
      </div>

      <div className="detail-header-meta">
        <div>
          <span>資料來源</span>

          <strong>
            {document.sourceName}
          </strong>
        </div>

        <div>
          <span>來源等級</span>

          <SourceLevel
            level={document.sourceLevel}
          />
        </div>
      </div>
    </section>
  );
}