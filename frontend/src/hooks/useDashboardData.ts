import { useEffect, useState } from "react";
import { api } from "@/services/api";
import type { AiTool, RoadmapItem, IndustryTrend, SavedResource, Insight, ProgressStats, LiveTrend, SkillGap } from "@/types";

export function useDashboardData() {
  const [tools, setTools] = useState<AiTool[]>([]);
  const [insight, setInsight] = useState<Insight | null>(null);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [trends, setTrends] = useState<IndustryTrend[]>([]);
  const [resources, setResources] = useState<SavedResource[]>([]);
  const [progress, setProgress] = useState<ProgressStats | null>(null);
  const [liveTrends, setLiveTrends] = useState<LiveTrend[]>([]);
  const [skillGap, setSkillGap] = useState<SkillGap | null>(null);

  useEffect(() => {
    api.getTrendingTools().then(setTools);
    api.getTodayInsight().then(setInsight);
    api.getRoadmap().then(setRoadmap);
    api.getIndustryTrends().then(setTrends);
    api.getSavedResources().then(setResources);
    api.getProgressStats().then(setProgress);
    api.getLiveTrends().then(setLiveTrends);
    api.getSkillGap().then(setSkillGap);
  }, []);

  return { tools, insight, roadmap, trends, resources, progress, liveTrends, skillGap };
}
