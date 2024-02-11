"use client";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";
import { useState, useCallback, useMemo } from "react";
import "reactflow/dist/style.css";
import CustomNode from "@/components/mindmap/CustomNode";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "default",
  },
  {
    id: "2",
    data: { label: "Hello 2 " },
    position: { x: 100, y: 100 },
    type: "default",
  },
  {
    id: "3",
    data: { label: "Hello 3" },
    position: { x: 100, y: 200 },
    type: "default",
  },
  {
    id: "4",
    data: { label: "New Node" },
    position: { x: 200, y: 200 },
    type: "default",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];
export default function Flow() {
  let [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  let [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => {
      setEdges([...edges, connection]);
    },
    [setEdges]
  );
  const { screenToFlowPosition } = useReactFlow();
  const onConnectEnd = useCallback(
    (e) => {
      if (!e.target.classList.contains("react-flow__pane")) return;
      const newId = (nodes.length + 1).toString();
      const newNode = {
        id: newId,
        data: { label: "New Node" },
        position: screenToFlowPosition({ x: e.clientX, y: e.clientY }),
        type: "default",
      };
      const newEdge = {
        source: "1",
        target: newId,
      };
      setNodes([...nodes, newNode]);
      setEdges([...edges, newEdge]);
    },
    [edges]
  );
  const nodeTypes = useMemo(
    () => ({
      custom: CustomNode,
    }),
    []
  );
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectEnd={onConnectEnd}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}
