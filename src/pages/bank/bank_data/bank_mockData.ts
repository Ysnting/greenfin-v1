import type { GreenFinBankCase } from "../bank_types/bank_types";
import { getBankEvidence } from "./bank_evidenceMockData";

const defaultRuleVersion = "GF-BANK-2026.08";
const defaultEffectiveDate = "2026-08-01";

export const demoBankCase: GreenFinBankCase = {
  caseId: "GF-2026-001",

  farmerName: "林先生",
  farmName: "阿里山林家有機茶園",

  location: "嘉義縣阿里山鄉",
  crop: "茶葉",
  area: 12.5,

  status: "authorized",

  authorization: {
    status: "authorized",
    institution: "GreenFin Demo Bank",
    validFrom: "2026-08-01",
    validUntil: "2026-12-31",
    purpose: "農業授信補充資料查驗",
    scopes: [
      "農場基本資料",
      "作物與土地資料",
      "交易資料",
      "綠色行動資料",
      "驗證資料",
    ],
  },

  experienceValue: 850,
  greenLevel: "L5 示範",

  indicators: {
    dataCompleteness: {
      id: "dataCompleteness",
      score: 92,
      level: "L4",
      reason: "核心必要資料大致齊全",
      trend: [72, 76, 81, 86, 92],

      evidences: getBankEvidence(
        "GF-2026-001",
        "dataCompleteness"
      ),

      ruleVersion: defaultRuleVersion,
      effectiveDate: defaultEffectiveDate,
    },

    dataCredibility: {
      id: "dataCredibility",
      score: 75,
      level: "L4",
      reason: "多數重要資料具可查核來源",
      trend: [61, 65, 68, 71, 75],

      evidences: getBankEvidence(
        "GF-2026-001",
        "dataCredibility"
      ),

      ruleVersion: defaultRuleVersion,
      effectiveDate: defaultEffectiveDate,
    },

    operationalMaturity: {
      id: "operationalMaturity",
      score: 85,
      level: "L4",
      reason: "具持續且可追溯的經營紀錄",
      trend: [70, 74, 78, 82, 85],

      evidences: getBankEvidence(
        "GF-2026-001",
        "operationalMaturity"
      ),

      ruleVersion: defaultRuleVersion,
      effectiveDate: defaultEffectiveDate,
    },

    greenMaturity: {
      id: "greenMaturity",
      score: 88,
      level: "L4",
      reason: "具多面向綠色行動與持續紀錄",
      trend: [65, 72, 77, 83, 88],

      evidences: getBankEvidence(
        "GF-2026-001",
        "greenMaturity"
      ),

      ruleVersion: defaultRuleVersion,
      effectiveDate: defaultEffectiveDate,
    },
  },

  dataHealth: [
    {
      key: "identity",
      label: "身分與資格",
      status: "green",
      reason: "核心資料完整且已完成驗證",
      expiresAt: "2026-12-31",
    },
    {
      key: "land",
      label: "土地與作物",
      status: "green",
      reason: "土地及作物資料可查核",
      expiresAt: "2026-12-31",
    },
    {
      key: "transaction",
      label: "經營與交易",
      status: "yellow",
      reason: "近期部分交易資料仍待確認",
      action: "確認交易資料",
      expiresAt: "2026-10-15",
    },
    {
      key: "waterEnergy",
      label: "水電投入",
      status: "green",
      reason: "已有持續紀錄",
    },
    {
      key: "greenEsg",
      label: "綠色 ESG",
      status: "green",
      reason: "已有多筆可查核綠色行動紀錄",
    },
    {
      key: "loanPurpose",
      label: "申貸用途",
      status: "gray",
      reason: "Demo 尚未提供申貸用途資料",
    },
  ],

  sourceLevel: "V2",

  lastUpdated: "2026-08-17 10:30",

  riskAlerts: [
    "交易資料有一筆待確認",
    "部分文件即將進入更新期限",
  ],
};


export const demoBankCases: GreenFinBankCase[] = [
  demoBankCase,

  // ============================================================
  // GF-2026-002
  // ============================================================

  {
    ...demoBankCase,

    caseId: "GF-2026-002",

    farmerName: "陳小姐",
    farmName: "玉山高山茶園",

    location: "南投縣信義鄉",
    crop: "茶葉",
    area: 8.2,

    status: "needs_documents",

    experienceValue: 620,
    greenLevel: "L4 領航",

    authorization: {
      ...demoBankCase.authorization,
      validUntil: "2026-11-30",
    },

    indicators: {
      dataCompleteness: {
        id: "dataCompleteness",
        score: 78,
        level: "L4",
        reason: "部分交易與土地佐證資料尚待補充",
        trend: [65, 68, 71, 75, 78],

        evidences: getBankEvidence(
          "GF-2026-002",
          "dataCompleteness"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      dataCredibility: {
        id: "dataCredibility",
        score: 72,
        level: "L3",
        reason: "主要資料可查核，但部分來源仍待確認",
        trend: [60, 62, 65, 69, 72],

        evidences: getBankEvidence(
          "GF-2026-002",
          "dataCredibility"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      operationalMaturity: {
        id: "operationalMaturity",
        score: 81,
        level: "L4",
        reason: "具有持續經營紀錄",
        trend: [67, 70, 74, 78, 81],

        evidences: getBankEvidence(
          "GF-2026-002",
          "operationalMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      greenMaturity: {
        id: "greenMaturity",
        score: 76,
        level: "L3",
        reason: "已有綠色行動，但持續性資料仍可補強",
        trend: [60, 64, 68, 72, 76],

        evidences: getBankEvidence(
          "GF-2026-002",
          "greenMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },
    },

    dataHealth: [
      {
        key: "identity",
        label: "身分與資格",
        status: "green",
        reason: "核心資料已完成驗證",
        expiresAt: "2026-11-30",
      },
      {
        key: "land",
        label: "土地與作物",
        status: "yellow",
        reason: "土地佐證文件待補",
        action: "補充土地佐證文件",
        expiresAt: "2026-11-30",
      },
      {
        key: "transaction",
        label: "經營與交易",
        status: "yellow",
        reason: "部分交易資料待確認",
        action: "確認交易資料",
      },
      {
        key: "waterEnergy",
        label: "水電投入",
        status: "green",
        reason: "已有基本紀錄",
      },
      {
        key: "greenEsg",
        label: "綠色 ESG",
        status: "yellow",
        reason: "已有綠色行動，但資料仍可補強",
      },
      {
        key: "loanPurpose",
        label: "申貸用途",
        status: "gray",
        reason: "Demo 尚未提供申貸用途資料",
      },
    ],

    sourceLevel: "V2",

    lastUpdated: "2026-08-17 09:20",

    riskAlerts: [
      "土地佐證文件待補",
      "部分交易資料待確認",
    ],
  },


  // ============================================================
  // GF-2026-003
  // ============================================================

  {
    ...demoBankCase,

    caseId: "GF-2026-003",

    farmerName: "張先生",
    farmName: "梅山友善農作園",

    location: "嘉義縣梅山鄉",
    crop: "咖啡",
    area: 5.6,

    status: "reviewing",

    experienceValue: 480,
    greenLevel: "L3 成長",

    authorization: {
      ...demoBankCase.authorization,
      status: "authorized",
    },

    indicators: {
      dataCompleteness: {
        id: "dataCompleteness",
        score: 69,
        level: "L3",
        reason: "部分核心資料仍在整理",
        trend: [52, 57, 60, 65, 69],

        evidences: getBankEvidence(
          "GF-2026-003",
          "dataCompleteness"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      dataCredibility: {
        id: "dataCredibility",
        score: 68,
        level: "L3",
        reason: "部分來源目前為 V1，仍需進一步驗證",
        trend: [55, 58, 61, 64, 68],

        evidences: getBankEvidence(
          "GF-2026-003",
          "dataCredibility"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      operationalMaturity: {
        id: "operationalMaturity",
        score: 73,
        level: "L3",
        reason: "已有基本經營紀錄",
        trend: [61, 64, 67, 70, 73],

        evidences: getBankEvidence(
          "GF-2026-003",
          "operationalMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      greenMaturity: {
        id: "greenMaturity",
        score: 71,
        level: "L3",
        reason: "已開始建立綠色農作紀錄",
        trend: [50, 56, 61, 67, 71],

        evidences: getBankEvidence(
          "GF-2026-003",
          "greenMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },
    },

    dataHealth: [
      {
        key: "identity",
        label: "身分與資格",
        status: "green",
        reason: "基本身分資料已完成驗證",
      },
      {
        key: "land",
        label: "土地與作物",
        status: "yellow",
        reason: "部分土地與作物資料仍待確認",
        action: "確認土地與作物資料",
      },
      {
        key: "transaction",
        label: "經營與交易",
        status: "yellow",
        reason: "經營交易資料仍在整理",
        action: "補充交易資料",
      },
      {
        key: "waterEnergy",
        label: "水電投入",
        status: "gray",
        reason: "目前資料不足",
      },
      {
        key: "greenEsg",
        label: "綠色 ESG",
        status: "yellow",
        reason: "已建立部分綠色農作紀錄",
      },
      {
        key: "loanPurpose",
        label: "申貸用途",
        status: "gray",
        reason: "Demo 尚未提供申貸用途資料",
      },
    ],

    sourceLevel: "V1",

    lastUpdated: "2026-08-16 15:40",

    riskAlerts: [
      "部分來源仍待驗證",
    ],
  },


  // ============================================================
  // GF-2026-004
  // ============================================================

  {
    ...demoBankCase,

    caseId: "GF-2026-004",

    farmerName: "黃小姐",
    farmName: "竹山友善蔬果農場",

    location: "南投縣竹山鎮",
    crop: "蔬菜",
    area: 3.8,

    status: "pending",

    experienceValue: 350,
    greenLevel: "L2 建立",

    authorization: {
      ...demoBankCase.authorization,
      status: "pending",
      validFrom: "2026-08-18",
      validUntil: "2026-12-31",
    },

    indicators: {
      dataCompleteness: {
        id: "dataCompleteness",
        score: 55,
        level: "L2",
        reason: "目前仍有多項資料尚未提供",
        trend: [42, 45, 48, 51, 55],

        evidences: getBankEvidence(
          "GF-2026-004",
          "dataCompleteness"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      dataCredibility: {
        id: "dataCredibility",
        score: 61,
        level: "L2",
        reason: "部分資料具來源，但尚未完成完整核驗",
        trend: [48, 51, 54, 58, 61],

        evidences: getBankEvidence(
          "GF-2026-004",
          "dataCredibility"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      operationalMaturity: {
        id: "operationalMaturity",
        score: 58,
        level: "L2",
        reason: "經營紀錄仍在建立",
        trend: [40, 44, 47, 53, 58],

        evidences: getBankEvidence(
          "GF-2026-004",
          "operationalMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      greenMaturity: {
        id: "greenMaturity",
        score: 63,
        level: "L2",
        reason: "已有部分綠色行動紀錄",
        trend: [44, 48, 52, 57, 63],

        evidences: getBankEvidence(
          "GF-2026-004",
          "greenMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },
    },

    dataHealth: [
      {
        key: "identity",
        label: "身分與資格",
        status: "yellow",
        reason: "授權流程尚未完成",
        action: "完成資料授權",
      },
      {
        key: "land",
        label: "土地與作物",
        status: "yellow",
        reason: "土地與作物資料尚未完整",
        action: "補充土地與作物資料",
      },
      {
        key: "transaction",
        label: "經營與交易",
        status: "gray",
        reason: "目前尚未提供完整交易資料",
        action: "補充交易資料",
      },
      {
        key: "waterEnergy",
        label: "水電投入",
        status: "gray",
        reason: "目前尚未提供資料",
      },
      {
        key: "greenEsg",
        label: "綠色 ESG",
        status: "yellow",
        reason: "已有部分綠色行動紀錄",
      },
      {
        key: "loanPurpose",
        label: "申貸用途",
        status: "gray",
        reason: "Demo 尚未提供申貸用途資料",
      },
    ],

    sourceLevel: "V1",

    lastUpdated: "2026-08-18 09:10",

    riskAlerts: [
      "尚未完成資料授權",
      "核心資料尚未完整",
    ],
  },


  // ============================================================
  // GF-2026-005
  // ============================================================

  {
    ...demoBankCase,

    caseId: "GF-2026-005",

    farmerName: "吳先生",
    farmName: "番路有機果園",

    location: "嘉義縣番路鄉",
    crop: "水果",
    area: 6.4,

    status: "completed",

    experienceValue: 920,
    greenLevel: "L5 示範",

    indicators: {
      dataCompleteness: {
        id: "dataCompleteness",
        score: 96,
        level: "L5",
        reason: "核心資料完整",
        trend: [78, 83, 87, 92, 96],

        evidences: getBankEvidence(
          "GF-2026-005",
          "dataCompleteness"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      dataCredibility: {
        id: "dataCredibility",
        score: 91,
        level: "L5",
        reason: "重要資料具高度可查核性",
        trend: [72, 78, 83, 87, 91],

        evidences: getBankEvidence(
          "GF-2026-005",
          "dataCredibility"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      operationalMaturity: {
        id: "operationalMaturity",
        score: 93,
        level: "L5",
        reason: "具長期且持續的經營紀錄",
        trend: [76, 81, 86, 90, 93],

        evidences: getBankEvidence(
          "GF-2026-005",
          "operationalMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },

      greenMaturity: {
        id: "greenMaturity",
        score: 95,
        level: "L5",
        reason: "具多面向且持續的綠色行動紀錄",
        trend: [74, 80, 86, 91, 95],

        evidences: getBankEvidence(
          "GF-2026-005",
          "greenMaturity"
        ),

        ruleVersion: defaultRuleVersion,
        effectiveDate: defaultEffectiveDate,
      },
    },

    dataHealth: [
      {
        key: "identity",
        label: "身分與資格",
        status: "green",
        reason: "核心資料完整且已完成驗證",
      },
      {
        key: "land",
        label: "土地與作物",
        status: "green",
        reason: "土地與作物資料完整且可查核",
      },
      {
        key: "transaction",
        label: "經營與交易",
        status: "green",
        reason: "交易與經營紀錄完整",
      },
      {
        key: "waterEnergy",
        label: "水電投入",
        status: "green",
        reason: "具長期水電投入紀錄",
      },
      {
        key: "greenEsg",
        label: "綠色 ESG",
        status: "green",
        reason: "具多面向且持續的綠色行動紀錄",
      },
      {
        key: "loanPurpose",
        label: "申貸用途",
        status: "green",
        reason: "申貸用途資料完整",
      },
    ],

    sourceLevel: "V3",

    lastUpdated: "2026-08-17 14:20",

    riskAlerts: [],
  },
];