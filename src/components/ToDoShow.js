import ToDoForm from "./ToDoForm";
import { useState } from "react";
import ToDo from "./ToDo";

function ToDoShow() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  // console.log(...todos);
  const removeTodo = (id) => {
    const updated = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updated)
  };

  return (
    <div>
      <ToDoForm addTodo={addTodo} />
      <ToDo todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default ToDoShow;
