import axiosInstance from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  description: null,
  data: {
    nodes: [
      {
        id: "1",
        data: { label: "Hello" },
        position: { x: 0, y: 0 },
        type: "custom",
      },
      {
        id: "2",
        data: { label: "Hello 2 " },
        position: { x: 100, y: 100 },
        type: "custom",
      },
      {
        id: "3",
        data: { label: "Hello 3" },
        position: { x: 0, y: 200 },
        type: "custom",
      },
      {
        id: "4",
        data: { label: "New Node" },
        position: { x: 200, y: 200 },
        type: "custom",
      },
    ],
    edges: [{ id: "1-2", source: "1", target: "2", type: "custom" }],
  },

  private: null,
};
export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    updateMindmap: (state, action) => {
      const { title, description, data, private: _private } = action.payload;
      Object.assign(state, {
        title,
        description,
        data,
        private: _private,
      });
    },
    addElement: (state, action) => {
      const { id, source, position } = action.payload;
      const newNode = {
        id,
        data: { label: "New Node" },
        position,
        type: "custom",
      };
      const newEdge = {
        id: source + "-" + id,
        source,
        target: id,
        type: "custom",
      };
      state.data.nodes.push(newNode);
      state.data.edges.push(newEdge);
    },
    addEdge: (state, action) => {
      const { source, target } = action.payload;
      const id = source + "-" + target;
      const newEdge = { id, source, target, type: "custom" };
      state.data.edges.push(newEdge);
    },
    deleteNode: (state, action) => {
      const selectedNodes = action.payload;
      state.data.nodes = state.data.nodes.filter(
        (node) => node.id !== selectedNodes
      );
      state.data.edges = state.data.edges.filter(
        (edge) => edge.target !== selectedNodes && edge.source !== selectedNodes
      );
    },
    deleteEdge: (state, action) => {
      const selectedEdges = action.payload;
      state.data.edges = state.data.edges.filter(
        (edge) => edge.id !== selectedEdges
      );
    },
    updateTextNode: (state, action) => {
      state.data.nodes = state.data.nodes.filter((node) => {
        if (node.id == action.payload.id) node.data.label = action.payload.text;
        return node;
      });
    },
    updateNodes: (state, action) => {
      state.data.nodes = action.payload;
    },
    updateEdges: (state, action) => {
      state.data.edges = action.payload;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updatePrivate: (state, action) => {
      state.private = action.payload;
    },
  },
});
