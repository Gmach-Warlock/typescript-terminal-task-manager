import type { Priority } from "./types.js";
export interface TaskObj {
    id: string;
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    createdAt: string;
}
export interface TasksSizeObj {
    size: number;
    total: number;
}
export interface TasksStoreObj {
    tasks: TaskObj[];
}
//# sourceMappingURL=interfaces.d.ts.map