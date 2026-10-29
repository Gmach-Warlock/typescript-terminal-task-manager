import type { StateObject } from "../../types/stateInterfaces.js";
export declare class TState {
    #private;
    constructor();
    get numOfState(): number;
    set numOfState(newNum: number);
    addState(state: StateObject): void;
    logState(): void;
    moveLeft(): void;
    moveRight(): void;
    redo(): void;
    undo(): void;
}
export declare const tState: TState;
//# sourceMappingURL=TState.d.ts.map