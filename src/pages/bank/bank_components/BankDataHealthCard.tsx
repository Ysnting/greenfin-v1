import type {
  DataHealthItem,
} from "../bank_types/bank_types";

interface BankDataHealthCardProps {
  items: DataHealthItem[];
}

export default function BankDataHealthCard({
  items,
}: BankDataHealthCardProps) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">
          Data Health
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          各資料領域目前的有效性與查驗狀態
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <HealthItem
            key={item.key}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}

function HealthItem({
  item,
}: {
  item: DataHealthItem;
}) {
  const config = {
    green: {
      label: "目前可供參考",
      dot: "bg-emerald-500",
      background: "bg-emerald-50",
      text: "text-emerald-700",
    },

    yellow: {
      label: "可參考但需補強",
      dot: "bg-amber-500",
      background: "bg-amber-50",
      text: "text-amber-700",
    },

    red: {
      label: "目前不宜使用",
      dot: "bg-red-500",
      background: "bg-red-50",
      text: "text-red-700",
    },

    gray: {
      label: "未提供或不適用",
      dot: "bg-slate-400",
      background: "bg-slate-100",
      text: "text-slate-600",
    },
  };

  const current = config[item.status];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">
          {item.label}
        </h3>

        <span
          className={`h-3 w-3 rounded-full ${current.dot}`}
        />
      </div>

      <div
        className={`mt-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${current.background} ${current.text}`}
      >
        {current.label}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        {item.reason}
      </p>

      {item.expiresAt && (
        <div className="mt-3 text-xs text-slate-400">
          有效至：{item.expiresAt}
        </div>
      )}

    </div>
  );
}