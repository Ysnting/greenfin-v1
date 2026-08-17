export type AuthorizationStatus =
  | "authorized"
  | "expired"
  | "pending"
  | "revoked";

export type HealthStatus =
  | "green"
  | "yellow"
  | "red"
  | "gray";

export type SourceLevel = "V0" | "V1" | "V2" | "V3";

export interface BankIndicator {
  score: number;
  level: string;
  reason: string;
  trend: number[];
}

export interface DataHealthItem {
  key: string;
  label: string;
  status: HealthStatus;
  reason: string;
  action?: string;
  expiresAt?: string;
}

export interface GreenFinBankCase {
  caseId: string;

  farmerName: string;
  farmName: string;

  location: string;
  crop: string;
  area: number;

  authorization: {
    status: AuthorizationStatus;
    institution: string;
    validFrom: string;
    validUntil: string;
    purpose: string;
    scopes: string[];
  };

  experienceValue: number;
  greenLevel: string;

  indicators: {
    dataCompleteness: BankIndicator;
    dataCredibility: BankIndicator;
    operationalMaturity: BankIndicator;
    greenMaturity: BankIndicator;
  };

  dataHealth: DataHealthItem[];

  sourceLevel: SourceLevel;

  lastUpdated: string;

  riskAlerts: string[];
}