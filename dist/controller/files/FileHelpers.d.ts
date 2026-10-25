import type { SaveState, StatsObj } from "../../types/interfaces.js";
export declare function saveToFile(state: SaveState): Promise<void>;
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
//# sourceMappingURL=FileHelpers.d.ts.map