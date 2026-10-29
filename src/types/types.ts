import { Task } from "../model/task/Task.js";
import type { TaskInfo } from "./taskInterfaces.js";
export type Answer = string | number;
export type TCategory = "Work" | "Home" | "Health" | "Personal" | "Other";
export type Completed = "Complete" | "Incomplete" | "All";
export type Listener = (purpose: Partial<Purpose>) => void;
export type Priority = "Low" | "Medium" | "High";
export type PropToModify = "title" | "description" | "priority" | "completed";
export type SearchProp = "title" | "description";
export type SimpleType = string | boolean | number;
export type BasicTypes = string | boolean | number | object;
export type FilterType = Completed | Priority;
export type SortType = "Newest" | "Oldest" | "Low" | "High";
export type TaskExraPurposes = "subtask" | "tag" | "dueDate";
export type TaskCRUD =
  | "add"
  | "clear completed"
  | "complete"
  | "delete"
  | "edit"
  | "incomplete"
  | "initialize"
  | "replace";
export type TaskStateEdit = "exit" | "load" | "redo" | "undo" | "save";
export type Purpose = TaskExraPurposes | TaskCRUD | TaskStateEdit;
export type FilterFunction = (() => Task[]) | (() => void);
export type SortFunction = (() => Task[]) | (() => void);
export type TaskStoreObj = TaskInfo[];

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
