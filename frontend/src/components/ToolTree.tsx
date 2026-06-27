import RoadmapNode from "./RoadmapNode";
import Connector from "./Connector";

type Props = {
  tool: any;
};

export default function ToolTree({ tool }: Props) {
  if (!tool) return null;

  return (
    <div className="py-10">
      {/* Root */}
      <div className="flex items-start">
        {/* Left Spine */}
        <div className="relative w-20 flex justify-center">
          <div className="absolute top-14 bottom-0 w-[2px] bg-[#7BBEFF]" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-24">
          <RoadmapNode title={tool.overview.title} />

          {tool.journey.map((section: any, sectionIndex: number) => (
            <div key={section.id} className="flex items-start gap-12">
              {/* Connector */}
              <div className="relative w-20 flex justify-center">
                {/* Dot */}
                <div className="absolute top-5 w-4 h-4 rounded-full bg-[#7BBEFF]" />

                {/* Horizontal Line */}
                <div className="absolute top-7 left-10 w-10 h-[2px] bg-[#7BBEFF]" />
              </div>

              {/* Section + Children */}
              <div className="space-y-8">
                <RoadmapNode title={section.title} />

                <div className="relative ml-20 mt-8">
                  {/* Vertical Line */}
                  <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#7BBEFF]" />

                  {section.children?.map((child: any, index: number) => (
                    <div key={index} className="relative flex items-center gap-5 mb-8">
                      {/* Dot */}
                      <div className="absolute left-0 w-4 h-4 rounded-full bg-[#7BBEFF]" />

                      {/* Horizontal Line */}
                      <div className="ml-4 w-10 h-[2px] bg-[#7BBEFF]" />

                      <RoadmapNode title={child.title} small />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
