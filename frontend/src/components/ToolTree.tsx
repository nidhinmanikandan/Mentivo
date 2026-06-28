import RoadmapNode from "./RoadmapNode";
import React from "react";
import { useEffect, useState } from "react";


type Props = {
  tool: any;
};

export default function ToolTree({ tool }: Props) {
  const [selectedNode, setSelectedNode] = useState<any>(null);
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
          <Section
            section={section}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        ))}
      </div>
    </div>
  );
}

function Section({
  section,
  selectedNode,
  setSelectedNode,
}: {
  section: any;
  selectedNode: any;
  setSelectedNode: React.Dispatch<React.SetStateAction<any>>;
}) {
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
          <Child
            key={child.title}
            child={child}
            selectedNode={selectedNode}
            setSelectedNode={setSelectedNode}
          />
        ))}
      </div>
    </div>
  );
}

function Child({
  child,
  selectedNode,
  setSelectedNode,
}: {
  child: any;
  selectedNode: any;
  setSelectedNode: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-[-56px] h-5 w-5 rounded-full bg-[#7BBEFF]" />

      <div className="absolute left-[-36px] h-[2px] w-[36px] bg-[#7BBEFF]" />

      <div className="relative flex items-center">
        <div onClick={() => setSelectedNode(child)}>
          <RoadmapNode title={child.title} small />
        </div>

        

        {selectedNode?.title === child.title && (
          <div className="absolute left-[260px] top-1/2 -translate-y-1/2 w-[500px] rounded-3xl bg-card p-6 shadow-xl z-20">
            <h2 className="text-3xl font-bold">{child.title}</h2>

            <p className="mt-3 text-muted-foreground">{child.description}</p>

            {child.steps && (
              <div className="mt-6">
                <h3 className="mb-3 font-semibold">Steps</h3>

                <div className="space-y-2">
                  {child.steps.map((step: string) => (
                    <div key={step}>✓ {step}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
