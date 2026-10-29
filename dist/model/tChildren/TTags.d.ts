import { Tag } from "./Tag.js";
import { Task } from "../task/Task.js";
declare class TTags {
    #private;
    constructor();
    get tags(): Tag[];
    set tags(newTags: Tag[]);
    addTag(tag: Tag): void;
    logTags(task: Task): void;
}
export declare const tTags: TTags;
export {};
//# sourceMappingURL=TTags.d.ts.map