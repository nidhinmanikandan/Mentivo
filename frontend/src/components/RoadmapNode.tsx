import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import "./RoadmapNode.css";

export interface RoadmapNodeData extends Record<string, unknown> {
  title: string;
  description: string;
  why?: string;
  glow?: string;
  steps: string[];
}

export type RoadmapNodeType = Node<RoadmapNodeData>;

export default function RoadmapNode({ data }: NodeProps<RoadmapNodeType>) {
  return (
    <div
      className="node-wrapper"
      style={
        {
          "--glow": data.glow || "rgba(86,156,255,.25)",
        } as React.CSSProperties
      }
    >
      <div className="roadmap-node">
        <Handle type="target" position={Position.Left} className="handle" />

        <div className="header">
          <div className="header-content">
            <h3>{data.title}</h3>
            <p>
              {data.description}
              {data.why}
            </p>
          </div>
        </div>

        <div className="content-card">
          <div className="section">
            <div className="steps">
              {data.steps.map((step, index) => (
                <div className="step" key={index}>
                  <span className={`dot ${index === data.steps.length - 1 ? "green" : "blue"}`} />

                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="section why-section"></div>
        </div>

        <Handle type="source" position={Position.Right} className="handle" />
      </div>
    </div>
  );
}
