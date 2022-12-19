import { useSelector } from "react-redux";
import Task from "./Task";
import { AnimatePresence } from "framer-motion";

export default function TaskList() {
  const tasksState = useSelector((state) => state.tasks);

  return (
    <div>
      <ul className="mt-4">
        <AnimatePresence>
          {tasksState.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
