import { tState } from "../../model/TState.js";
import { timeStamp } from "../../model/Task.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";
import { TNode } from "../../model/TNode.js";
export function createIStats() {
    const intitialStats = {
        size: 0,
        total: 0,
        complete: 0,
        incomplete: 0,
        completed: 0,
        highPriority: 0,
    };
    return intitialStats;
}
export function createIState() {
    const iStats = createIStats();
    const stateObj = {
        id: crypto.randomUUID(),
        timeChanged: timeStamp(),
        tasksState: [],
        statsState: iStats,
        typeOfLastChange: "initialize",
    };
    return stateObj;
}
export function createINode() {
    const stateObj = createIState();
    const initializedState = new TNode(stateObj);
    return initializedState;
}
export async function redoState() {
    const confirmed = await getConfirmation("redo");
    if (!confirmed) {
        denyAndReturn();
        return;
    }
    tState.redo();
}
export async function undoState() {
    const answer = await getConfirmation("undo");
    if (!answer) {
        denyAndReturn();
        return;
    }
    tState.undo();
}
//# sourceMappingURL=historyHelpers.js.map