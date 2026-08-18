import { useState } from "react";
import { Link } from "react-router-dom";

import BankSidebar from "../../bank_components/BankSidebar";
import BankTopbar from "../../bank_components/BankTopbar";

import { demoBankCases } from "../../bank_data/bank_mockData";

export default function BankCasesPage() {
  const [search, setSearch] = useState("");

  const filteredCases = demoBankCases.filter((item) => {
    const keyword = search.toLowerCase();

    return (
      item.caseId.toLowerCase().includes(keyword) ||
      item.farmerName.toLowerCase().includes(keyword) ||
      item.farmName.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <BankSidebar activePage="cases" />

      <BankTopbar />

      <main className="ml-64 pt-16">
        <div className="mx-auto max-w-7xl px-8 py-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">
              案件管理
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              查看已建立的 GreenFin 授信補充資料案件
            </p>
          </div>

          {/* Search */}
          <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="搜尋案件編號、小農姓名或農場名稱..."
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />
          </div>

          {/* Cases */}
          <div className="space-y-4">
            {filteredCases.map((item) => (
              <div
                key={item.caseId}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  {/* Case information */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {item.caseId}
                      </span>

                      <CaseStatus status={item.status} />
                    </div>

                    <h2 className="mt-2 text-lg font-bold text-slate-900">
                      {item.farmerName}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.farmName}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
                      <span>
                        {item.location}
                      </span>

                      <span>
                        {item.crop}
                      </span>

                      <span>
                        {item.area} 公頃
                      </span>

                      <span>
                        更新於 {item.lastUpdated}
                      </span>
                    </div>
                  </div>

                  {/* Indicators */}
                  <div className="grid grid-cols-3 gap-4 lg:w-[360px]">

                    <MiniScore
                      label="完整度"
                      score={item.indicators.dataCompleteness.score}
                    />

                    <MiniScore
                      label="可信度"
                      score={item.indicators.dataCredibility.score}
                    />

                    <MiniScore
                      label="綠色成熟度"
                      score={item.indicators.greenMaturity.score}
                    />

                  </div>

                  {/* Action */}
                  <Link
                    to={`/bank/cases/${item.caseId}`}
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    查看案件
                    <span className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">
              <p className="text-sm text-slate-500">
                找不到符合條件的案件
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

function MiniScore({
  label,
  score,
}: {
  label: string;
  score: number;
}) {
  return (
    <div>
      <div className="text-xs text-slate-400">
        {label}
      </div>

      <div className="mt-1 text-xl font-bold text-slate-900">
        {score}
      </div>

      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-slate-800"
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  );
}

function CaseStatus({
  status,
}: {
  status: string;
}) {
  const config = {
    authorized: {
      label: "已授權",
      className: "bg-emerald-50 text-emerald-700",
    },

    pending: {
      label: "待授權",
      className: "bg-slate-100 text-slate-600",
    },

    needs_documents: {
      label: "待補件",
      className: "bg-amber-50 text-amber-700",
    },

    reviewing: {
      label: "查驗中",
      className: "bg-blue-50 text-blue-700",
    },

    completed: {
      label: "查驗完成",
      className: "bg-indigo-50 text-indigo-700",
    },
  };

  const current =
    config[status as keyof typeof config];

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${current.className}`}
    >
      {current.label}
    </span>
  );
}