import classNames from "classnames";
import ConceptsList from "./components/ConceptsList";
import Dashboard from "./components/Dashboard";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
import { DarkModeProvider } from "./lib/dark-mode";
import type { TaskAddInfo, TaskInfo } from "./lib/types";
import { useRef, useState } from "react";

const initialTasks: TaskInfo[] = [
  {
    id: 0,
    content: "Aprender React Hooks",
    priority: "alta",
    completed: true,
  },
  {
    id: 1,
    content: "Crear componentes reutilizables",
    priority: "media",
    completed: false,
  },
];

const App = () => {
  const [dark, setDark] = useState(false);
  const nextTaskId = useRef(0);
  const [tasks, setTasks] = useState<TaskInfo[]>(initialTasks);

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
