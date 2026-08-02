import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col pl-[240px]">
        <Topbar />

        <main className="flex-1 min-h-0 overflow-hidden px-8 pb-12">{children}</main>
      </div>
    </div>
  );
}
