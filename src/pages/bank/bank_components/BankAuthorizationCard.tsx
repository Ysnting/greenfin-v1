import type { GreenFinBankCase } from "../bank_types/bank_types";

interface BankAuthorizationCardProps {
  caseData: GreenFinBankCase;
}

export default function BankAuthorizationCard({
  caseData,
}: BankAuthorizationCardProps) {
  const authorization = caseData.authorization;

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              授權查驗
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              確認小農是否已明確授權本金融機構查閱資料
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            已取得授權
          </span>
        </div>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-2">

        <InfoItem
          label="授權機構"
          value={authorization.institution}
        />

        <InfoItem
          label="授權目的"
          value={authorization.purpose}
        />

        <InfoItem
          label="授權開始"
          value={authorization.validFrom}
        />

        <InfoItem
          label="授權到期"
          value={authorization.validUntil}
        />

      </div>

      <div className="border-t border-slate-100 px-6 py-5">
        <h3 className="text-sm font-semibold text-slate-800">
          授權資料範圍
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {authorization.scopes.map((scope) => (
            <span
              key={scope}
              className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
            >
              ✓ {scope}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs text-slate-400">
        {label}
      </div>

      <div className="mt-1 text-sm font-semibold text-slate-800">
        {value}
      </div>
    </div>
  );
}