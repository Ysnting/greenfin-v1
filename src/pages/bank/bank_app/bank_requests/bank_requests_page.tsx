import { useMemo, useState } from "react";

import type {
  BankRequest,
  RequestPriority,
  RequestStatus,
} from "../../bank_types/bank_request_types";

import {
  useBankRequests,
} from "../../bank_context/BankRequestContext";

import {
  getRequestCategoryLabel,
  getRequestPriorityLabel,
  getRequestStatusLabel,
  isRequestOverdue,
} from "../../bank_data/requestUtils";

import BankRequestDetailModal from "../../bank_components/BankRequestDetailModal";

type StatusFilter = RequestStatus | "all";
type PriorityFilter = RequestPriority | "all";

const statusOptions: Array<{
  value: StatusFilter;
  label: string;
}> = [
  {
    value: "all",
    label: "全部狀態",
  },
  {
    value: "pending",
    label: "待補件",
  },
  {
    value: "submitted",
    label: "待查核",
  },
  {
    value: "verified",
    label: "已完成",
  },
  {
    value: "rejected",
    label: "需重新補件",
  },
  {
    value: "cancelled",
    label: "已取消",
  },
];

const priorityOptions: Array<{
  value: PriorityFilter;
  label: string;
}> = [
  {
    value: "all",
    label: "全部優先級",
  },
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

const getPriorityStyle = (
  priority: RequestPriority,
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

const getStatusStyle = (
  status: RequestStatus,
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

export default function BankRequestsPage() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>("all");

  const [priorityFilter, setPriorityFilter] =
    useState<PriorityFilter>("all");

  const [selectedRequestId, setSelectedRequestId] =
    useState<string | null>(null);

  // 從 Context 物件中解構出 requests 與 getRequestById
  const {
    requests,
    getRequestById,
    verifyRequest,
    rejectRequest,
    cancelRequest,
  } = useBankRequests();

  const selectedRequest = selectedRequestId
    ? (getRequestById(selectedRequestId) ?? null)
    : null;

  const filteredRequests = useMemo(() => {
    const keyword =
      searchTerm.trim().toLowerCase();

    return requests.filter(
      (request) => {
        const matchesSearch =
          keyword === "" ||
          request.requestId
            .toLowerCase()
            .includes(keyword) ||
          request.caseId
            .toLowerCase()
            .includes(keyword) ||
          request.farmerName
            .toLowerCase()
            .includes(keyword) ||
          request.farmName
            .toLowerCase()
            .includes(keyword) ||
          request.title
            .toLowerCase()
            .includes(keyword);

        const matchesStatus =
          statusFilter === "all" ||
          request.status === statusFilter;

        const matchesPriority =
          priorityFilter === "all" ||
          request.priority === priorityFilter;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesPriority
        );
      },
    );
  }, [
    requests,
    searchTerm,
    statusFilter,
    priorityFilter,
  ]);

  const totalCount =
    requests.length;

  const pendingCount =
    requests.filter(
      (request) =>
        request.status === "pending",
    ).length;

  const submittedCount =
    requests.filter(
      (request) =>
        request.status === "submitted",
    ).length;

  const completedCount =
    requests.filter(
      (request) =>
        request.status === "verified",
    ).length;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-emerald-600">
                GreenFin Bank Portal
              </p>

              <h1 className="mt-1 text-2xl font-bold text-slate-900">
                補件管理
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                管理銀行案件的補件需求、查核進度與文件狀態
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="px-8 py-6">
        {/* Disclaimer */}
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
          <p className="text-sm leading-6 text-amber-800">
            <span className="font-semibold">
              提醒：
            </span>{" "}
            補件管理功能僅協助銀行進行授信補充資料之蒐集與查驗，
            不代表核貸結果或信用評分。
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <SummaryCard
            title="補件總數"
            value={totalCount}
            description="目前所有補件需求"
          />

          <SummaryCard
            title="待補件"
            value={pendingCount}
            description="等待小農提交資料"
          />

          <SummaryCard
            title="待查核"
            value={submittedCount}
            description="等待銀行人員查核"
          />

          <SummaryCard
            title="已完成"
            value={completedCount}
            description="已完成補件查核"
          />
        </div>

        {/* Filters */}
        <section className="mt-6 rounded-xl border bg-white">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold text-slate-900">
              補件需求
            </h2>
          </div>

          <div className="flex flex-col gap-4 px-6 py-5 lg:flex-row">
            {/* Search */}
            <div className="flex-1">
              <label
                htmlFor="request-search"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                搜尋
              </label>

              <input
                id="request-search"
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value,
                  )
                }
                placeholder="搜尋 Request ID、案件 ID、農戶或農場名稱..."
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            {/* Status */}
            <div className="w-full lg:w-52">
              <label
                htmlFor="status-filter"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                狀態
              </label>

              <select
                id="status-filter"
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(
                    event.target.value as StatusFilter,
                  )
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                {statusOptions.map(
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

            {/* Priority */}
            <div className="w-full lg:w-52">
              <label
                htmlFor="priority-filter"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                優先級
              </label>

              <select
                id="priority-filter"
                value={priorityFilter}
                onChange={(event) =>
                  setPriorityFilter(
                    event.target.value as PriorityFilter,
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

          {/* Result count */}
          <div className="border-t bg-slate-50 px-6 py-3">
            <p className="text-sm text-slate-500">
              共找到{" "}
              <span className="font-semibold text-slate-800">
                {filteredRequests.length}
              </span>{" "}
              筆補件需求
            </p>
          </div>
        </section>

        {/* Request List */}
        <section className="mt-4 space-y-4">
          {filteredRequests.length === 0 ? (
            <div className="rounded-xl border bg-white px-6 py-16 text-center">
              <p className="font-medium text-slate-700">
                找不到符合條件的補件需求
              </p>

              <p className="mt-2 text-sm text-slate-500">
                請調整搜尋條件或篩選條件。
              </p>
            </div>
          ) : (
            filteredRequests.map(
              (request) => {
                const overdue =
                  isRequestOverdue(
                    request.status,
                    request.dueDate,
                  );

                return (
                  <RequestCard
                    key={request.requestId}
                    request={request}
                    overdue={overdue}
                    onClick={() =>
                      setSelectedRequestId(
                        request.requestId,
                      )
                    }
                  />
                );
              },
            )
          )}
        </section>

        {/* Detail Modal */}
        <BankRequestDetailModal
        request={selectedRequest}
        onClose={() => setSelectedRequestId(null)}
        onVerify={() => {
          if (!selectedRequest) return;
          verifyRequest(selectedRequest.requestId);
        }}
        onReject={() => {
          if (!selectedRequest) return;
          rejectRequest(selectedRequest.requestId);
        }}
        onCancel={() => {
          if (!selectedRequest) return;
          cancelRequest(selectedRequest.requestId);
        }}
      />
      </main>
    </div>
  );
}

/**
 * Summary Card
 */

interface SummaryCardProps {
  title: string;
  value: number;
  description: string;
}

function SummaryCard({
  title,
  value,
  description,
}: SummaryCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

/**
 * Request Card
 */

interface RequestCardProps {
  request: BankRequest;
  overdue: boolean;
  onClick: () => void;
}

function RequestCard({
  request,
  overdue,
  onClick,
}: RequestCardProps) {
  return (
    <article
      onClick={onClick}
      className="cursor-pointer rounded-xl border bg-white transition hover:border-slate-300 hover:shadow-sm"
    >
      <div className="p-6">
        {/* Top */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-900">
                {request.requestId}
              </span>

              <span className="text-slate-300">
                |
              </span>

              <span className="text-sm text-slate-500">
                {request.caseId}
              </span>

              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusStyle(
                  request.status,
                )}`}
              >
                {getRequestStatusLabel(
                  request.status,
                )}
              </span>

              <span
                className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getPriorityStyle(
                  request.priority,
                )}`}
              >
                優先級{" "}
                {getRequestPriorityLabel(
                  request.priority,
                )}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {request.title}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {request.farmerName} ·{" "}
              {request.farmName}
            </p>
          </div>

          {overdue && (
            <span className="inline-flex w-fit rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
              ⚠ 已逾期
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mt-5 rounded-lg bg-slate-50 px-4 py-3">
          <p className="text-sm leading-6 text-slate-600">
            {request.description}
          </p>
        </div>

        {/* Metadata */}
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <InfoItem
            label="補件類型"
            value={getRequestCategoryLabel(
              request.category,
            )}
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
        </div>

        {/* Source */}
        <div className="mt-5 border-t pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
            查核來源
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {request.source.indicatorId && (
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                Indicator:{" "}
                {request.source.indicatorId}
              </span>
            )}

            {request.source.evidenceId && (
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
                Evidence:{" "}
                {request.source.evidenceId}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
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