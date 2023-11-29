"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { addTodos } from "../../../service/todoService";
import { cookies, headers } from "next/headers";
export const handleSubmit = async (formData) => {
  const name = formData.get("name");
  const { response, data } = await addTodos({ name });

  if (response.ok) {
    const path = headers().get("next-url");
    console.log(path);
    // revalidatePath("/todos");
    revalidateTag("todo_list");
    cookies().set({
      name: "ahihi",
      value: name,
      maxAge: 3600,
      httpOnly: true,
    });
  }
};
