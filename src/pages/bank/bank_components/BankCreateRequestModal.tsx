import { useState } from "react";

import type {
  BankRequest,
  RequestCategory,
  RequestPriority,
} from "../bank_types/bank_request_types";

interface BankCreateRequestModalProps {
  isOpen: boolean;
  caseId: string;
  farmerName: string;
  farmName: string;
  indicatorId?: string | null;
  evidenceId?: string | null;
  onClose: () => void;
  onCreate: (request: BankRequest) => void;
}

const categoryOptions: Array<{
  value: RequestCategory;
  label: string;
}> = [
  {
    value: "data_health",
    label: "Data Health",
  },
  {
    value: "indicator",
    label: "分析指標",
  },
  {
    value: "authorization",
    label: "授權",
  },
  {
    value: "evidence",
    label: "證據",
  },
  {
    value: "other",
    label: "其他",
  },
];

const priorityOptions: Array<{
  value: RequestPriority;
  label: string;
}> = [
  {
    value: "high",
    label: "高",
  },
  {
    value: "medium",
    label: "中",
  },
  {
    value: "low",
    label: "低",
  },
];

const generateRequestId = (): string => {
  return `REQ-${Date.now()}`;
};

export default function BankCreateRequestModal({
  isOpen,
  caseId,
  farmerName,
  farmName,
  indicatorId,
  evidenceId,
  onClose,
  onCreate,
}: BankCreateRequestModalProps) {
  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState<RequestCategory>("evidence");

  const [priority, setPriority] =
    useState<RequestPriority>("medium");

  const [dueDate, setDueDate] =
    useState("");

  const [bankNote, setBankNote] =
    useState("");

  if (!isOpen) {
    return null;
  }

  const handleCreate = () => {
    if (!title.trim()) {
      return;
    }

    if (!description.trim()) {
      return;
    }

    if (!dueDate) {
      return;
    }

    const newRequest: BankRequest = {
      requestId: generateRequestId(),

      caseId,

      farmerName,

      farmName,

      title: title.trim(),

      description: description.trim(),

      category,

      priority,

      status: "pending",

      source: {
        caseId,
        indicatorId:
          indicatorId ?? null,
        evidenceId:
          evidenceId ?? null,
      },

      createdAt:
        new Date().toISOString(),

      dueDate,

      submittedAt: null,

      verifiedAt: null,

      assignedTo: null,

      attachments: [],

      bankNote:
        bankNote.trim() || null,

      farmerNote: null,
    };

    onCreate(newRequest);

    setTitle("");
    setDescription("");
    setCategory("evidence");
    setPriority("medium");
    setDueDate("");
    setBankNote("");

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/50 px-4 py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <p className="text-sm font-medium text-emerald-600">
              Request Management
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              新增補件需求
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              建立案件所需的授信補充資料需求
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="關閉"
          >
            ✕
          </button>
        </div>

        {/* Case Context */}
        <div className="border-b bg-slate-50 px-6 py-4">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-xs text-slate-400">
                案件 ID
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {caseId}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                農戶
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {farmerName}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                農場
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-800">
                {farmName}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                查核來源
              </p>

              <div className="mt-1 flex flex-wrap gap-2">
                {indicatorId && (
                  <span className="rounded-md bg-white px-2 py-1 text-xs text-slate-600 ring-1 ring-slate-200">
                    Indicator: {indicatorId}
                  </span>
                )}

                {evidenceId && (
                  <span className="rounded-md bg-white px-2 py-1 text-xs text-slate-600 ring-1 ring-slate-200">
                    Evidence: {evidenceId}
                  </span>
                )}

                {!indicatorId &&
                  !evidenceId && (
                    <span className="text-xs text-slate-400">
                      一般補件
                    </span>
                  )}
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-5 px-6 py-6">
          {/* Title */}
          <div>
            <label
              htmlFor="request-title"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              補件標題
              <span className="ml-1 text-red-500">
                *
              </span>
            </label>

            <input
              id="request-title"
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(
                  event.target.value,
                )
              }
              placeholder="例如：補充有機驗證文件"
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="request-description"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              補件說明
              <span className="ml-1 text-red-500">
                *
              </span>
            </label>

            <textarea
              id="request-description"
              value={description}
              onChange={(event) =>
                setDescription(
                  event.target.value,
                )
              }
              rows={4}
              placeholder="請說明需要小農補充哪些資料，以及補件用途。"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Category + Priority */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="request-category"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                補件類型
              </label>

              <select
                id="request-category"
                value={category}
                onChange={(event) =>
                  setCategory(
                    event.target
                      .value as RequestCategory,
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                {categoryOptions.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ),
                )}
              </select>
            </div>

            <div>
              <label
                htmlFor="request-priority"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                優先級
              </label>

              <select
                id="request-priority"
                value={priority}
                onChange={(event) =>
                  setPriority(
                    event.target
                      .value as RequestPriority,
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                {priorityOptions.map(
                  (option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ),
                )}
              </select>
            </div>
          </div>

          {/* Due Date */}
          <div>
            <label
              htmlFor="request-due-date"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              補件期限
              <span className="ml-1 text-red-500">
                *
              </span>
            </label>

            <input
              id="request-due-date"
              type="date"
              value={dueDate}
              onChange={(event) =>
                setDueDate(
                  event.target.value,
                )
              }
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Bank Note */}
          <div>
            <label
              htmlFor="request-bank-note"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              銀行備註
            </label>

            <textarea
              id="request-bank-note"
              value={bankNote}
              onChange={(event) =>
                setBankNote(
                  event.target.value,
                )
              }
              rows={3}
              placeholder="提供給後續查核人員的內部備註。"
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-xs leading-5 text-amber-800">
              補件需求僅用於蒐集授信補充資料與查核，
              不代表核貸結果或信用評分。
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t bg-slate-50 px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            取消
          </button>

          <button
            type="button"
            onClick={handleCreate}
            disabled={
              !title.trim() ||
              !description.trim() ||
              !dueDate
            }
            className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            建立補件需求
          </button>
        </div>
      </div>
    </div>
  );
}
