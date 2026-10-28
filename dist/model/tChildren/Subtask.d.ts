import type { Priority } from "../../types/types.js";
export declare class Subtask {
    #private;
    constructor(parent: string, title: string, description: string, priority: Priority, id?: string, completed?: boolean, createdAt?: string);
    get id(): string;
    get parent(): string;
    get title(): string;
    get description(): string;
    get priority(): Priority;
    get completed(): boolean;
    get createdAt(): string;
    set parent(newParent: string);
    set title(newTitle: string);
    set description(newDesc: string);
    set priority(newPriority: Priority);
    set completed(newCompleted: boolean);
}
//# sourceMappingURL=Subtask.d.ts.map