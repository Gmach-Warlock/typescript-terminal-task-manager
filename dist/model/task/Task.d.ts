import type { Priority, TCategory } from "../../types/types.js";
import type { TaskInfo } from "../../types/interfaces.js";
export declare function timeStamp(): string;
export declare class Task {
    #private;
    constructor(title: string, description: string, priority: Priority, category: TCategory, id?: string, completed?: boolean, createdAt?: string, tags?: string[]);
    get id(): string;
    get title(): string;
    get description(): string;
    get priority(): Priority;
    get completed(): boolean;
    get createdAt(): string;
    get category(): TCategory;
    get tags(): string[];
    set title(newTitle: string);
    set description(newDescription: string);
    set priority(newPriority: Priority);
    set completed(newCompleted: boolean);
    set category(newCategory: TCategory);
    set tags(newTags: string[]);
    addTagToTask(tag: string): void;
    logTags(): void;
    toObject(): TaskInfo;
}
//# sourceMappingURL=Task.d.ts.map