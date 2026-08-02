import { Bell, Search, ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function Topbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center gap-6 bg-background/80 backdrop-blur-xl px-8">
      <div className="mt-[24px] flex-1 max-w-[400px] pl-[16px]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search AI tools, trends, technologies…"
            className="w-full h-11 rounded-[18px] bg-[var(--surface-dark)] pl-11 pr-16 text-[13px] text-foreground placeholder:text-muted-foreground outline-none focus:bg-[var(--surface-dark-hover)] transition"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            ⌘ K
          </kbd>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative h-10 w-10 grid place-items-center rounded-[16px] bg-[var(--surface-dark-hover)] hover:bg-[var(--surface-dark-active)] transition"
        >
          {theme === "dark" ? (
            <Sun className="h-[18px] w-[18px] text-foreground" />
          ) : (
            <Moon className="h-[18px] w-[18px] text-foreground" />
          )}
        </button>
        <button className="relative h-10 w-10 grid place-items-center rounded-[16px] bg-[var(--surface-dark-hover)] hover:bg-[var(--surface-dark-active)] transition">
          <Bell className="h-[18px] w-[18px] text-foreground" />
          <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
        </button>
        <button className="flex items-center gap-1.5 rounded-[16px] bg-[var(--surface-dark-hover)] pl-1 pr-2.5 py-1 hover:bg-[var(--surface-dark-active)] transition">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
