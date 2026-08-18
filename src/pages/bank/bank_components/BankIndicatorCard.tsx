import type { BankIndicator } from "../bank_types/bank_types";

interface BankIndicatorCardProps {
  title: string;
  indicator: BankIndicator;
  description: string;
  onDrillDown: () => void;
  onClick?: () => void;
}

export default function BankIndicatorCard({
  title,
  indicator,
  description,
  onDrillDown,
}: BankIndicatorCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-sm font-semibold text-slate-700">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            {description}
          </p>
        </div>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {indicator.level}
        </span>

      </div>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-bold tracking-tight text-slate-900">
          {indicator.score}
        </span>

        <span className="mb-1 text-sm text-slate-400">
          / 100
        </span>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-800 transition-all"
          style={{
            width: `${indicator.score}%`,
          }}
        />
      </div>

      <div className="mt-4 rounded-lg bg-slate-50 p-3">
        <div className="text-xs font-medium text-slate-400">
          判定說明
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-600">
          {indicator.reason}
        </p>
      </div>

      <button
  type="button"
  onClick={onDrillDown}
  className="mt-4 text-xs font-semibold text-slate-600 hover:text-slate-900"
>
  查看查核依據 →
</button>
    </div>
  );
}