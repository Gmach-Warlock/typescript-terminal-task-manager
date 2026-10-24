import type { Month, Priority, PropToModify, TCategory } from "./types.js";

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
  category: TCategory;
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

export interface DueDate {
  month: Month;
  year: number;
  day: number;
}

export interface SubTask {
  id: string;
  title: string;
  createdAt: string;
}
