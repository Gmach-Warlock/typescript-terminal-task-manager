import type { StateObject } from "../types/interfaces.js";
export declare class StateNode {
    #private;
    constructor(state: StateObject);
    get data(): StateObject;
    get previous(): StateNode | null;
    get next(): StateNode | null;
    set data(newData: StateObject);
    set previous(newPrevious: StateNode);
    set next(newNext: StateNode);
    getData(): {
        data: StateObject;
    };
}
//# sourceMappingURL=StateNode.d.ts.map