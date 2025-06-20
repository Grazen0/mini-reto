import { useRef, useState, type FormEventHandler } from "react";
import type { TaskAddInfo, TaskPriority } from "../lib/types";
import classNames from "classnames";
import { useDarkMode } from "../lib/dark-mode";

export interface Props {
  addTask: (task: TaskAddInfo) => void;
}

const InputBox = ({ addTask }: Props) => {
  const dark = useDarkMode();
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("baja");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();

    if (content.length != 0) {
      addTask({ content, priority });
      setContent("");
    }
  };

  return (
    <div
      className={classNames(
        "px-6 py-5 rounded-xl shadow-lg",
        dark ? "bg-slate-800" : "bg-white",
      )}
    >
      <form
        className="sm:space-x-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="¿Qué necesitas hacer?"
          className={classNames(
            "border rounded-md px-3 py-2 grow min-w-0 max-w-full",
            dark
              ? "bg-slate-700 border-slate-600"
              : "bg-neutral-50 border-neutral-400",
          )}
          value={content}
          onChange={(ev) => setContent(ev.currentTarget.value.trimStart())}
        />
        <div className="flex space-x-4">
          <select
            name="priority"
            id="priority"
            className="border border-neutral-400 rounded-md px-3 py-2 grow"
            value={priority}
            onChange={(ev) =>
              setPriority(ev.currentTarget.value as TaskPriority)
            }
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-all hover:bg-blue-600 cursor-pointer hover:outline-3 outline-0 outline-blue-300 active:bg-blue-800 text-nowrap grow-4"
          >
            + Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
