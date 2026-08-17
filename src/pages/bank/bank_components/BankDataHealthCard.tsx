import type { DataHealthItem } from "../bank_types/bank_types";

interface Props {
  items: DataHealthItem[];
}

const statusConfig = {
  green: {
    dot: "bg-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
    label: "可供參考",
  },

  yellow: {
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700",
    label: "需補強",
  },

  red: {
    dot: "bg-red-500",
    badge: "bg-red-50 text-red-700",
    label: "目前不宜使用",
  },

  gray: {
    dot: "bg-slate-400",
    badge: "bg-slate-100 text-slate-600",
    label: "尚無資料",
  },
};

export default function BankDataHealthCard({
  items,
}: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">
          Data Health
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          各資料領域目前是否具備可採用的資料品質
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        {items.map((item) => {
          const config = statusConfig[item.status];

          return (
            <div
              key={item.key}
              className="flex items-center justify-between py-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${config.dot}`}
                />

                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.label}
                  </div>

                  <div className="mt-1 text-xs text-slate-500">
                    {item.reason}
                  </div>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${config.badge}`}
              >
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}