import { SectionCard } from "./SectionCard";
import { ToolCard } from "./ToolCard";
import type { AiTool } from "@/types";

export function TrendingTools({ tools }: { tools: AiTool[] }) {
  return (
    <SectionCard title="Trending AI Tools" action="View all" actionArrow>
      <div className="flex flex-col gap-3">
        {tools.map((t) => (
          <ToolCard key={t.id} tool={t} />
        ))}
      </div>
    </SectionCard>
  );
}
