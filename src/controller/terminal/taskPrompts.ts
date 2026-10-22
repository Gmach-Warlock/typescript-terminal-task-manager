import { tStore } from "../../model/TasksStore.js";

export function logTasks() {
  console.log(`Here are all of your tasks

-----------------------------------------`);
  const tasks = tStore.tasks;
  tasks.forEach((task) =>
    console.log(`
Id: ${task.id},
Title: ${task.title},
Description: ${task.description}, 
Priority: ${task.priority};
Completed: ${task.completed};
Created At: ${task.createdAt};

-----------------------------------------`),
  );
}
