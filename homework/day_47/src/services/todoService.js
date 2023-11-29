import { client } from "../utils/clientUtils";

export const getTodos = async () => {
  const { response, data } = await client.get("/data");
  return { response, data };
};

export const swapArray = (Array, active, over) => {
  let newArray;

  const activeIndex = Array.findIndex(({ column }) => column._id === active.id);
  const overIndex = Array.findIndex(({ column }) => column._id === over.id);

  if (activeIndex <= overIndex) {
    newArray = Array.toSpliced(overIndex + 1, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex, 1);
  } else {
    newArray = Array.toSpliced(overIndex, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex + 1, 1);
  }
  return newArray;
};
