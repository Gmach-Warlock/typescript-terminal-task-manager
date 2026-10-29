import type { StateObject } from "../../types/stateInterfaces.js";
export declare class TNode {
    #private;
    constructor(data: StateObject);
    get data(): StateObject;
    get next(): TNode | null;
    get prev(): TNode | null;
    set data(newData: StateObject);
    set next(newNext: TNode | null);
    set prev(newPrev: TNode | null);
}
//# sourceMappingURL=TNode.d.ts.map