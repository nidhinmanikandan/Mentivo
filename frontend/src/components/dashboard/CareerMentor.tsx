import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Send, Clock } from "lucide-react";
import { SectionCard } from "./SectionCard";
import { api } from "@/services/api";
import type { CareerPlan } from "@/types";

export function CareerMentor() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<CareerPlan | null>(null);

  const generate = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const result = await api.getCareerPlan(goal);
    setPlan(result);
    setLoading(false);
  };

  return (
    <SectionCard
      title="AI Career Mentor"
      icon={
        <div className="h-8 w-8 rounded-lg bg-card-elevated grid place-items-center">
          <Sparkles className="h-4 w-4 text-violet-300" />
        </div>
      }
    >
      <div className="px-1">
        <p className="text-[13px] text-muted-foreground mb-3">
          Tell me your goal — I'll generate a roadmap, tools, and timeline.
        </p>
        <div className="flex items-center gap-2 rounded-2xl bg-card-elevated p-1.5 pl-4">
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && generate()}
            placeholder="e.g. I want to become a frontend developer"
            className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground outline-none py-2"
          />
          <button
            onClick={generate}
            disabled={loading}
            className="rounded-xl bg-primary px-3 py-2 text-[12px] font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-50 flex items-center gap-1.5"
          >
            {loading ? "Generating…" : <>Generate <Send className="h-3 w-3" /></>}
          </button>
        </div>

        {plan && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-card-elevated p-4">
              <div>
                <p className="text-[11px] text-muted-foreground">Career Goal</p>
                <p className="text-[15px] font-semibold text-foreground">{plan.goal}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {plan.timeline}
              </div>
            </div>

            <div>
              <p className="text-[12px] text-muted-foreground mb-2">Roadmap</p>
              <div className="space-y-2">
                {plan.roadmap.map((r, i) => (
                  <div key={r.id} className="flex items-center gap-3 rounded-xl bg-card-elevated px-3 py-2.5">
                    <div className="h-6 w-6 rounded-full bg-background/40 grid place-items-center text-[11px] text-muted-foreground">{i + 1}</div>
                    <p className="flex-1 text-[13px] text-foreground">{r.title}</p>
                    <span className="text-[11px] text-muted-foreground">{r.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Pills label="Tools" items={plan.tools} />
              <Pills label="Resources" items={plan.resources} />
            </div>
          </motion.div>
        )}
      </div>
    </SectionCard>
  );
}

function Pills({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-card-elevated p-3">
      <p className="text-[11px] text-muted-foreground mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((i) => (
          <span key={i} className="text-[11px] text-foreground bg-background/40 rounded-md px-2 py-1">{i}</span>
        ))}
      </div>
    </div>
  );
}
