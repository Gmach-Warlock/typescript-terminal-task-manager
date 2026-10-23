import { Task } from "../model/Task.js";

export type Answer = string | number;
export type Completed = "Complete" | "Incomplete" | "All";
export type Listener = () => void;
export type Priority = "Low" | "Medium" | "High";
export type PropToModify = "title" | "description" | "priority" | "completed";
export type SearchProp = "title" | "description";
export type SimpleType = string | boolean | number;
export type BasicTypes = string | boolean | number | object;
export type FilterType = Completed | Priority;
export type SortType = "Newest" | "Oldest" | "Low" | "High";
export type Purpose =
  | "add"
  | "delete"
  | "edit"
  | "complete"
  | "incomplete"
  | "replace";
export type FilterFunction = (() => Task[]) | (() => void);
export type SortFunction = (() => Task[]) | (() => void);
