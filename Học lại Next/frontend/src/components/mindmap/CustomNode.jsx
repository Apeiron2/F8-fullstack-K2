import clsx from "clsx";
import { useCallback, useState } from "react";
import { Handle, Position } from "reactflow";
import { useDispatch } from "react-redux";
import { elementSlice } from "@/redux/slices/elementSlice";
const { updateTextNode } = elementSlice.actions;
export const handleStyle = { width: 20, height: 8, borderRadius: 2 };
export const elementStyle = {
  height: 30,
  fontSize: 12,
  outline: "none",
};
const handleClass = "bg-secondary";

export function CustomNode({ id, data, isConnectable, selected }) {
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState(data.label);
  const [widthInput, setWidthInput] = useState(data.label.length + 10 + "ch");
  const dispatch = useDispatch();
  const onChange = useCallback((evt) => {
    setText(evt.target.value);
    setWidthInput(evt.target.value.length + 10 + "ch");
  }, []);
  const handleChange = (e) => {
    dispatch(updateTextNode({ id, text }));
    setEdit(false);
  };
  return (
    <div
      className="custom-node"
      style={{ width: "fit-content" }}
      key={id}
      onDoubleClick={() => {
        setEdit(true);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter" && selected) {
          handleChange;
        }
      }}
      onBlur={handleChange}
    >
      {id !== "1" && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          style={handleStyle}
          className={handleClass}
        />
      )}

      <input
        name="text"
        onChange={onChange}
        onBlur={() => {
          setEdit(false);
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter" && isEdit) setEdit(false);
        }}
        className={clsx("text-center border border-3 rounded-2 p-3", {
          "text-white bg-primary bg-gradient": !isEdit,
          "text-dark nodrag": isEdit,
          "border-danger": selected && !isEdit,
          "border-primary": !selected,
          "border-success": selected && isEdit,
        })}
        value={text}
        readOnly={isEdit ? "" : "readOnly"}
        style={{
          ...elementStyle,
          cursor: isEdit ? "text" : "grab",
          width: widthInput,
        }}
        data-id={id}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
        className={handleClass}
      />
    </div>
  );
}
