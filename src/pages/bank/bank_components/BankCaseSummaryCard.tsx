import type { GreenFinBankCase } from "../bank_types/bank_types";

interface Props {
  data: GreenFinBankCase;
}

export default function BankCaseSummaryCard({ data }: Props) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
            CASE
          </div>

          <h2 className="mt-1 text-xl font-bold text-slate-900">
            {data.farmerName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {data.farmName}
          </p>
        </div>

        <div className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
          已授權
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        <div>
          <div className="text-xs text-slate-400">案件編號</div>
          <div className="mt-1 text-sm font-medium text-slate-800">
            {data.caseId}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">所在地</div>
          <div className="mt-1 text-sm font-medium text-slate-800">
            {data.location}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">作物</div>
          <div className="mt-1 text-sm font-medium text-slate-800">
            {data.crop}
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">面積</div>
          <div className="mt-1 text-sm font-medium text-slate-800">
            {data.area} 公頃
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400">資料更新</div>
          <div className="mt-1 text-sm font-medium text-slate-800">
            {data.lastUpdated}
          </div>
        </div>
      </div>
    </section>
  );
}