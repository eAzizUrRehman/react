import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../app/features/todo/todoSlice";
import { checkMarkIcon, crossMarkIcon, editIcon, trashIcon } from "../assets";

function Todos() {
  const [openEditInput, setOpenEditInput] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEditClick = (e) => {
    setOpenEditInput(true);
    e.target.focus();
  };

  return (
    <>
      <h1 className="mt-2 text-center text-xl font-semibold text-white">
        Todos
      </h1>
      {todos.length < 1 && (
        <p className="mt-4 text-center text-white">No todos to show</p>
      )}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex items-center justify-between gap-x-4 rounded bg-zinc-800 px-4 py-2"
            key={todo.id}
          >
            <input
              type="text"
              readOnly={!openEditInput}
              value={todo.text}
              className={`h-full grow rounded border bg-zinc-800 px-2 py-1 font-semibold text-white outline-none ${
                todo.isCompleted ? "line-through" : ""
              } ${openEditInput ? "  border-white/50" : " border-transparent"}`}
            />

            <div className="space-x-2">
              <button
                onClick={handleEditClick}
                className="text-md rounded border-0 bg-orange-500 p-1 text-white hover:bg-orange-600 focus:outline-none"
              >
                <img src={editIcon} alt="" className="size-6" />
              </button>
              <button
                onClick={() => dispatch(completeTodo(todo.id))}
                className="text-md rounded border-0   bg-green-500 p-1 text-white hover:bg-green-600 focus:outline-none"
              >
                {todo.isCompleted ? (
                  <img src={crossMarkIcon} alt="" className="size-6" />
                ) : (
                  <img src={checkMarkIcon} alt="" className="size-6" />
                )}
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-md rounded border-0   bg-red-500 p-1 text-white hover:bg-red-600 focus:outline-none"
              >
                <img src={trashIcon} alt="" className="size-6" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
