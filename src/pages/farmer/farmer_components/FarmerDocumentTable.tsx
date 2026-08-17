import { Link } from "react-router-dom";
import FarmerDocumentStatus from "./FarmerDocumentStatus";
import FarmerSourceLevel from "./FarmerSourceLevel";

type Document = {
  id: string;
  category: string;
  name: string;
  date: string;
  uploadedAt: string;
  status: string;
  sourceLevel: string;
  sourceName: string;
  expiresAt: string;
  fileType: string;
};

type DocumentTableProps = {
  documents: Document[];
};

export default function FarmerDocumentTable({
  documents,
}: DocumentTableProps) {
  return (
    <div className="document-table-wrapper">
      <table className="document-table">
        <thead>
          <tr>
            <th>資料類型</th>
            <th>文件名稱</th>
            <th>資料日期</th>
            <th>狀態</th>
            <th>來源等級</th>
            <th>到期日</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              {/* 資料類型 */}
              <td>
                <span className="document-category">
                  {document.category}
                </span>
              </td>

              {/* 文件名稱 */}
              <td>
                <div className="document-name">
                  <span className="document-file-icon">
                    📄
                  </span>

                  <div>
                    <strong>
                      {document.name}
                    </strong>

                    <small>
                      {document.fileType}
                      {" · "}
                      上傳於{" "}
                      {document.uploadedAt}
                    </small>
                  </div>
                </div>
              </td>

              {/* 資料日期 */}
              <td>
                {document.date}
              </td>

              {/* 文件狀態 */}
              <td>
                <FarmerDocumentStatus
                  status={document.status}
                />
              </td>

              {/* 來源等級 */}
              <td>
                <FarmerSourceLevel
                  level={document.sourceLevel}
                />
              </td>

              {/* 到期日 */}
              <td>
                <span
                  className={
                    document.status === "expiring"
                      ? "expiry-warning"
                      : ""
                  }
                >
                  {document.expiresAt}
                </span>
              </td>

              {/* 查看文件 */}
              <td>
                <Link
                  to={`/farmer/my-data/${document.id}`}
                  className="document-action"
                >
                  查看
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}