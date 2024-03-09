import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
      text: "Learn React",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload.text
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (!todo.id === action.payload) return;
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            text: action.payload,
          };
        }
      });
    },
  },
});

export const { addTodo, removeTodo, completeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
