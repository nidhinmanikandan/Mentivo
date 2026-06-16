import { useNavigate } from "@tanstack/react-router";

import { SectionCard } from "./SectionCard";
import { ToolCard } from "./ToolCard";

import type { AiTool } from "@/types";

export function TrendingTools({ tools }: { tools: AiTool[] }) {
  const navigate = useNavigate();

  return (
    <SectionCard
      title="Trending AI Tools"
      action="View all"
      actionArrow
    >
      <div className="flex flex-col gap-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            onClick={() =>
              navigate({
                to: "/tool/$toolName",
                params: {
                  toolName: tool.name.replace(" AI", ""),
                },
              })
            }
          />
        ))}
      </div>
    </SectionCard>
  );
}