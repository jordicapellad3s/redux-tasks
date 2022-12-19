import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../features/tasks/tasksSlice";

export default function TaskFormInput({ id, editting, setEditting }) {
  const tasks = useSelector((state) => state.tasks);
  const [task, setTask] = useState(tasks.find((task) => task.id === id));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // if input is empty, don't submit
    if (!task.title) return;
    e.preventDefault();
    dispatch(editTask(task));
    setEditting(false);
  };

  // focus on input when editting
  useEffect(() => {
    if (editting) {
      const input = document.getElementById(task.id);
      input.focus();
    }
  }, [editting]);

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <input
        id={task.id}
        className="font-mono focus:outline-none focus:ring-0 bg-transparent"
        name="title"
        type="text"
        value={task.title}
        onChange={handleChange}
      />
    </form>
  );
}
