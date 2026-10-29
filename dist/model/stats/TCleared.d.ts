import { Task } from "../task/Task.js";
export declare class TCleared {
    #private;
    constructor();
    get completed(): number;
    get deleted(): number;
    get completedTasks(): Task[];
    get deletedTasks(): Task[];
    set completed(newNum: number);
    set deleted(newNum: number);
    set completedTasks(newArray: Task[]);
    set deletedTasks(newArray: Task[]);
    incTCompleted(): void;
    incTDeleted(): void;
    decTCompleted(): void;
    decTDeleted(): void;
    addToCompletedTasks(task: Task): void;
    addToDeletedTasks(task: Task): void;
    logCleared(extra?: boolean): void;
}
export declare const tCleared: TCleared;
//# sourceMappingURL=TCleared.d.ts.map