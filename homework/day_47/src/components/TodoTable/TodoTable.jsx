import React, { useEffect, useState } from "react";
import "./TodoTable.scss";
import TodoColumn from "./TodoColumn/TodoColumn";
import { useSelector, useDispatch } from "react-redux";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { reorganizeTodos } from "../../redux/slice/todoSlice";
import { swapColumn, swapTask } from "../../redux/middlewares/todoMiddleware";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import TodoItem from "./TodoColumn/TodoItem/TodoItem";
import { swapArray } from "../../services/todoService";

const TodoTable = () => {
  const { listTodo, status } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [dragItem, setDragItem] = useState({
    id: null,
    type: null,
    data: null,
  });
  const handleDragStart = (e) => {
    setDragItem({
      id: e.active.id,
      type: e.active.data.current.column.columnName ? "column" : "task",
      data: e.active.data.current,
    });
  };
  const dragColumn = () => {};
  const dragTask = () => {};
  const handleDragEnd = (e) => {
    const { active, over } = e;

    if (!over) return;
    if (active.id !== over.id) {
      if (dragItem.type === "column") {
        // Xử lý kéo thả column
        const activeIndex = listTodo.findIndex(
          ({ column }) => column._id === active.id
        );
        const overIndex = listTodo.findIndex(
          ({ column }) => column._id === over.id
        );

        dispatch(swapColumn(swapArray(listTodo, active, over)));
      }

      if (dragItem.type === "task") {
        // Xử lý kéo thả task

        if (active.data.current.column == active.data.current.column) {
          // Hoàn đổi cùng cột
          const columnIndex = listTodo.findIndex(
            ({ column }) => column.column == active.data.current.column
          );

          const tasks = listTodo[columnIndex].tasks;

          dispatch(
            swapTask(columnIndex, {
              ...listTodo[columnIndex],
              tasks: swapArray(tasks, active, over),
            })
          );
        }
      }
    }
  };
  useEffect(() => {
    dispatch(reorganizeTodos());
  }, []);
  if (status == "pending") return <h3>Loading...</h3>;
  if (status == "rejected") return <h3>Đã có lỗi xảy ra!</h3>;
  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <SortableContext
        items={listTodo?.map(({ column }) => column._id)}
        SortableContext={horizontalListSortingStrategy}
      >
        <div className="TodoTable">
          {listTodo?.map((column) => (
            <TodoColumn key={column.column._id} column={column} />
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {dragItem.type == "column" ? (
          <TodoColumn key={"overlay"} column={dragItem.data} />
        ) : (
          <TodoItem key={"overlay"} task={dragItem.data} />
        )}
      </DragOverlay>
    </DndContext>
  );
};

export default TodoTable;
