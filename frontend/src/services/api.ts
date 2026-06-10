// Mock API layer — replace with real fetch() calls when backend is ready.
import { trendingTools, todayInsight, roadmap, industryTrends, savedResources, progressStats, careerPlan, liveTrends, skillGap, careerGoalOptions, careerGoalState } from "./mockData";

const delay = <T>(data: T, ms = 0): Promise<T> => new Promise((r) => setTimeout(() => r(data), ms));

export const api = {
  getTrendingTools: () => delay(trendingTools),
  getTodayInsight: () => delay(todayInsight),
  getRoadmap: () => delay(roadmap),
  getIndustryTrends: () => delay(industryTrends),
  getSavedResources: () => delay(savedResources),
  getProgressStats: () => delay(progressStats),
  getCareerPlan: (_goal?: string) => delay(careerPlan, 400),
  getLiveTrends: () => delay(liveTrends),
  getSkillGap: (_current?: string[], _target?: string) => delay(skillGap, 300),
  getCareerGoalOptions: () => delay(careerGoalOptions),
  getCareerGoalState: () => delay(careerGoalState),
};
