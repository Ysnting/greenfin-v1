export default function BankTopbar() {
  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-16 border-b border-slate-200 bg-white">
      <div className="flex h-full items-center justify-between px-8">
        <div>
          <div className="text-sm font-semibold text-slate-900">
            銀行端
          </div>

          <div className="text-xs text-slate-500">
            授信補充資料查驗平台
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-medium text-slate-800">
              王小姐
            </div>

            <div className="text-xs text-slate-500">
              GreenFin Demo Bank
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
            王
          </div>
        </div>
      </div>
    </header>
  );
}