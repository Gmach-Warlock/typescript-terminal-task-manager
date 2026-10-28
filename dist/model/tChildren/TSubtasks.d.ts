import type { Subtask } from "./Subtask.js";
export declare class TSubtasks {
    #private;
    constructor(parent: string);
    get parent(): string;
    get subtasks(): Subtask[];
    set subtasks(newSubtasks: Subtask[]);
    addSubtask(subtask: Subtask): void;
}
//# sourceMappingURL=TSubtasks.d.ts.map