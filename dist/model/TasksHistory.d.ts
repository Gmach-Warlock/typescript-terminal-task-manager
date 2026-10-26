import type { StateObject } from "../types/interfaces.js";
import { StateNode } from "./StateNode.js";
export declare class TasksHistory {
    #private;
    constructor();
    get currentN(): StateNode | null;
    set currentN(newCurrentN: StateNode | null);
    get numOfStates(): number;
    set numOfStates(newNum: number);
    addNewTasksState(state: StateObject): void;
    logStates(): void;
    redo(): void;
    undo(): void;
    makeObj(): {
        head: StateNode | null;
        tail: StateNode | null;
        currentN: StateNode | null;
        numOfStates: number;
        stateMap: Map<string, StateNode>;
    };
}
export declare const tHistory: TasksHistory;
//# sourceMappingURL=TasksHistory.d.ts.map