import type { Listener } from "../types/types.js";
import type { TasksStoreObj } from "../types/interfaces.js";
import type { Task } from "./Task.js";
export declare class TasksStore {
    #private;
    constructor();
    get tasks(): Task[];
    get listeners(): Listener[];
    set tasks(newTasks: Task[]);
    set listeners(newListerners: Listener[]);
    subscribe(listener: Listener): void;
    notify(): void;
}
export declare const tStore: TasksStoreObj;
//# sourceMappingURL=TasksStore.d.ts.map