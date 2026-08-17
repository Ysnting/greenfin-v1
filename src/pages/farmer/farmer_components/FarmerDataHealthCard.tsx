"use client";

import { useRouter } from "next/navigation";

type HealthItem = {
  id: string;
  category: string;
  status: string;
  title: string;
  message: string;
  action: string;
};

type DataHealthCardProps = {
  items: HealthItem[];
};

export default function DataHealthCard({
  items,
}: DataHealthCardProps) {
  const router = useRouter();

  const handleAction = (item: HealthItem) => {
    switch (item.id) {
      case "transaction":
        router.push("/upload?type=transaction");
        break;

      case "equipment":
        router.push("/upload?type=equipment");
        break;

      case "loan-purpose":
        router.push("/upload?type=loan-purpose");
        break;

      default:
        router.push("/data");
        break;
    }
  };

  return (
    <div className="health-card">
      {items.map((item) => (
        <div
          className="health-row"
          key={item.id}
        >
          <div className="health-category">
            <span
              className={`health-dot ${item.status}`}
            />

            <strong>
              {item.category}
            </strong>
          </div>

          <span className="health-message">
            {item.message}
          </span>

          {item.status !== "green" && (
            <button
              type="button"
              onClick={() => handleAction(item)}
              className={`small-action ${
                item.status === "red"
                  ? "danger"
                  : ""
              }`}
            >
              {item.action}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}