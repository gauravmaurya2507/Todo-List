import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = ({ task, toogleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toogleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FaEdit onClick={() => editTodo(task.id)} />
        <MdDelete onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo
