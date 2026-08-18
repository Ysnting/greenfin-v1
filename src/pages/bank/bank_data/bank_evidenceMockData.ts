import type { BankIndicatorEvidence } from "../bank_types/bank_types";
import { getBankDocument } from "./bank_documentMockData";


// ============================================================
// Evidence Mock Data
// ============================================================

export const bankEvidences: Record<
  string,
  BankIndicatorEvidence
> = {
  // ============================================================
  // GF-2026-001
  // ============================================================

  "EV-001": {
    id: "EV-001",
    label: "農場基本資料",
    status: "verified",
    sourceLevel: "V2",
    reason: "農場基本資料已完成查核",
    document: getBankDocument("DOC-001"),
  },

  "EV-002": {
    id: "EV-002",
    label: "土地與作物資料",
    status: "verified",
    sourceLevel: "V2",
    reason: "土地與作物資料完整",
    document: getBankDocument("DOC-002"),
  },

  "EV-003": {
    id: "EV-003",
    label: "交易資料",
    status: "verified",
    sourceLevel: "V2",
    reason: "主要交易紀錄具有可查核來源",
    document: getBankDocument("DOC-003"),
  },

  "EV-004": {
    id: "EV-004",
    label: "部分交易資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "近期部分交易資料仍待確認",
    document: getBankDocument("DOC-004"),
  },

  "EV-005": {
    id: "EV-005",
    label: "經營紀錄",
    status: "verified",
    sourceLevel: "V2",
    reason: "已有持續性的農場經營紀錄",
    document: getBankDocument("DOC-005"),
  },

  "EV-006": {
    id: "EV-006",
    label: "綠色農作紀錄",
    status: "verified",
    sourceLevel: "V2",
    reason: "已有多筆可查核綠色行動紀錄",
    document: getBankDocument("DOC-006"),
  },


  // ============================================================
  // GF-2026-002
  // ============================================================

  "EV-201": {
    id: "EV-201",
    label: "土地佐證資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "土地佐證文件尚待補充",
    document: getBankDocument("DOC-201"),
  },

  "EV-202": {
    id: "EV-202",
    label: "主要資料來源",
    status: "verified",
    sourceLevel: "V2",
    reason: "主要資料已有可查核來源",
    document: getBankDocument("DOC-202"),
  },

  "EV-203": {
    id: "EV-203",
    label: "部分交易資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "部分交易資料來源仍待確認",
    document: getBankDocument("DOC-203"),
  },

  "EV-204": {
    id: "EV-204",
    label: "經營紀錄",
    status: "verified",
    sourceLevel: "V2",
    reason: "具有持續經營紀錄",
    document: getBankDocument("DOC-204"),
  },

  "EV-205": {
    id: "EV-205",
    label: "綠色行動",
    status: "verified",
    sourceLevel: "V2",
    reason: "已有綠色農作行動紀錄",
    document: getBankDocument("DOC-205"),
  },

  "EV-206": {
    id: "EV-206",
    label: "持續性紀錄",
    status: "warning",
    sourceLevel: "V1",
    reason: "綠色行動的持續性資料仍可補強",
    document: getBankDocument("DOC-206"),
  },


  // ============================================================
  // GF-2026-003
  // ============================================================

  "EV-301": {
    id: "EV-301",
    label: "核心資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "部分核心資料仍在整理",
    document: getBankDocument("DOC-301"),
  },

  "EV-302": {
    id: "EV-302",
    label: "資料來源",
    status: "warning",
    sourceLevel: "V1",
    reason: "部分資料來源仍需要進一步驗證",
    document: getBankDocument("DOC-302"),
  },

  "EV-303": {
    id: "EV-303",
    label: "經營紀錄",
    status: "verified",
    sourceLevel: "V2",
    reason: "已有基本經營紀錄",
    document: getBankDocument("DOC-303"),
  },

  "EV-304": {
    id: "EV-304",
    label: "綠色農作",
    status: "verified",
    sourceLevel: "V1",
    reason: "已開始建立綠色農作紀錄",
    document: getBankDocument("DOC-304"),
  },

  "EV-305": {
    id: "EV-305",
    label: "土地與作物資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "部分土地與作物資料仍待確認",
    document: getBankDocument("DOC-305"),
  },

  "EV-306": {
    id: "EV-306",
    label: "交易資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "經營交易資料仍在整理",
    document: getBankDocument("DOC-306"),
  },


  // ============================================================
  // GF-2026-004
  // ============================================================

  "EV-401": {
    id: "EV-401",
    label: "核心資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "目前仍有多項資料尚未提供",
    document: getBankDocument("DOC-401"),
  },

  "EV-402": {
    id: "EV-402",
    label: "資料來源",
    status: "warning",
    sourceLevel: "V1",
    reason: "資料來源尚未完成完整核驗",
    document: getBankDocument("DOC-402"),
  },

  "EV-403": {
    id: "EV-403",
    label: "經營紀錄",
    status: "warning",
    sourceLevel: "V1",
    reason: "經營紀錄仍在建立",
    document: getBankDocument("DOC-403"),
  },

  "EV-404": {
    id: "EV-404",
    label: "綠色行動",
    status: "verified",
    sourceLevel: "V1",
    reason: "已有部分綠色行動紀錄",
    document: getBankDocument("DOC-404"),
  },

  "EV-405": {
    id: "EV-405",
    label: "土地與作物資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "土地與作物資料尚未完整",
    document: getBankDocument("DOC-405"),
  },

  "EV-406": {
    id: "EV-406",
    label: "交易資料",
    status: "warning",
    sourceLevel: "V1",
    reason: "目前尚未提供完整交易資料",
    document: getBankDocument("DOC-406"),
  },


  // ============================================================
  // GF-2026-005
  // ============================================================

  "EV-501": {
    id: "EV-501",
    label: "核心資料",
    status: "verified",
    sourceLevel: "V3",
    reason: "核心資料完整且已完成驗證",
    document: getBankDocument("DOC-501"),
  },

  "EV-502": {
    id: "EV-502",
    label: "資料可信度",
    status: "verified",
    sourceLevel: "V3",
    reason: "重要資料具高度可查核性",
    document: getBankDocument("DOC-502"),
  },

  "EV-503": {
    id: "EV-503",
    label: "長期經營紀錄",
    status: "verified",
    sourceLevel: "V3",
    reason: "具長期且持續的經營紀錄",
    document: getBankDocument("DOC-503"),
  },

  "EV-504": {
    id: "EV-504",
    label: "綠色行動",
    status: "verified",
    sourceLevel: "V3",
    reason: "具多面向且持續的綠色行動紀錄",
    document: getBankDocument("DOC-504"),
  },

  "EV-505": {
    id: "EV-505",
    label: "交易與經營資料",
    status: "verified",
    sourceLevel: "V3",
    reason: "交易與經營紀錄完整且具高度可查核性",
    document: getBankDocument("DOC-505"),
  },

  "EV-506": {
    id: "EV-506",
    label: "申貸用途",
    status: "verified",
    sourceLevel: "V3",
    reason: "申貸用途資料完整且已完成驗證",
    document: getBankDocument("DOC-506"),
  },
};


// ============================================================
// Case / Indicator → Evidence ID Mapping
// ============================================================

/**
 * 這一層只負責描述：
 *
 * 哪一個 Case 的哪一個 Indicator
 * 應該使用哪些 Evidence。
 *
 * 例如：
 *
 * GF-2026-002
 *   └── dataCompleteness
 *         ├── EV-201
 *         └── EV-202
 *
 * 真正的 Evidence / Document 內容
 * 仍然由上面的 bankEvidences 統一管理。
 */
const bankEvidenceIndex: Record<
  string,
  Partial<Record<string, string[]>>
> = {
  // ============================================================
  // GF-2026-001
  // ============================================================

  "GF-2026-001": {
    dataCompleteness: [
      "EV-001",
      "EV-002",
    ],

    dataCredibility: [
      "EV-003",
      "EV-004",
    ],

    operationalMaturity: [
      "EV-005",
    ],

    greenMaturity: [
      "EV-006",
    ],
  },


  // ============================================================
  // GF-2026-002
  // ============================================================

  "GF-2026-002": {
    dataCompleteness: [
      "EV-201",
      "EV-202",
    ],

    dataCredibility: [
      "EV-203",
    ],

    operationalMaturity: [
      "EV-204",
    ],

    greenMaturity: [
      "EV-205",
      "EV-206",
    ],
  },


  // ============================================================
  // GF-2026-003
  // ============================================================

  "GF-2026-003": {
    dataCompleteness: [
      "EV-301",
      "EV-302",
    ],

    dataCredibility: [
      "EV-303",
    ],

    operationalMaturity: [
      "EV-304",
    ],

    greenMaturity: [
      "EV-305",
      "EV-306",
    ],
  },


  // ============================================================
  // GF-2026-004
  // ============================================================

  "GF-2026-004": {
    dataCompleteness: [
      "EV-401",
      "EV-402",
    ],

    dataCredibility: [
      "EV-403",
    ],

    operationalMaturity: [
      "EV-404",
    ],

    greenMaturity: [
      "EV-405",
      "EV-406",
    ],
  },


  // ============================================================
  // GF-2026-005
  // ============================================================

  "GF-2026-005": {
    dataCompleteness: [
      "EV-501",
      "EV-502",
    ],

    dataCredibility: [
      "EV-503",
    ],

    operationalMaturity: [
      "EV-504",
    ],

    greenMaturity: [
      "EV-505",
      "EV-506",
    ],
  },
};


// ============================================================
// Query Layer
// ============================================================

/**
 * 依 Evidence ID 取得單筆 Evidence
 *
 * 這是最底層的 Evidence 查詢。
 *
 * 例如：
 *
 * getBankEvidenceById("EV-201")
 *
 * → EV-201 完整資料
 */
export function getBankEvidenceById(
  evidenceId: string
): BankIndicatorEvidence | undefined {
  return bankEvidences[evidenceId];
}


/**
 * 依 Case + Indicator 自動取得 Evidence
 *
 * 例如：
 *
 * getBankEvidence(
 *   "GF-2026-002",
 *   "dataCompleteness"
 * )
 *
 * → [
 *      EV-201,
 *      EV-202
 *   ]
 *
 *
 * 又例如：
 *
 * getBankEvidence(
 *   "GF-2026-004",
 *   "dataCredibility"
 * )
 *
 * → [
 *      EV-403
 *   ]
 */
export function getBankEvidence(
  caseId: string,
  indicatorKey: string
): BankIndicatorEvidence[] {
  const evidenceIds =
    bankEvidenceIndex[caseId]?.[indicatorKey] ?? [];

  return evidenceIds
    .map((evidenceId) =>
      getBankEvidenceById(evidenceId)
    )
    .filter(
      (
        evidence
      ): evidence is BankIndicatorEvidence =>
        evidence !== undefined
    );
}