import { useState } from "react";

import type {
  BankIndicator,
  BankIndicatorEvidence,
  BankDocumentDetail as BankDocumentDetailType,
} from "../bank_types/bank_types";

import BankEvidenceViewer from "./BankEvidenceViewer";
import BankDocumentDetail from "./BankDocumentDetail";

interface BankDrillDownModalProps {
  open: boolean;
  title: string;
  description: string;
  indicator: BankIndicator | null;
  onClose: () => void;
  onCreateRequest: () => void;
}

export default function BankDrillDownModal({
  open,
  title,
  description,
  indicator,
  onClose,
  onCreateRequest,
}: BankDrillDownModalProps) {
  const [selectedEvidence, setSelectedEvidence] =
  useState<BankIndicatorEvidence | null>(null);

const [evidenceViewerOpen, setEvidenceViewerOpen] =
  useState(false);

const [documentDetailOpen, setDocumentDetailOpen] =
  useState(false);

const [selectedDocument, setSelectedDocument] =
  useState<BankDocumentDetailType | null>(null);

  if (!open || !indicator) {
    return null;
  }

  function handleViewEvidence(
    evidence: BankIndicatorEvidence
  ) {
    setSelectedEvidence(evidence);
    setEvidenceViewerOpen(true);
  }

  function handleCloseEvidenceViewer() {
    setEvidenceViewerOpen(false);
    setSelectedEvidence(null);
  }
  function handleViewDocument() {
  if (!selectedEvidence?.document) {
    return;
  }

  setSelectedDocument(selectedEvidence.document);
  setEvidenceViewerOpen(false);
  setDocumentDetailOpen(true);
}

  return (
    <>
      {/* Drill-down Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
        onClick={onClose}
      >
        <div
          className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {title}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {description}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              ✕
            </button>
          </div>

          {/* Score */}
          <div className="border-b border-slate-100 px-6 py-6">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-bold text-slate-900">
                {indicator.score}
              </span>

              <span className="mb-2 text-sm text-slate-400">
                / 100
              </span>

              <span className="mb-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {indicator.level}
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-800"
                style={{
                  width: `${indicator.score}%`,
                }}
              />
            </div>

            <div className="mt-4">
              <div className="text-xs font-medium text-slate-400">
                判定說明
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-700">
                {indicator.reason}
              </p>
            </div>
          </div>

          {/* Evidence */}
          <div className="px-6 py-6">
            <h3 className="text-sm font-bold text-slate-900">
              查核依據
            </h3>

            <div className="mt-4 space-y-3">
              {indicator.evidences.map((evidence) => (
                <EvidenceRow
                  key={evidence.id}
                  evidence={evidence}
                  onViewEvidence={() =>
                    handleViewEvidence(evidence)
                  }
                />
              ))}
            </div>
          </div>

          {/* Rule */}
          <div className="border-t border-slate-100 bg-slate-50 px-6 py-6">
            <h3 className="text-sm font-bold text-slate-900">
              計算規則
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <div className="text-xs text-slate-400">
                  Rule Engine 版本
                </div>

                <div className="mt-1 text-sm font-semibold text-slate-700">
                  {indicator.ruleVersion}
                </div>
              </div>

              <div>
                <div className="text-xs text-slate-400">
                  生效日期
                </div>

                <div className="mt-1 text-sm font-semibold text-slate-700">
                  {indicator.effectiveDate}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
<div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
  <button
    type="button"
    onClick={onClose}
    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
  >
    關閉
  </button>

  <button
  type="button"
  onClick={onCreateRequest}
  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
>
  發起補件
</button>

          </div>
        </div>
      </div>

      {/* Evidence Viewer */}
      <BankEvidenceViewer
  open={evidenceViewerOpen}
  evidence={selectedEvidence}
  onClose={handleCloseEvidenceViewer}
  onViewDocument={handleViewDocument}
/>

<BankDocumentDetail
  open={documentDetailOpen}
  document={selectedDocument}
  sourceLevel={selectedEvidence?.sourceLevel}
  onClose={() => {
    setDocumentDetailOpen(false);
    setSelectedDocument(null);
    setEvidenceViewerOpen(true);
  }}
/>
    </>
  );
}

function EvidenceRow({
  evidence,
  onViewEvidence,
}: {
  evidence: BankIndicator["evidences"][number];
  onViewEvidence: () => void;
}) {
  const isWarning = evidence.status === "warning";
  const isFailed = evidence.status === "failed";

  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <span
            className={
              isFailed
                ? "text-red-500"
                : isWarning
                  ? "text-amber-500"
                  : "text-emerald-500"
            }
          >
            {isFailed ? "!" : isWarning ? "⚠" : "✓"}
          </span>

          <div>
            <div className="text-sm font-semibold text-slate-800">
              {evidence.label}
            </div>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {evidence.reason}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
          {evidence.sourceLevel}
        </span>
      </div>

      <button
        type="button"
        onClick={onViewEvidence}
        className="mt-3 text-xs font-semibold text-slate-600 hover:text-slate-900"
      >
        查看原始證據 →
      </button>
    </div>
  );
}