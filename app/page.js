"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask = copyTask.splice(i, 1)
    setmainTask(copyTask)
  }

  let renderTask = <h1>No tasks available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between mb-5">
          <div className="flex items-center justify-between w-2/3 mb-5">
            <h5 className="font-bold text-2xl">{t.title}</h5>
            <h6 className="font-semibold text-medium ">{t.desc}</h6>
            </div>
            <button className="text-xl mx-5 px-2 py-1 bg-red-500 rounded-md text-white font-bold"
            onClick={() => {
                deleteHandler(i)
              }}
            >
              Delete
            </button>
        </li>
      );
    });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };
  return (
    <>
      <h1 className=" bg-red-500 px-3 py-5 text-white font-bold text-center text-5xl">
        My Todo List App
      </h1>
      <form onSubmit={submitHandler} className="my-9">
        <input
          type="text"
          className="text-xl border-2 rounded-md border-slate-500 p-1 mx-5 my-5"
          placeholder="Enter your Task"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-xl border-2 rounded-md border-slate-500 p-1 mx-5"
          placeholder="Enter your Description"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button
          className="text-xl mx-5 px-2 py-1 bg-red-500 rounded-md text-white font-bold"
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
      <div className="bg-slate-200 p-5">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
