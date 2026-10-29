import { Task } from "../task/Task.js";
export declare class Tag {
    #private;
    constructor(tag: string);
    get id(): string;
    get name(): string;
    get createdAt(): string;
    get taskTitles(): string[];
    set name(newTag: string);
    set taskTitles(newIds: string[]);
    addTagUserId(task: Task): void;
    toObject(): {
        id: string;
        name: string;
        createdAt: string;
        taskTitles: string[];
    };
}
//# sourceMappingURL=Tag.d.ts.map