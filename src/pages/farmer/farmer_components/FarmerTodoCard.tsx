import { useNavigate } from "react-router-dom";

type TodoCardProps = {
  type: string;
  title: string;
  description: string;
  action: string;
};

export default function TodoCard({
  type,
  title,
  description,
  action,
}: TodoCardProps) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (title === "申貸用途資料缺失") {
      navigate("/farmer/upload?type=loan-purpose");
      return;
    }

    if (title === "交易紀錄即將到期") {
      navigate("/farmer/upload?type=transaction");
      return;
    }

    navigate("/farmer/my-data");
  };

  return (
    <div
      className={`todo-card ${
        type === "danger" ? "warning" : ""
      }`}
    >
      <div
        className={`todo-icon ${
          type === "warning" ? "yellow" : ""
        }`}
      >
        !
      </div>

      <div>
        <strong>{title}</strong>

        <p>{description}</p>

        <button
          type="button"
          onClick={handleAction}
          className={`small-action ${
            type === "danger" ? "danger" : ""
          }`}
        >
          {action} →
        </button>
      </div>
    </div>
  );
}