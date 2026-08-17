import BankSidebar from "../../bank_components/BankSidebar";
import BankTopbar from "../../bank_components/BankTopbar";
import BankDisclaimer from "../../bank_components/BankDisclaimer";
import BankCaseSummaryCard from "../../bank_components/BankCaseSummaryCard";
import BankIndicatorCard from "../../bank_components/BankIndicatorCard";
import BankDataHealthCard from "../../bank_components/BankDataHealthCard";

import { demoBankCase } from "../../bank_data/bank_mockData";

export default function BankDashboard() {
  const data = demoBankCase;

  return (
    <div className="min-h-screen bg-slate-50">
      <BankSidebar activePage="dashboard" />

      <BankTopbar />

      <main className="ml-64 pt-16">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              GreenFin 授信補充資料查驗總覽
            </p>
          </div>

          <BankDisclaimer />

          <BankCaseSummaryCard data={data} />

          <section className="mt-6">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-slate-900">
                四大分析指標
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                分別呈現資料與經營狀況，不合併為單一信用分數。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <BankIndicatorCard
                title="資料完整度"
                indicator={data.indicators.dataCompleteness}
              />

              <BankIndicatorCard
                title="資料可信度"
                indicator={data.indicators.dataCredibility}
              />

              <BankIndicatorCard
                title="經營成熟度"
                indicator={data.indicators.operationalMaturity}
              />

              <BankIndicatorCard
                title="綠色成熟度"
                indicator={data.indicators.greenMaturity}
              />
            </div>
          </section>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <BankDataHealthCard
              items={data.dataHealth}
            />

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900">
                案件提醒
              </h2>

              <div className="mt-4 space-y-3">
                {data.riskAlerts.map((alert) => (
                  <div
                    key={alert}
                    className="rounded-lg border border-amber-100 bg-amber-50 p-4 text-sm text-amber-800"
                  >
                    {alert}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}