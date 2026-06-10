import { motion } from "motion/react";
import { Github, Rocket, Newspaper, MessageSquare, Radio } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { LiveTrend } from "@/types";

const sourceMeta: Record<LiveTrend["source"], { icon: React.ComponentType<{ className?: string }>; bg: string }> = {
  "GitHub": { icon: Github, bg: "from-zinc-700 to-zinc-900" },
  "Product Hunt": { icon: Rocket, bg: "from-orange-500 to-red-500" },
  "Hacker News": { icon: MessageSquare, bg: "from-amber-500 to-orange-600" },
  "AI Newsletter": { icon: Newspaper, bg: "from-blue-500 to-indigo-600" },
};

export function LiveTrendsFeed({ trends }: { trends: LiveTrend[] }) {
  return (
    <SectionCard
      title="Real-Time Trends"
      action="Refresh"
      icon={
        <div className="flex items-center gap-1.5 mr-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-[11px] text-muted-foreground flex items-center gap-1"><Radio className="h-3 w-3" /> Live</span>
        </div>
      }
    >
      <div className="space-y-2.5">
        {trends.map((t, i) => {
          const meta = sourceMeta[t.source];
          const Icon = meta.icon;
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-card-elevated p-3.5 cursor-pointer flex items-start gap-3"
            >
              <div className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${meta.bg} grid place-items-center`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{t.source}</span>
                  <span className="text-[10px] text-muted-foreground/60">•</span>
                  <span className="text-[10px] text-muted-foreground">{t.meta}</span>
                </div>
                <p className="text-[13px] font-semibold text-foreground leading-tight mb-1">{t.title}</p>
                <p className="text-[11px] text-muted-foreground leading-snug">{t.summary}</p>
              </div>
            </motion.div>
          );
        })}
        <p className="text-[10px] text-muted-foreground/70 text-center pt-1">✦ AI-summarized from live sources</p>
      </div>
    </SectionCard>
  );
}
