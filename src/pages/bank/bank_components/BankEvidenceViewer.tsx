import type {
  BankIndicatorEvidence,
} from "../bank_types/bank_types";

import BankSourceLevel from "./BankSourceLevel";

interface BankEvidenceViewerProps {
  open: boolean;
  evidence: BankIndicatorEvidence | null;
  onClose: () => void;
  onViewDocument?: () => void;
}

export default function BankEvidenceViewer({
  open,
  evidence,
  onClose,
  onViewDocument,
}: BankEvidenceViewerProps) {
  if (!open || !evidence) {
    return null;
  }

  const isVerified = evidence.status === "verified";
  const isWarning = evidence.status === "warning";
  const isFailed = evidence.status === "failed";

  const statusConfig = isVerified
    ? {
        label: "已驗證",
        icon: "✓",
        className:
          "bg-emerald-50 text-emerald-700 border-emerald-200",
      }
    : isWarning
      ? {
          label: "待確認",
          icon: "⚠",
          className:
            "bg-amber-50 text-amber-700 border-amber-200",
        }
      : {
          label: "驗證失敗",
          icon: "!",
          className:
            "bg-red-50 text-red-700 border-red-200",
        };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <div className="text-xs font-medium text-slate-400">
              原始證據查核
            </div>

            <h2 className="mt-1 text-lg font-bold text-slate-900">
              {evidence.label}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              檢視此項資料的來源、驗證狀態與原始證據。
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

        {/* Status */}
        <div className="border-b border-slate-100 px-6 py-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-xs font-medium text-slate-400">
                查核狀態
              </div>

              <div className="mt-2">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${statusConfig.className}`}
                >
                  <span>{statusConfig.icon}</span>
                  {statusConfig.label}
                </span>
              </div>
            </div>

            <BankSourceLevel
              level={evidence.sourceLevel}
            />
          </div>
        </div>

        {/* Reason */}
        <div className="px-6 py-6">
          <h3 className="text-sm font-bold text-slate-900">
            判定理由
          </h3>

          <div className="mt-3 rounded-xl bg-slate-50 p-4">
            <p className="text-sm leading-6 text-slate-700">
              {evidence.reason}
            </p>
          </div>
        </div>

        {/* Document */}
        <div className="border-t border-slate-100 px-6 py-6">
          <h3 className="text-sm font-bold text-slate-900">
            原始證據
          </h3>

          {evidence.document ? (
            <div className="mt-4 rounded-xl border border-slate-200 p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-800">
                    {evidence.document.name}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {evidence.document.fileName}
                  </div>
                </div>

                <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  {evidence.document.fileType}
                </span>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <InfoItem
                  label="上傳時間"
                  value={evidence.document.uploadedAt}
                />

                <InfoItem
                  label="驗證時間"
                  value={
                    evidence.document.verifiedAt ?? "尚未驗證"
                  }
                />

                <InfoItem
                  label="驗證來源"
                  value={
                    evidence.document.verifiedBy ??
                    "尚未提供"
                  }
                />

                <InfoItem
                  label="文件類型"
                  value={evidence.document.type}
                />
              </div>

              {evidence.document.verificationNote && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <div className="text-xs font-medium text-slate-400">
                    驗證說明
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {evidence.document.verificationNote}
                  </p>
                </div>
              )}

              {evidence.document.anomalies.length > 0 && (
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <div className="text-xs font-medium text-slate-400">
                    異常紀錄
                  </div>

                  <div className="mt-3 space-y-2">
                    {evidence.document.anomalies.map(
                      (anomaly) => (
                        <div
                          key={anomaly.id}
                          className="rounded-lg border border-amber-200 bg-amber-50 p-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-xs font-semibold text-amber-800">
                                {anomaly.type}
                              </div>

                              <p className="mt-1 text-xs leading-5 text-amber-700">
                                {anomaly.description}
                              </p>
                            </div>

                            <span className="shrink-0 text-[11px] text-amber-600">
                              {anomaly.detectedAt}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {onViewDocument && (
                <button
                  type="button"
                  onClick={onViewDocument}
                  className="mt-4 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  查看文件詳細內容 →
                </button>
              )}
            </div>
          ) : (
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <div className="text-sm font-semibold text-slate-700">
                尚無原始文件
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                此項證據目前只有來源等級與判定資訊，
                尚未提供可直接檢視的原始文件。
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-slate-100 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            返回
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

      <div className="mt-1 text-sm font-semibold text-slate-700">
        {value}
      </div>
    </div>
  );
}