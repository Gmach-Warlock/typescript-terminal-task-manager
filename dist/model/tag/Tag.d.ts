import { Task } from "../task/Task.js";
export declare class Tag {
    #private;
    constructor(tag: string);
    get id(): string;
    get tag(): string;
    get createdAt(): string;
    get tasksUsing(): Task[];
    set tag(newTag: string);
    set users(newUsers: Task[]);
    addTagUser(task: Task): void;
}
//# sourceMappingURL=Tag.d.ts.map