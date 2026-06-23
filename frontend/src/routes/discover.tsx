import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/discover")({
  component: DiscoverPage,
});

function DiscoverPage() {
  const [tools, setTools] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/recommendations")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-3">Recommended Tools For You</h1>

      <p className="text-muted-foreground mb-8">Based on your learning profile.</p>

      <div className="space-y-4">
        {tools.map((tool) => (
          <div
            key={tool}
            onClick={() =>
              navigate({
                to: "/tool/$toolName",
                params: {
                  toolName: tool,
                },
              })
            }
            className="rounded-2xl bg-card p-5 border border-white/5 cursor-pointer hover:border-purple-500 transition"
          >
            <h2 className="text-xl font-semibold">{tool}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
