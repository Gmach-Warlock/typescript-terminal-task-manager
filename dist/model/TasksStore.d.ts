import type { Listener, Purpose } from "../types/types.js";
import type { Task } from "./Task.js";
export declare const listenersArray: Listener[];
export declare class TasksStore {
    #private;
    constructor();
    get tasks(): Task[];
    get listeners(): Listener[];
    set tasks(newTasks: Task[]);
    set listeners(newListerners: Listener[]);
    getTaskObjects(): import("../types/interfaces.js").TaskInfo[];
    loadTasks(): any;
    saveTasks(): void;
    setTasks(newTasks: Task[], purpose: Partial<Purpose>): void;
    subscribe(listener: Listener): void;
    notify(purpose: Partial<Purpose>): void;
}
export declare const tStore: TasksStore;
//# sourceMappingURL=TasksStore.d.ts.map