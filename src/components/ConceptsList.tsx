import classNames from "classnames";
import { useDarkMode } from "../lib/dark-mode";

export interface Props {
  concepts: string[];
}

const ConceptsList = ({ concepts }: Props) => {
  const dark = useDarkMode();

  return (
    <div
      className={classNames(
        "rounded-xl px-6 py-4",
        dark ? "bg-slate-800" : "bg-blue-100 ",
      )}
    >
      <h2 className="font-semibold text-xl mb-4">
        🧪 Conceptos implementados en este laboratorio
      </h2>
      <ul className="">
        {concepts.map((concept, i) => (
          <li key={i}>✅ {concept}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConceptsList;
