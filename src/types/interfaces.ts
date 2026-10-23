import type { Priority, PropToModify } from "./types.js";

export interface TaskObj extends TaskInfo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
}
export interface TaskInfo {
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
}

export interface TasksSizeObj {
  size: number;
  total: number;
}

export interface TasksStoreObj {
  tasks: TaskObj[];
}

export interface EditInfo {
  propToEdit: PropToModify;
  newValue: string;
}
