import { tHistory } from "../../model/TasksHistory.js";
import { denyAndReturn, getConfirmation } from "../terminal/terminal.js";

export async function redoState() {
  const confirmed = await getConfirmation("redo");
  if (!confirmed) {
    denyAndReturn();
    return;
  }
  tHistory.redo();
}

export async function undoState() {
  const answer = await getConfirmation("undo");
  if (!answer) {
    denyAndReturn();
    return;
  }
  tHistory.undo();
}
