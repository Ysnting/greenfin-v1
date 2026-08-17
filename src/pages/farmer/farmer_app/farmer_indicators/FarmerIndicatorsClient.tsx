

import { useState } from "react";
import IndicatorDetail from "../../farmer_components/FarmerIndicatorDetail";
import IndicatorTrendChart from "../../farmer_components/FarmerIndicatorTrendChart";
import { indicatorDetails } from "../../farmer_data/farmer_mockData";



type IndicatorItem = {
  id: string;
  name: string;
  score: number;
  level: string;
  description: string;
};

type Props = {
  initialIndicators: IndicatorItem[];
};

export default function IndicatorsClient({ initialIndicators }: Props) {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null);

  // 根據分數或層級計算各狀態數量（對齊 Health 風格的上方 Grid 統計）
  const highLevelCount = initialIndicators.filter((item) => item.score >= 80).length;
  const mediumLevelCount = initialIndicators.filter((item) => item.score >= 60 && item.score < 80).length;
  const lowLevelCount = initialIndicators.filter((item) => item.score < 60).length;

  return (
    <div className="space-y-6">

      {/* Status Overview (對齊 Health 頁面的 4 欄 Grid 風格) */}
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">整體平均分數</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {Math.round(initialIndicators.reduce((acc, curr) => acc + curr.score, 0) / initialIndicators.length)}
            <span className="text-sm font-normal text-gray-500 ml-1">/ 100</span>
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">優良指標數 (≥80分)</p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {highLevelCount}
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">良好指標數 (60-79分)</p>
          <p className="mt-2 text-3xl font-bold text-yellow-600">
            {mediumLevelCount}
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">待加強指標數 (&lt;60分)</p>
          <p className="mt-2 text-3xl font-bold text-gray-500">
            {lowLevelCount}
          </p>
        </div>
      </section>

      {/* Overview List / Cards */}
      <section className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm overflow-hidden">
        <div className="border-b border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            四大分析指標
          </h2>
          <p className="mt-1 text-sm text-[#7c857e]">
            四個構面分別反映資料與經營履歷的不同面向，點擊可查看詳細內容。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 p-5">
          {initialIndicators.map((indicator) => (
            <button
              key={indicator.id}
              type="button"
              onClick={() => setSelectedIndicator(indicator.id)}
              className="w-full rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-6 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8] hover:bg-gray-50/50"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-[#7c857e]">
                    {indicator.name}
                  </p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-4xl font-bold text-gray-900">
                      {indicator.score}
                    </span>
                    <span className="text-sm text-gray-500">
                      / 100
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-green-50 px-3 py-2 text-center border border-green-200">
                  <p className="text-lg font-bold text-green-700">
                    {indicator.level}
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-green-600 transition-all duration-500"
                    style={{
                      width: `${indicator.score}%`,
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {indicator.description}
              </p>
            </button>
          ))}
        </div>

        {selectedIndicator && (
          <div className="mx-5 mb-5 rounded-xl border border-green-200 bg-green-50 p-5">
            <p className="text-sm text-green-700">
              目前選擇
            </p>
            <p className="mt-1 text-lg font-semibold text-green-900">
              {
                initialIndicators.find(
                  (indicator) => indicator.id === selectedIndicator
                )?.name
              }
            </p>
          </div>
        )}
      </section>

      {/* Selected Indicator Detail */}
      {selectedIndicator && (
        <IndicatorDetail
          indicator={
            indicatorDetails[
              selectedIndicator as keyof typeof indicatorDetails
            ]
          }
          onClose={() => setSelectedIndicator(null)}
          dataCategory={
            selectedIndicator === "completeness"
              ? "all"
              : selectedIndicator === "credibility"
                ? "all"
                : selectedIndicator === "management"
                  ? "transaction"
                  : "green-action"
          }
        />
      )}

      {/* Explanation */}
      <section className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm overflow-hidden p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            指標怎麼看？
          </h2>
          <p className="mt-1 text-sm text-[#7c857e]">
            四大指標不是單一信用分數，而是從不同面向呈現資料履歷狀態。
          </p>
        </div>

        <div className="space-y-4">
          {initialIndicators.map((indicator) => (
            <div
              key={indicator.id}
              className="rounded-xl border border-[var(--border,#e5e7eb)] p-5 transition duration-200 hover:bg-gray-50/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700 font-bold border border-green-200">
                  {indicator.level}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {indicator.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {indicator.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 歷史趨勢 */}
      <section className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            歷史趨勢
          </h2>
          <p className="mt-1 text-sm text-[#7c857e]">
            查看四大分析指標近期的變化趨勢。
          </p>
        </div>

        <IndicatorTrendChart />
      </section>

    </div>
  );
}