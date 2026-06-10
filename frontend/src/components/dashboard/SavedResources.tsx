import { motion } from "motion/react";
import { Bookmark } from "lucide-react";
import { SectionCard } from "./SectionCard";
import type { SavedResource } from "@/types";

export function SavedResources({ resources }: { resources: SavedResource[] }) {
  return (
    <SectionCard title="Saved Resources" action="View all">
      <div className="flex flex-col gap-2">
        {resources.map((r) => (
          <motion.div
            key={r.id}
            whileHover={{ x: 2 }}
            className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-card-elevated transition cursor-pointer"
          >
            <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${r.iconBg} grid place-items-center text-white text-sm font-bold`}>
              {r.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-foreground truncate">{r.title}</p>
              <p className="text-[11px] text-muted-foreground">{r.type}</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <Bookmark className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
}
