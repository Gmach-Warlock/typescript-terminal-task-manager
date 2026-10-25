import { Task } from "../model/Task.js";
import type { Priority, PropToModify, Purpose, TCategory } from "./types.js";

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
  day: number;
  month: number;
  year: number;
}

export interface SubTask {
  id: string;
  title: string;
  createdAt: string;
}

export interface StateObject {
  timeChanged: string;
  newState: Task[];
  typeOfLastChange: Purpose;
}
