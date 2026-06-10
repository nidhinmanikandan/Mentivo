import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { Insight } from "@/types";

export function TodayInsight({ insight }: { insight: Insight }) {
  const { recommendation } = insight;
  return (
    <SectionCard
      title="Today's AI Insight"
      icon={
        <div className="h-8 w-8 rounded-lg bg-card-elevated grid place-items-center">
          <Lightbulb className="h-4 w-4 text-amber-300" />
        </div>
      }
    >
      <div className="px-1">
        <h3 className="text-[26px] leading-[1.2] font-semibold tracking-tight text-foreground">
          {insight.headline}
        </h3>

        <p className="mt-8 mb-3 text-[13px] text-muted-foreground">Recommended Action</p>

        <motion.div whileHover={{ y: -2 }} className="rounded-2xl bg-card-elevated p-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white font-bold">F</div>
            <div className="flex-1">
              <p className="text-[14px] font-semibold text-foreground">{recommendation.title}</p>
              <p className="text-[12px] text-muted-foreground leading-snug">{recommendation.description}</p>
            </div>
            <button className="rounded-xl bg-primary px-4 py-2 text-[12px] font-semibold text-primary-foreground hover:opacity-90 transition">
              Start Learning
            </button>
          </div>
        </motion.div>

        <div className="mt-5 grid grid-cols-3 gap-4 pt-1">
          <Stat label="Estimated Time" value={recommendation.estimatedTime} />
          <Stat label="Difficulty" value={recommendation.difficulty} />
          <Stat label="Category" value={recommendation.category} />
        </div>
      </div>
    </SectionCard>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-muted-foreground mb-1">{label}</p>
      <p className="text-[14px] font-medium text-foreground">{value}</p>
    </div>
  );
}
