import type { DueDate } from "../../types/interfaces.js";
import type { Task } from "./Task.js";
import { TDue } from "./TDue.js";
export declare class TDates {
    #private;
    constructor();
    get dues(): TDue[];
    set dates(newDates: TDue[]);
    addDDate(due: DueDate): void;
    logDate(task: Task): string | undefined;
}
export declare const tDates: TDates;
//# sourceMappingURL=TDates.d.ts.map