import { tState } from "../../model/state/TState.js";
import type { TAdds } from "../../types/stateInterfaces.js";
import type { StatsObj, StateObject } from "../../types/stateInterfaces.js";
import { timeStamp } from "../../model/task/Task.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";
import { TNode } from "../../model/state/TNode.js";

export function createIStats() {
  const intitialStats: StatsObj = {
    size: 0,
    total: 0,
    complete: 0,
    incomplete: 0,
    completed: 0,
    highPriority: 0,
  };
  return intitialStats;
}
export function createIAdds() {
  const iAdds: TAdds = {
    dues: [],
    tags: [],
    subBank: [],
  };
  return iAdds;
}
export function createIState() {
  const iStats = createIStats();
  const iAdds = createIAdds();
  const stateObj: StateObject = {
    id: crypto.randomUUID(),
    timeChanged: timeStamp(),
    tasksState: [],
    statsState: iStats,
    tAddsState: iAdds,
    typeOfLastChange: "initialize",
  };
  return stateObj;
}
export function createINode() {
  const stateObj: StateObject = createIState();
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
