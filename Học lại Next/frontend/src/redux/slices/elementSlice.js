import axiosInstance from "@/utils/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
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
  status: "idle",
};
export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
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
      state.nodes.push(newNode);
      state.edges.push(newEdge);
    },
    addEdge: (state, action) => {
      const { source, target } = action.payload;
      const id = source + "-" + target;
      const newEdge = { id, source, target, type: "custom" };
      state.edges.push(newEdge);
    },
    deleteNode: (state, action) => {
      const selectedNodes = action.payload;
      state.nodes = state.nodes.filter((node) => node.id !== selectedNodes);
      state.edges = state.edges.filter(
        (edge) => edge.target !== selectedNodes && edge.source !== selectedNodes
      );
    },
    deleteEdge: (state, action) => {
      const selectedEdges = action.payload;
      state.edges = state.edges.filter((edge) => edge.id !== selectedEdges);
    },
    updateTextNode: (state, action) => {
      state.nodes = state.nodes.filter((node) => {
        if (node.id == action.payload.id) node.data.label = action.payload.text;
        return node;
      });
    },
    updateNodes: (state, action) => {
      state.nodes = action.payload;
    },
    updateEdges: (state, action) => {
      state.edges = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchMindmap.pending,
      (state) => (state.status = "pending")
    );
    builder.addCase(fetchMindmap.fulfilled, (state, action) => {
      const { nodes, edges } = action.payload.data;
      state.nodes = nodes;
      state.edges = edges;
      state.status = "success";
    });
    builder.addCase(fetchMindmap.rejected, (state) => (state.status = "error"));
  },
});

export const fetchMindmap = createAsyncThunk("fetchMindmap", async (id) => {
  const response = await axiosInstance.get(`/mindmaps/${id}`);
  return response.data;
});
