import React, { memo, useMemo, useRef } from "react";
import "./TodoColumn.scss";
import TodoItem from "./TodoItem/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TodoColumn = ({ column: _column }) => {
  const { column: columnData, tasks } = _column;
  const {
    attributes,
    transition,
    transform,
    setNodeRef,
    listeners,
    isDragging,
  } = useSortable({ id: columnData._id, data: _column });
  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  };
  return (
    <div className="TodoColumn" ref={setNodeRef} {...attributes} style={style}>
      <div className="header" {...listeners}>
        <div className="left">
          <div className="counter">{tasks.length}</div>
          <div className="name">{columnData.columnName}</div>
        </div>
        <div className="right">
          <button>Xóa</button>
        </div>
      </div>
      <div className="main">
        <SortableContext
          items={tasks?.map(({ _id }) => _id)}
          SortableContext={verticalListSortingStrategy}
        >
          {tasks?.map((task) => (
            <TodoItem key={task._id} task={task} />
          ))}
        </SortableContext>
      </div>
      <div className="footer">
        <button>Add task</button>
      </div>
    </div>
  );
};

export default memo(TodoColumn);
