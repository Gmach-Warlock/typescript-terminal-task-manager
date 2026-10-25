import { Task } from "../../model/Task.js";
import type { TaskInfo } from "../../types/interfaces.js";

export function makeTaskOjects(tasks: Task[]) {
  console.log("in makeTaskObjects", tasks);
  const objArray: TaskInfo[] = tasks.map((task) => task.toObject());
  console.log(objArray);
  if (!objArray) {
    console.log("Something went wrong getting objArray in makeTaskObjects");
    return;
  }
  console.log(objArray);
  return objArray;
}
