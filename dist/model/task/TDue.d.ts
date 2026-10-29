import type { DueDate } from "../../types/taskInterfaces.js";
export declare class TDue {
    #private;
    constructor(dueObj: DueDate);
    get tTitle(): string;
    get day(): number;
    get month(): number;
    get year(): number;
    get stringDate(): string;
}
//# sourceMappingURL=TDue.d.ts.map