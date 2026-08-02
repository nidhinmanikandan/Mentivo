import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Background,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  type Connection,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type NodeTypes,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import RoadmapNode from "./RoadmapNode";
import type { RoadmapNodeType } from "@/types/roadmap";

type Props = {
  roadmap: any[];
};

const nodeTypes: NodeTypes = {
  roadmap: RoadmapNode,
};

export default function ToolTree({ roadmap }: Props) {
  console.log("Roadmap:", roadmap);

  // Convert roadmap -> React Flow nodes
  const initialNodes = useMemo<RoadmapNodeType[]>(() => {
    return roadmap.map((item, index) => ({
      id: String(index + 1),
      type: "roadmap",
      position: {
        x: index * 420,
        y: 0,
      },
      data: {
        title: item.title,
        description: item.description,
        why: item.why,
        glow: item.glow,
        steps: item.steps ?? [],
      },
    }));
  }, [roadmap]);

  // Create edges between consecutive nodes
  const initialEdges = useMemo<Edge[]>(() => {
    return roadmap.slice(1).map((_, index) => ({
      id: `${index + 1}-${index + 2}`,
      source: String(index + 1),
      target: String(index + 2),
      type: "default",
      animated: false,
      style: {
        stroke: "#8A8A8A",
        strokeWidth: 2.5,
        strokeLinecap: "round",
      },
    }));
  }, [roadmap]);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback((changes: NodeChange<RoadmapNodeType>[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <div className="w-full h-screen pl-[24px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        minZoom={0.5}
        maxZoom={2}
      >
        <Background />

        <MiniMap
          position="bottom-right"
          pannable
          zoomable
          bgColor="#252525"
          maskColor="rgba(0,0,0,0.15)"
          nodeColor="#5c5c5c"
          nodeStrokeColor="#5c5c5c"
          nodeBorderRadius={10}
        />
      </ReactFlow>
    </div>
  );
}
