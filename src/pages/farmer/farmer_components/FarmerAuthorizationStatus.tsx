type Props = {
  status: string;
};

export default function AuthorizationStatus({
  status,
}: Props) {
  const statusMap: Record<
    string,
    {
      label: string;
      className: string;
    }
  > = {
    active: {
      label: "授權中",
      className: "active",
    },

    expired: {
      label: "已到期",
      className: "expired",
    },

    revoked: {
      label: "已撤回",
      className: "revoked",
    },

    pending: {
      label: "待確認",
      className: "pending",
    },
  };

  const current =
    statusMap[status] ??
    statusMap.pending;

  return (
    <span
      className={`authorization-status ${current.className}`}
    >
      <span className="authorization-status-dot" />

      {current.label}
    </span>
  );
}