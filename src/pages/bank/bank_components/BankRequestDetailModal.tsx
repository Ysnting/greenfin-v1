import type { BankRequest } from "../bank_types/bank_request_types";

import {
  getRequestCategoryLabel,
  getRequestPriorityLabel,
  getRequestStatusLabel,
} from "../bank_data/requestUtils";

// 定義附件資料結構
interface RequestAttachment {
  id: string;
  fileName: string;
  fileType: string;
  fileUrl?: string;
}

interface BankRequestDetailModalProps {
  request: BankRequest | null;
  onClose: () => void;
  onSubmit?: () => void;
  onVerify?: () => void;
  onReject?: () => void;
  onCancel?: () => void;
}

const getStatusStyle = (
  status: BankRequest["status"],
): string => {
  switch (status) {
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "submitted":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "verified":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "rejected":
      return "bg-red-50 text-red-700 border-red-200";

    case "cancelled":
      return "bg-slate-50 text-slate-500 border-slate-200";
  }
};

const getPriorityStyle = (
  priority: BankRequest["priority"],
): string => {
  switch (priority) {
    case "high":
      return "bg-red-50 text-red-700 border-red-200";

    case "medium":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "low":
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
};

const formatDate = (
  date?: string | null,
): string => {
  if (!date) {
    return "-";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString(
    "zh-TW",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  );
};

export default function BankRequestDetailModal({
  request,
  onClose,
  onSubmit,
  onVerify,
  onReject,
  onCancel,
}: BankRequestDetailModalProps) {
  if (!request) {
    return null;
  }

  // 將 attachments 斷言為明確型態
  const attachments = (request.attachments as unknown as RequestAttachment[]) ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-emerald-600">
                Request Detail
              </span>

              <span className="text-slate-300">
                |
              </span>

              <span className="text-sm text-slate-500">
                {request.requestId}
              </span>
            </div>

            <h2 className="mt-2 text-xl font-bold text-slate-900">
              {request.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {request.farmerName} ·{" "}
              {request.farmName}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="關閉"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6 px-6 py-6">
          {/* Status */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              補件狀態
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${getStatusStyle(
                  request.status,
                )}`}
              >
                {getRequestStatusLabel(
                  request.status,
                )}
              </span>

              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-medium ${getPriorityStyle(
                  request.priority,
                )}`}
              >
                優先級{" "}
                {getRequestPriorityLabel(
                  request.priority,
                )}
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                {getRequestCategoryLabel(
                  request.category,
                )}
              </span>
            </div>
          </section>

          {/* Basic Information */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              基本資訊
            </h3>

            <div className="mt-3 grid gap-4 rounded-xl bg-slate-50 p-4 md:grid-cols-2">
              <InfoItem
                label="案件 ID"
                value={request.caseId}
              />

              <InfoItem
                label="補件 ID"
                value={request.requestId}
              />

              <InfoItem
                label="建立日期"
                value={formatDate(
                  request.createdAt,
                )}
              />

              <InfoItem
                label="補件期限"
                value={formatDate(
                  request.dueDate,
                )}
              />

              <InfoItem
                label="負責人"
                value={
                  request.assignedTo ?? "-"
                }
              />

              <InfoItem
                label="提交日期"
                value={formatDate(
                  request.submittedAt,
                )}
              />
            </div>
          </section>

          {/* Description */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              補件說明
            </h3>

            <div className="mt-3 rounded-xl border bg-white p-4">
              <p className="text-sm leading-7 text-slate-600">
                {request.description}
              </p>
            </div>
          </section>

          {/* Source */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              查核來源
            </h3>

            <div className="mt-3 rounded-xl border bg-white p-4">
              <div className="grid gap-4 md:grid-cols-3">
                <InfoItem
                  label="Case ID"
                  value={
                    request.source.caseId
                  }
                />

                <InfoItem
                  label="Indicator ID"
                  value={
                    request.source
                      .indicatorId ?? "-"
                  }
                />

                <InfoItem
                  label="Evidence ID"
                  value={
                    request.source
                      .evidenceId ?? "-"
                  }
                />
              </div>
            </div>
          </section>

          {/* Bank Note */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              銀行備註
            </h3>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm leading-6 text-slate-600">
                {request.bankNote ?? "無"}
              </p>
            </div>
          </section>

          {/* Farmer Note */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              小農回覆
            </h3>

            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm leading-6 text-slate-600">
                {request.farmerNote ?? "尚未回覆"}
              </p>
            </div>
          </section>

          {/* Attachments */}
          <section>
            <h3 className="text-sm font-semibold text-slate-900">
              補件文件
            </h3>

            {attachments.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center">
                <p className="text-sm text-slate-500">
                  尚未提交文件
                </p>
              </div>
            ) : (
              <div className="mt-3 space-y-2">
                {attachments.map(
                  (attachment) => (
                    <div
                      key={attachment.id}
                      className="flex items-center justify-between rounded-xl border px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          {attachment.fileName}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          {attachment.fileType}
                        </p>
                      </div>

                      {attachment.fileUrl && (
                        <a
                          href={attachment.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
                        >
                          查看文件
                        </a>
                      )}
                    </div>
                  ),
                )}
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-t bg-slate-50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            關閉
          </button>

          {/* 依狀態顯示可執行的審核動作按鈕 */}
          {request.status === "submitted" && (
            <>
              {onReject && (
                <button
                  type="button"
                  onClick={() => {
                    onReject();
                    onClose();
                  }}
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100"
                >
                  退回補件
                </button>
              )}

              {onVerify && (
                <button
                  type="button"
                  onClick={() => {
                    onVerify();
                    onClose();
                  }}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  審核通過
                </button>
              )}
            </>
          )}

          {request.status === "pending" && (
            <>
              {onCancel && (
                <button
                  type="button"
                  onClick={() => {
                    onCancel();
                    onClose();
                  }}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  取消補件
                </button>
              )}

              {onSubmit && (
                <button
                  type="button"
                  onClick={() => {
                    onSubmit();
                    onClose();
                  }}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  標記已提交
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({
  label,
  value,
}: InfoItemProps) {
  return (
    <div>
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-700">
        {value}
      </p>
    </div>
  );
}