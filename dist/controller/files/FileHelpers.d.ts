import type { StatsObj } from "../../types/interfaces.js";
export declare function saveToFile(state: object, fileName: string): Promise<void>;
export declare function loadFile(): Promise<any>;
export declare function stateStats(): Promise<{
    size: number;
    total: number;
    complete: number;
    incomplete: number;
    completed: number;
    highPriority: number;
}>;
export declare function fillStats(statsObj: StatsObj): Promise<void>;
//# sourceMappingURL=fileHelpers.d.ts.map