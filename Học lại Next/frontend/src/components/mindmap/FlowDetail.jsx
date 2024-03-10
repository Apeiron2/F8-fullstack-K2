"use client";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { elementSlice } from "@/redux/slices/elementSlice";
const { updateTitle, updateDescription, updatePrivate } = elementSlice.actions;
const FlowDetail = ({ mindmap, edit }) => {
  const state = useSelector((state) => state.element);
  const [title, setTitle] = useState(mindmap.title);
  const [description, setDescription] = useState(mindmap.description);
  const [privateMod, setPrivate] = useState(mindmap.private);
  const [openShare, setOpenShare] = useState(false);
  const dispatch = useDispatch();
  const onTitleChange = (e) => {
    setTitle(e.target.value);
    dispatch(updateTitle(e.target.value));
    document.title = e.target.value;
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
    dispatch(updateDescription(e.target.value));
  };
  const handleSave = () => {
    axiosInstance.patch(`/mindmaps/${mindmap.id}`, state);
    toast.success("Success!");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isPrivate = e.target[0].checked;
    console.log(isPrivate);
    const newTitle = e.target[3].value;
    const newDescription = e.target[4].value;
    setPrivate(isPrivate);
    dispatch(updateTitle(newTitle));
    dispatch(updateDescription(newDescription));
    dispatch(updatePrivate(isPrivate));
    axiosInstance.patch(`/mindmaps/${mindmap.id}`, {
      ...state,
      private: isPrivate,
    });
    setOpenShare(false);
    toast.success("Success!");
  };

  return (
    <div className="d-flex justify-content-between">
      {openShare && (
        <div
          className="position-absolute top-50 start-50 z-3 bg-white rounded-5 border border-2 shadow-2 w-25"
          style={{ translate: "-50% -50%" }}
        >
          <h1 className="text-center my-3">FlowShare</h1>
          <div className=" p-3 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-flex justify-content-center gap-5">
                <div>
                  <input
                    type="radio"
                    name="private"
                    id="private-true"
                    value="true"
                    readOnly
                    defaultChecked={privateMod}
                  />
                  <label htmlFor="private-true" className="form-label mx-2">
                    Private
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="private"
                    id="private-false"
                    value="false"
                    readOnly
                    defaultChecked={!privateMod}
                  />
                  <label htmlFor="private-false" className="form-label mx-2">
                    Public
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Share Link</label>
                <input
                  type="text"
                  className="form-control"
                  value={process.env.HOST_CLIENT + "/mindmaps/" + mindmap.id}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={onTitleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onDescriptionChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input type="text" name="image" className="form-control" />
              </div>
              <div className="mb-3 d-flex align-items-center justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    setOpenShare(false);
                  }}
                >
                  Cancel
                </button>
                <button className="btn btn-success">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {openShare && (
        <div
          className="position-absolute bg-secondary opacity-75 top-0 start-0 vw-100 vh-100 z-2"
          onClick={() => {
            setOpenShare(false);
          }}
        ></div>
      )}
      <div className="d-flex align-items-center gap-3">
        <a href="/mindmaps" className="btn btn-outline-primary p-2 shrink-1">
          <i className="fa-solid fa-reply"></i>
        </a>

        <div className="d-flex flex-column">
          <input
            type="text"
            className="fs-3 border-0"
            value={title}
            style={{ outline: "none" }}
            onChange={onTitleChange}
            readOnly={!edit}
          />
          <input
            type="text"
            className="fs-6 border-0"
            value={description}
            style={{ outline: "none" }}
            onChange={onDescriptionChange}
            readOnly={!edit}
          />
        </div>
      </div>
      {edit && (
        <div className="d-flex gap-3 align-items-center">
          <button className="btn btn-primary" onClick={handleSave}>
            <i className="fa-solid fa-floppy-disk mx-1"></i>
            <span>Save</span>
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              setOpenShare(!openShare);
            }}
          >
            <i className="fa-solid fa-share-from-square mx-1"></i>
            <span>Share</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FlowDetail;
