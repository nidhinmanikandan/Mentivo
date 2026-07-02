import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TrendingTools } from "@/components/dashboard/TrendingTools";

import { api } from "@/services/api";
import type { AiTool } from "@/types";

export const Route = createFileRoute("/ai-tools")({
  component: AiToolsPage,
});

export function AiToolsPage() {
  const [tools, setTools] = useState<AiTool[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recommendations")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTools(data);
      });
  }, []);

  return (
    <DashboardLayout>
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Discover AI Tools</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Explore trending tools and generate learning roadmaps for them.
        </p>
      </section>

      <TrendingTools tools={tools} />
    </DashboardLayout>
  );
}
