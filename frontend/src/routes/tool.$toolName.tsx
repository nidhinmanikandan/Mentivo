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
  const [challenges, setChallenges] = useState<any[]>([]);

  const toggleSkill = async (skillName: string) => {
    let updatedSkills;

    if (completedSkills.includes(skillName)) {
      updatedSkills = completedSkills.filter((skill) => skill !== skillName);
    } else {
      updatedSkills = [...completedSkills, skillName];
    }

    setCompletedSkills(updatedSkills);

    await fetch("http://localhost:5000/api/progress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tool: toolName,
        completedSkills: updatedSkills,
      }),
    });
  };

  useEffect(() => {
    api.getToolRoadmap(toolName).then((data) => {
      setRoadmap(data.roadmap);
    });

    fetch(`http://localhost:5000/api/progress/tool/${toolName}`)
      .then((res) => res.json())
      .then((data) => {
        setCompletedSkills(data.completedSkills || []);
      });
    fetch(`http://localhost:5000/api/challenge/${toolName}`)
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
      });
  }, [toolName]);
  const progress =
    roadmap.length > 0 ? Math.round((completedSkills.length / roadmap.length) * 100) : 0;

  const nextSkill = roadmap.find((step) => !completedSkills.includes(step.skill));

  console.log("Roadmap:", roadmap);
  console.log("Completed:", completedSkills);
  console.log("Progress:", progress);
  console.log("Next Skill:", nextSkill);

  const unlockedChallenges = challenges.filter((challenge) =>
    completedSkills.includes(challenge.afterSkill),
  );

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

        <div className="flex gap-8 mt-4">
          <div>
            <p className="text-2xl font-bold">{completedSkills.length}</p>

            <p className="text-muted-foreground text-sm">Completed</p>
          </div>

          <div>
            <p className="text-2xl font-bold">{roadmap.length}</p>

            <p className="text-muted-foreground text-sm">Total Skills</p>
          </div>
        </div>

        <div className="mb-10 rounded-3xl bg-card p-6 border border-border">
          <p className="text-sm text-violet-400 font-medium mb-2">CURRENT FOCUS</p>

          {nextSkill ? (
            <>
              <h2 className="text-2xl font-bold">{nextSkill.skill}</h2>

              <p className="text-muted-foreground mt-2">
                Complete this topic before moving to the next one.
              </p>

              <div className="mt-4 flex gap-4">
                <span className="px-3 py-1 rounded-full bg-background">{nextSkill.difficulty}</span>

                <span className="px-3 py-1 rounded-full bg-background">{nextSkill.duration}</span>
              </div>
            </>
          ) : (
            <h2 className="text-2xl font-bold">🎉 Roadmap Completed</h2>
          )}
        </div>

        {/* Roadmap Steps */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Roadmap Steps</h2>
          {unlockedChallenges.length > 0 && (
            <div className="mb-8 rounded-2xl bg-card p-5">
              <h2 className="text-lg font-semibold mb-3">Project Challenge</h2>

              <p className="font-medium">{unlockedChallenges[0].title}</p>
            </div>
          )}

          <div className="space-y-4">
            {roadmap.map((step, index) => (
              <div key={index} className="rounded-2xl bg-card p-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{step.skill}</h3>

                  <button onClick={() => toggleSkill(step.skill)} className="text-xl">
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
