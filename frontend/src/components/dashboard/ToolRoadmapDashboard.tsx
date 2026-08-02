import ToolTree from "../ToolTree";

type Props = {
  tool: any;
};

function getLogoSrc(tool: any) {
  if (tool?.logoDomain) {
    return `https://www.google.com/s2/favicons?sz=128&domain=${tool.logoDomain}`;
  }

  if (tool?.logo) {
    return tool.logo;
  }

  return null;
}

export function ToolRoadmapDashboard({ tool }: Props) {
  const logoSrc = getLogoSrc(tool);

  return (
    <div className="w-full h-full">
      <div className="mb-12 flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-background/80 shadow-sm">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={`${tool.title} logo`}
              className="h-10 w-10 rounded-md object-contain"
            />
          ) : (
            <span className="text-xl font-semibold">{tool.title?.charAt(0) || "T"}</span>
          )}
        </div>

        <div>
          <h1 className="text-5xl font-regular">{tool.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{tool.description}</p>
        </div>
      </div>

      <ToolTree roadmap={tool.roadmap} />
    </div>
  );
}
