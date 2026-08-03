const BASE_URL = "http://localhost:5000";

import type { ToolRoadmap } from "@/types/roadmap";

export async function getRoadmap(
  tool: {
    name: string;
    description: string;
    logoDomain: string;
  }
): Promise<ToolRoadmap> {

  const response = await fetch(`${BASE_URL}/api/roadmap`, {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      tool,
    }),
  });

  if(!response.ok){
    throw new Error("Roadmap generation failed");
  }

  return response.json();
}