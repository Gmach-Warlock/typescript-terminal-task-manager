import { Task } from "../../model/task/Task.js";
import { tDates } from "../../model/task/TDates.js";
export function makeTaskOjects(tasks) {
    // console.log("in makeTaskObjects", tasks);
    const objArray = tasks.map((task) => task.toObject());
    if (!objArray) {
        console.log("Something went wrong getting objArray in makeTaskObjects");
        return;
    }
    return objArray;
}
export function makeStatsObject(size, total, complete, incomplete, completed, highPriority) {
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
export function recreateTasks(tInfo) {
    const newTasks = tInfo.map((object) => {
        const nT = new Task(object.title, object.description, object.priority, object.category, object.id, object.completed, object.createdAt);
        // need to hydrate tags due date and fix the factory
        return nT;
    });
    return newTasks;
}
export function makeOtherStats() {
    const newObj = {
        dues: tDates.dues,
        tags: [],
        subBank: [],
    };
    return newObj;
}
//# sourceMappingURL=fileFactories.js.map