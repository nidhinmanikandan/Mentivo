import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-visible bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col pl-[240px] overflow-visible">
        <Topbar />

        <main className="relative flex-1 min-h-screen overflow-visible px-8 pb-12">{children}</main>
      </div>
    </div>
  );
}
