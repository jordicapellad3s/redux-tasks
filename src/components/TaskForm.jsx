import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title) return;
    dispatch(
      addTask({
        ...task,
        id: uuid(),
        completed: false,
      })
    );
    // reset form
    setTask({ title: "" });
  };

  return (
    <div className="mt-4">
      <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
        <input
          className="px-2 py-1 font-mono focus:outline-none focus:ring-0"
          name="title"
          type="text"
          value={task.title}
          placeholder="Add a task"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
