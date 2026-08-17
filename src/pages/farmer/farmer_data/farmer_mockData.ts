export const farmerProfile = {
  name: "陳小農",
  farmName: "快樂農場",
  location: "桃園市",
  crops: ["水稻", "蔬菜"],
  farmingYears: 8,
};

export const greenResume = {
  experiencePoints: 680,
  level: "L4",
  levelName: "領航",
  nextLevel: "L5",
  nextLevelName: "示範",
  nextLevelThreshold: 801,

  disclaimer:
    "經驗值及四大分析指標為授信補充資訊，不保證核貸，亦不取代金融機構既有的徵信與授信決策。",

  dimensions: [
    {
      id: "reduction",
      name: "減量",
      points: 190,
      maxPoints: 250,
    },
    {
      id: "carbon",
      name: "增匯",
      points: 150,
      maxPoints: 250,
    },
    {
      id: "circular",
      name: "循環",
      points: 160,
      maxPoints: 250,
    },
    {
      id: "governance",
      name: "綠色治理",
      points: 180,
      maxPoints: 250,
    },
  ],
};

export const fourIndicators = [
  {
    id: "completeness",
    name: "資料完整度",
    level: "L4",
    score: 86,
    description: "目前資料的完整程度",
  },
  {
    id: "credibility",
    name: "資料可信度",
    level: "L3",
    score: 68,
    description: "目前資料來源與驗證程度",
  },
  {
    id: "management",
    name: "經營成熟度",
    level: "L4",
    score: 82,
    description: "經營資料的持續性與穩定程度",
  },
  {
    id: "green",
    name: "綠色成熟度",
    level: "L4",
    score: 88,
    description: "綠色行動的多元性與可查證程度",
  },
];

export const dataHealth = [
  {
    id: "identity",
    category: "身分與資格",
    status: "green",
    title: "正常可用",
    message: "身分與資格資料已完成核驗。",
    sourceLevel: "V3",
    expiryDate: null,
    action: "查看資料",
  },

  {
    id: "land",
    category: "土地與作物",
    status: "green",
    title: "正常可用",
    message: "土地及作物資料目前完整。",
    sourceLevel: "V2",
    expiryDate: null,
    action: "查看資料",
  },

  {
    id: "transaction",
    category: "經營與交易",
    status: "yellow",
    title: "需要補強",
    message: "近期交易證明即將到期。",
    sourceLevel: "V2",
    expiryDate: "2026-09-15",
    action: "更新資料",
  },

  {
    id: "equipment",
    category: "投入與設備",
    status: "gray",
    title: "尚無資料",
    message: "尚未提供水電與設備資料。",
    sourceLevel: null,
    expiryDate: null,
    action: "新增資料",
  },

  {
    id: "green-action",
    category: "綠色行動與認證",
    status: "green",
    title: "正常可用",
    message: "已有多項綠色行動及相關證明。",
    sourceLevel: "V2",
    expiryDate: null,
    action: "查看資料",
  },

  {
    id: "loan-purpose",
    category: "申貸用途",
    status: "red",
    title: "目前不宜使用",
    message: "缺少資金用途及報價單。",
    sourceLevel: null,
    expiryDate: null,
    action: "立即補件",
  },
];

export const todoList = [
  {
    id: 1,
    type: "danger",
    title: "申貸用途資料缺失",
    description: "請上傳最新的資金需求報價單。",
    action: "立即補件",
  },

  {
    id: 2,
    type: "warning",
    title: "交易紀錄即將到期",
    description:
      "上一筆產銷出貨證明將於 15 天後到期。",
    action: "更新資料",
  },
];

export const recentGreenActions = [
  {
    id: 1,
    date: "2026-07-28",
    title: "友善耕作管理",
    category: "綠色治理",
    points: 30,
    status: "verified",
  },

  {
    id: 2,
    date: "2026-07-15",
    title: "減少化學肥料使用",
    category: "減量",
    points: 25,
    status: "verified",
  },

  {
    id: 3,
    date: "2026-06-20",
    title: "農業資材循環利用",
    category: "循環",
    points: 20,
    status: "verified",
  },
];

export const authorizationRecords = [
  {
    id: 1,
    institution: "GreenFin 合作銀行",
    purpose: "農業融資申請",
    authorizedAt: "2026-07-20 14:30",
    expiresAt: "2026-09-20",
    status: "active",
  },
];

export const accessLogs = [
  {
    id: 1,
    institution: "GreenFin 合作銀行",
    user: "授信專員",
    purpose: "農業融資申請",
    accessedAt: "2026-07-21 10:25",
    status: "success",
  },

  {
    id: 2,
    institution: "GreenFin 合作銀行",
    user: "授信專員",
    purpose: "資料補充查驗",
    accessedAt: "2026-07-24 15:42",
    status: "success",
  },
];

export const farmerDocuments = [
  {
    id: "doc-001",
    category: "經營與交易",
    categoryId: "transaction",
    name: "2026年7月產銷出貨證明",
    date: "2026-08-01",
    uploadedAt: "2026-08-03 10:32",
    status: "verified",
    sourceLevel: "V2",
    sourceName: "小農上傳＋文件驗證",
    expiresAt: "2026-09-15",
    fileType: "PDF",
  },

  {
    id: "doc-002",
    category: "土地與作物",
    categoryId: "land",
    name: "農地使用資料",
    date: "2026-06-15",
    uploadedAt: "2026-06-18 14:20",
    status: "verified",
    sourceLevel: "V2",
    sourceName: "小農上傳",
    expiresAt: "2027-06-15",
    fileType: "PDF",
  },

  {
    id: "doc-003",
    category: "綠色行動與認證",
    categoryId: "green",
    name: "友善耕作認證",
    date: "2026-07-20",
    uploadedAt: "2026-07-21 09:15",
    status: "verified",
    sourceLevel: "V3",
    sourceName: "認證機構",
    expiresAt: "2027-07-20",
    fileType: "PDF",
  },

  {
    id: "doc-004",
    category: "經營與交易",
    categoryId: "transaction",
    name: "2026年6月交易紀錄",
    date: "2026-07-01",
    uploadedAt: "2026-07-03 16:42",
    status: "expiring",
    sourceLevel: "V1",
    sourceName: "小農上傳",
    expiresAt: "2026-08-15",
    fileType: "CSV",
  },

  {
    id: "doc-005",
    category: "申貸用途",
    categoryId: "loan",
    name: "農業設備報價單",
    date: "2026-07-30",
    uploadedAt: "2026-07-31 11:05",
    status: "pending",
    sourceLevel: "V0",
    sourceName: "尚未完成驗證",
    expiresAt: "-",
    fileType: "PDF",
  },
];

export const documentDetails = {
  "doc-001": {
    documentId: "doc-001",

    documentName: "2026年7月產銷出貨證明",

    category: "經營與交易",

    status: "verified",

    sourceLevel: "V2",

    sourceName: "小農上傳＋文件驗證",

    fileType: "PDF",

    uploadedAt: "2026-08-03 10:32",

    dataDate: "2026-08-01",

    expiresAt: "2026-09-15",

    ocr: {
      status: "completed",

      confidence: 94,

      fields: [
        {
          name: "出貨日期",
          value: "2026-08-01",
        },
        {
          name: "作物",
          value: "有機水稻",
        },
        {
          name: "出貨數量",
          value: "1,250 公斤",
        },
        {
          name: "交易金額",
          value: "NT$ 58,000",
        },
      ],
    },

    verification: {
      verifiedAt: "2026-08-03 10:41",

      verifiedBy: "系統驗證＋人工確認",

      result: "通過",
    },

    history: [
      {
        time: "2026-08-03 10:32",
        title: "資料上傳",
        description:
          "小農上傳產銷出貨證明。",
        status: "completed",
      },

      {
        time: "2026-08-03 10:33",
        title: "OCR 完成",
        description:
          "系統完成文件文字擷取。",
        status: "completed",
      },

      {
        time: "2026-08-03 10:40",
        title: "人工確認",
        description:
          "使用者確認 OCR 擷取結果。",
        status: "completed",
      },

      {
        time: "2026-08-03 10:41",
        title: "資料驗證完成",
        description:
          "資料可供後續分析流程使用。",
        status: "completed",
      },
    ],

    anomalies: [],
  },

  "doc-002": {
    documentId: "doc-002",

    documentName: "農地使用資料",

    category: "土地與作物",

    status: "verified",

    sourceLevel: "V2",

    sourceName: "小農上傳",

    fileType: "PDF",

    uploadedAt: "2026-06-18 14:20",

    dataDate: "2026-06-15",

    expiresAt: "2027-06-15",

    ocr: {
      status: "completed",

      confidence: 97,

      fields: [
        {
          name: "土地類型",
          value: "農業用地",
        },
        {
          name: "作物",
          value: "有機水稻",
        },
        {
          name: "耕作面積",
          value: "2.4 公頃",
        },
      ],
    },

    verification: {
      verifiedAt: "2026-06-18 14:35",

      verifiedBy: "系統驗證",

      result: "通過",
    },

    history: [
      {
        time: "2026-06-18 14:20",
        title: "資料上傳",
        description:
          "小農上傳土地資料。",
        status: "completed",
      },

      {
        time: "2026-06-18 14:25",
        title: "資料解析",
        description:
          "完成文件資料擷取。",
        status: "completed",
      },

      {
        time: "2026-06-18 14:35",
        title: "資料驗證完成",
        description:
          "資料可供後續分析流程使用。",
        status: "completed",
      },
    ],

    anomalies: [],
  },

  "doc-003": {
    documentId: "doc-003",

    documentName: "友善耕作認證",

    category: "綠色行動與認證",

    status: "verified",

    sourceLevel: "V3",

    sourceName: "認證機構",

    fileType: "PDF",

    uploadedAt: "2026-07-21 09:15",

    dataDate: "2026-07-20",

    expiresAt: "2027-07-20",

    ocr: {
      status: "completed",

      confidence: 99,

      fields: [
        {
          name: "認證類型",
          value: "友善耕作",
        },
        {
          name: "認證單位",
          value: "Demo 認證機構",
        },
        {
          name: "有效期間",
          value: "2026-07-20 ～ 2027-07-20",
        },
      ],
    },

    verification: {
      verifiedAt: "2026-07-21 09:30",

      verifiedBy: "外部來源驗證",

      result: "通過",
    },

    history: [
      {
        time: "2026-07-21 09:15",
        title: "資料上傳",
        description:
          "小農上傳認證文件。",
        status: "completed",
      },

      {
        time: "2026-07-21 09:22",
        title: "來源核驗",
        description:
          "完成認證來源資訊檢查。",
        status: "completed",
      },

      {
        time: "2026-07-21 09:30",
        title: "資料驗證完成",
        description:
          "資料可供後續分析流程使用。",
        status: "completed",
      },
    ],

    anomalies: [],
  },

  "doc-004": {
    documentId: "doc-004",

    documentName: "2026年6月交易紀錄",

    category: "經營與交易",

    status: "expiring",

    sourceLevel: "V1",

    sourceName: "小農上傳",

    fileType: "CSV",

    uploadedAt: "2026-07-03 16:42",

    dataDate: "2026-07-01",

    expiresAt: "2026-08-15",

    ocr: {
      status: "not_required",

      confidence: null,

      fields: [
        {
          name: "交易筆數",
          value: "18 筆",
        },
        {
          name: "交易期間",
          value: "2026-06-01 ～ 2026-06-30",
        },
      ],
    },

    verification: {
      verifiedAt: null,

      verifiedBy: null,

      result: "待更新",
    },

    history: [
      {
        time: "2026-07-03 16:42",
        title: "資料上傳",
        description:
          "小農上傳交易資料。",
        status: "completed",
      },

      {
        time: "2026-07-03 16:45",
        title: "格式檢查",
        description:
          "完成 CSV 格式檢查。",
        status: "completed",
      },

      {
        time: "2026-08-01",
        title: "即將到期",
        description:
          "此資料即將超過有效期間。",
        status: "warning",
      },
    ],

    anomalies: [
      {
        type: "warning",
        title: "資料即將到期",
        message:
          "建議更新最新交易資料。",
      },
    ],
  },

  "doc-005": {
    documentId: "doc-005",

    documentName: "農業設備報價單",

    category: "申貸用途",

    status: "pending",

    sourceLevel: "V0",

    sourceName: "尚未完成驗證",

    fileType: "PDF",

    uploadedAt: "2026-07-31 11:05",

    dataDate: "2026-07-30",

    expiresAt: "-",

    ocr: {
      status: "completed",

      confidence: 82,

      fields: [
        {
          name: "設備名稱",
          value: "節水灌溉設備",
        },
        {
          name: "報價金額",
          value: "NT$ 180,000",
        },
      ],
    },

    verification: {
      verifiedAt: null,

      verifiedBy: null,

      result: "待人工確認",
    },

    history: [
      {
        time: "2026-07-31 11:05",
        title: "資料上傳",
        description:
          "小農上傳設備報價單。",
        status: "completed",
      },

      {
        time: "2026-07-31 11:07",
        title: "OCR 完成",
        description:
          "系統完成文件文字擷取。",
        status: "completed",
      },

      {
        time: "2026-07-31 11:08",
        title: "等待人工確認",
        description:
          "請確認 OCR 擷取內容。",
        status: "warning",
      },
    ],

    anomalies: [
      {
        type: "warning",
        title: "尚未完成人工確認",
        message:
          "確認資料後才能進入後續驗證流程。",
      },
    ],
  },
};

export const authorizationData = {
  pendingRequests: [
    {
      id: "auth-request-001",

      institutionName: "綠色農業銀行",

      institutionType: "金融機構",

      purpose: "授信補充資訊查驗",
      status: "active" as const,

      requestedAt: "2026-08-09 09:30",

      startDate: "2026-08-10",

      endDate: "2026-09-10",

      dataScopes: [
        "身分與資格",
        "土地與作物",
        "經營與交易",
        "綠色行動與認證",
      ],

      description:
        "金融機構希望查看指定資料，作為授信流程中的補充資訊。",
    },
  ],

  activeAuthorizations: [
    {
      id: "auth-001",

      institutionName: "永續農業金融",

      institutionType: "金融機構",

      purpose: "授信補充資訊查驗",

      status: "active" as const,

      startDate: "2026-08-01",

      endDate: "2026-08-31",

      dataScopes: [
        "身分與資格",
        "土地與作物",
        "經營與交易",
      ],

      createdAt: "2026-08-01 11:20",

      lastAccessedAt: "2026-08-08 15:42",
    },

    {
      id: "auth-002",

      institutionName: "友善農業合作金融",

      institutionType: "金融機構",

      purpose: "綠色融資資料查驗",

      status: "active" as const,

      startDate: "2026-07-20",

      endDate: "2026-08-20",

      dataScopes: [
        "土地與作物",
        "綠色行動與認證",
      ],

      createdAt: "2026-07-20 09:12",

      lastAccessedAt: "2026-08-07 10:18",
    },
  ],

  accessLogs: [
    {
      id: "log-001",

      accessedAt: "2026-08-09 10:32",

      institutionName: "永續農業金融",

      userName: "王○○",

      purpose: "授信補充資訊查驗",

      dataScopes: [
        "基本資料",
        "土地與作物",
        "經營與交易",
      ],

      result: "成功",
    },

    {
      id: "log-002",

      accessedAt: "2026-08-08 15:42",

      institutionName: "永續農業金融",

      userName: "李○○",

      purpose: "授信補充資訊查驗",

      dataScopes: [
        "經營與交易",
      ],

      result: "成功",
    },

    {
      id: "log-003",

      accessedAt: "2026-08-07 10:18",

      institutionName: "友善農業合作金融",

      userName: "陳○○",

      purpose: "綠色融資資料查驗",

      dataScopes: [
        "綠色行動與認證",
      ],

      result: "成功",
    },

    {
      id: "log-004",

      accessedAt: "2026-08-05 16:05",

      institutionName: "永續農業金融",

      userName: "王○○",

      purpose: "授信補充資訊查驗",

      dataScopes: [
        "身分與資格",
      ],

      result: "成功",
    },
  ],
};

export const indicatorDetails = {
  completeness: {
    title: "資料完整度",
    level: "L4",
    score: 86,

    summary:
      "目前已完成身分、土地、作物及多數經營資料建置，但仍有部分資料尚未提供。",

    sources: [
      {
        category: "身分與資格",
        sourceLevel: "V3",
        status: "verified",
        statusText: "已完成",
      },
      {
        category: "土地與作物",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已完成",
      },
      {
        category: "綠色行動與認證",
        sourceLevel: "V3",
        status: "verified",
        statusText: "已完成",
      },
      {
        category: "投入與設備",
        sourceLevel: null,
        status: "missing",
        statusText: "尚未提供",
      },
      {
        category: "申貸用途",
        sourceLevel: null,
        status: "missing",
        statusText: "資料缺件",
      },
    ],

    suggestions: [
      "補充水電與設備相關資料",
      "上傳最新資金需求報價單",
    ],
  },

  credibility: {
    title: "資料可信度",
    level: "L3",
    score: 68,

    summary:
      "目前資料已包含多個可驗證來源，但仍有部分資料屬於小農自行提交。",

    sources: [
      {
        category: "友善耕作認證",
        sourceLevel: "V3",
        status: "verified",
        statusText: "已驗證",
      },
      {
        category: "土地與作物",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已驗證",
      },
      {
        category: "經營與交易",
        sourceLevel: "V1",
        status: "warning",
        statusText: "來源強度較低",
      },
      {
        category: "申貸用途",
        sourceLevel: "V0",
        status: "pending",
        statusText: "尚待確認",
      },
    ],

    suggestions: [
      "補充可查核的第三方來源",
      "完成待確認文件的人工驗證",
    ],
  },

  management: {
    title: "經營成熟度",
    level: "L4",
    score: 82,

    summary:
      "已有持續性的交易與農場經營資料，可觀察近期經營狀況。",

    sources: [
      {
        category: "農場基本資料",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已完成",
      },
      {
        category: "經營與交易",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已完成",
      },
      {
        category: "交易紀錄",
        sourceLevel: "V1",
        status: "warning",
        statusText: "即將到期",
      },
    ],

    suggestions: [
      "持續更新交易與產銷資料",
      "維持經營資料的連續性",
    ],
  },

  green: {
    title: "綠色成熟度",
    level: "L4",
    score: 88,

    summary:
      "已有多項綠色行動與相關證明，且包含可驗證的認證資料。",

    sources: [
      {
        category: "友善耕作認證",
        sourceLevel: "V3",
        status: "verified",
        statusText: "已驗證",
      },
      {
        category: "減量行動",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已驗證",
      },
      {
        category: "循環利用",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已驗證",
      },
      {
        category: "綠色治理",
        sourceLevel: "V2",
        status: "verified",
        statusText: "已驗證",
      },
    ],

    suggestions: [
      "持續累積綠色行動紀錄",
      "補充更多可查證的綠色行動證據",
    ],
  },
};

export const indicatorHistory = [
  {
    date: "2026-05",
    completeness: 72,
    credibility: 54,
    management: 76,
    green: 80,
  },
  {
    date: "2026-06",
    completeness: 78,
    credibility: 60,
    management: 79,
    green: 83,
  },
  {
    date: "2026-07",
    completeness: 82,
    credibility: 65,
    management: 81,
    green: 86,
  },
  {
    date: "2026-08",
    completeness: 86,
    credibility: 68,
    management: 82,
    green: 88,
  },
];