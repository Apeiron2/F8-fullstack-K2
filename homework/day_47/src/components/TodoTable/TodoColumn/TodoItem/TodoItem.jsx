import React, { useState } from "react";
import "./TodoItem.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const TodoItem = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [content, setContent] = useState(task.content);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task._id, data: task, disabled: edit });
  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };
  const handleChange = (e) => {
    // Xử lý change ở đây
  };
  return (
    <div
      className="TodoItem"
      style={style}
      onDoubleClick={() => {
        setEdit(true);
      }}
      ref={setNodeRef}
      {...attributes}
    >
      <textarea
        {...listeners}
        onBlur={() => {
          setEdit(false);
        }}
        readOnly={edit ? false : true}
        style={{
          cursor: `${edit ? "text" : "grab"}`,
          userSelect: `${edit ? "container" : "none"}`,
        }}
        value={content}
      ></textarea>
    </div>
  );
};

export default TodoItem;
