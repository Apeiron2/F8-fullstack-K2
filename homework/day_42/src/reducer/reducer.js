export const reducer = (prevState, action = {}) => {
  switch (action.type) {
    case "TodoList/search": {
      return {
        ...prevState,
        search: prevState.todoList.filter(({ todo }) =>
          todo.includes(action.payload)
        ),
      };
    }
    case "TodoList/add": {
      return {
        ...prevState,
        todoList: [action.payload, ...prevState.todoList],
      };
    }
    case "TodoList/delete": {
      return {
        ...prevState,
        todoList: prevState.todoList.toSpliced(
          prevState.todoList.findIndex(({ _id }) => _id == action.payload),
          1
        ),
      };
    }
    case "AddToDo/onchange": {
      return { ...prevState, content: action.payload };
    }
    case "AddToDo/submit": {
      return { ...prevState, content: action.payload };
    }

    case "Todo/completed": {
      return { ...prevState, isCompleted: action.payload };
    }
    case "Todo/changeForm": {
      return { ...prevState, editForm: !prevState.editForm };
    }
    case "Todo/change": {
      return { ...prevState, content: action.payload };
    }
    case "Todo/update/accept": {
      return { ...prevState, prevContent: prevState.content };
    }
    case "Todo/update/cancer": {
      return { ...prevState, content: prevState.prevContent };
    }

    default:
      return prevState;
  }
};
