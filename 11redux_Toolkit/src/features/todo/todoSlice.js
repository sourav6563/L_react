import { createSlice, nanoid, current } from "@reduxjs/toolkit";

// 🔹 Helper: Load from localStorage safely
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("todosData");
    return data ? JSON.parse(data) : { todos: [], editedTodo: null };
  } catch (err) {
    console.error("Error loading from localStorage", err);
    return { todos: [], editedTodo: null };
  }
};

// 🔹 Helper: Save to localStorage safely
const saveToLocalStorage = (state) => {
  try {
    // Immer keeps "state" wrapped in proxy → use current() to unwrap it cleanly
    const plainState = current(state);
    localStorage.setItem("todosData", JSON.stringify(plainState));
  } catch (err) {
    console.error("Error saving to localStorage", err);
  }
};

const initialState = loadFromLocalStorage();

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      saveToLocalStorage(state);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(state);
    },

    startEditingTodo: (state, action) => {
      state.editedTodo = action.payload;
      saveToLocalStorage(state);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editedTodo = null;
      saveToLocalStorage(state);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, startEditingTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
