import type {
  Authorization,
  PendingRequest,
  AccessLog,
} from "../farmer_types/farmer_authorization";

const STORAGE_KEY =
  "greenfin_authorization_state";

export type AuthorizationState = {
  pendingRequests: PendingRequest[];

  activeAuthorizations: Authorization[];

  accessLogs: AccessLog[];
};

export function loadAuthorizationState(
  defaultState: AuthorizationState
): AuthorizationState {
  if (
    typeof window === "undefined"
  ) {
    return defaultState;
  }

  try {
    const stored =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!stored) {
      return defaultState;
    }

    return JSON.parse(stored);
  } catch (error) {
    console.error(
      "無法讀取授權資料：",
      error
    );

    return defaultState;
  }
}

export function saveAuthorizationState(
  state: AuthorizationState
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  } catch (error) {
    console.error(
      "無法保存授權資料：",
      error
    );
  }
}

export function resetAuthorizationState(
  defaultState: AuthorizationState
) {
  if (
    typeof window === "undefined"
  ) {
    return;
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultState)
  );
}