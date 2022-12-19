import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">Tasks</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
