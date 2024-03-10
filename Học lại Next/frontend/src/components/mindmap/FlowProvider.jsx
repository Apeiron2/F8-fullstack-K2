"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ReactFlowProvider } from "reactflow";

import FlowContext from "./FlowContext";

export default function FlowProvider({ mindmap, edit }) {
  return (
    <ReactFlowProvider>
      <Provider store={store}>
        <FlowContext mindmap={mindmap} edit={edit} />
      </Provider>
    </ReactFlowProvider>
  );
}
