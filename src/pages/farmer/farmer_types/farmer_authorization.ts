export type PendingRequest = {
  id: string;

  institutionName: string;

  institutionType: string;

  purpose: string;

  requestedAt: string;

  startDate: string;

  endDate: string;

  dataScopes: string[];

  description: string;
};


export type Authorization = {
  id: string;

  institutionName: string;

  institutionType: string;

  purpose: string;

  status:
    | "active"
    | "expired"
    | "revoked";

  startDate: string;

  endDate: string;

  dataScopes: string[];

  createdAt: string;

  lastAccessedAt: string;
};


export type AccessLog = {
  id: string;

  accessedAt: string;

  institutionName: string;

  userName: string;

  purpose: string;

  dataScopes: string[];

  result: string;
};