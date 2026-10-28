import { Task } from "../task/Task.js";
import type { TSubtasks } from "./TSubtasks.js";
declare class TSubsBank {
    #private;
    constructor();
    get subBank(): TSubtasks[];
    set subBand(newBank: TSubtasks[]);
    addToBank(subtasks: TSubtasks): void;
    logSubtasks(task: Task): TSubtasks | undefined;
    returnSubTasks(task: Task): TSubtasks | undefined;
}
export declare const tBank: TSubsBank;
export {};
//# sourceMappingURL=TSubsBank.d.ts.map