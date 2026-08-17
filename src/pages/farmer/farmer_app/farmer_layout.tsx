import type { ReactNode } from "react";

type FarmerLayoutProps = {
  children: ReactNode;
};

export default function FarmerLayout({
  children,
}: FarmerLayoutProps) {
  return (
    <div className="farmer-layout">
      {children}
    </div>
  );
}