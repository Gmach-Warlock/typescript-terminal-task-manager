import type { TDue } from "./TDue.js";
export declare class TDates {
    #private;
    constructor();
    get dues(): TDue[];
    set dates(newDates: TDue[]);
    addDDate(due: TDue): void;
    logDate(due: TDue): void;
}
export declare const tDates: TDates;
//# sourceMappingURL=TDates.d.ts.map