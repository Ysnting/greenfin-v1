import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const statusConfig = {
  green: {
    label: "正常可用",
    dot: "bg-green-500",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
  },
  yellow: {
    label: "需要補強",
    dot: "bg-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-700",
  },
  red: {
    label: "目前不宜使用",
    dot: "bg-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
  },
  gray: {
    label: "尚無資料",
    dot: "bg-gray-400",
    bg: "bg-gray-50",
    border: "border-gray-200",
    text: "text-gray-600",
  },
};

type HealthItem = {
  id: string;
  category: string;
  status: string;
  title?: string;
  message: string;
  action: string;
  sourceLevel?: string | null;
  expiryDate?: string | null;
};

type Props = {
  initialHealthItems: HealthItem[];
};

export default function HealthClient({ initialHealthItems }: Props) {
  const [transactionVerified, setTransactionVerified] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(
      "greenfin_transaction_verified"
    );

    if (verified === "true") {
      setTransactionVerified(true);
    }

    setIsLoaded(true);
  }, []);

  const healthItems = initialHealthItems.map((item) => {
    if (item.id === "transaction" && transactionVerified) {
      return {
        ...item,
        status: "green" as const,
        title: "資料正常",
        message: "資料已驗證，可正常使用",
        action: "查看資料",
      };
    }

    return item;
  });

  if (!isLoaded) {
    return (
      <div className="authorization-loading">
        <div className="loading-spinner" />
        <p>正在載入資料健康狀態...</p>
      </div>
    );
  }

  return (
    <div className="authorization-client space-y-6">
      {/* Status Overview */}
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">
            正常可用
          </p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {
              healthItems.filter(
                (item) => item.status === "green"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">
            需要補強
          </p>

          <p className="mt-2 text-3xl font-bold text-yellow-600">
            {
              healthItems.filter(
                (item) => item.status === "yellow"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">
            目前不宜使用
          </p>

          <p className="mt-2 text-3xl font-bold text-red-600">
            {
              healthItems.filter(
                (item) => item.status === "red"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border,#e5e7eb)] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b8cbb8]">
          <p className="text-xs font-medium text-[#7c857e]">
            尚無資料
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-500">
            {
              healthItems.filter(
                (item) => item.status === "gray"
              ).length
            }
          </p>
        </div>
      </section>

      {/* Data Health List */}
      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            資料品質診斷
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            各資料領域目前的狀態與驗證資訊。
          </p>
        </div>

        <div>
          {healthItems.map((item, index) => {
            const config =
              statusConfig[
                item.status as keyof typeof statusConfig
              ];

            return (
              <div
                key={item.id}
                className={`p-5 transition duration-200 hover:bg-gray-50/50 ${
                  index !== healthItems.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-2 h-3 w-3 shrink-0 rounded-full ${config.dot}`}
                    />

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-gray-900">
                          {item.category}
                        </h3>

                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bg} ${config.text}`}
                        >
                          {config.label}
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm leading-relaxed text-[#7c857e]">
                        {item.message}
                      </p>

                      {/* Metadata */}
                      <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-[#7c857e]">
                        <span>
                          資料來源：
                          {item.sourceLevel ?? "尚無"}
                        </span>

                        {item.expiryDate && (
                          <span>
                            有效期限：
                            {item.expiryDate}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    to={
                      item.status === "red" ||
                      item.status === "yellow"
                        ? "/farmer/upload"
                        : "/farmer/my-data"
                    }
                    className={`shrink-0 rounded-xl border px-4 py-2 text-sm font-medium transition duration-200 ${
                      item.status === "red"
                        ? "border-red-200 text-red-700 hover:border-red-300 hover:bg-red-50"
                        : item.status === "yellow"
                        ? "border-yellow-200 text-yellow-700 hover:border-yellow-300 hover:bg-yellow-50"
                        : "border-[var(--border,#e5e7eb)] text-gray-700 hover:border-[#b8cbb8] hover:bg-gray-50"
                    }`}
                  >
                    {item.action}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}