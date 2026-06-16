import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

import { api } from "@/services/api";

export const Route = createFileRoute("/tool/$toolName")({
  component: ToolRoadmapPage,
});

function ToolRoadmapPage() {
  const { toolName } = Route.useParams();

  const [roadmap, setRoadmap] = useState<any[]>([]);

  useEffect(() => {
    api.getToolRoadmap(toolName).then((data) => {
      setRoadmap(data.roadmap);
    });
  }, [toolName]);

  return (
    <DashboardLayout>
      <div className="p-8 text-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">{toolName} Learning Roadmap</h1>

          <p className="text-muted-foreground mt-2">Master {toolName} step by step.</p>
        </div>

        <p>Items: {roadmap.length}</p>

        <div className="space-y-4 mt-6">
          {roadmap.map((step, index) => (
            <div key={index} className="rounded-2xl bg-card p-5">
              <div className="flex justify-between">
                <h3 className="font-semibold">{step.skill}</h3>

                <span>{step.duration}</span>
              </div>

              <p className="text-sm text-muted-foreground mt-2">{step.difficulty}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
