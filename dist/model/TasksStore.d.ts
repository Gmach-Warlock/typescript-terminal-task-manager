import type { Listener } from "../types/types.js";
import type { Task } from "./Task.js";
export declare class TasksStore {
    #private;
    constructor();
    get tasks(): Task[];
    get listeners(): Listener[];
    set tasks(newTasks: Task[]);
    set listeners(newListerners: Listener[]);
    setTasks(newTasks: Task[]): void;
    subscribe(listener: Listener): void;
    notify(): void;
}
export declare const tStore: TasksStore;
//# sourceMappingURL=TasksStore.d.ts.map