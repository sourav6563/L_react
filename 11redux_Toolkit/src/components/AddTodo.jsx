import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice.js";

export function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editedTodo = useSelector((state) => state.editedTodo);

  useEffect(() => {
    if (editedTodo) {
      setInput(editedTodo.text);
    } else {
      setInput("");
    }
  }, [editedTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    if (editedTodo) {
      dispatch(updateTodo({ id: editedTodo.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editedTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}
