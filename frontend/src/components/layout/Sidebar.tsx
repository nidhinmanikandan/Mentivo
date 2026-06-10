import { motion } from "motion/react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home, Wrench, TrendingUp, Map, Bookmark, User,
  Settings, HelpCircle, MessageSquare, Sparkles, ChevronDown,
} from "lucide-react";

type NavEntry = { label: string; icon: React.ElementType; to?: string };

const mainNav: NavEntry[] = [
  { label: "Dashboard", icon: Home, to: "/" },
  { label: "AI Tools", icon: Wrench },
  { label: "Trends", icon: TrendingUp, to: "/trends" },
  { label: "Roadmaps", icon: Map },
  { label: "Bookmarks", icon: Bookmark },
  { label: "Profile", icon: User },
];

const toolsNav: NavEntry[] = [
  { label: "Settings", icon: Settings },
  { label: "Help", icon: HelpCircle },
  { label: "Feedback", icon: MessageSquare },
];

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-[240px] flex flex-col bg-sidebar px-4 py-6">
      <div className="flex items-center gap-2 px-3 mb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-violet-600">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <span className="text-[15px] font-semibold tracking-tight text-foreground">AI Growth</span>
      </div>

      <nav className="flex flex-col gap-1">
        {mainNav.map((item) => (
          <NavItem key={item.label} {...item} active={!!item.to && item.to === pathname} />
        ))}
      </nav>

      <div className="mt-8">
        <p className="px-3 mb-2 text-[11px] font-semibold tracking-wider text-muted-foreground/70">TOOLS</p>
        <nav className="flex flex-col gap-1">
          {toolsNav.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
      </div>

      <motion.div whileHover={{ y: -2 }} className="mt-auto rounded-2xl bg-card p-4 shadow-card">
        <div className="h-12 mb-3 flex items-end gap-0.5">
          <svg viewBox="0 0 100 30" className="w-full h-full opacity-70">
            <path d="M0 25 Q 15 20, 25 18 T 50 12 T 75 8 T 100 4" stroke="currentColor" strokeWidth="1" fill="none" className="text-muted-foreground" />
            <path d="M0 25 Q 15 20, 25 18 T 50 12 T 75 8 T 100 4 L 100 30 L 0 30 Z" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.15" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-sm font-semibold text-foreground">Upgrade to Pro</span>
          <Sparkles className="h-3 w-3 text-indigo-400" />
        </div>
        <p className="text-[11px] leading-relaxed text-muted-foreground mb-3">
          Unlock advanced insights, personalized roadmaps and more.
        </p>
        <button className="w-full rounded-xl bg-card-elevated py-2 text-[12px] font-medium text-foreground transition hover:bg-accent">
          Upgrade Now
        </button>
      </motion.div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl px-2 py-2">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-xs font-bold text-white">N</div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-foreground truncate">Nidhin</p>
          <p className="text-[11px] text-muted-foreground">Free Plan</p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </aside>
  );
}

function NavItem({ label, icon: Icon, active, to }: NavEntry & { active?: boolean }) {
  const className = `flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${
    active
      ? "bg-sidebar-accent text-foreground"
      : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
  }`;

  if (to) {
    return (
      <Link to={to} className={className}>
        <Icon className="h-[18px] w-[18px]" />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <a href="#" className={className}>
      <Icon className="h-[18px] w-[18px]" />
      <span>{label}</span>
    </a>
  );
}
