import ToolTree from "../ToolTree";

type Props = {
  tool: any;
};

export function ToolRoadmapDashboard({ tool }: Props) {
  return (
    <div className="w-full h-full">
      {/* Header */}

      <div className="mb-12">
        <h1 className="text-5xl font-regular">{tool.title}</h1>

        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{tool.description}</p>
      </div>

      {/* Tree */}

      <ToolTree roadmap={tool.roadmap} />
    </div>
  );
}
