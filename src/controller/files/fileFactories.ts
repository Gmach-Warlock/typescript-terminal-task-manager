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

export function recreateTasks(tInfo: TaskInfo[]) {
  const newTasks = tInfo.forEach((object) => {
    console.log("repopulating", object);
    const nT = new Task(
      object.title,
      object.description,
      object.priority,
      object.category,
      object.id,
      object.completed,
      object.createdAt,
      object.dueDate,
      object.subtasks,
      object.tags,
    );
    return nT;
  });
  return newTasks;
}
