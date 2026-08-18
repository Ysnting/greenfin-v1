export type AuthorizationStatus =
  | "authorized"
  | "expired"
  | "pending"
  | "revoked";

export type BankCaseStatus =
  | "authorized"
  | "pending"
  | "needs_documents"
  | "reviewing"
  | "completed";

export type HealthStatus =
  | "green"
  | "yellow"
  | "red"
  | "gray";

export type SourceLevel =
  | "V0"
  | "V1"
  | "V2"
  | "V3";

export type EvidenceStatus =
  | "verified"
  | "warning"
  | "failed";

export type DocumentType =
  | "land"
  | "transaction"
  | "operation"
  | "green"
  | "identity"
  | "other"
  | "verification"
  | "loanPurpose";

export interface BankEvidenceAnomaly {
  id: string;

  type: string;

  description: string;

  severity: "low" | "medium" | "high";

  detectedAt: string;
}

export interface BankDocumentDetail {
  id: string;

  name: string;

  type: DocumentType;

  fileName: string;

  fileType: string;

  uploadedAt: string;

  verifiedAt?: string;

  verifiedBy?: string;

  verificationNote?: string;

  documentUrl?: string;

  anomalies: BankEvidenceAnomaly[];
}

export interface BankIndicatorEvidence {

  id: string;

  label: string;

  status: EvidenceStatus;

  sourceLevel: SourceLevel;

  reason: string;

  evidenceUrl?: string;

  document?: BankDocumentDetail;
}


export type BankIndicatorKey =
  | "dataCompleteness"
  | "dataCredibility"
  | "operationalMaturity"
  | "greenMaturity";

export interface BankIndicator {
  id: string;
  score: number;
  level: string;
  reason: string;
  trend: number[];
  evidences: BankIndicatorEvidence[];
  ruleVersion: string;
  effectiveDate: string;
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

  status: BankCaseStatus;

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


