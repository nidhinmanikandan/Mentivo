import type { Node } from "@xyflow/react";

export interface RoadmapNodeData extends Record<string, unknown> {
  title: string;
  description: string;
  why?: string;
  glow?: string;
  steps: string[];
}

export interface RoadmapItem extends RoadmapNodeData {
  id: string;
  parents: string[];
}

export interface ToolRoadmap {
  title: string;
  description: string;
  logoDomain: string;
  roadmap: RoadmapItem[];
}

export type RoadmapNodeType = Node<RoadmapNodeData, "roadmap">;