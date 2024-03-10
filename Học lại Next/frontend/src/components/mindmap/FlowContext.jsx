"use client";
import React, { useEffect } from "react";
import FlowDetail from "./FlowDetail";
import Flow from "./Flow";
import { useDispatch } from "react-redux";
import { elementSlice } from "@/redux/slices/elementSlice";
const { updateMindmap } = elementSlice.actions;

const FlowContext = ({ mindmap, edit }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateMindmap(mindmap));
  }, []);

  return (
    <>
      <FlowDetail mindmap={mindmap} edit={edit} />
      <Flow edit={edit} />
    </>
  );
};

export default FlowContext;
