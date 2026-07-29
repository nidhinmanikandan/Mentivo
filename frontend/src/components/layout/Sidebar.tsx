import { Link, useRouterState } from "@tanstack/react-router";
import {
  Wrench,
  TrendingUp,
  Map,
  Bookmark,
  User,
  Settings,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";

type NavEntry = { label: string; icon: React.ElementType; to?: string };

const mainNav = [
  { label: "Discover Tools", icon: Wrench, to: "/" },
  { label: "My Roadmaps", icon: Map, to: "/roadmap" },
  { label: "Trends", icon: TrendingUp, to: "/trends" },
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
    <aside className="fixed left-[20px] top-[20px] z-30 flex h-[calc(100vh-40px)] w-[240px] flex-col rounded-[18px] bg-[#121212] px-4 py-6">
      <div className="mb-8 flex items-center gap-2 px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#2C2C2C]">
          <Sparkles className="h-4 w-4 text-foreground" />
        </div>
        <span className="text-[15px] font-semibold tracking-tight text-foreground">Logo</span>
      </div>

      <nav className="flex flex-col gap-0">
        {mainNav.map((item) => (
          <NavItem key={item.label} {...item} active={!!item.to && item.to === pathname} />
        ))}
      </nav>

      <nav className="mt-auto flex flex-col gap-0 pt-6">
        {toolsNav.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
}

function NavItem({ label, icon: Icon, active, to }: NavEntry & { active?: boolean }) {
  const itemClassName = `flex items-center gap-4 rounded-2xl px-2 py-2.5 text-[14px] font-regular transition-colors ${
    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
  }`;

  const iconClassName = `flex h-10 w-10 items-center justify-center rounded-[16px] bg-[#2C2C2C] transition-all ${
    active ? "opacity-100" : "opacity-70 hover:opacity-100"
  }`;

  const content = (
    <>
      <div className={iconClassName}>
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <span>{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={itemClassName}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#" className={itemClassName}>
      {content}
    </a>
  );
}
