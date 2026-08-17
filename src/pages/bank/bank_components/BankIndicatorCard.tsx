import type { BankIndicator } from "../bank_types/bank_types";

interface Props {
  title: string;
  indicator: BankIndicator;
}

export default function BankIndicatorCard({
  title,
  indicator,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-600">
          {title}
        </h3>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {indicator.level}
        </span>
      </div>

      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">
          {indicator.score}
        </span>

        <span className="mb-1 text-sm text-slate-400">
          / 100
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-800"
          style={{ width: `${indicator.score}%` }}
        />
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {indicator.reason}
      </p>
    </div>
  );
}