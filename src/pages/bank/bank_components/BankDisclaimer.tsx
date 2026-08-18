
export default function BankDisclaimer() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex gap-3">
        <div className="mt-0.5 text-lg">
          ⚠
        </div>

        <div>
          <h3 className="text-sm font-bold text-amber-900">
            授信補充資訊聲明
          </h3>

          <p className="mt-1 text-sm leading-6 text-amber-800">
            GreenFin 經驗值、分析指標與 Data Health
            僅作為授信補充資訊，不代表核貸建議、
            信用評等或信用保證。
          </p>

          <p className="mt-1 text-xs leading-5 text-amber-700">
            最終授信決策仍應依金融機構既有授信制度、
            聯徵資料、還款能力、擔保或信保條件及其他
            必要資訊進行判斷。
          </p>
        </div>
      </div>
    </div>
  );
}