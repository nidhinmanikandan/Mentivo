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
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground">{toolName} Learning Roadmap</h1>

          <p className="mt-3 text-lg text-muted-foreground">Master {toolName} step by step.</p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Progress</h2>

          <div className="h-3 rounded-full bg-card-elevated overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500"
              style={{ width: "0%" }}
            />
          </div>

          <p className="mt-2 text-sm text-muted-foreground">0% Completed</p>
        </div>

        {/* Roadmap Steps */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Roadmap Steps</h2>

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div key={index} className="rounded-2xl bg-card p-5">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{step.skill}</h3>

                  <span className="text-sm text-muted-foreground">{step.duration}</span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{step.difficulty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
