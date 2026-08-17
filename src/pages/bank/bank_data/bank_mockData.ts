import type { GreenFinBankCase } from "../bank_types/bank_types";

export const demoBankCase: GreenFinBankCase = {
  caseId: "GF-2026-001",

  farmerName: "林先生",
  farmName: "阿里山林家有機茶園",

  location: "嘉義縣阿里山鄉",
  crop: "茶葉",
  area: 12.5,

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
      score: 92,
      level: "L4",
      reason: "核心必要資料大致齊全",
      trend: [72, 76, 81, 86, 92],
    },

    dataCredibility: {
      score: 75,
      level: "L4",
      reason: "多數重要資料具可查核來源",
      trend: [61, 65, 68, 71, 75],
    },

    operationalMaturity: {
      score: 85,
      level: "L4",
      reason: "具持續且可追溯的經營紀錄",
      trend: [70, 74, 78, 82, 85],
    },

    greenMaturity: {
      score: 88,
      level: "L4",
      reason: "具多面向綠色行動與持續紀錄",
      trend: [65, 72, 77, 83, 88],
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