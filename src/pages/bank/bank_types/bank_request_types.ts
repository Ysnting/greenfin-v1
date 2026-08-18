export type RequestStatus =
  | "pending"
  | "submitted"
  | "verified"
  | "rejected"
  | "cancelled";

export type RequestPriority =
  | "high"
  | "medium"
  | "low";

export type RequestCategory =
  | "data_health"
  | "indicator"
  | "authorization"
  | "evidence"
  | "other";

export interface BankRequest {
  requestId: string;

  caseId: string;

  farmerName: string;

  farmName: string;

  title: string;

  description: string;

  category: RequestCategory;

  priority: RequestPriority;

  status: RequestStatus;

  source: {
    caseId: string;
    indicatorId: string | null;
    evidenceId: string | null;
  };

  createdAt: string;

  dueDate: string;

  submittedAt: string | null;

  verifiedAt: string | null;

  assignedTo: string | null;

  attachments: unknown[];

  bankNote: string | null;

  farmerNote: string | null;
}


