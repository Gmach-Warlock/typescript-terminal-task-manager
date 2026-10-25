import { Task } from "../../model/Task.js";
import type { TaskInfo } from "../../types/interfaces.js";
export declare function makeTaskOjects(tasks: Task[]): TaskInfo[] | undefined;
export declare function makeStatsObject(size: number, total: number, complete: number, incomplete: number, completed: number, highPriority: number): {
    size: number;
    total: number;
    complete: number;
    incomplete: number;
    completed: number;
    highPriority: number;
};
export declare function recreateTasks(tInfo: TaskInfo[]): Task[];
//# sourceMappingURL=fileFactories.d.ts.map