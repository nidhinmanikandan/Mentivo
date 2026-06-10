import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { LearningRoadmap } from "@/components/dashboard/LearningRoadmap";
import { ProgressTracker } from "@/components/dashboard/ProgressTracker";
import { SkillGapAnalysis } from "@/components/dashboard/SkillGapAnalysis";
import { CareerGoalHero } from "@/components/dashboard/CareerGoalHero";
import { useDashboardData } from "@/hooks/useDashboardData";
import { api } from "@/services/api";
import type { CareerGoalOption, CareerGoalState } from "@/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Growth — Dashboard" },
      { name: "description", content: "Track your career goal, skill gaps, and learning roadmap." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { roadmap, progress, skillGap } = useDashboardData();
  const [goalOptions, setGoalOptions] = useState<CareerGoalOption[]>([]);
  const [goalState, setGoalState] = useState<CareerGoalState | null>(null);

  useEffect(() => {
    api.getCareerGoalOptions().then(setGoalOptions);
    api.getCareerGoalState().then(setGoalState);
  }, []);

  return (
    <DashboardLayout>
      <section className="pt-2 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Good Evening, Nidhin! <span className="inline-block">👋</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Here's what's happening in your growth journey today.
        </p>
      </section>

      {/* Hero */}
      {goalState && goalOptions.length > 0 && (
        <div className="mb-5">
          <CareerGoalHero
            state={goalState}
            options={goalOptions}
            onSelect={(id) => {
              const opt = goalOptions.find((o) => o.id === id);
              if (!opt) return;
              setGoalState((s) => (s ? { ...s, selected: id, nextSkill: s.nextSkill } : s));
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left: Skill Gap */}
        <div className="flex flex-col gap-5">
          {skillGap && <SkillGapAnalysis gap={skillGap} />}
        </div>

        {/* Right: Learning Roadmap + Progress */}
        <div className="flex flex-col gap-5">
          <LearningRoadmap items={roadmap} />
          {progress && <ProgressTracker stats={progress} />}
        </div>
      </div>
    </DashboardLayout>
  );
}
