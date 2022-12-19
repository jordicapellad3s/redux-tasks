import { useEffect, useState } from "react";
import { deleteTask, toggleCompleteTask } from "../features/tasks/tasksSlice";
import { useDispatch } from "react-redux";
import TaskFormInput from "./TaskFormInput";
import { motion } from "framer-motion";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [editting, setEditting] = useState(false);
  // edit task
  const setTask = useState(task);

  const handleDelete = (id) => {
    console.log("delete task", id);
    dispatch(deleteTask(id));
  };

  const handleToggleComplete = (task) => {
    console.log("toggle complete task", task);
    dispatch(toggleCompleteTask(task));
  };

  return (
    <motion.li
      key={task.id}
      className="flex flex-col mb-2"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          value={task.completed}
          checked={task.completed}
          readOnly
          onChange={() => handleToggleComplete(task)}
        />
        {editting ? (
          <TaskFormInput
            id={task.id}
            editting={editting}
            setEditting={setEditting}
          />
        ) : (
          <h1
            className={`font-mono transition duration-200 ease-in-out ${
              task.completed ? "line-through opacity-50" : ""
            }`}
          >
            {task.title}
          </h1>
        )}
      </div>
      <div className="flex ml-5">
        <div className="flex gap-2">
          <button
            className="text-sm opacity-50 cursor-pointer hover:underline"
            onClick={() => handleDelete(task.id)}
          >
            delete
          </button>
          <button
            className="text-sm opacity-50 cursor-pointer hover:underline"
            onClick={() => setEditting(!editting)}
          >
            edit
          </button>
        </div>
      </div>
    </motion.li>
  );
}
