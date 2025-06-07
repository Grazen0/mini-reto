import classNames from "classnames";
import ConceptsList from "./components/ConceptsList";
import Dashboard from "./components/Dashboard";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
import { DarkModeProvider } from "./lib/dark-mode";
import type { TaskAddInfo, TaskInfo } from "./lib/types";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const [dark, setDark] = useState(false);
  const nextTaskId = useRef(0);
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  const addTask = (task: TaskAddInfo) => {
    nextTaskId.current++;
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, id: nextTaskId.current, completed: false },
    ]);
  };

  const setTaskCompletion = (id: number, completed: boolean) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed } : task)),
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  };

  const toggleDarkMode = () => setDark((prev) => !prev);

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("bg-neutral-100");
      document.body.classList.add("bg-slate-900");
    } else {
      document.body.classList.remove("bg-slate-900");
      document.body.classList.add("bg-neutral-100");
    }
  }, [dark]);

  return (
    <DarkModeProvider value={dark}>
      <main
        className={classNames(
          "px-12 py-10 space-y-10 font-sans transition-colors",
          dark ? "bg-slate-900 text-white" : "bg-neutral-100 text-neutral-800",
        )}
      >
        <Dashboard tasks={tasks} toggleDarkMode={toggleDarkMode} />
        <InputBox addTask={addTask} />
        <TaskList
          tasks={tasks}
          setTaskCompletion={setTaskCompletion}
          removeTask={removeTask}
        />
        <ConceptsList
          concepts={[
            "Componentes funcionales y props",
            "useState para manejo de estado",
            "useEffect para efectos secundarios",
            "useRef para referencias DOM",
            "useContext para estado global",
            "createContext para crear contexto",
          ]}
        />
      </main>
    </DarkModeProvider>
  );
};

export default App;
