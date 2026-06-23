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
  const [completedSkills, setCompletedSkills] = useState<string[]>([]);

  useEffect(() => {
    api.getToolRoadmap(toolName).then((data) => {
      setRoadmap(data.roadmap);
    });
  }, [toolName]);
  const progress =
    roadmap.length > 0 ? Math.round((completedSkills.length / roadmap.length) * 100) : 0;

  const nextSkill = roadmap.find((step) => !completedSkills.includes(step.skill));

  console.log("Roadmap:", roadmap);
  console.log("Completed:", completedSkills);
  console.log("Progress:", progress);
  console.log("Next Skill:", nextSkill);

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
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-2 text-sm text-muted-foreground">{progress}% Completed</p>
        </div>

        <div className="mb-10 rounded-2xl bg-card p-5">
          <h2 className="text-lg font-semibold mb-3">AI Mentor</h2>

          {nextSkill ? (
            <>
              <p className="font-medium">Next Skill: {nextSkill.skill}</p>

              <p className="mt-2 text-sm text-muted-foreground">
                Focus on this before moving to the next topic.
              </p>
            </>
          ) : (
            <p>🎉 Roadmap Completed!</p>
          )}
        </div>

        {/* Roadmap Steps */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Roadmap Steps</h2>

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div key={index} className="rounded-2xl bg-card p-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{step.skill}</h3>

                  <button
                    onClick={() =>
                      setCompletedSkills((prev) =>
                        prev.includes(step.skill)
                          ? prev.filter((s) => s !== step.skill)
                          : [...prev, step.skill],
                      )
                    }
                    className="text-xl"
                  >
                    {completedSkills.includes(step.skill) ? "✅" : "⬜"}
                  </button>
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
