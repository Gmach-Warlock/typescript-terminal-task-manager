import type { StateObject } from "../types/interfaces.js";
export declare class StateNode {
    #private;
    constructor(state: StateObject);
    get data(): object;
    get previous(): StateNode | null;
    get next(): StateNode | null;
    set currentState(newState: object);
    set previous(newPrevious: StateNode);
    set next(newNext: StateNode);
}
//# sourceMappingURL=StateNode.d.ts.map