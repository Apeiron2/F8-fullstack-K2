"use client";
import axiosInstance from "@/utils/axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
const createMindmap = () => {
  axiosInstance
    .post("/mindmaps", {
      data: {
        nodes: [
          {
            id: "1",
            data: { label: "Hello" },
            position: { x: 0, y: 0 },
            type: "custom",
          },
          {
            id: "2",
            data: { label: "Hello 2 " },
            position: { x: 100, y: 100 },
            type: "custom",
          },
        ],
        edges: [{ id: "1-2", source: "1", target: "2", type: "custom" }],
      },
    })
    .then((res) => {
      if (res.status == 201) {
        const mindmap = res.data.data;
        window.location.href =
          process.env.HOST_CLIENT + "/mindmaps/" + mindmap.id;
        toast.success("Success");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
const addMindmap = () => {
  return (
    <button
      className="btn btn-primary mb-3 p-1"
      style={{ width: 60 }}
      onClick={createMindmap}
    >
      + New
    </button>
  );
};

export default addMindmap;
