import { LuClock, LuUser } from "react-icons/lu";
import type { TaskInfo } from "../lib/types";
import DashboardValue from "./DashboardValue";
import { useDate } from "../lib/hooks";
import { useDarkMode } from "../lib/dark-mode";
import classNames from "classnames";

export interface Props {
  tasks: TaskInfo[];
  toggleDarkMode: () => void;
}

const Dashboard = ({ tasks, toggleDarkMode }: Props) => {
  const date = useDate();
  const dark = useDarkMode();

  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  const completedTasks = tasks.filter((task) => task.completed);
  const progress = completedTasks.length / tasks.length;

  return (
    <div
      className={classNames(
        "rounded-xl px-6 py-4 space-y-6",
        dark ? "bg-slate-800" : "bg-blue-100",
      )}
    >
      <div className="flex justify-between flex-col sm:flex-row items-center space-x-3">
        <div className="flex items-center space-x-3">
          <LuUser size={40} className="hidden sm:inline" />
          <div className="grow">
            <h1 className="font-bold text-2xl mb-2 text-center sm:text-left">
              <LuUser size={30} className="sm:hidden inline mr-2" />
              ¡Hola, estudiante!
            </h1>
            <p
              className={classNames(
                "text-center sm:text-left",
                dark ? "text-neutral-300" : "text-neutral-600",
              )}
            >
              Laboratorio de React Hooks
            </p>
          </div>
        </div>
        <div className="text-center space-y-1">
          <p className="font-mono text-nowrap">
            <LuClock className="inline mr-2" />
            {hour}:{minute}:{second}
          </p>
          <button
            className={classNames(
              "rounded-full px-3 py-0.5 cursor-pointer transition-all text-nowrap",
              dark
                ? "bg-slate-900 hover:bg-slate-950"
                : "bg-neutral-300 hover:bg-neutral-400",
            )}
            onClick={toggleDarkMode}
          >
            {dark ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>
      </div>
      <div className="sm:grid grid-cols-3 sm:space-x-4 space-y-4 sm:space-y-0">
        <DashboardValue label="Total de tareas">{tasks.length}</DashboardValue>
        <DashboardValue label="Completadas">
          <span className="text-green-500">{completedTasks.length}</span>
        </DashboardValue>
        <DashboardValue label="Progreso">
          {isNaN(progress) ? "-" : Math.floor(100 * progress)}%
        </DashboardValue>
      </div>
    </div>
  );
};

export default Dashboard;
