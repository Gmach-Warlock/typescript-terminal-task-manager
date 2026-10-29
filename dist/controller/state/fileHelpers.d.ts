import type { TAdds } from "../../types/stateInterfaces.js";
import type { StatsObj } from "../../types/stateInterfaces.js";
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
export declare function fillTAdds(tAddObj: TAdds): Promise<void>;
export declare function makeTAddObj(): TAdds;
//# sourceMappingURL=fileHelpers.d.ts.map