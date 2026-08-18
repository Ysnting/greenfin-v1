import type { SourceLevel } from "../bank_types/bank_types";

interface BankSourceLevelProps {
  level: SourceLevel;
  compact?: boolean;
}

const sourceLevelConfig: Record<
  SourceLevel,
  {
    label: string;
    description: string;
    shortDescription: string;
  }
> = {
  V0: {
    label: "V0 小農自行提供",
    description: "資料由小農自行提供，尚未經系統或第三方進一步查核。",
    shortDescription: "小農自行提供",
  },

  V1: {
    label: "V1 系統格式驗證",
    description: "資料已通過系統格式與基本邏輯驗證。",
    shortDescription: "系統格式驗證",
  },

  V2: {
    label: "V2 第三方可查核文件",
    description: "資料具有第三方可查核文件或相關佐證資料。",
    shortDescription: "第三方可查核",
  },

  V3: {
    label: "V3 官方／可信資料源",
    description: "資料來自官方、可信 API 或其他正式資料來源。",
    shortDescription: "官方／可信資料源",
  },
};

export default function BankSourceLevel({
  level,
  compact = false,
}: BankSourceLevelProps) {
  const config = sourceLevelConfig[level];

  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
        <span>{level}</span>

        <span className="font-normal text-slate-500">
          {config.shortDescription}
        </span>
      </span>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-slate-700">
          {level}
        </div>

        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-900">
            {config.label}
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {config.description}
          </p>
        </div>
      </div>
    </div>
  );
}