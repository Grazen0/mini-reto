import { useState } from "react";
import type { TaskInfo } from "../lib/types";
import Task from "./Task";
import classNames from "classnames";
import { useDarkMode } from "../lib/dark-mode";

interface Props {
  tasks: TaskInfo[];
  toggleTaskCompletion: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskList = ({
  tasks,
  toggleTaskCompletion: setTaskCompletion,
  removeTask,
}: Props) => {
  const dark = useDarkMode();
  const [filter, setFilter] = useState("todas");

  const filteredTasks =
    filter === "todas"
      ? tasks
      : tasks.filter((task) => task.priority == filter);

  return (
    <div
      className={classNames(
        "px-6 py-5 shadow-md rounded-xl",
        dark ? "bg-slate-800" : "bg-white",
      )}
    >
      <div className="flex mb-4 items-center">
        <h2 className="text-xl font-semibold grow">
          Mis tareas ({tasks.length})
        </h2>
        <select
          name="filter"
          id="filter"
          className="border border-neutral-400 rounded-md px-3 py-1"
          value={filter}
          onChange={(ev) => setFilter(ev.currentTarget.value)}
        >
          <option value="todas">Todas</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
      </div>
      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleSelfCompletion={() => setTaskCompletion(task.id)}
            removeSelf={() => removeTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
