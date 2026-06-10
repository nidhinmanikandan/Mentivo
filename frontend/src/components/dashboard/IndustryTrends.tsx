import { motion } from "motion/react";
import { Sparkles, User, Box } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { IndustryTrend } from "@/types";

const iconMap = { sparkle: Sparkles, user: User, box: Box };

export function IndustryTrends({ trends }: { trends: IndustryTrend[] }) {
  return (
    <SectionCard title="Industry Trends" action="View all">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {trends.map((t) => {
          const Icon = iconMap[t.icon as keyof typeof iconMap] ?? Sparkles;
          return (
            <motion.div
              key={t.id}
              whileHover={{ y: -2 }}
              className="rounded-2xl bg-card-elevated p-4 cursor-pointer flex flex-col sm:flex-col lg:flex-row lg:items-center gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-background/40 grid place-items-center shrink-0">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-foreground mb-1">{t.title}</p>
                <p className="text-[11px] leading-relaxed text-muted-foreground mb-2">{t.description}</p>
                <span className="text-[11px] text-muted-foreground/80">{t.category}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionCard>
  );
}
