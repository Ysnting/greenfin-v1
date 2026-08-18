import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  BankRequest,
  RequestStatus,
} from "./../bank_types/bank_request_types";

import {
  bankRequestMockData,
} from "./../bank_data/bank_request_mockData";

interface BankRequestContextValue {
  requests: BankRequest[];

  createRequest: (
    request: BankRequest,
  ) => void;

  updateRequestStatus: (
    requestId: string,
    status: RequestStatus,
  ) => void;

  getRequestById: (
    requestId: string,
  ) => BankRequest | undefined;

  getRequestsByCaseId: (
    caseId: string,
  ) => BankRequest[];

  submitRequest: (
    requestId: string,
  ) => void;

  verifyRequest: (
    requestId: string,
  ) => void;

  rejectRequest: (
    requestId: string,
  ) => void;

  cancelRequest: (
    requestId: string,
  ) => void;
}

const BankRequestContext =
  createContext<BankRequestContextValue | undefined>(
    undefined,
  );

interface BankRequestProviderProps {
  children: ReactNode;
}

export function BankRequestProvider({
  children,
}: BankRequestProviderProps) {
  const [requests, setRequests] =
    useState<BankRequest[]>(
      () => [...bankRequestMockData],
    );

  const createRequest = (
    request: BankRequest,
  ) => {
    setRequests((currentRequests) => [
      request,
      ...currentRequests,
    ]);
  };

  const updateRequestStatus = (
    requestId: string,
    status: RequestStatus,
  ) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) => {
        if (
          request.requestId !== requestId
        ) {
          return request;
        }

        const now =
          new Date().toISOString();

        return {
          ...request,

          status,

          submittedAt:
            status === "submitted"
              ? now
              : request.submittedAt,

          verifiedAt:
            status === "verified"
              ? now
              : request.verifiedAt,
        };
      }),
    );
  };

  const getRequestById = (
    requestId: string,
  ) => {
    return requests.find(
      (request) =>
        request.requestId === requestId,
    );
  };

  const getRequestsByCaseId = (
    caseId: string,
  ) => {
    return requests.filter(
      (request) =>
        request.caseId === caseId,
    );
  };

  const submitRequest = (
    requestId: string,
  ) => {
    updateRequestStatus(
      requestId,
      "submitted",
    );
  };

  const verifyRequest = (
    requestId: string,
  ) => {
    updateRequestStatus(
      requestId,
      "verified",
    );
  };

  const rejectRequest = (
    requestId: string,
  ) => {
    updateRequestStatus(
      requestId,
      "rejected",
    );
  };

  const cancelRequest = (
    requestId: string,
  ) => {
    updateRequestStatus(
      requestId,
      "cancelled",
    );
  };

  const value = useMemo(
    () => ({
      requests,
      createRequest,
      updateRequestStatus,
      getRequestById,
      getRequestsByCaseId,
      submitRequest,
      verifyRequest,
      rejectRequest,
      cancelRequest,
    }),
    [requests],
  );

  return (
    <BankRequestContext.Provider
      value={value}
    >
      {children}
    </BankRequestContext.Provider>
  );
}

export function useBankRequests() {
  const context =
    useContext(BankRequestContext);

  if (!context) {
    throw new Error(
      "useBankRequests 必須在 BankRequestProvider 裡使用。",
    );
  }

  return context;
}