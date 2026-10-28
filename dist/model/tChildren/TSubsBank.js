import { Task } from "../task/Task.js";
class TSubsBank {
    #subBank;
    constructor() {
        this.#subBank = [];
    }
    get subBank() {
        return this.#subBank;
    }
    set subBand(newBank) {
        this.#subBank = newBank;
    }
    addToBank(subtasks) {
        this.#subBank = [...this.#subBank, subtasks];
    }
    logSubtasks(task) {
        const foundSubTasks = this.#subBank.find((subTasks) => subTasks.parent === task.title);
        if (foundSubTasks) {
            console.log("Subtasks: ");
            foundSubTasks.subtasks.forEach((subtask) => {
                console.log(`Title: ${subtask.title}
Description: ${subtask.description}
Priority: ${subtask.priority}
Completed: ${subtask.completed}
Created At: ${subtask.createdAt}`);
            });
            return foundSubTasks;
        }
        console.log("we didn't go in ", foundSubTasks);
    }
    returnSubTasks(task) {
        const foundSTasks = this.#subBank.find((subtasks) => subtasks.parent === task.id);
        return foundSTasks;
    }
}
export const tBank = new TSubsBank();
//# sourceMappingURL=TSubsBank.js.map