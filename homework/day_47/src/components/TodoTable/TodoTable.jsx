import React, { useEffect, useState } from "react";
import "./TodoTable.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { cloneDeep } from "lodash";
import TodoColumn from "./TodoColumn/TodoColumn";
import TodoItem from "./TodoColumn/TodoItem/TodoItem";

import { reorganizeTodos } from "../../redux/slice/todoSlice";
import {
  swapColumn,
  swapDifColumn,
  swapTask,
} from "../../redux/middlewares/todoMiddleware";
import { swapArray } from "../../services/todoService";

const TodoTable = () => {
  const { listTodo, status } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [dragItem, setDragItem] = useState({
    id: null,
    type: null,
    data: null,
  });
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensor = useSensors(pointerSensor);
  const handleDragStart = (e) => {
    setDragItem({
      id: e.active.id,
      type: e.active.data.current.column.columnName ? "column" : "task",
      data: e.active.data.current,
    });
  };
  const handleOver = (e) => {
    const { active, over } = e;
    if (!over) return;
    if (dragItem.type == "column") return;

    const activeColumn = active.data.current;
    const overColumn = over.data.current;

    if (activeColumn.column != overColumn.column) {
      const activeColumnIndex = listTodo.findIndex(
        (column) => column.column.column == activeColumn.column
      );
      const overColumnIndex = listTodo.findIndex(
        (column) => column.column.column == overColumn.column
      );
      console.log(activeColumnIndex, overColumnIndex);
      const activeIndex = listTodo[activeColumnIndex].tasks.findIndex(
        ({ _id }) => active.id == _id
      );
      const overIndex = listTodo[overColumnIndex].tasks.findIndex(
        ({ _id }) => over.id == _id
      );
      let newIndex;
      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height;
      const modifier = isBelowOverItem ? 1 : 0;
      newIndex =
        overIndex >= 0 ? overIndex + modifier : overColumn.column.length + 1;

      let newActiveColumn = listTodo[activeColumnIndex].tasks.filter(
        ({ _id }) => _id !== active.id
      );
      let newOverColumn = listTodo[overColumnIndex].tasks.toSpliced(
        newIndex,
        0,
        dragItem.data
      );
      dispatch(
        swapDifColumn(
          activeColumnIndex,
          newActiveColumn,
          overColumnIndex,
          newOverColumn
        )
      );
    }
  };
  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;
    if (active.id !== over.id) {
      if (dragItem.type === "column") {
        // Xử lý kéo thả column

        dispatch(swapColumn(swapArray(listTodo, active, over, dragItem.type)));
      }

      if (dragItem.type === "task") {
        // Xử lý kéo thả task

        if (active.data.current.column == over.data.current.column) {
          // Hoàn đổi cùng cột
          const columnIndex = listTodo.findIndex(
            ({ column }) => column.column == active.data.current.column
          );
          const tasks = listTodo[columnIndex].tasks;
          dispatch(
            swapTask(columnIndex, {
              ...listTodo[columnIndex],
              tasks: swapArray(tasks, active, over, dragItem.type),
            })
          );
        } else {
          // Hoán đổi khác cột
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
    <DndContext
      sensors={sensor}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragOver={handleOver}
    >
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
