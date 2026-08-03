import type { AiTool } from "@/types";

let selectedTool: AiTool | null = null;

export function setSelectedTool(tool: AiTool) {
  selectedTool = tool;
}

export function getSelectedTool() {
  return selectedTool;
}