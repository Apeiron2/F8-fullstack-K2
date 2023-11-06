import React, { useEffect, useReducer } from "react";
import { reducer } from "../../reducer/reducer";
import { client } from "../../helper/client";
export default function Todo({ id, todo, isCompleted, handleDelete }) {
  const initialState = {
    id: id,
    content: todo,
    prevContent: todo,
    isCompleted: isCompleted,
    editForm: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleCompleted = (e) => {
    dispatch({
      type: "Todo/completed",
      payload: !e.target.classList.contains("completed"),
    });
  };
  const handleChangeForm = (e) => {
    e.preventDefault();
    dispatch({
      type: "Todo/changeForm",
      payload: 0,
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: "Todo/change",
      payload: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    handleChangeForm(e);
    const button =
      e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
    dispatch({
      type: `Todo/update/${button.classList.value}`,
      payload: state.content,
    });
  };
  // Khi trạng thái Completed thay đổi
  useEffect(() => {
    async function update() {
      const { response, data } = await client.patch(`/todos/${state.id}`, {
        isCompleted: state.isCompleted,
      });

      if (response.ok) {
        // Update thành công
      } else {
        // Update thất bại
        if (data.code == 401) {
          const { response, data } = await refreshApiKey();
          if (response.ok) {
            await client.patch(`/todos/${state.id}`, {
              isCompleted: state.isCompleted,
            });
          } else {
            alert(data.message);
          }
        } else alert(data.message);
      }
    }
    update();
  }, [state.isCompleted]);
  // Khi nội dung thay đổi
  useEffect(() => {
    async function update() {
      const { response, data } = await client.patch(`/todos/${state.id}`, {
        todo: state.prevContent,
      });

      if (response.ok) {
        // Update thành công
      } else {
        // Update thất bại
        if (data.code == 401) {
          const { response, data } = await refreshApiKey();
          if (response.ok) {
            await client.patch(`/todos/${state.id}`, {
              todo: state.prevContent,
            });
          } else {
            alert(data.message);
          }
        } else alert(data.message);
      }
    }
    update();
  }, [state.prevContent]);
  return (
    <form className={state.editForm ? "todo edit-form" : "todo"}>
      <div className="content">
        <input
          type="text"
          value={state.content}
          id={state.id}
          className={state.isCompleted && !state.editForm ? "completed" : ""}
          onChange={handleChange}
          onClick={handleCompleted}
          readOnly={!state.editForm}
        />
      </div>
      <div className="feature">
        {state.editForm ? (
          <React.Fragment>
            <button type="submit" className="accept" onClick={handleUpdate}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button type="submit" className="cancer" onClick={handleUpdate}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button type="submit" className="edit" onClick={handleChangeForm}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              type="submit"
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(state.id);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </React.Fragment>
        )}
      </div>
    </form>
  );
}
