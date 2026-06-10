import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  action?: string;
  actionArrow?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ title, action, actionArrow, icon, children, className = "" }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`rounded-3xl bg-card p-5 shadow-card ${className}`}
    >
      <header className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-[15px] font-semibold tracking-tight text-foreground">{title}</h2>
        {action && (
          <button className="flex items-center gap-1 text-[12px] text-muted-foreground hover:text-foreground transition">
            {action}
            {actionArrow && <ArrowRight className="h-3 w-3" />}
          </button>
        )}
        {icon}
      </header>
      {children}
    </motion.section>
  );
}
