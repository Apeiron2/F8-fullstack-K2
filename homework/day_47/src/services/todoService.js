import { client } from "../utils/clientUtils";

export const getTodos = async () => {
  const { response, data } = await client.get("/data");
  return { response, data };
};

export const swapArray = (Array, active, over, type) => {
  let newArray;

  let activeIndex;
  let overIndex;
  if (type == "column") {
    // Để tìm được Index của column từ listTodo cần lấy _id trong thuộc tính column
    activeIndex = Array.findIndex(({ column: { _id } }) => _id === active.id);
    overIndex = Array.findIndex(({ column: { _id } }) => _id === over.id);
  } else {
    // Tìm Index của task trong array tasks thì không cần
    activeIndex = Array.findIndex(({ _id }) => _id === active.id);
    overIndex = Array.findIndex(({ _id }) => _id === over.id);
  }

  // Xử lý Array
  if (activeIndex <= overIndex) {
    newArray = Array.toSpliced(overIndex + 1, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex, 1);
  } else {
    newArray = Array.toSpliced(overIndex, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex + 1, 1);
  }
  return newArray;
};
