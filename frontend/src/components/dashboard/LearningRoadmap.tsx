import { Check } from "lucide-react";
import { motion } from "motion/react";
import { SectionCard } from "./SectionCard";
import type { RoadmapItem } from "@/types";

interface Props {
  items: RoadmapItem[];
  onComplete?: (skill: string) => void;
}

export function LearningRoadmap({ items, onComplete }: Props) {
  return (
    <SectionCard title="Learning Roadmap" action="View roadmap">
      <div className="relative pl-2">
        {items.map((item, i) => (
          <div key={item.id} className="relative flex items-start gap-4 pb-5 last:pb-0">
            {/* connector */}
            {i < items.length - 1 && (
              <span className="absolute left-[15px] top-7 bottom-0 w-px border-l border-dashed border-border" />
            )}
            <div
              className={`relative z-10 h-8 w-8 shrink-0 rounded-full grid place-items-center text-[12px] font-medium ${
                item.status === "completed"
                  ? "bg-success/20 text-success"
                  : item.status === "active"
                    ? "bg-card-elevated text-foreground"
                    : "bg-card-elevated text-muted-foreground"
              }`}
            >
              {item.status === "completed" ? <Check className="h-4 w-4" /> : item.step}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[13px] font-medium text-foreground">{item.title}</p>

                <div className="flex items-center gap-2">
                  {item.status !== "completed" && (
                    <button
                      onClick={() => onComplete?.(item.title)}
                      className="text-[10px] px-2 py-1 rounded-md bg-primary text-primary-foreground"
                    >
                      Complete
                    </button>
                  )}

                  <span className="text-[11px] text-muted-foreground">
                    {item.status === "completed" ? "Completed" : `${item.progress}%`}
                  </span>
                </div>
              </div>
              {item.status !== "completed" && (
                <div className="mt-2 h-[3px] w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="h-full bg-foreground rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
