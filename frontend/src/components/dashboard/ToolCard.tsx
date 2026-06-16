import { motion } from "motion/react";
import { Bookmark, ArrowUpRight } from "lucide-react";
import type { AiTool } from "@/types";

type ToolCardProps = {
  tool: AiTool;
  onClick?: () => void;
};

export function ToolCard({ tool, onClick }: ToolCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl bg-card-elevated p-4 hover:bg-accent transition cursor-pointer group"
    >
      <div className="flex items-start gap-3">
        <div
          className={`h-11 w-11 rounded-xl bg-gradient-to-br ${tool.logoBg} grid place-items-center text-white text-base font-bold shadow-md`}
        >
          {tool.logoText}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[14px] font-semibold text-foreground">{tool.name}</h3>
              <span className="inline-block mt-1 rounded-md bg-background/40 px-2 py-0.5 text-[10px] text-muted-foreground">
                {tool.category}
              </span>
            </div>
            <button className="text-muted-foreground hover:text-foreground transition">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div className="flex-1">
          <p className="text-[12px] text-muted-foreground/90 leading-snug">{tool.description}</p>
          <span className="inline-block mt-2 text-[11px] text-muted-foreground/70">
            #{tool.tag}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[12px] font-medium text-foreground">
          {tool.popularity}
          <ArrowUpRight className="h-3 w-3 text-emerald-400" />
        </div>
      </div>
    </motion.div>
  );
}
