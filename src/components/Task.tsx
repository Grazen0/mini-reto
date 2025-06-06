import classNames from "classnames";
import type { TaskInfo } from "../lib/types";
import { LuTrash2 } from "react-icons/lu";

export interface Props {
  task: TaskInfo;
  removeSelf: () => void;
  setSelfCompletion: (completed: boolean) => void;
}

const Task = ({ task, removeSelf, setSelfCompletion }: Props) => (
  <li
    className={classNames(
      "px-4 py-4 rounded-lg flex border-l-5",
      task.priority == "baja"
        ? "border-green-500 bg-green-500/15"
        : task.priority == "media"
          ? "border-yellow-500 bg-yellow-500/15"
          : "border-red-500 bg-red-500/15",
    )}
  >
    <input
      type="checkbox"
      className="rounded-full mr-4"
      checked={task.completed}
      onChange={(ev) => setSelfCompletion(ev.currentTarget.checked)}
    />
    <span className="text-xl grow">{task.content}</span>
    <span
      className={classNames(
        "rounded-full px-3 py-1 mx-3",
        task.priority == "baja"
          ? "bg-green-200 text-green-950"
          : task.priority == "media"
            ? "bg-yellow-200 text-yellow-950"
            : "bg-red-200 text-red-950",
      )}
    >
      {task.priority}
    </span>
    <button
      className="cursor-pointer hover:bg-red-200 active:bg-red-300 rounded-lg px-2 transition-all"
      onClick={removeSelf}
    >
      <LuTrash2 color="var(--color-red-500)" size={18} />
    </button>
  </li>
);
export default Task;
