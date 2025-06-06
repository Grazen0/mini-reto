export type TaskPriority = "baja" | "media" | "alta";

export interface TaskAddInfo {
  content: string;
  priority: TaskPriority;
}

export interface TaskInfo {
  id: number;
  content: string;
  priority: TaskPriority;
  completed: boolean;
}
