import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { IndustryTrends } from "@/components/dashboard/IndustryTrends";
import { TrendingTools } from "@/components/dashboard/TrendingTools";
import { useDashboardData } from "@/hooks/useDashboardData";

export const Route = createFileRoute("/trends")({
  head: () => ({
    meta: [
      { title: "AI Growth — Trends" },
      { name: "description", content: "Explore trending AI tools and industry trends." },
    ],
  }),
  component: TrendsPage,
});

function TrendsPage() {
  const { tools, trends } = useDashboardData();

  return (
    <DashboardLayout>
      <section className="pt-2 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Trends</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Discover what's trending across AI tools and the wider industry.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <TrendingTools tools={tools} />
        <IndustryTrends trends={trends} />
      </div>
    </DashboardLayout>
  );
}
