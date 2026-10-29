import { Task } from "../../model/task/Task.js";
import type { TaskInfo } from "../../types/taskInterfaces.js";
import type { TAdds } from "../../types/stateInterfaces.js";
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
export declare function makeOtherStats(): TAdds;
//# sourceMappingURL=fileFactories.d.ts.map