import type {
  BankRequest,
} from "../bank_types/bank_request_types";

import {
  bankRequestMockData,
} from "./bank_request_mockData";

let requests: BankRequest[] = [
  ...bankRequestMockData,
];

export function getBankRequests(): BankRequest[] {
  return requests;
}

export function getBankRequestById(
  requestId: string,
): BankRequest | null {
  return (
    requests.find(
      (request) =>
        request.requestId === requestId,
    ) ?? null
  );
}

export function createBankRequest(
  request: BankRequest,
): BankRequest {
  requests = [
    request,
    ...requests,
  ];

  return request;
}