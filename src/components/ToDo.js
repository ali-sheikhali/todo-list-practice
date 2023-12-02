// import ToDoForm from "./ToDoForm";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

function ToDo({ todos,removeTodo }) {
  const handleclick = (id)=>{
    removeTodo(id)
  }

  console.log(0.1+0.2);
 
  return todos.map((todo) => (
    <div className=" p-2 font-bold" key={todo.id}>
      <div className="flex justify-between border px-5 py-2 border-blue-600 rounded-md">
        <p>{todo.name}</p>
        <div className="flex space-x-5 mt-1">
          <FaTrashCan  className=" cursor-pointer" onClick={()=>handleclick(todo.id)} />
          <FaRegEdit className=" cursor-pointer" />
        </div>
      </div>
    </div>
  ));
}

export default ToDo;

// 