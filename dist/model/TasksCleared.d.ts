import { Task } from "./Task.js";
export declare class TasksCleared {
    #private;
    constructor();
    get tasksCompleted(): number;
    get tasksDeleted(): number;
    set tasksCompleted(newNum: number);
    set tasksDeleted(newNum: number);
    incTCompleted(): void;
    incTDeleted(): void;
    decTCompleted(): void;
    decTDeleted(): void;
    pushToCompletedArray(task: Task): void;
}
//# sourceMappingURL=TasksCleared.d.ts.map