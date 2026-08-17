import { useState } from "react";

type Dimension = {
  id: string;
  name: string;
  points: number;
  maxPoints: number;
};

type GreenAction = {
  id: number;
  title: string;
  date: string;
  category: string;
  points: number;
  status?: string;
};

type GreenResume = {
  experiencePoints: number;
  nextLevelThreshold: number;
  level: string;
  levelName: string;
  nextLevel: string;
  nextLevelName: string;
  disclaimer: string;
  dimensions: Dimension[];
};

type Props = {
  initialResume: GreenResume;
  initialActions: GreenAction[];
};

export default function ResumeClient({
  initialResume,
  initialActions,
}: Props) {
  const [isLoaded] = useState(true);

  const progress =
    (initialResume.experiencePoints / initialResume.nextLevelThreshold) * 100;

  if (!isLoaded) {
    return (
      <div className="authorization-loading">
        <div className="loading-spinner" />
        <p>正在載入綠色履歷資料...</p>
      </div>
    );
  }

  return (
    <div className="authorization-client space-y-6">
      {/* Experience Summary */}
      <section className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-6 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-[#7c857e]">
              綠色行動經驗值
            </p>

            <div className="mt-2 flex items-end gap-3">
              <span className="text-4xl font-bold text-gray-900 sm:text-5xl">
                {initialResume.experiencePoints}
              </span>

              <span className="pb-1 text-sm text-[#7c857e]">
                經驗值
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-green-100 bg-green-50 px-5 py-3 text-center">
            <p className="text-xl font-bold text-green-700">
              {initialResume.level}
            </p>

            <p className="text-xs font-medium text-green-700">
              {initialResume.levelName}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">
              目前進度
            </span>

            <span className="text-[#7c857e]">
              {initialResume.experiencePoints} /{" "}
              {initialResume.nextLevelThreshold}
            </span>
          </div>

          <div className="mt-2 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-green-600 transition-all duration-500"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />
          </div>

          <p className="mt-2.5 text-sm text-[#7c857e]">
            還需要{" "}
            <span className="font-semibold text-gray-700">
              {Math.max(
                initialResume.nextLevelThreshold -
                  initialResume.experiencePoints,
                0
              )}
            </span>{" "}
            經驗值即可進入{" "}
            <span className="font-semibold text-green-700">
              {initialResume.nextLevel} {initialResume.nextLevelName}
            </span>
          </p>
        </div>
      </section>

      {/* Four Dimensions */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            四大經驗值構面
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            綠色行動經驗值依不同類型分別累積。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {initialResume.dimensions.map((dimension) => {
            const percentage =
              (dimension.points / dimension.maxPoints) * 100;

            return (
              <div
                key={dimension.id}
                className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">
                    {dimension.name}
                  </span>

                  <span className="text-sm text-[#7c857e]">
                    {dimension.points} / {dimension.maxPoints}
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-green-500"
                    style={{
                      width: `${Math.min(percentage, 100)}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Green Actions */}
      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            最近綠色行動
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            已完成驗證並認列的近期綠色行動。
          </p>
        </div>

        <div>
          {initialActions.map((action, index) => (
            <div
              key={action.id}
              className={`flex items-center justify-between p-5 transition duration-200 hover:bg-gray-50/50 ${
                index !== initialActions.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <div>
                <p className="font-medium text-gray-900">
                  {action.title}
                </p>

                <div className="mt-1 flex gap-3 text-sm text-[#7c857e]">
                  <span>{action.date}</span>
                  <span>•</span>
                  <span>{action.category}</span>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-green-700">
                  +{action.points}
                </p>

                <p className="text-xs text-[#7c857e]">
                  {action.status ?? "已驗證"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}