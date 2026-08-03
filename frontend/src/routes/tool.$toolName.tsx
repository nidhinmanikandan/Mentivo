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
    async function loadRoadmap() {
      try {
        // Fetch all discovered tools
        const tools = await api.getTools();

        console.log("Route:", toolName);

        console.log(
          "Available tools:",
          tools.map((t: any) => t.name),
        );

        // Find the selected tool
        const selectedTool = tools.find(
          (t: any) =>
            t.name.trim().toLowerCase() === decodeURIComponent(toolName).trim().toLowerCase(),
        );

        if (!selectedTool) {
          throw new Error("Tool not found");
        }

        // Generate roadmap
        const roadmap = await api.getToolRoadmap(selectedTool);

        setTool(roadmap);
      } catch (err) {
        console.error(err);
      }
    }

    loadRoadmap();
  }, [toolName]);

  if (!tool) {
    return (
      <DashboardLayout>
        <div className="p-10">Generating roadmap...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <ToolRoadmapDashboard tool={tool} />
    </DashboardLayout>
  );
}
