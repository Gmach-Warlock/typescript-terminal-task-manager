import { Task } from "../../model/Task.js";
export function makeTaskOjects(tasks) {
    console.log("in makeTaskObjects", tasks);
    const objArray = tasks.map((task) => task.toObject());
    console.log(objArray);
    if (!objArray) {
        console.log("Something went wrong getting objArray in makeTaskObjects");
        return;
    }
    console.log(objArray);
    return objArray;
}
export function recreateTasks(tInfo) {
    const newTasks = tInfo.forEach((object) => {
        console.log("repopulating", object);
        const nT = new Task(object.title, object.description, object.priority, object.category, object.id, object.completed, object.createdAt, object.dueDate, object.subtasks, object.tags);
        return nT;
    });
    return newTasks;
}
//# sourceMappingURL=fileFactories.js.map