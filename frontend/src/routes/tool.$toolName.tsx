import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { api } from "@/services/api";

export const Route =
  createFileRoute("/tool/$toolName")({
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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        {toolName} Roadmap
      </h1>

      <div className="space-y-4">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-card"
          >
            <h3 className="font-semibold">
              {step.skill}
            </h3>

            <p>{step.difficulty}</p>

            <p>{step.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}