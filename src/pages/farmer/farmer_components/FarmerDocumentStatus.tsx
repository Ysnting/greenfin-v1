type DocumentStatusProps = {
  status: string;
};

export default function DocumentStatus({
  status,
}: DocumentStatusProps) {
  const config = {
    verified: {
      label: "已驗證",
      className: "verified",
    },

    expiring: {
      label: "即將到期",
      className: "expiring",
    },

    pending: {
      label: "待確認",
      className: "pending",
    },

    abnormal: {
      label: "異常",
      className: "abnormal",
    },
  };

  const current =
    config[status as keyof typeof config] ??
    config.pending;

  return (
    <span
      className={`document-status ${current.className}`}
    >
      <span className="document-status-dot" />

      {current.label}
    </span>
  );
}