import React from "react";
import FlowProvider from "@/components/mindmap/FlowProvider";

const Mindmap = async ({ params }) => {
  const { id } = params;
  // const mindmap = await fetch(`http://localhost:3000/api/v1/mindmaps/${id}`);
  // const data = await mindmap.json();

  return (
    <div>
      Mindmap
      <FlowProvider mindmap={id} />
    </div>
  );
};

export default Mindmap;
