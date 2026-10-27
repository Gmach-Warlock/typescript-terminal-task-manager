import type { StatsObj, StateObject } from "../../types/interfaces.js";
import { TNode } from "../../model/state/TNode.js";
export declare function createIStats(): StatsObj;
export declare function createIState(): StateObject;
export declare function createINode(): TNode;
export declare function redoState(): Promise<void>;
export declare function undoState(): Promise<void>;
//# sourceMappingURL=historyHelpers.d.ts.map