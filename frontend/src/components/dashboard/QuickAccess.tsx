import { motion } from "motion/react";
import { LayoutGrid, TrendingUp, Map, Bookmark } from "lucide-react";
import { SectionCard } from "./SectionCard";

const actions = [
  { label: "AI Tools", icon: LayoutGrid },
  { label: "Trends", icon: TrendingUp },
  { label: "Roadmaps", icon: Map },
  { label: "Bookmarks", icon: Bookmark },
];

export function QuickAccess() {
  return (
    <SectionCard title="Quick Access">
      <div className="grid grid-cols-4 gap-2">
        {actions.map((a) => (
          <motion.button
            key={a.label}
            whileHover={{ y: -2 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-card-elevated py-3 text-[12px] font-medium text-foreground hover:bg-accent transition"
          >
            <a.icon className="h-4 w-4" />
            {a.label}
          </motion.button>
        ))}
      </div>
    </SectionCard>
  );
}
