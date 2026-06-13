import { motion } from "motion/react";
import { useState } from "react";
import { Check, ChevronDown, Target, ArrowRight } from "lucide-react";
import type { CareerGoalOption, CareerGoalState } from "@/types";

interface Props {
  state: CareerGoalState;
  options: CareerGoalOption[];
  onSelect: (id: CareerGoalState["selected"]) => void;
  onStartLearning: () => void;
}

export function CareerGoalHero({ state, options, onSelect, onStartLearning, }: Props) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => o.id === state.selected) ?? options[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-visible rounded-3xl bg-card p-6 shadow-card"
    >
      {/* glow */}
      <div
        className={`pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${current.accent} opacity-20 blur-3xl`}
      />

      <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3 text-[11px] uppercase tracking-wider text-muted-foreground">
            <Target className="h-3.5 w-3.5" /> Your Career Goal
          </div>

          {/* selector */}
          <div className="relative inline-block">
            <button
              onClick={() => setOpen((v) => !v)}
              className="group flex items-center gap-3 rounded-2xl bg-card-elevated px-3 py-2 hover:opacity-90 transition"
            >
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${current.accent} grid place-items-center text-lg`}
              >
                {current.icon}
              </div>
              <div className="text-left">
                <p className="text-[20px] font-semibold tracking-tight text-foreground leading-tight">
                  {current.label}
                </p>
                <p className="text-[11px] text-muted-foreground">{current.description}</p>
              </div>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition ${open ? "rotate-180" : ""}`}
              />
            </button>

            {open && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-30 mt-2 w-72 rounded-2xl bg-card-elevated p-2 shadow-card"
              >
                {options.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => {
                      onSelect(o.id);
                      setOpen(false);
                    }}
                    className="w-full flex items-center gap-3 rounded-xl p-2 hover:bg-background/40 transition text-left"
                  >
                    <div
                      className={`h-9 w-9 rounded-lg bg-gradient-to-br ${o.accent} grid place-items-center`}
                    >
                      {o.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-foreground">{o.label}</p>
                      <p className="text-[11px] text-muted-foreground">{o.description}</p>
                    </div>
                    {o.id === state.selected && <Check className="h-4 w-4 text-success" />}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] text-muted-foreground">
                Progress · {state.completedSkills}/{state.totalSkills} skills
              </p>
              <p className="text-[13px] font-semibold text-foreground">{state.progress}%</p>
            </div>
            <div className="h-[8px] w-full rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${state.progress}%` }}
                transition={{ duration: 0.8 }}
                className={`h-full rounded-full bg-gradient-to-r ${current.accent}`}
              />
            </div>
          </div>
        </div>

        {/* next skill */}
        <div className="lg:w-64 shrink-0 rounded-2xl bg-card-elevated p-4">
          {state.progress === 100 ? (
            <>
              <p className="text-[11px] uppercase tracking-wider text-success mb-2">
                Goal Completed 🎉
              </p>

              <p className="text-[18px] font-semibold tracking-tight text-foreground mb-3">
                Frontend Developer Roadmap
              </p>

              <button className="w-full rounded-xl bg-success py-2 text-[12px] font-semibold text-black">
                Completed ✓
              </button>
            </>
          ) : (
            <>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Next Skill
              </p>

              <p className="text-[24px] font-semibold tracking-tight text-foreground mb-3">
                {state.nextSkill}
              </p>

              <button
                onClick={() => console.log("BUTTON CLICKED")}
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2 text-[12px] font-semibold text-primary-foreground hover:opacity-90 transition"
              >
                Start learning
              </button>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}
