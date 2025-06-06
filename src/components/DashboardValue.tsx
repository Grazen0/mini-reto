import type { ReactNode } from "react";

export interface Props {
  label: string;
  children: ReactNode;
}

const DashboardValue = ({ label, children }: Props) => (
  <div>
    <p className="text-neutral-800">{label}</p>
    <p className="font-bold text-3xl">{children}</p>
  </div>
);

export default DashboardValue;
