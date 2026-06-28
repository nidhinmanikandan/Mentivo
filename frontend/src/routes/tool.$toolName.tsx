import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import ToolTree from "@/components/ToolTree";
import ToolResources from "@/components/ToolResources";

import { api } from "@/services/api";

export const Route = createFileRoute("/tool/$toolName")({
  component: ToolRoadmapPage,
});

function ToolRoadmapPage() {
  const { toolName } = Route.useParams();

  const [toolData, setToolData] = useState<any | null>(null);
  const [completedSkills, setCompletedSkills] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<any[]>([]);
  const [expandedNode, setExpandedNode] = useState<string | null>(null);

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

  const toggleNode = (id: string) => {
    if (expandedNode === id) {
      setExpandedNode(null);
    } else {
      setExpandedNode(id);
    }
  };

  useEffect(() => {
    api.getToolRoadmap(toolName).then((data) => {
      setToolData(data);
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
  const totalNodes = toolData?.journey?.length ?? 0;

  const progress = totalNodes > 0 ? Math.round((completedSkills.length / totalNodes) * 100) : 0;

  //const nextSkill = roadmap.find((step) => !completedSkills.includes(step.skill));

  console.log("Tool:", toolData);
  console.log("Completed:", completedSkills);
  console.log("Progress:", progress);
  //console.log("Next Skill:", nextSkill);

  const unlockedChallenges = challenges.filter((challenge) =>
    completedSkills.includes(challenge.afterSkill),
  );

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-foreground">{toolName} Learning Roadmap</h1>

          <p className="mt-3 text-lg text-muted-foreground">{toolData?.overview.tagline}</p>
        </div>

        {/* Overview */}
        {toolData && (
          <div className="mb-8 rounded-2xl bg-card p-6 border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-violet-400">{toolData.overview.category}</p>

                <h2 className="text-3xl font-bold mt-1">{toolData.overview.title}</h2>

                <p className="mt-3 text-muted-foreground">{toolData.overview.description}</p>
              </div>
            </div>

            <div className="flex gap-6 mt-6 flex-wrap">
              <div>
                <p className="text-xs text-muted-foreground">Difficulty</p>

                <p className="font-semibold">{toolData.overview.difficulty}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Estimated Time</p>

                <p className="font-semibold">{toolData.overview.estimatedTime}</p>
              </div>
              <div className="mt-6">
                <p className="text-xs text-muted-foreground mb-2">Best For</p>

                <div className="flex flex-wrap gap-2">
                  {toolData.overview.bestFor.map((item: string) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-background text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs text-muted-foreground mb-2">Use Cases</p>

                <div className="flex flex-wrap gap-2">
                  {toolData.overview.useCases.map((item: string) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-background text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

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
            <p className="text-2xl font-bold">{toolData?.journey?.length ?? 0}</p>

            <p className="text-muted-foreground text-sm">Total Skills</p>
          </div>
        </div>

        {/* <div className="mb-10 rounded-3xl bg-card p-6 border border-border">
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
        </div> */}

        {/* Roadmap Steps */}
        {/* <div>
          <h2 className="text-xl font-semibold mb-4">Roadmap Steps</h2>
          {unlockedChallenges.length > 0 && (
            <div className="mb-8 rounded-2xl bg-card p-5">
              <h2 className="text-lg font-semibold mb-3">Project Challenge</h2>

              <p className="font-medium">{unlockedChallenges[0].title}</p>
            </div>
          )}

          <div className="space-y-4">
            {toolData?.journey?.map((step: any, index: number) => (
              <div
                key={index}
                onClick={() => toggleNode(step.id)}
                className="rounded-2xl bg-card p-5 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span>{expandedNode === step.id ? "▼" : "▶"}</span>

                    <h3 className="font-semibold">{step.title}</h3>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSkill(step.title);
                    }}
                    className="text-xl"
                  >
                    {completedSkills.includes(step.title) ? "✅" : "⬜"}
                  </button>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                {expandedNode === step.id && step.children && (
                  <div className="mt-5 ml-6 space-y-3">
                    {step.children.map((child: any, childIndex: number) => (
                      <div key={childIndex} className="rounded-xl bg-background p-4">
                        <p className="font-medium">{child.title}</p>

                        {child.description && (
                          <p className="text-sm text-muted-foreground mt-1">{child.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div> */}
        {/* Knowledge Map */}

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Knowledge Map</h2>

          <ToolTree tool={toolData} />
          <ToolResources resources={toolData.resources} />
        </div>
      </div>
    </DashboardLayout>
  );
}
