export class THighPriority {
    #highPriority;
    constructor() {
        this.#highPriority = 0;
    }
    get highPriority() {
        return this.#highPriority;
    }
    set highPriority(newHighPriority) {
        this.#highPriority = newHighPriority;
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
export const tHighPriority = new THighPriority();
//# sourceMappingURL=THighPriority.js.map