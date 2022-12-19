import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="p-10 flex flex-col gap-10 items-start">
      <div>
        <h1 className="text-5xl font-bold">Tasks</h1>
        <TaskForm />
        <TaskList />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-start w-auto gap-2 rounded-lg p-5 bg-[#3b3b3b]">
          <div className="flex gap-2">
            <div>
              <img
                className="w-7 h-7 rounded-full"
                src="https://jordicapellades.dev/_next/image?url=%2Fimages%2Fselfie-1.jpeg&w=96&q=75"
              />
            </div>
            <div>
              <h1 className="font-bold">Hola soy Jordi.</h1>
            </div>
          </div>
          <p className="text-sm">
            Este es un proyecto de ejemplo para aprender Redux Toolkit. El
            código está disponible en{" "}
            <a
              href="https://github.com/jordicapellad3s/redux-tasks"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            .
          </p>
        </div>
        <a
          className=""
          href="https://github.com/jordicapellad3s/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex flex-col justify-start w-auto rounded-lg p-5  bg-blue-400">
            <div className="flex gap-2 items-center">
              <img
                className="w-5 h-5"
                src="https://github.githubassets.com/favicons/favicon-dark.png"
              />
              <span className="text-sm">
                Si te ha gustado. Puedes seguirme en github.
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
