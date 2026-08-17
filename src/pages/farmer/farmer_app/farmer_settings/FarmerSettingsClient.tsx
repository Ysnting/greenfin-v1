import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface GreenFinDemoState {
  farmerProfile: {
    name: string;
    farmName: string;
    location: string;
  };
  settings: {
    emailNotification: boolean;
    dataReminder: boolean;
    language: string;
  };
  session: {
    loggedIn: boolean;
  };
}

const DEFAULT_FARMER_NAME = "陳小農";
const DEFAULT_FARM_NAME = "快樂農場";
const DEFAULT_LOCATION = "桃園市";
const DEFAULT_LANGUAGE = "繁體中文";

const STORAGE_KEY = "greenfin-demo-state";

export default function FarmerSettingsClient() {
  const navigate = useNavigate();

  // =========================================================
  // Farmer Profile
  // =========================================================

  const [farmerName, setFarmerName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");

  // =========================================================
  // Settings
  // =========================================================

  const [emailNotification, setEmailNotification] = useState(true);
  const [dataReminder, setDataReminder] = useState(true);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  // =========================================================
  // UI State
  // =========================================================

  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");

  // =========================================================
  // Edit State
  // =========================================================

  const [editFarmerName, setEditFarmerName] =
    useState(DEFAULT_FARMER_NAME);

  const [editFarmName, setEditFarmName] =
    useState(DEFAULT_FARM_NAME);

  const [editLocation, setEditLocation] =
    useState(DEFAULT_LOCATION);

  // =========================================================
  // 儲存目前 Demo State
  // =========================================================

  const saveCurrentState = (
    nextFarmerName = farmerName,
    nextFarmName = farmName,
    nextLocation = location,
    nextEmailNotification = emailNotification,
    nextDataReminder = dataReminder,
    nextLanguage = language
  ) => {
    const state: GreenFinDemoState = {
      farmerProfile: {
        name: nextFarmerName,
        farmName: nextFarmName,
        location: nextLocation,
      },

      settings: {
        emailNotification: nextEmailNotification,
        dataReminder: nextDataReminder,
        language: nextLanguage,
      },

      session: {
        loggedIn: true,
      },
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  };

  // =========================================================
  // 初始化
  // 從 localStorage 讀取 Demo State
  // =========================================================

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const data: Partial<GreenFinDemoState> =
          JSON.parse(saved);

        setFarmerName(
          data.farmerProfile?.name ??
            DEFAULT_FARMER_NAME
        );

        setFarmName(
          data.farmerProfile?.farmName ??
            DEFAULT_FARM_NAME
        );

        setLocation(
          data.farmerProfile?.location ??
            DEFAULT_LOCATION
        );

        setEmailNotification(
          data.settings?.emailNotification ?? true
        );

        setDataReminder(
          data.settings?.dataReminder ?? true
        );

        setLanguage(
          data.settings?.language ??
            DEFAULT_LANGUAGE
        );
      } catch (error) {
        console.error(
          "GreenFin Demo State 讀取失敗",
          error
        );

        setFarmerName(DEFAULT_FARMER_NAME);
        setFarmName(DEFAULT_FARM_NAME);
        setLocation(DEFAULT_LOCATION);
        setEmailNotification(true);
        setDataReminder(true);
        setLanguage(DEFAULT_LANGUAGE);
      }
    } else {
      setFarmerName(DEFAULT_FARMER_NAME);
      setFarmName(DEFAULT_FARM_NAME);
      setLocation(DEFAULT_LOCATION);
      setEmailNotification(true);
      setDataReminder(true);
      setLanguage(DEFAULT_LANGUAGE);
    }

    setIsLoaded(true);
  }, []);

  // =========================================================
  // 開始編輯基本資料
  // =========================================================

  const handleEditProfile = () => {
    setEditFarmerName(farmerName);
    setEditFarmName(farmName);
    setEditLocation(location);

    setSavedMessage("");
    setIsEditingProfile(true);
  };

  // =========================================================
  // 取消編輯
  // =========================================================

  const handleCancelEdit = () => {
    setIsEditingProfile(false);
    setSavedMessage("");
  };

  // =========================================================
  // 儲存基本資料
  // =========================================================

  const handleSaveProfile = () => {
    const nextFarmerName =
      editFarmerName.trim();

    const nextFarmName =
      editFarmName.trim();

    const nextLocation =
      editLocation.trim();

    if (
      !nextFarmerName ||
      !nextFarmName ||
      !nextLocation
    ) {
      setSavedMessage(
        "請完整填寫基本資料"
      );

      return;
    }

    setFarmerName(nextFarmerName);
    setFarmName(nextFarmName);
    setLocation(nextLocation);

    saveCurrentState(
      nextFarmerName,
      nextFarmName,
      nextLocation,
      emailNotification,
      dataReminder,
      language
    );

    setIsEditingProfile(false);
    setSavedMessage("基本資料已更新");

    window.setTimeout(() => {
      setSavedMessage("");
    }, 3000);
  };

  // =========================================================
  // Demo 尚未載入
  // =========================================================

  if (!isLoaded) {
    return (
      <div className="authorization-client space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-500">
          載入設定中...
        </div>
      </div>
    );
  }

  // =========================================================
  // Render
  // =========================================================

  return (
    <div className="authorization-client space-y-6">

      {/* =====================================================
          Account & Basic Info
      ====================================================== */}

      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm transition duration-200 hover:border-[#b8cbb8]">

        <div className="border-b border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            帳號與基本資訊
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            管理您的 GreenFin 帳號基本設定。
          </p>
        </div>

        <div className="space-y-5 p-5">

          {!isEditingProfile ? (
            <>
              {/* 顯示基本資料 */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    小農姓名
                  </label>

                  <p className="mt-1 font-medium text-gray-900">
                    {farmerName}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    農場名稱
                  </label>

                  <p className="mt-1 font-medium text-gray-900">
                    {farmName}
                  </p>
                </div>

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    所在地
                  </label>

                  <p className="mt-1 font-medium text-gray-900">
                    {location}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="rounded-xl border border-[var(--border,#e5e7eb)] px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 hover:border-[#b8cbb8] hover:bg-gray-50"
                >
                  編輯基本資料
                </button>

                {savedMessage && (
                  <span
                    className={`text-sm font-medium ${
                      savedMessage.includes("請")
                        ? "text-red-600"
                        : "text-green-700"
                    }`}
                  >
                    {savedMessage.includes("請")
                      ? "!"
                      : "✓"}{" "}
                    {savedMessage}
                  </span>
                )}

              </div>
            </>
          ) : (
            <>
              {/* 編輯基本資料 */}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    小農姓名
                  </label>

                  <input
                    type="text"
                    value={editFarmerName}
                    onChange={(event) =>
                      setEditFarmerName(
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#8eaa91] focus:ring-2 focus:ring-[#8eaa91]/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    農場名稱
                  </label>

                  <input
                    type="text"
                    value={editFarmName}
                    onChange={(event) =>
                      setEditFarmName(
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#8eaa91] focus:ring-2 focus:ring-[#8eaa91]/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-[#7c857e]">
                    所在地
                  </label>

                  <input
                    type="text"
                    value={editLocation}
                    onChange={(event) =>
                      setEditLocation(
                        event.target.value
                      )
                    }
                    className="mt-2 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#8eaa91] focus:ring-2 focus:ring-[#8eaa91]/20"
                  />
                </div>

              </div>

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="rounded-xl bg-[#55785a] px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-[#46684b]"
                >
                  儲存變更
                </button>

                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 hover:bg-gray-50"
                >
                  取消
                </button>

              </div>
            </>
          )}

        </div>
      </section>

      {/* =====================================================
          Notifications
      ====================================================== */}

      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm transition duration-200 hover:border-[#b8cbb8]">

        <div className="border-b border-gray-100 p-5">

          <h2 className="text-lg font-semibold text-gray-900">
            通知設定
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            選擇您希望接收哪些平台通知。
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          {/* Important Notification */}

          <div className="flex items-center justify-between p-5 transition duration-200 hover:bg-gray-50/50">

            <div>
              <p className="font-medium text-gray-900">
                重要通知
              </p>

              <p className="mt-1 text-sm text-[#7c857e]">
                接收授權、資料驗證與重要系統通知。
              </p>
            </div>

            <button
              type="button"
              aria-label="切換重要通知"
              aria-pressed={emailNotification}
              onClick={() => {
                const nextValue =
                  !emailNotification;

                setEmailNotification(
                  nextValue
                );

                saveCurrentState(
                  farmerName,
                  farmName,
                  location,
                  nextValue,
                  dataReminder,
                  language
                );
              }}
              className={`relative h-6 w-11 rounded-full transition duration-200 ${
                emailNotification
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition duration-200 ${
                  emailNotification
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

          {/* Data Reminder */}

          <div className="flex items-center justify-between p-5 transition duration-200 hover:bg-gray-50/50">

            <div>
              <p className="font-medium text-gray-900">
                資料到期提醒
              </p>

              <p className="mt-1 text-sm text-[#7c857e]">
                當資料即將到期時提醒您更新。
              </p>
            </div>

            <button
              type="button"
              aria-label="切換資料到期提醒"
              aria-pressed={dataReminder}
              onClick={() => {
                const nextValue =
                  !dataReminder;

                setDataReminder(nextValue);

                saveCurrentState(
                  farmerName,
                  farmName,
                  location,
                  emailNotification,
                  nextValue,
                  language
                );
              }}
              className={`relative h-6 w-11 rounded-full transition duration-200 ${
                dataReminder
                  ? "bg-green-600"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white transition duration-200 ${
                  dataReminder
                    ? "left-6"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>
      </section>

      {/* =====================================================
          Language / Display
      ====================================================== */}

      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm transition duration-200 hover:border-[#b8cbb8]">

        <div className="border-b border-gray-100 p-5">

          <h2 className="text-lg font-semibold text-gray-900">
            顯示設定
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            管理平台的顯示方式。
          </p>

        </div>

        <div className="p-5">

          <label
            htmlFor="language"
            className="text-xs font-medium text-[#7c857e]"
          >
            語言
          </label>

          <select
            id="language"
            value={language}
            onChange={(event) => {
              const nextLanguage =
                event.target.value;

              setLanguage(nextLanguage);

              saveCurrentState(
                farmerName,
                farmName,
                location,
                emailNotification,
                dataReminder,
                nextLanguage
              );
            }}
            className="mt-2 block w-full max-w-sm rounded-xl border border-[var(--border,#e5e7eb)] px-3 py-2 text-sm text-gray-900 focus:border-[#b8cbb8] focus:outline-none"
          >
            <option value="繁體中文">
              繁體中文
            </option>
          </select>

        </div>
      </section>

      {/* =====================================================
          Data Privacy
      ====================================================== */}

      <section className="overflow-hidden rounded-2xl border border-[var(--border,#e5e7eb)] bg-white shadow-sm transition duration-200 hover:border-[#b8cbb8]">

        <div className="border-b border-gray-100 p-5">

          <h2 className="text-lg font-semibold text-gray-900">
            資料與隱私
          </h2>

          <p className="mt-1 text-sm text-[#7c857e]">
            查看您的資料使用與授權相關設定。
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          {/* 授權管理 */}

          <Link
            to="/farmer/authorization"
            className="flex w-full items-center justify-between p-5 text-left transition duration-200 hover:bg-gray-50/50"
          >
            <div>
              <p className="font-medium text-gray-900">
                授權管理
              </p>

              <p className="mt-1 text-sm text-[#7c857e]">
                查看及管理金融機構的資料授權。
              </p>
            </div>

            <span className="text-gray-400">
              →
            </span>
          </Link>

          {/* 資料調閱紀錄 */}

          <Link
            to="/farmer/my-data"
            className="flex w-full items-center justify-between p-5 text-left transition duration-200 hover:bg-gray-50/50"
          >
            <div>
              <p className="font-medium text-gray-900">
                資料調閱紀錄
              </p>

              <p className="mt-1 text-sm text-[#7c857e]">
                查看哪些機構曾經查閱您的資料。
              </p>
            </div>

            <span className="text-gray-400">
              →
            </span>
          </Link>

        </div>
      </section>

      {/* =====================================================
          DEMO CONTROL
      ====================================================== */}

      <section className="overflow-hidden rounded-2xl border border-[#d8e2d8] bg-[#f7faf7] shadow-sm">

        <div className="border-b border-[#e3ebe3] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e4eee4] text-[#55785a]">
              ⚙
            </div>

            <div>

              <h2 className="text-lg font-semibold text-gray-900">
                DEMO CONTROL
              </h2>

              <p className="mt-1 text-sm text-[#7c857e]">
                清除目前瀏覽器保存的狀態，回到初始假資料。
              </p>

            </div>

          </div>

        </div>

        <div className="p-5">

          <button
            type="button"
            onClick={() => {
              const confirmed =
                window.confirm(
                  "確定要重設 Demo 嗎？\n目前所有瀏覽器保存的 Demo 變更都會被清除。"
                );

              if (!confirmed) {
                return;
              }

              localStorage.removeItem(
                STORAGE_KEY
              );

              window.location.reload();
            }}
            className="rounded-xl border border-[#b8cbb8] bg-white px-4 py-2 text-sm font-medium text-[#55785a] transition duration-200 hover:bg-[#eef5ee]"
          >
            重設 Demo
          </button>

        </div>
      </section>

      {/* =====================================================
          Logout
      ====================================================== */}

      <section className="rounded-2xl border border-red-200 bg-red-50 p-5 transition duration-200">

        <h2 className="font-semibold text-red-800">
          帳號操作
        </h2>

        <p className="mt-1 text-sm text-red-700">
          登出目前的 GreenFin Farmer Portal。
        </p>

        <button
          type="button"
          onClick={() => {
            const confirmed =
              window.confirm(
                "確定要登出嗎？"
              );

            if (!confirmed) {
              return;
            }

            // 清除 Demo 登入狀態
            localStorage.removeItem(
              STORAGE_KEY
            );

            // React Router 導回 Landing Page
            navigate("/");
          }}
          className="mt-4 rounded-xl border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm transition duration-200 hover:bg-red-50"
        >
          登出
        </button>

      </section>

    </div>
  );
}