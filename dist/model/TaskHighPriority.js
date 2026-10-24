export class TaskHighPriority {
    #highPriority;
    constructor() {
        this.#highPriority = 0;
    }
    incHighPriority() {
        this.#highPriority++;
    }
    decHighPriority() {
        this.#highPriority--;
    }
    logHighPriority() {
        console.log(`High Priority: ${this.#highPriority}`);
    }
}
export const tHighPriority = new TaskHighPriority();
//# sourceMappingURL=TaskHighPriority.js.map