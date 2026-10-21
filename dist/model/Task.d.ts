import type { Priority } from "../types/types.js";
import type { TaskObj } from "../types/interfaces.js";
export declare class Task {
    #private;
    constructor(title: string, description: string, priority: Priority);
    get id(): string;
    get title(): string;
    get description(): string;
    get priority(): Priority;
    get completed(): boolean;
    get createdAt(): string;
    set title(newTitle: string);
    set description(newDescription: string);
    set priority(newPriority: Priority);
    set completed(newCompleted: boolean);
    makeTaskInfoObject(): TaskObj;
}
//# sourceMappingURL=Task.d.ts.map