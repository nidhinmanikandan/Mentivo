import { motion } from "motion/react";
import { Check, Plus, Target } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { SkillGap } from "@/types";

const priorityColor = {
  High: "bg-rose-500/15 text-rose-300",
  Medium: "bg-amber-500/15 text-amber-300",
  Low: "bg-emerald-500/15 text-emerald-300",
};

export function SkillGapAnalysis({ gap }: { gap: SkillGap }) {
  return (
    <SectionCard
      title="Skill Gap Analysis"
      action="Analyze"
      icon={
        <div className="h-8 w-8 rounded-lg bg-card-elevated grid place-items-center">
          <Target className="h-4 w-4 text-rose-300" />
        </div>
      }
    >
      <div className="rounded-2xl bg-card-elevated p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] text-muted-foreground">
            Match score for <span className="text-foreground font-medium">{gap.target}</span>
          </p>
          <p className="text-[18px] font-semibold text-foreground">{gap.matchScore}%</p>
        </div>
        <div className="h-[6px] rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${gap.matchScore}%` }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-rose-400 to-amber-300 rounded-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[12px] text-muted-foreground mb-2">Current skills</p>
        <div className="flex flex-wrap gap-1.5">
          {gap?.current?.map((s) => (
            <span
              key={s}
              className="text-[11px] text-foreground bg-card-elevated rounded-md px-2 py-1 flex items-center gap-1"
            >
              <Check className="h-3 w-3 text-success" /> {s}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[12px] text-muted-foreground mb-2">Skills to learn</p>
        <div className="space-y-2">
          {gap.missing.length === 0 ? (
            <div className="rounded-xl bg-card-elevated px-3 py-4 text-center">
              <p className="text-success font-medium">🎉 No skill gaps found</p>
            </div>
          ) : (
            <div className="space-y-2">
              {gap.missing.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl bg-card-elevated px-3 py-2.5"
                >
                  <div className="h-6 w-6 rounded-full bg-background/40 grid place-items-center">
                    <Plus className="h-3 w-3 text-muted-foreground" />
                  </div>

                  <p className="flex-1 text-[13px] text-foreground">{m.name}</p>

                  <span
                    className={`text-[10px] rounded-md px-2 py-0.5 ${priorityColor[m.priority]}`}
                  >
                    {m.priority}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}
