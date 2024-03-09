import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [showMsg, setShowMsg] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      setShowMsg("Please enter a todo to add");
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="">
      <div className="flex items-center justify-between gap-x-5">
        <input
          type="text"
          className="grow rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-white/70"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <p className="mt-2 h-6 text-sm text-red-500  ">{showMsg}</p>
    </form>
  );
}

export default AddTodo;
