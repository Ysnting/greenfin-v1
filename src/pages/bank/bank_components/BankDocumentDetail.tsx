import type {
  BankDocumentDetail as BankDocumentDetailType,
} from "../bank_types/bank_types";

import BankSourceLevel from "./BankSourceLevel";

interface BankDocumentDetailProps {
  open: boolean;
  document: BankDocumentDetailType | null;
  sourceLevel?: "V0" | "V1" | "V2" | "V3";
  onClose: () => void;
}

export default function BankDocumentDetail({
  open,
  document,
  sourceLevel,
  onClose,
}: BankDocumentDetailProps) {
  if (!open || !document) {
    return null;
  }

  const hasAnomalies = document.anomalies.length > 0;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <div className="text-xs font-medium text-slate-400">
              文件詳細資訊
            </div>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {document.name}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {document.fileName}
            </p>
          </div>
          

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {/* Source Level */}
        {sourceLevel && (
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="text-xs font-medium text-slate-400">
              資料來源等級
            </div>

            <div className="mt-3">
              <BankSourceLevel level={sourceLevel} />
            </div>
          </div>
        )}

        {/* Basic Information */}
        <div className="px-6 py-6">
          <h3 className="text-sm font-bold text-slate-900">
            文件資訊
          </h3>

          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <InfoItem
              label="文件名稱"
              value={document.name}
            />

            <InfoItem
              label="檔案名稱"
              value={document.fileName}
            />

            <InfoItem
              label="文件類型"
              value={document.type}
            />

            <InfoItem
              label="檔案格式"
              value={document.fileType}
            />
          </div>
        </div>

        {/* Verification Timeline */}
        <div className="border-t border-slate-100 px-6 py-6">
          <h3 className="text-sm font-bold text-slate-900">
            查核紀錄
          </h3>

          <div className="mt-5 space-y-5">
            <TimelineItem
              title="文件上傳"
              value={document.uploadedAt}
              description="原始文件進入 GreenFin 系統"
            />

            <TimelineItem
              title="文件驗證"
              value={document.verifiedAt ?? "尚未驗證"}
              description={
                document.verifiedBy
                  ? `驗證來源：${document.verifiedBy}`
                  : "目前尚未完成驗證"
              }
              muted={!document.verifiedAt}
            />
          </div>
        </div>

        {/* Verification Note */}
        {document.verificationNote && (
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-6">
            <h3 className="text-sm font-bold text-slate-900">
              驗證結果
            </h3>

            <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm leading-6 text-slate-700">
                {document.verificationNote}
              </p>
            </div>
          </div>
        )}

        {/* Anomalies */}
        <div className="border-t border-slate-100 px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-bold text-slate-900">
              異常紀錄
            </h3>

            <span
              className={
                hasAnomalies
                  ? "rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700"
                  : "rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"
              }
            >
              {hasAnomalies
                ? `${document.anomalies.length} 筆異常`
                : "無異常"}
            </span>
          </div>

          {hasAnomalies ? (
            <div className="mt-4 space-y-3">
              {document.anomalies.map((anomaly) => (
                <div
                  key={anomaly.id}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-amber-900">
                        {anomaly.type}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-amber-800">
                        {anomaly.description}
                      </p>
                    </div>

                    <span className="shrink-0 rounded-full bg-white/70 px-2 py-1 text-[11px] font-semibold text-amber-700">
                      {anomaly.severity}
                    </span>
                  </div>

                  <div className="mt-3 text-xs text-amber-700">
                    偵測時間：{anomaly.detectedAt}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">
                  ✓
                </span>

                <span className="text-sm font-semibold text-emerald-800">
                  目前沒有異常紀錄
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-emerald-700">
                此文件目前沒有被系統記錄為異常。
              </p>
            </div>
          )}
        </div>

        {/* Document Preview */}
        <div className="border-t border-slate-100 px-6 py-6">
          <h3 className="text-sm font-bold text-slate-900">
            原始文件
          </h3>

          <div className="mt-4 flex min-h-[180px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
            <div>
              <div className="text-3xl">
                📄
              </div>

              <div className="mt-3 text-sm font-semibold text-slate-700">
                {document.fileName}
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Demo 階段暫以文件資訊取代實際檔案預覽。
              </p>

              {document.documentUrl && (
                <a
                  href={document.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  開啟原始文件
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            返回證據查核
          </button>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs text-slate-400">
        {label}
      </div>

      <div className="mt-1 break-words text-sm font-semibold text-slate-700">
        {value}
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  value,
  description,
  muted = false,
}: {
  title: string;
  value: string;
  description: string;
  muted?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={
            muted
              ? "h-3 w-3 rounded-full bg-slate-300"
              : "h-3 w-3 rounded-full bg-slate-800"
          }
        />

        <div className="mt-2 h-full w-px bg-slate-200" />
      </div>

      <div className="pb-2">
        <div className="text-sm font-semibold text-slate-800">
          {title}
        </div>

        <div className="mt-1 text-sm font-medium text-slate-600">
          {value}
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}