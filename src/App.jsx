import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="p-10 flex justify-between items-start">
      <div>
        <h1 className="text-5xl font-bold">Tasks</h1>
        <TaskForm />
        <TaskList />
      </div>
      <div>
        <a
          href="https://github.com/jordicapellad3s/redux-tasks"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 underline opacity-50 hover:opacity-100 text-sm transition duration-200 ease-in-out"
        >
          Github
          <span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
