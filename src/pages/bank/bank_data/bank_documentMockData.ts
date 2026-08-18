import type { BankDocumentDetail } from "../bank_types/bank_types";

export const bankDocuments: Record<string, BankDocumentDetail> = {
  // ============================================================
  // GF-2026-001
  // ============================================================

  "DOC-001": {
    id: "DOC-001",
    name: "農場基本資料證明",
    type: "identity",
    fileName: "farm-basic-info.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-05 14:20",
    verifiedAt: "2026-08-06 09:15",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "文件內容完整，基本資料與平台登錄資料一致。",
    anomalies: [],
  },

  "DOC-002": {
    id: "DOC-002",
    name: "土地與作物資料證明",
    type: "land",
    fileName: "land-crop-record.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-05 15:10",
    verifiedAt: "2026-08-06 10:20",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "土地與作物資料可與平台登錄內容相互核對。",
    anomalies: [],
  },

  "DOC-003": {
    id: "DOC-003",
    name: "主要交易紀錄",
    type: "transaction",
    fileName: "transaction-record.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-07 11:20",
    verifiedAt: "2026-08-08 09:40",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "主要交易紀錄來源可查核",
    anomalies: [],
  },

  "DOC-004": {
    id: "DOC-004",
    name: "近期交易資料",
    type: "transaction",
    fileName: "recent-transaction-record.xlsx",
    fileType: "XLSX",
    uploadedAt: "2026-08-17 09:30",
    verifiedBy: "GreenFin 初步格式驗證",
    verificationNote:
      "文件格式與基本欄位符合要求，但部分交易來源尚未完成第三方查核。",
    anomalies: [
      {
        id: "AN-004",
        type: "來源待確認",
        description:
          "近期一筆交易資料尚未完成第三方來源查核。",
        severity: "medium",
        detectedAt: "2026-08-17 10:00",
      },
    ],
  },

  "DOC-005": {
    id: "DOC-005",
    name: "農場經營紀錄",
    type: "operation",
    fileName: "farm-operation-record.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-09 10:15",
    verifiedAt: "2026-08-10 09:25",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "經營紀錄具持續性，內容可與農場營運資料相互核對。",
    anomalies: [],
  },

  "DOC-006": {
    id: "DOC-006",
    name: "綠色農作行動紀錄",
    type: "green",
    fileName: "green-farming-record.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-11 13:40",
    verifiedAt: "2026-08-12 10:05",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "文件包含多筆綠色農作行動紀錄，具持續性且可查核。",
    anomalies: [],
  },

  // ============================================================
  // GF-2026-002
  // ============================================================

  "DOC-201": {
    id: "DOC-201",
    name: "土地佐證資料",
    type: "land",
    fileName: "land-proof.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-15 10:20",
    verificationNote:
      "土地佐證文件尚待補充。",
    anomalies: [],
  },

  "DOC-202": {
    id: "DOC-202",
    name: "主要資料來源",
    type: "identity",
    fileName: "primary-data-source.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-12 14:10",
    verifiedAt: "2026-08-13 09:20",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "主要資料已有可查核來源。",
    anomalies: [],
  },

  "DOC-203": {
    id: "DOC-203",
    name: "部分交易資料",
    type: "transaction",
    fileName: "partial-transaction-record.xlsx",
    fileType: "XLSX",
    uploadedAt: "2026-08-16 11:30",
    verifiedBy: "GreenFin 初步格式驗證",
    verificationNote:
      "部分交易資料來源仍待確認。",
    anomalies: [],
  },

  "DOC-204": {
    id: "DOC-204",
    name: "農場經營紀錄",
    type: "operation",
    fileName: "farm-operation-record-002.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-10 10:15",
    verifiedAt: "2026-08-11 09:30",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "具有持續經營紀錄。",
    anomalies: [],
  },

  "DOC-205": {
    id: "DOC-205",
    name: "綠色農作行動紀錄",
    type: "green",
    fileName: "green-action-record-002.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-12 13:20",
    verifiedAt: "2026-08-13 10:10",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "已有綠色農作行動紀錄。",
    anomalies: [],
  },

  "DOC-206": {
    id: "DOC-206",
    name: "綠色行動持續性紀錄",
    type: "green",
    fileName: "green-continuity-record-002.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-14 15:40",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "綠色行動的持續性資料仍可補強。",
    anomalies: [],
  },

  // ============================================================
  // GF-2026-003
  // ============================================================

  "DOC-301": {
    id: "DOC-301",
    name: "核心資料整理紀錄",
    type: "identity",
    fileName: "core-data-record-003.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-14 09:20",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "部分核心資料仍在整理。",
    anomalies: [],
  },

  "DOC-302": {
    id: "DOC-302",
    name: "資料來源驗證紀錄",
    type: "identity",
    fileName: "data-source-verification-003.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-14 10:30",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "部分資料來源仍需要進一步驗證。",
    anomalies: [],
  },

  "DOC-303": {
    id: "DOC-303",
    name: "農場經營紀錄",
    type: "operation",
    fileName: "farm-operation-record-003.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-11 14:20",
    verifiedAt: "2026-08-12 09:15",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "已有基本經營紀錄。",
    anomalies: [],
  },

  "DOC-304": {
    id: "DOC-304",
    name: "綠色農作紀錄",
    type: "green",
    fileName: "green-farming-record-003.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-12 13:40",
    verifiedAt: "2026-08-13 10:00",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "已開始建立綠色農作紀錄。",
    anomalies: [],
  },

  "DOC-305": {
    id: "DOC-305",
    name: "土地與作物資料",
    type: "land",
    fileName: "land-crop-record-003.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-15 11:20",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "部分土地與作物資料仍待確認。",
    anomalies: [],
  },

  "DOC-306": {
    id: "DOC-306",
    name: "經營交易資料",
    type: "transaction",
    fileName: "operation-transaction-record-003.xlsx",
    fileType: "XLSX",
    uploadedAt: "2026-08-16 14:10",
    verifiedBy: "GreenFin 初步格式驗證",
    verificationNote:
      "經營交易資料仍在整理。",
    anomalies: [],
  },

  // ============================================================
  // GF-2026-004
  // ============================================================

  "DOC-401": {
    id: "DOC-401",
    name: "核心資料",
    type: "identity",
    fileName: "core-data-record-004.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-18 09:10",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "目前仍有多項資料尚未提供。",
    anomalies: [],
  },

  "DOC-402": {
    id: "DOC-402",
    name: "資料來源",
    type: "identity",
    fileName: "data-source-record-004.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-18 09:20",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "資料來源尚未完成完整核驗。",
    anomalies: [],
  },

  "DOC-403": {
    id: "DOC-403",
    name: "經營紀錄",
    type: "operation",
    fileName: "farm-operation-record-004.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-18 09:30",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "經營紀錄仍在建立。",
    anomalies: [],
  },

  "DOC-404": {
    id: "DOC-404",
    name: "綠色行動",
    type: "green",
    fileName: "green-action-record-004.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-18 09:40",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "已有部分綠色行動紀錄。",
    anomalies: [],
  },

  "DOC-405": {
    id: "DOC-405",
    name: "土地與作物資料",
    type: "land",
    fileName: "land-crop-record-004.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-18 09:50",
    verifiedBy: "GreenFin 初步查核",
    verificationNote:
      "土地與作物資料尚未完整。",
    anomalies: [],
  },

  "DOC-406": {
    id: "DOC-406",
    name: "交易資料",
    type: "transaction",
    fileName: "transaction-record-004.xlsx",
    fileType: "XLSX",
    uploadedAt: "2026-08-18 10:00",
    verifiedBy: "GreenFin 初步格式驗證",
    verificationNote:
      "目前尚未提供完整交易資料。",
    anomalies: [],
  },

  // ============================================================
  // GF-2026-005
  // ============================================================

  "DOC-501": {
    id: "DOC-501",
    name: "核心資料完整證明",
    type: "identity",
    fileName: "core-data-record-005.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-10 09:10",
    verifiedAt: "2026-08-11 09:00",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "核心資料完整且已完成驗證。",
    anomalies: [],
  },

  "DOC-502": {
    id: "DOC-502",
    name: "資料可信度證明",
    type: "identity",
    fileName: "data-credibility-record-005.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-10 10:20",
    verifiedAt: "2026-08-11 09:30",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "重要資料具高度可查核性。",
    anomalies: [],
  },

  "DOC-503": {
    id: "DOC-503",
    name: "長期經營紀錄",
    type: "operation",
    fileName: "long-term-operation-record-005.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-11 11:20",
    verifiedAt: "2026-08-12 09:20",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "具長期且持續的經營紀錄。",
    anomalies: [],
  },

  "DOC-504": {
    id: "DOC-504",
    name: "綠色行動紀錄",
    type: "green",
    fileName: "green-action-record-005.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-12 13:20",
    verifiedAt: "2026-08-13 09:40",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "具多面向且持續的綠色行動紀錄。",
    anomalies: [],
  },

  "DOC-505": {
    id: "DOC-505",
    name: "交易與經營資料",
    type: "transaction",
    fileName: "transaction-operation-record-005.xlsx",
    fileType: "XLSX",
    uploadedAt: "2026-08-13 10:20",
    verifiedAt: "2026-08-14 09:10",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "交易與經營紀錄完整且具高度可查核性。",
    anomalies: [],
  },

  "DOC-506": {
    id: "DOC-506",
    name: "申貸用途證明",
    type: "loanPurpose",
    fileName: "loan-purpose-record-005.pdf",
    fileType: "PDF",
    uploadedAt: "2026-08-14 14:20",
    verifiedAt: "2026-08-15 09:00",
    verifiedBy: "GreenFin 系統查核",
    verificationNote:
      "申貸用途資料完整且已完成驗證。",
    anomalies: [],
  },
};

export function getBankDocument(
  documentId: string
): BankDocumentDetail | undefined {
  return bankDocuments[documentId];
}