import { BaseEdge, getBezierPath } from "reactflow";

export function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  selected,
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  return (
    <>
      <BaseEdge
        key={id}
        id={id}
        path={edgePath}
        style={{ strokeWidth: 3, stroke: selected ? "red" : "" }}
      ></BaseEdge>
    </>
  );
}
