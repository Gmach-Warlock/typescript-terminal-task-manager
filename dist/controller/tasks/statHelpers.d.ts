import type { Task } from "../../model/Task.js";
export declare function addTStats(task: Task): void;
export declare function removeTStats(task: Task): void;
export declare function markTStats(completed?: boolean): void;
export declare function editTStats(task: Task, propToModify: keyof Task, newVal: string): void;
//# sourceMappingURL=statHelpers.d.ts.map