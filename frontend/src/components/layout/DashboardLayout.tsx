import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-[240px]">
        <Topbar />
        <main className="px-8 pb-12">{children}</main>
      </div>
    </div>
  );
}
