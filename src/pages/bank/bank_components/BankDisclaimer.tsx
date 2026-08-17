export default function BankDisclaimer() {
  return (
    <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
      <div className="flex gap-3">
        <div className="text-lg">⚠</div>

        <div>
          <div className="font-semibold text-amber-900">
            授信補充資訊聲明
          </div>

          <p className="mt-1 text-sm leading-6 text-amber-800">
            經驗值、四大分析指標與 Data Health
            僅作為授信補充資訊，不代表信用評分、核貸建議或信用保證。
            最終授信判斷仍須依金融機構既有流程辦理。
          </p>
        </div>
      </div>
    </div>
  );
}