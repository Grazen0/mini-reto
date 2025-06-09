import classNames from "classnames";
import type { TaskInfo } from "../lib/types";
import { LuCircle, LuCircleCheckBig, LuTrash2 } from "react-icons/lu";

export interface Props {
  task: TaskInfo;
  removeSelf: () => void;
  toggleSelfCompletion: () => void;
}

const Task = ({ task, removeSelf, toggleSelfCompletion }: Props) => {
  const CheckIcon = task.completed ? LuCircleCheckBig : LuCircle;

  return (
    <li
      className={classNames(
        "px-4 py-4 rounded-lg flex border-l-5 items-center",
        task.priority === "baja"
          ? "border-green-500 bg-green-500/15"
          : task.priority === "media"
            ? "border-yellow-500 bg-yellow-500/15"
            : "border-red-500 bg-red-500/15",
      )}
    >
      <button className="mr-4 cursor-pointer" onClick={toggleSelfCompletion}>
        <CheckIcon size={30} color="var(--color-neutral-400)" />
      </button>
      <span
        className={classNames(
          "sm:text-xl grow",
          task.completed && "line-through text-neutral-500",
        )}
      >
        {task.content}
      </span>
      <span
        className={classNames(
          "rounded-full px-3 py-1 mx-3",
          task.priority === "baja"
            ? "bg-green-200 text-green-950"
            : task.priority === "media"
              ? "bg-yellow-200 text-yellow-950"
              : "bg-red-200 text-red-950",
        )}
      >
        {task.priority}
      </span>
      <button
        className="cursor-pointer text-red-500 hover:bg-red-300/25 active:bg-red-300/50 rounded-lg px-2 py-2 transition-all"
        onClick={removeSelf}
      >
        <LuTrash2 size={18} />
      </button>
    </li>
  );
};
export default Task;
