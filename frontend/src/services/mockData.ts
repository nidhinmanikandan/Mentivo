import type { AiTool, RoadmapItem, IndustryTrend, SavedResource, Insight, ProgressStats, CareerPlan, LiveTrend, SkillGap, CareerGoalOption, CareerGoalState } from "@/types";

export const careerGoalOptions: CareerGoalOption[] = [
  { id: "frontend", label: "Frontend Developer", description: "Build modern web interfaces", icon: "💻", accent: "from-indigo-400 to-violet-600" },
  { id: "uiux", label: "UI/UX Designer", description: "Craft delightful experiences", icon: "🎨", accent: "from-pink-400 to-rose-600" },
  { id: "ai", label: "AI Engineer", description: "Ship intelligent systems", icon: "🧠", accent: "from-emerald-400 to-teal-600" },
  { id: "mobile", label: "Mobile Developer", description: "Native & cross-platform apps", icon: "📱", accent: "from-amber-400 to-orange-600" },
];

export const careerGoalState: CareerGoalState = {
  selected: "frontend",
  progress: 35,
  nextSkill: "React",
  completedSkills: 3,
  totalSkills: 8,
};

export const trendingTools: AiTool[] = [
  { id: "1", name: "Framer AI", category: "UI Design", description: "Generate stunning websites with AI.", popularity: "9.2K", tag: "Design", logoBg: "from-blue-500 to-blue-700", logoText: "F" },
  { id: "2", name: "Cursor", category: "Code Editor", description: "AI-first code editor for developers.", popularity: "8.6K", tag: "Developer", logoBg: "from-zinc-700 to-zinc-900", logoText: "↗" },
  { id: "3", name: "Uizard", category: "UI/UX Design", description: "AI-powered UI design & prototyping.", popularity: "7.1K", tag: "Design", logoBg: "from-amber-400 to-orange-500", logoText: "U" },
  { id: "4", name: "Claude", category: "AI Assistant", description: "Anthropic's AI assistant for teams.", popularity: "6.4K", tag: "Productivity", logoBg: "from-orange-400 to-orange-600", logoText: "✶" },
  { id: "5", name: "Midjourney", category: "Image Generation", description: "Create breathtaking AI art.", popularity: "5.8K", tag: "Art", logoBg: "from-zinc-800 to-black", logoText: "⛵" },
  { id: "6", name: "Runway", category: "Video AI", description: "AI video generation & editing suite.", popularity: "4.3K", tag: "Video", logoBg: "from-emerald-400 to-teal-600", logoText: "R" },
];

export const todayInsight: Insight = {
  headline: "AI-assisted UI workflows are growing 3x faster than traditional design workflows.",
  recommendation: {
    title: "Learn Framer AI",
    description: "Master AI-powered web design and ship 10x faster.",
    estimatedTime: "2 Hours",
    difficulty: "Beginner",
    category: "UI Design",
  },
};

export const roadmap: RoadmapItem[] = [
  { id: "1", step: 1, title: "UI/UX Fundamentals", status: "completed", progress: 100 },
  { id: "2", step: 2, title: "Wireframing", status: "completed", progress: 100 },
  { id: "3", step: 3, title: "Design Systems", status: "completed", progress: 100 },
  { id: "4", step: 4, title: "Motion Design", status: "active", progress: 60 },
  { id: "5", step: 5, title: "AI Design", status: "upcoming", progress: 0 },
  { id: "6", step: 6, title: "AI Integration", status: "upcoming", progress: 0 },
];

export const industryTrends: IndustryTrend[] = [
  { id: "1", title: "Glassmorphism", description: "Translucent UI design continues to dominate modern interfaces.", category: "UI Design", icon: "sparkle" },
  { id: "2", title: "AI Avatars", description: "AI-generated avatars are transforming digital presence.", category: "AI Trend", icon: "user" },
  { id: "3", title: "3D Illustrations", description: "3D visuals increase engagement by up to 40%.", category: "Design Trend", icon: "box" },
];

export const savedResources: SavedResource[] = [
  { id: "1", title: "Figma AI Plugin", type: "Plugin", icon: "F", iconBg: "from-pink-500 to-purple-600" },
  { id: "2", title: "ChatGPT Prompts", type: "Document", icon: "✦", iconBg: "from-emerald-500 to-teal-600" },
  { id: "3", title: "Midjourney Guide", type: "Guide", icon: "⛵", iconBg: "from-zinc-700 to-zinc-900" },
  { id: "4", title: "Design System Example", type: "Resource", icon: "◈", iconBg: "from-blue-500 to-indigo-600" },
];

export const progressStats: ProgressStats = {
  completedSteps: 3,
  totalSteps: 6,
  currentStreak: 12,
  longestStreak: 21,
  consistencyScore: 86,
  weeklyActivity: [40, 70, 55, 90, 60, 80, 95],
};

export const careerPlan: CareerPlan = {
  goal: "Frontend Developer",
  timeline: "6 months",
  roadmap: [
    { id: "1", title: "HTML, CSS & Responsive Design", duration: "3 weeks" },
    { id: "2", title: "JavaScript Deep Dive", duration: "5 weeks" },
    { id: "3", title: "React + TypeScript", duration: "6 weeks" },
    { id: "4", title: "State Management & APIs", duration: "4 weeks" },
    { id: "5", title: "Testing & Deployment", duration: "3 weeks" },
  ],
  tools: ["VS Code", "Cursor", "Figma", "GitHub", "Vercel"],
  resources: ["MDN Web Docs", "Frontend Masters", "Epic React", "JavaScript.info"],
};

export const liveTrends: LiveTrend[] = [
  { id: "1", source: "GitHub", title: "shadcn/ui hits 70k stars", summary: "Component library adoption keeps accelerating across React stacks.", meta: "+1.2k stars today" },
  { id: "2", source: "Product Hunt", title: "Cursor 2.0 launches", summary: "AI-native IDE rolls out multi-file refactors and agent mode.", meta: "#1 Product of the Day" },
  { id: "3", source: "Hacker News", title: "The state of Web AI in 2026", summary: "Discussion thread analyzes the shift toward edge inference.", meta: "842 comments" },
  { id: "4", source: "AI Newsletter", title: "Ben's Bites: Weekly Recap", summary: "Top AI releases, funding rounds, and open-source picks.", meta: "Issue #412" },
];

export const skillGap: SkillGap = {
  current: ["HTML", "CSS", "JavaScript"],
  target: "Frontend Engineer",
  missing: [
    { name: "React", priority: "High" },
    { name: "TypeScript", priority: "High" },
    { name: "Testing (Vitest)", priority: "Medium" },
    { name: "Accessibility", priority: "Medium" },
    { name: "Performance Optimization", priority: "Low" },
  ],
  matchScore: 42,
};
