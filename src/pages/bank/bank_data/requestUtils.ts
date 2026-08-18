import type {
  RequestCategory,
  RequestPriority,
  RequestStatus,
} from "../bank_types/bank_request_types";

/**
 * Request Status
 * --------------------------------------------------
 * 將內部狀態轉換成銀行端 UI 顯示文字。
 */

export const REQUEST_STATUS_LABEL: Record<
  RequestStatus,
  string
> = {
  pending: "待補件",
  submitted: "待查核",
  verified: "已完成",
  rejected: "需重新補件",
  cancelled: "已取消",
};

/**
 * Request Priority
 */

export const REQUEST_PRIORITY_LABEL: Record<
  RequestPriority,
  string
> = {
  high: "高",
  medium: "中",
  low: "低",
};

/**
 * Request Category
 */

export const REQUEST_CATEGORY_LABEL: Record<
  RequestCategory,
  string
> = {
  data_health: "Data Health",
  indicator: "分析指標",
  authorization: "授權",
  evidence: "證據",
  other: "其他",
};

/**
 * 取得補件狀態顯示文字
 */
export const getRequestStatusLabel = (
  status: RequestStatus,
): string => {
  return REQUEST_STATUS_LABEL[status];
};

/**
 * 取得補件優先級顯示文字
 */
export const getRequestPriorityLabel = (
  priority: RequestPriority,
): string => {
  return REQUEST_PRIORITY_LABEL[priority];
};

/**
 * 取得補件分類顯示文字
 */
export const getRequestCategoryLabel = (
  category: RequestCategory,
): string => {
  return REQUEST_CATEGORY_LABEL[category];
};

/**
 * 判斷補件是否已完成
 */
export const isRequestCompleted = (
  status: RequestStatus,
): boolean => {
  return (
    status === "verified" ||
    status === "cancelled"
  );
};

/**
 * 判斷補件是否需要銀行處理
 *
 * submitted：
 * 小農已經提交，等待銀行查核
 *
 * rejected：
 * 補件內容不符合要求，需要重新處理
 */
export const isRequestActionRequired = (
  status: RequestStatus,
): boolean => {
  return (
    status === "submitted" ||
    status === "rejected"
  );
};

/**
 * 判斷補件是否逾期
 *
 * 注意：
 * 只有尚未完成的 Request 才會被判斷為逾期。
 */
export const isRequestOverdue = (
  status: RequestStatus,
  dueDate?: string | null,
  currentDate: Date = new Date(),
): boolean => {
  if (!dueDate) {
    return false;
  }

  if (isRequestCompleted(status)) {
    return false;
  }

  const due = new Date(`${dueDate}T23:59:59`);

  return due.getTime() < currentDate.getTime();
};