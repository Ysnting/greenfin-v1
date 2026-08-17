interface BankSidebarProps {
  activePage?: string;
}

export default function BankSidebar({
  activePage = "dashboard",
}: BankSidebarProps) {
  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      path: "/bank/dashboard",
    },
    {
      key: "cases",
      label: "案件管理",
      path: "/bank/cases",
    },
    {
      key: "authorization",
      label: "授權查驗",
      path: "/bank/authorization",
    },
    {
      key: "indicators",
      label: "四大分析指標",
      path: "/bank/indicators",
    },
    {
      key: "health",
      label: "Data Health",
      path: "/bank/health",
    },
    {
      key: "documents",
      label: "原始證據",
      path: "/bank/documents",
    },
    {
      key: "requests",
      label: "補件管理",
      path: "/bank/requests",
    },
    {
      key: "export",
      label: "授信補充資料包",
      path: "/bank/export",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white">
      <div className="flex h-16 items-center border-b border-slate-200 px-6">
        <div>
          <div className="text-lg font-bold text-slate-900">
            GreenFin
          </div>

          <div className="text-xs text-slate-500">
            Financial Institution
          </div>
        </div>
      </div>

      <nav className="space-y-1 p-4">
        {menuItems.map((item) => {
          const active = activePage === item.key;

          return (
            <a
              key={item.key}
              href={item.path}
              className={[
                "block rounded-lg px-4 py-3 text-sm font-medium transition",
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}