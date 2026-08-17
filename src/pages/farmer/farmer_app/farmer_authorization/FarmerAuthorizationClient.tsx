import { useEffect, useState } from "react";

import FarmerPendingAuthorizationCard from "../../farmer_components/FarmerPendingAuthorizationCard";
import FarmerActiveAuthorizationCard from "../../farmer_components/FarmerActiveAuthorizationCard";
import FarmerAccessLogTable from "../../farmer_components/FarmerAccessLogTable";

import {
  loadAuthorizationState,
  saveAuthorizationState,
} from "../../farmer_lib/farmer_authorizationStorage";

import type {
  Authorization,
  PendingRequest,
  AccessLog,
} from "../../farmer_types/farmer_authorization";

type Props = {
  initialPendingRequests: PendingRequest[];
  initialActiveAuthorizations: Authorization[];
  initialAccessLogs: AccessLog[];
};

export default function FarmerAuthorizationClient({
  initialPendingRequests,
  initialActiveAuthorizations,
  initialAccessLogs,
}: Props) {
  /*
   * ==========================
   * 初始 Demo 資料
   * ==========================
   */

  const defaultState = {
    pendingRequests: initialPendingRequests,
    activeAuthorizations: initialActiveAuthorizations,
    accessLogs: initialAccessLogs,
  };

  /*
   * ==========================
   * State
   * ==========================
   */

  const [pendingRequests, setPendingRequests] =
    useState<PendingRequest[]>(initialPendingRequests);

  const [activeAuthorizations, setActiveAuthorizations] =
    useState<Authorization[]>(initialActiveAuthorizations);

  const [accessLogs, setAccessLogs] =
    useState<AccessLog[]>(initialActiveAuthorizations ? initialActiveAuthorizations.length > 0 ? initialAccessLogs : initialAccessLogs : initialAccessLogs);

  const [isLoaded, setIsLoaded] = useState(false);

  /*
   * ==========================
   * 從 localStorage 載入授權資料
   * ==========================
   */

  useEffect(() => {
    const storedState = loadAuthorizationState(defaultState);

    setPendingRequests(storedState.pendingRequests);
    setActiveAuthorizations(storedState.activeAuthorizations);
    setAccessLogs(storedState.accessLogs);

    setIsLoaded(true);
  }, []);

  /*
   * ==========================
   * 保存到 localStorage
   * ==========================
   */

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    saveAuthorizationState({
      pendingRequests,
      activeAuthorizations,
      accessLogs,
    });
  }, [
    pendingRequests,
    activeAuthorizations,
    accessLogs,
    isLoaded,
  ]);

  /*
   * ==========================
   * 同意授權
   * ==========================
   */

  function approveAuthorization(request: PendingRequest) {
    const newAuthorization: Authorization = {
      id: `auth-${Date.now()}`,

      institutionName: request.institutionName,

      institutionType: request.institutionType,

      purpose: request.purpose,

      status: "active",

      startDate: request.startDate,

      endDate: request.endDate,

      dataScopes: request.dataScopes,

      createdAt: new Date().toLocaleString("zh-TW"),

      lastAccessedAt: "尚無調閱",
    };

    /*
     * 加入目前授權
     */

    setActiveAuthorizations((current) => [
      ...current,
      newAuthorization,
    ]);

    /*
     * 從待確認清單移除
     */

    setPendingRequests((current) =>
      current.filter(
        (item) => item.id !== request.id
      )
    );

    /*
     * 建立授權決策紀錄
     */

    const newLog: AccessLog = {
      id: `log-${Date.now()}`,

      accessedAt: new Date().toLocaleString("zh-TW"),

      institutionName: request.institutionName,

      userName: "小農本人",

      purpose: "授權決策",

      dataScopes: request.dataScopes,

      result: "已同意授權",
    };

    setAccessLogs((current) => [
      newLog,
      ...current,
    ]);
  }

  /*
   * ==========================
   * 拒絕授權
   * ==========================
   */

  function rejectAuthorization(request: PendingRequest) {
    /*
     * 從待確認清單移除
     */

    setPendingRequests((current) =>
      current.filter(
        (item) => item.id !== request.id
      )
    );

    /*
     * 建立拒絕紀錄
     */

    const newLog: AccessLog = {
      id: `log-${Date.now()}`,

      accessedAt: new Date().toLocaleString("zh-TW"),

      institutionName: request.institutionName,

      userName: "小農本人",

      purpose: "授權決策",

      dataScopes: request.dataScopes,

      result: "已拒絕",
    };

    setAccessLogs((current) => [
      newLog,
      ...current,
    ]);
  }

  /*
   * ==========================
   * 撤回授權
   * ==========================
   */

  function revokeAuthorization(
    authorization: Authorization
  ) {
    /*
     * 將授權狀態改為 revoked
     */

    setActiveAuthorizations((current) =>
      current.map((item) => {
        if (item.id !== authorization.id) {
          return item;
        }

        return {
          ...item,
          status: "revoked",
        };
      })
    );

    /*
     * 建立撤回紀錄
     */

    const newLog: AccessLog = {
      id: `log-${Date.now()}`,

      accessedAt: new Date().toLocaleString("zh-TW"),

      institutionName:
        authorization.institutionName,

      userName: "小農本人",

      purpose: "撤回授權",

      dataScopes: authorization.dataScopes,

      result: "已撤回",
    };

    setAccessLogs((current) => [
      newLog,
      ...current,
    ]);
  }

  /*
   * ==========================
   * 重設 Demo
   * ==========================
   */

  function resetDemo() {
    localStorage.removeItem(
      "greenfin_authorization_state"
    );

    setPendingRequests(
      initialPendingRequests
    );

    setActiveAuthorizations(
      initialActiveAuthorizations
    );

    setAccessLogs(
      initialAccessLogs
    );
  }

  /*
   * ==========================
   * 載入中
   * ==========================
   */

  if (!isLoaded) {
    return (
      <div className="authorization-loading">
        <div className="loading-spinner" />

        <p>
          正在載入授權資料...
        </p>
      </div>
    );
  }

  /*
   * ==========================
   * 目前有效授權數量
   * ==========================
   */

  const activeAuthorizationCount =
    activeAuthorizations.filter(
      (item) => item.status === "active"
    ).length;

  /*
   * ==========================
   * Render
   * ==========================
   */

  return (
    <div className="authorization-client">

      {/* ====================== */}
      {/* 待確認授權 */}
      {/* ====================== */}

      {pendingRequests.length > 0 && (
        <section>
          <div className="section-heading">
            <div>
              <span className="card-label">
                ACTION REQUIRED
              </span>

              <h2>
                待確認授權
              </h2>
            </div>

            <span className="section-count">
              {pendingRequests.length} 筆
            </span>
          </div>

          <div className="authorization-list">
            {pendingRequests.map((request) => (
              <FarmerPendingAuthorizationCard
                key={request.id}
                request={request}
                onApprove={() =>
                  approveAuthorization(request)
                }
                onReject={() =>
                  rejectAuthorization(request)
                }
              />
            ))}
          </div>
        </section>
      )}

      {/* ====================== */}
      {/* 沒有待確認 */}
      {/* ====================== */}

      {pendingRequests.length === 0 && (
        <section className="authorization-empty">
          <div className="authorization-empty-icon">
            ✓
          </div>

          <strong>
            目前沒有待確認的授權
          </strong>

          <p>
            所有授權請求都已完成處理。
          </p>
        </section>
      )}

      {/* ====================== */}
      {/* 目前授權 */}
      {/* ====================== */}

      <section>
        <div className="section-heading">
          <div>
            <span className="card-label">
              ACTIVE AUTHORIZATIONS
            </span>

            <h2>
              目前授權
            </h2>
          </div>

          <span className="section-count">
            {activeAuthorizationCount} 筆
          </span>
        </div>

        <div className="authorization-list">
          {activeAuthorizations.map(
            (authorization) => (
              <FarmerActiveAuthorizationCard
                key={authorization.id}
                authorization={authorization}
                onRevoke={() =>
                  revokeAuthorization(
                    authorization
                  )
                }
              />
            )
          )}
        </div>
      </section>

      {/* ====================== */}
      {/* 調閱紀錄 */}
      {/* ====================== */}

      <section>
        <FarmerAccessLogTable
          logs={accessLogs}
        />
      </section>

      {/* ====================== */}
      {/* Demo 控制 */}
      {/* ====================== */}

      <section className="demo-control">
        <div>
          <span className="card-label">
            DEMO CONTROL
          </span>

          <strong>
            重設授權 Demo
          </strong>

          <p>
            清除目前瀏覽器保存的授權狀態，
            回到初始假資料。
          </p>
        </div>

        <button
          type="button"
          onClick={resetDemo}
        >
          重設 Demo
        </button>
      </section>

      {/* ====================== */}
      {/* 法遵說明 */}
      {/* ====================== */}

      <section className="authorization-disclaimer">
        <strong>
          GreenFin 資料授權說明
        </strong>

        <p>
          本平台的授權機制用於控制資料的查閱範圍、
          目的與期間。授權資料僅作為授信補充資訊，
          不代表核貸承諾，也不取代金融機構內部的
          聯徵、風險評估及核貸決策。
        </p>
      </section>

    </div>
  );
}