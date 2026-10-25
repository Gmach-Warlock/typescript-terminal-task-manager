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
//# sourceMappingURL=fileFactories.js.map