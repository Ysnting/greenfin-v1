/**
 * GreenFin Bank Portal
 * Phase 3-A - Request Management
 *
 * 補件管理 Mock Data
 *
 * 資料關係：
 *
 * Case
 *  ↓
 * Indicator / Data Health
 *  ↓
 * Evidence
 *  ↓
 * Request
 *
 * MVP 階段使用 Mock Data，
 * 未來可以直接替換成 API。
 */

import type {
  BankRequest,
} from "../bank_types/bank_request_types";

/**
 * 銀行端補件 Mock Data
 */
export const bankRequestMockData: BankRequest[] = [
  {
    requestId: "REQ-001",

    caseId: "GF-2026-001",

    farmerName: "林先生",

    farmName: "阿里山林家有機茶園",

    title: "補充有機驗證相關文件",

    description:
      "目前案件之資料完整度已達 L4，但有機生產相關證明文件尚缺部分佐證，請補充有效的有機驗證文件，以利銀行進行授信補充資料查驗。",

    category: "evidence",

    priority: "high",

    status: "pending",

    source: {
      caseId: "GF-2026-001",
      indicatorId: "dataCompleteness",
      evidenceId: "EV-201",
    },

    createdAt: "2026-08-18T09:30:00+08:00",

    dueDate: "2026-08-25",

    submittedAt: null,

    verifiedAt: null,

    assignedTo: "王小姐",

    attachments: [],

    bankNote:
      "請優先補充目前有效之有機驗證文件。",

    farmerNote: null,
  },

  {
    requestId: "REQ-002",

    caseId: "GF-2026-002",

    farmerName: "陳先生",

    farmName: "雲林陳家友善耕作農場",

    title: "補充農產品交易紀錄",

    description:
      "案件目前交易資料之來源完整性不足，請提供近期農產品交易紀錄或相關銷售佐證，以協助銀行確認實際營運狀況。",

    category: "indicator",

    priority: "medium",

    status: "pending",

    source: {
      caseId: "GF-2026-002",
      indicatorId: "dataCredibility",
      evidenceId: "EV-202",
    },

    createdAt: "2026-08-17T14:20:00+08:00",

    dueDate: "2026-08-24",

    submittedAt: null,

    verifiedAt: null,

    assignedTo: "王小姐",

    attachments: [],

    bankNote:
      "可提供交易明細、銷售紀錄或其他可驗證之交易佐證。",

    farmerNote: null,
  },

  {
    requestId: "REQ-003",

    caseId: "GF-2026-003",

    farmerName: "張小姐",

    farmName: "台南張家低碳蔬菜農場",

    title: "補充低碳農業佐證資料",

    description:
      "案件涉及低碳農業相關指標，目前部分資料尚無足夠佐證，請補充低碳農法執行紀錄、相關證明或其他可驗證資料。",

    category: "indicator",

    priority: "high",

    status: "submitted",

    source: {
      caseId: "GF-2026-003",
      indicatorId: "greenPractice",
      evidenceId: "EV-203",
    },

    createdAt: "2026-08-15T10:10:00+08:00",

    dueDate: "2026-08-22",

    submittedAt: "2026-08-17T16:45:00+08:00",

    verifiedAt: null,

    assignedTo: "李先生",

    attachments: [
      {
        id: "ATT-003-01",
        fileName: "低碳農法執行紀錄.pdf",
        fileType: "application/pdf",
        fileUrl: "#",
        uploadedAt: "2026-08-17T16:45:00+08:00",
      },
    ],

    bankNote:
      "小農已提交文件，目前等待銀行人員查核。",

    farmerNote:
      "已補上近期低碳農法執行紀錄，請協助確認。",
  },

  {
    requestId: "REQ-004",

    caseId: "GF-2026-004",

    farmerName: "黃先生",

    farmName: "嘉義黃家循環農業農場",

    title: "補充循環資源利用紀錄",

    description:
      "目前循環農業相關資料之證據鏈仍有缺口，請提供資源回收、再利用或相關循環農業執行紀錄。",

    category: "data_health",

    priority: "medium",

    status: "rejected",

    source: {
      caseId: "GF-2026-004",
      indicatorId: "dataCompleteness",
      evidenceId: "EV-204",
    },

    createdAt: "2026-08-12T11:00:00+08:00",

    dueDate: "2026-08-20",

    submittedAt: "2026-08-18T09:15:00+08:00",

    verifiedAt: null,

    assignedTo: "李先生",

    attachments: [
      {
        id: "ATT-004-01",
        fileName: "資源利用紀錄.jpg",
        fileType: "image/jpeg",
        fileUrl: "#",
        uploadedAt: "2026-08-18T09:15:00+08:00",
      },
    ],

    bankNote:
      "目前提供之文件無法完整對應循環資源利用紀錄，請補充更具體之佐證資料。",

    farmerNote:
      "已先提供現場照片，若不足將再補充相關紀錄。",
  },

  {
    requestId: "REQ-005",

    caseId: "GF-2026-005",

    farmerName: "吳先生",

    farmName: "花蓮吳家生態農場",

    title: "補充授權範圍確認文件",

    description:
      "目前案件之資料授權資訊仍需要進一步確認，請補充授權範圍或相關同意文件，以利銀行確認資料使用目的與有效期間。",

    category: "authorization",

    priority: "low",

    status: "verified",

    source: {
      caseId: "GF-2026-005",
      indicatorId: null,
      evidenceId: "EV-205",
    },

    createdAt: "2026-08-10T15:30:00+08:00",

    dueDate: "2026-08-18",

    submittedAt: "2026-08-14T13:20:00+08:00",

    verifiedAt: "2026-08-15T10:30:00+08:00",

    assignedTo: "陳小姐",

    attachments: [
      {
        id: "ATT-005-01",
        fileName: "資料使用授權確認書.pdf",
        fileType: "application/pdf",
        fileUrl: "#",
        uploadedAt: "2026-08-14T13:20:00+08:00",
      },
    ],

    bankNote:
      "授權文件已確認，補件需求完成。",

    farmerNote:
      "已完成授權確認文件補件。",
  },
];

/**
 * 依案件 ID 取得補件需求
 */
export const getRequestsByCaseId = (
  caseId: string,
): BankRequest[] => {
  return bankRequestMockData.filter(
    (request) => request.caseId === caseId,
  );
};

/**
 * 依 Request ID 取得單筆補件需求
 */
export const getRequestById = (
  requestId: string,
): BankRequest | undefined => {
  return bankRequestMockData.find(
    (request) => request.requestId === requestId,
  );
};