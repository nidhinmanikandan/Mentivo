import { useNavigate } from "@tanstack/react-router";

import { SectionCard } from "./SectionCard";
import { ToolCard } from "./ToolCard";

import type { AiTool } from "@/types";

export function TrendingTools({ tools }: { tools: AiTool[] }) {
  const navigate = useNavigate();

  return (
    <SectionCard title="Trending AI Tools" action="View all" actionArrow>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard
            key={tool.name}
            tool={tool}
            onClick={() =>
              navigate({
                to: "/tool/$toolName",
                params: {
                  toolName: tool.name,
                },
              })
            }
          />
        ))}
      </div>
    </SectionCard>
  );
}
