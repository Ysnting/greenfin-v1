import type {
  GreenFinBankCase,
  BankIndicator,
    BankIndicatorKey,
} from "../bank_types/bank_types";

import BankIndicatorCard from "./BankIndicatorCard";

interface BankIndicatorsSectionProps {
  caseData: GreenFinBankCase;

  onDrillDown: (
    title: string,
    description: string,
    indicator: BankIndicator,
    indicatorKey: BankIndicatorKey
  ) => void;
}

export default function BankIndicatorsSection({
  caseData,
  onDrillDown,
}: BankIndicatorsSectionProps) {
  return (
    <section>

      {/* ========================================================
          Section Header
      ========================================================= */}

      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">
          四大分析指標
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          依據目前已驗證資料計算之授信補充資訊
        </p>
      </div>

      {/* ========================================================
          Indicator Cards
      ========================================================= */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {/* ======================================================
            1. 資料完整度
        ======================================================= */}

        <BankIndicatorCard
          title="資料完整度"
          description="融資情境所需資料是否齊全"
          indicator={
            caseData.indicators.dataCompleteness
          }
          onDrillDown={() =>
            onDrillDown(
              "資料完整度",
              "融資情境所需資料是否齊全",
              caseData.indicators.dataCompleteness,
              "dataCompleteness"
            )
          }
        />

        {/* ======================================================
            2. 資料可信度
        ======================================================= */}

        <BankIndicatorCard
          title="資料可信度"
          description="資料來源是否可查核、有效且一致"
          indicator={
            caseData.indicators.dataCredibility
          }
          onDrillDown={() =>
            onDrillDown(
              "資料可信度",
              "資料來源是否可查核、有效且一致",
              caseData.indicators.dataCredibility,
              "dataCredibility"
            )
          }
        />

        {/* ======================================================
            3. 經營成熟度
        ======================================================= */}

        <BankIndicatorCard
          title="經營成熟度"
          description="是否具持續且可追溯的經營紀錄"
          indicator={
            caseData.indicators.operationalMaturity
          }
          onDrillDown={() =>
            onDrillDown(
              "經營成熟度",
              "是否具持續且可追溯的經營紀錄",
              caseData.indicators.operationalMaturity,
              "operationalMaturity"
            )
          }
        />

        {/* ======================================================
            4. 綠色成熟度
        ======================================================= */}

        <BankIndicatorCard
          title="綠色成熟度"
          description="綠色行動是否持續且具有足夠證據"
          indicator={
            caseData.indicators.greenMaturity
          }
          onDrillDown={() =>
            onDrillDown(
              "綠色成熟度",
              "綠色行動是否持續且具有足夠證據",
              caseData.indicators.greenMaturity,
              "greenMaturity"
            )
          }
        />

      </div>
    </section>
  );
}