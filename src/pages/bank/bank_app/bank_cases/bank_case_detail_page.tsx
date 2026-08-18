
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import BankSidebar from "../../bank_components/BankSidebar";
import BankTopbar from "../../bank_components/BankTopbar";

import { demoBankCases } from "../../bank_data/bank_mockData";

import BankDisclaimer from "../../bank_components/BankDisclaimer";
import BankAuthorizationCard from "../../bank_components/BankAuthorizationCard";
import BankIndicatorsSection from "../../bank_components/BankIndicatorsSection";
import BankDataHealthCard from "../../bank_components/BankDataHealthCard";
import BankDrillDownModal from "../../bank_components/BankDrillDownModal";
import BankCreateRequestModal from "../../bank_components/BankCreateRequestModal";

import type {
BankIndicator,
BankIndicatorKey,
} from "../../bank_types/bank_types";

import type {
BankRequest,
} from "../../bank_types/bank_request_types";

import {
useBankRequests,
} from "../../bank_context/BankRequestContext";





export default function BankCaseDetailPage() {
const [drillDownOpen, setDrillDownOpen] =
useState(false);

const [selectedIndicator, setSelectedIndicator] =
useState<BankIndicator | null>(null);

const [selectedTitle, setSelectedTitle] =
useState("");

const [selectedDescription, setSelectedDescription] =
useState("");

const [createRequestOpen, setCreateRequestOpen] =
useState(false);

const [requestSource, setRequestSource] =
useState<{
indicatorId: string | null;
evidenceId: string | null;
}>({
indicatorId: null,
evidenceId: null,
});

const {
createRequest,
} = useBankRequests();

const { id } = useParams();

const caseData = demoBankCases.find(
(item) => item.caseId === id
);

function handleDrillDown(
title: string,
description: string,
indicator: BankIndicator,
indicatorKey: BankIndicatorKey
) {
setSelectedTitle(title);
setSelectedDescription(description);
setSelectedIndicator(indicator);
setDrillDownOpen(true);
}

function handleCloseDrillDown() {
setDrillDownOpen(false);
setSelectedIndicator(null);
}

function handleOpenCreateRequest() {
setRequestSource({
indicatorId: null,
evidenceId: null,
});

setCreateRequestOpen(true);
}

function handleRequestCreated(
request: BankRequest
) {
console.log("建立補件需求：", request);

setCreateRequestOpen(false);
}

function handleCreateRequest(
request: BankRequest,
) {
createRequest(request);
}


function handleCloseCreateRequest() {
setCreateRequestOpen(false);
}
if (!caseData) {
return (
<div className="min-h-screen bg-slate-50">
<BankSidebar activePage="cases" />

<BankTopbar />

<main className="ml-64 pt-16">
<div className="mx-auto max-w-7xl px-8 py-8">
<div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
<h1 className="text-lg font-bold text-slate-900">
找不到案件
</h1>

<p className="mt-2 text-sm text-slate-500">
案件編號 {id} 不存在。
</p>

<Link
to="/bank/cases"
className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
>
返回案件管理
</Link>
</div>
</div>
</main>
</div>
);
}

return (
<div className="min-h-screen bg-slate-50">
<BankSidebar activePage="cases" />

<BankTopbar />

<main className="ml-64 pt-16">
<div className="mx-auto max-w-7xl px-8 py-8">

{/* Back */}
<Link
to="/bank/cases"
className="text-sm font-medium text-slate-500 hover:text-slate-900"
>
← 返回案件管理
</Link>

{/* Header */}
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between">

<div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
{caseData.caseId}
</div>

<h1 className="mt-2 text-2xl font-bold text-slate-900">
{caseData.farmerName}
</h1>

<p className="mt-1 text-sm text-slate-500">
{caseData.farmName}
</p>
</div>

<span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
已取得授權
</span>

</div>

<div className="mt-6 grid gap-5 md:grid-cols-4">

<Info
label="所在地"
value={caseData.location}
/>

<Info
label="主要作物"
value={caseData.crop}
/>

<Info
label="經營面積"
value={`${caseData.area} 公頃`}
/>

<Info
label="最後更新"
value={caseData.lastUpdated}
/>

</div>
</div>

<div className="mt-6 space-y-6">

<BankDisclaimer />

<BankAuthorizationCard
caseData={caseData}
/>

<BankIndicatorsSection
caseData={caseData}
onDrillDown={handleDrillDown}
/>

<BankDataHealthCard
items={caseData.dataHealth}
/>



</div>

{/* Drill Down Modal */}
<BankDrillDownModal
open={drillDownOpen}
title={selectedTitle}
description={selectedDescription}
indicator={selectedIndicator}
onClose={handleCloseDrillDown}
onCreateRequest={handleOpenCreateRequest}
/>
<BankCreateRequestModal
isOpen={createRequestOpen}
caseId={caseData.caseId}
farmerName={caseData.farmerName}
farmName={caseData.farmName}
indicatorId={
selectedIndicator?.id ?? null
}
evidenceId={null}
onClose={() => {
setCreateRequestOpen(false);
}}
onCreate={handleRequestCreated}
/>


</div>
</main>
</div>
);
}

function Info({
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
