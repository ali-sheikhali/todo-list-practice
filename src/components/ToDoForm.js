import { useState } from "react";

function ToDoForm({ addTodo }) {
  const [addToList, setAddToList] = useState("");

  const handleChange = (event) => {
    setAddToList(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTodo({
      id: Math.round(Math.random() * 1000),
      name: addToList,
    });
    setAddToList('')
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-5 flex justify-between border-b-2 "
      >
        <div className="space-x-2">
          <label htmlFor="" className="font-bold">
            To Do:
          </label>
          <input
          value={addToList}
            className="p-2 rounded-md focus:outline"
            type="text"
            placeholder="add to do"
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-green-400 text-white px-2 py-1 rounded-md"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
