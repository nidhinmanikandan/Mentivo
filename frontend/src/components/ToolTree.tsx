import RoadmapNode from "./RoadmapNode";

type Props = {
  tool: any;
};

export default function ToolTree({ tool }: Props) {
  if (!tool) return null;

  return (
    <div className="relative pl-40 py-10">
      {/* Main Timeline */}
      <div className="absolute left-20 top-10 bottom-10 w-[2px] bg-[#7BBEFF]" />

      {/* Root */}
      <div className="relative mb-28">
        <RoadmapNode title={tool.overview.title} />

        <div className="absolute left-[-88px] top-1/2 h-[2px] w-[88px] bg-[#7BBEFF]" />
      </div>

      {/* Sections */}
      <div className="space-y-32">
        {tool.journey.map((section: any) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

function Section({ section }: { section: any }) {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute left-[-72px] top-8 h-5 w-5 rounded-full bg-[#7BBEFF]" />

      {/* Horizontal */}
      <div className="absolute left-[-52px] top-10 h-[2px] w-[52px] bg-[#7BBEFF]" />

      {/* Parent */}
      <div className="relative inline-block">
        <RoadmapNode title={section.title} />

        {section.children?.length > 0 && (
          <div
            className="absolute left-1/2 top-full w-[2px] bg-[#7BBEFF]"
            style={{
              height: `${section.children.length * 78}px`,
            }}
          />
        )}
      </div>

      {/* Children */}
      <div className="mt-12 ml-56 space-y-8">
        {section.children?.map((child: any) => (
          <Child key={child.title} child={child} />
        ))}
      </div>
    </div>
  );
}

function Child({ child }: { child: any }) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-[-56px] h-5 w-5 rounded-full bg-[#7BBEFF]" />

      <div className="absolute left-[-36px] h-[2px] w-[36px] bg-[#7BBEFF]" />

      <RoadmapNode title={child.title} small />
    </div>
  );
}
