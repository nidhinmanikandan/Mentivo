import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ToolRoadmapDashboard } from "@/components/dashboard/ToolRoadmapDashboard";
import { api } from "@/services/api";

export const Route = createFileRoute("/tool/$toolName")({
  component: ToolRoadmapPage,
});

function ToolRoadmapPage() {
  const { toolName } = Route.useParams();

  const [tool, setTool] = useState<any>(null);

  useEffect(() => {
    api.getToolRoadmap(toolName).then((data) => {
      setTool(data);
    });
  }, [toolName]);

  if (!tool) {
    return (
      <DashboardLayout>
        <div className="p-10">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ToolRoadmapDashboard tool={tool} />
    </DashboardLayout>
  );
}
