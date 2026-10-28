export class TSubtasks {
    #parent;
    #subtasks;
    constructor(parent) {
        this.#subtasks = [];
        this.#parent = parent;
    }
    get parent() {
        return this.#parent;
    }
    get subtasks() {
        return this.#subtasks;
    }
    set subtasks(newSubtasks) {
        this.#subtasks = newSubtasks;
    }
    addSubtask(subtask) {
        this.#subtasks = [...this.#subtasks, subtask];
    }
}
//# sourceMappingURL=TSubtasks.js.map