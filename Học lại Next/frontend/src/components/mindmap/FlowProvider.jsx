"use client";
import { ReactFlowProvider } from "reactflow";
import Flow from "./Flow";

export default function FlowProvider() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
