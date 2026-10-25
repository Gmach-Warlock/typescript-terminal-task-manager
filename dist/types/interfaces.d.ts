import { Task } from "../model/Task.js";
import type { Priority, PropToModify, Purpose, TCategory } from "./types.js";
export interface TaskInfo {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    category: TCategory;
    createdAt: string;
    dueDate: string;
    subtasks: string[];
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
    day: number;
    month: number;
    year: number;
}
export interface SubTask {
    id: string;
    title: string;
    createdAt: string;
}
export interface StatsObj {
    size: number;
    total: number;
    complete: number;
    incomplete: number;
    completed: number;
}
export interface StateObject {
    timeChanged: string;
    newTasksState: Task[];
    newStatsState: StatsObj;
    typeOfLastChange: Purpose;
}
export interface SaveState {
    tasks: TaskInfo[];
    stats: StatsObj;
    savedAt: string;
}
//# sourceMappingURL=interfaces.d.ts.map