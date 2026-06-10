import { motion } from "motion/react";
import { Flame, Target, TrendingUp } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { ProgressStats } from "@/types";

const days = ["M", "T", "W", "T", "F", "S", "S"];

export function ProgressTracker({ stats }: { stats: ProgressStats }) {
  const completion = Math.round((stats.completedSteps / stats.totalSteps) * 100);

  return (
    <SectionCard title="Learning Progress" action="Details">
      <div className="grid grid-cols-3 gap-3 mb-5">
        <Stat icon={<Target className="h-3.5 w-3.5" />} label="Completed" value={`${stats.completedSteps}/${stats.totalSteps}`} accent="text-foreground" />
        <Stat icon={<Flame className="h-3.5 w-3.5" />} label="Streak" value={`${stats.currentStreak}d`} accent="text-amber-300" />
        <Stat icon={<TrendingUp className="h-3.5 w-3.5" />} label="Consistency" value={`${stats.consistencyScore}%`} accent="text-success" />
      </div>

      <div className="rounded-2xl bg-card-elevated p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] text-muted-foreground">Roadmap completion</p>
          <p className="text-[12px] font-medium text-foreground">{completion}%</p>
        </div>
        <div className="h-[6px] w-full rounded-full bg-muted overflow-hidden mb-5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 0.8 }}
            className="h-full bg-gradient-to-r from-success to-emerald-300 rounded-full"
          />
        </div>

        <p className="text-[12px] text-muted-foreground mb-2">This week</p>
        <div className="flex items-end justify-between gap-2 h-16">
          {stats.weeklyActivity.map((v, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="w-full rounded-md bg-gradient-to-t from-foreground/70 to-foreground"
              />
              <span className="text-[10px] text-muted-foreground">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

function Stat({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent: string }) {
  return (
    <div className="rounded-2xl bg-card-elevated p-3">
      <div className="flex items-center gap-1.5 text-muted-foreground mb-2">{icon}<span className="text-[11px]">{label}</span></div>
      <p className={`text-[18px] font-semibold tracking-tight ${accent}`}>{value}</p>
    </div>
  );
}
