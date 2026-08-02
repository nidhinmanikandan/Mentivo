import type { Node } from "@xyflow/react";

export interface RoadmapNodeData extends Record<string, unknown> {
  title: string;
  description: string;
  why?: string;
  glow?: string;
  steps: string[];
}

export type RoadmapNodeType = Node<RoadmapNodeData, "roadmap">;