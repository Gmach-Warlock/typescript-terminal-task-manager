import type { StateObject } from "../types/interfaces.js";
export declare class TasksHistory {
    #private;
    constructor();
    addNewTasksState(state: StateObject): void;
    logStates(): void;
    redo(): void;
    undo(): void;
}
export declare const tHistory: TasksHistory;
//# sourceMappingURL=TasksHistory.d.ts.map