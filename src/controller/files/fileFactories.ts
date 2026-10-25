import { Task } from "../../model/Task.js";
import type { TaskInfo } from "../../types/interfaces.js";

export function makeTaskOjects(tasks: Task[]) {
  // console.log("in makeTaskObjects", tasks);
  const objArray: TaskInfo[] = tasks.map((task) => task.toObject());
  if (!objArray) {
    console.log("Something went wrong getting objArray in makeTaskObjects");
    return;
  }
  return objArray;
}

export function makeStatsObject(
  size: number,
  total: number,
  complete: number,
  incomplete: number,
  completed: number,
  highPriority: number,
) {
  // console.log("in makeStatsObject")
  const newObj = {
    size,
    total,
    complete,
    incomplete,
    completed,
    highPriority,
  };
  return newObj;
}

export function recreateTasks(tInfo: TaskInfo[]) {
  const newTasks = tInfo.map((object) => {
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
