import { Link } from "react-router-dom";

type IndicatorSource = {
  category: string;
  sourceLevel: string | null;
  status: string;
  statusText: string;
};

type IndicatorDetailData = {
  title: string;
  level: string;
  score: number;
  summary: string;
  sources: IndicatorSource[];
  suggestions: string[];
};

type IndicatorDetailProps = {
  indicator: IndicatorDetailData;
  onClose: () => void;
  dataCategory?: string;
};

export default function FarmerIndicatorDetail({
  indicator,
  onClose,
  dataCategory,
}: IndicatorDetailProps) {
  const myDataPath = dataCategory
    ? `/farmer/my-data?category=${encodeURIComponent(dataCategory)}`
    : "/farmer/my-data";

  return (
    <section className="rounded-2xl border bg-white p-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            指標詳細說明
          </p>

          <div className="mt-2 flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900">
              {indicator.title}
            </h2>

            <span className="rounded-lg bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
              {indicator.level}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-100"
        >
          關閉
        </button>
      </div>

      {/* Score */}
      <div className="mt-6">
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-gray-900">
            {indicator.score}
          </span>

          <span className="pb-1 text-sm text-gray-500">
            / 100
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {indicator.summary}
        </p>
      </div>

      {/* Sources */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-900">
          為什麼是這個結果？
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          以下為目前影響此指標的資料狀態。
        </p>

        <div className="mt-4 divide-y rounded-xl border">
          {indicator.sources.map((source) => (
            <div
              key={source.category}
              className="flex items-center justify-between gap-4 p-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    source.status === "verified"
                      ? "text-green-600"
                      : source.status === "warning"
                        ? "text-yellow-600"
                        : "text-red-600"
                  }
                >
                  {source.status === "verified"
                    ? "✓"
                    : source.status === "warning"
                      ? "△"
                      : "!"}
                </span>

                <span className="text-sm font-medium text-gray-800">
                  {source.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                  {source.sourceLevel ?? "—"}
                </span>

                <span className="text-sm text-gray-500">
                  {source.statusText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-900">
          改善建議
        </h3>

        <div className="mt-3 space-y-2">
          {indicator.suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="flex gap-3 rounded-lg bg-gray-50 p-3"
            >
              <span className="text-green-600">
                →
              </span>

              <p className="text-sm text-gray-700">
                {suggestion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Link */}
      <div className="mt-6 border-t pt-6">
        <Link
          to={myDataPath}
          className="text-sm font-medium text-green-700 hover:text-green-800"
        >
          查看我的資料 →
        </Link>
      </div>
    </section>
  );
}