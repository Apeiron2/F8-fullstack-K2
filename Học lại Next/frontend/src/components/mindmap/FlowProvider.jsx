"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactFlowProvider } from "reactflow";
import Flow from "./Flow";
import SaveBtn from "./SaveBtn";
import { useEffect } from "react";

export default function FlowProvider({ mindmap }) {
  return (
    <ReactFlowProvider>
      <Provider store={store}>
        <SaveBtn />
        <Flow mindmap={mindmap} />
      </Provider>
    </ReactFlowProvider>
  );
}
