import { Tag } from "../model/tChildren/Tag.js";
import type { TDue } from "../model/task/TDue.js";
import type { Subtask } from "../model/tChildren/Subtask.js";
import type { Priority, PropToModify, Purpose, TCategory } from "./types.js";
import type { TSubtasks } from "../model/tChildren/TSubtasks.js";

export interface SubtaskInfo {
  id: string;
  title: string;
  descripton: string;
  priority: Priority;
  completed: boolean;
  createdAt: string;
}

export interface TagInfo {
  id: string;
  tag: string;
  createdAt: string;
}
export interface TaskInfo {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
  category: TCategory;
  createdAt: string;
  dueDate: string;
  subtasks: Subtask[];
  tags: string[];
}

export interface TasksSizeObj {
  size: number;
  total: number;
}

export interface EditInfo {
  propToEdit: PropToModify;
  newValue: string;
}

export interface DueDate {
  taskTitle: string;
  day: number;
  month: number;
  year: number;
}

export interface SubTaskInfo {
  id: string;
  parent: string;
  title: string;
  priority: Priority;
  createdAt: string;
  completed: boolean;
}

export interface StatsObj {
  size: number;
  total: number;
  complete: number;
  incomplete: number;
  completed: number;
  highPriority: number;
}

export interface StateObject {
  id: string;
  timeChanged: string;
  tasksState: TaskInfo[];
  statsState: StatsObj;
  tAddsState: TAdds;
  typeOfLastChange: Purpose;
}

export interface SaveState {
  tasks: TaskInfo[];
  stats: StatsObj;
  tAdds: TAdds;
  savedAt: string;
}

export interface TAdds {
  dues: TDue[];
  tags: Tag[];
  subBank: TSubtasks[];
}

export interface STInstanceInfo {
  title: string;
  STTitle: string;
  STDescription: string;
  STPriority: Priority;
}
