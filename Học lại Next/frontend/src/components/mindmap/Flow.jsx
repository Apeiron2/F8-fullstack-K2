"use client";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useReactFlow,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import { useState, useCallback, useRef, useEffect } from "react";
import "reactflow/dist/style.css";
import { CustomNode } from "@/components/mindmap/CustomNode";
import { useDispatch, useSelector } from "react-redux";
import { elementSlice } from "@/redux/slices/elementSlice";
import { CustomEdge } from "./CustomEdge";
const {
  updateNodes,
  updateEdges,
  addElement,
  addEdge,
  deleteNode,
  deleteEdge,
} = elementSlice.actions;
const nodeTypes = {
  custom: CustomNode,
};
const edgeTypes = {
  custom: CustomEdge,
};

export default function Flow({ edit }) {
  const nodes = useSelector((state) => state.element.data.nodes);
  const edges = useSelector((state) => state.element.data.edges);

  const dispatch = useDispatch();
  let [newId, setNewId] = useState(+nodes?.[nodes?.length - 1]?.id);
  const sourceNodeId = useRef(null);
  const selectedNode = useRef(null);
  const selectedEdge = useRef(null);
  const onNodesChange = (changes) => {
    const updatedNodes = applyNodeChanges(changes, nodes);
    dispatch(updateNodes(updatedNodes));
  };

  const onEdgesChange = (changes) => {
    const updatedEdges = applyEdgeChanges(changes, edges);
    dispatch(updateEdges(updatedEdges));
  };

  const onConnect = useCallback((edge) => {
    // addEdge nếu kết nối thành công
    if (edge.source !== edge.target) {
      dispatch(addEdge(edge));
    }
    sourceNodeId.current = null;
  }, []);

  const onConnectStart = useCallback(
    (e) => {
      // Xác định id của node được kéo
      if (e.target.dataset.handlepos === "bottom") {
        sourceNodeId.current = e.target.dataset.nodeid;
      }
      if (e.target.dataset.handlepos === "top") {
        sourceNodeId.current = null;
      }
    },
    [sourceNodeId]
  );
  const { screenToFlowPosition } = useReactFlow();
  const onConnectEnd = (e) => {
    if (
      e.target.classList.contains("react-flow__pane") &&
      sourceNodeId.current
    ) {
      // addElement khi kéo ra vị trí trống từ nút source(bottom)
      setNewId(++newId);
      const position = screenToFlowPosition({
        // Chỉnh spawn về giữa node
        x: e.clientX - 120,
        y: e.clientY - 30,
      });
      const payload = {
        id: newId.toString(),
        source: sourceNodeId.current,
        position,
      };

      dispatch(addElement(payload));
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (
        e.key === "Delete" &&
        selectedNode.current &&
        selectedNode.current !== "1"
      ) {
        dispatch(deleteNode(selectedNode.current));
        selectedNode.current = null;
      }
      if (e.key === "Delete" && selectedEdge.current) {
        dispatch(deleteEdge(selectedEdge.current));
        selectedEdge.current = null;
      }
    });

    return document.removeEventListener("keyup", (e) => {
      if (
        e.key === "Delete" &&
        selectedNode.current &&
        selectedNode.current !== "1"
      ) {
        dispatch(deleteNode(selectedNode.current));
        selectedNode.current = null;
      }
      if (e.key === "Delete" && selectedEdge.current) {
        dispatch(deleteEdge(selectedEdge.current));
        selectedEdge.current = null;
      }
    });
  }, []);

  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      onNodeClick={(e, node) => {
        selectedNode.current = node.id;
        selectedEdge.current = null;
      }}
      onEdgeClick={(e, edge) => {
        selectedEdge.current = edge.id;
        selectedNode.current = null;
      }}
      fitView
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}
