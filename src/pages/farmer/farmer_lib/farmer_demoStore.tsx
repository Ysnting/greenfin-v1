export const DEMO_STORAGE_KEY = "greenfin-demo-state";

export const initialDemoState = {
  farmerProfile: {
    name: "陳小農",
    farmName: "快樂農場",
    location: "桃園市",
  },

  settings: {
    emailNotification: true,
    dataReminder: true,
    language: "繁體中文",
  },

  session: {
    loggedIn: true,
  },
};

export function saveDemoState(state: typeof initialDemoState) {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    DEMO_STORAGE_KEY,
    JSON.stringify(state)
  );
}

export function loadDemoState() {
  if (typeof window === "undefined") {
    return initialDemoState;
  }

  const saved = localStorage.getItem(DEMO_STORAGE_KEY);

  if (!saved) {
    saveDemoState(initialDemoState);
    return initialDemoState;
  }

  try {
    return JSON.parse(saved);
  } catch {
    saveDemoState(initialDemoState);
    return initialDemoState;
  }
}

export function resetDemoState() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(DEMO_STORAGE_KEY);

  localStorage.setItem(
    DEMO_STORAGE_KEY,
    JSON.stringify(initialDemoState)
  );
}

export function clearDemoState() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(DEMO_STORAGE_KEY);
}