import type { ReactNode } from "react";
import { useDarkMode } from "../lib/dark-mode";
import classNames from "classnames";

export interface Props {
  label: string;
  children: ReactNode;
}

const DashboardValue = ({ label, children }: Props) => {
  const dark = useDarkMode();

  return (
    <div
      className={classNames(
        "rounded-lg px-4 py-2",
        dark ? "bg-slate-600" : "bg-blue-50",
      )}
    >
      <p className={dark ? "text-neutral-100" : "text-neutral-800"}>{label}</p>
      <p className="font-bold text-3xl">{children}</p>
    </div>
  );
};

export default DashboardValue;
