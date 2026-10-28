import { Tag } from "./Tag.js";
declare class TTags {
    #private;
    constructor();
    get tags(): Tag[];
    set tags(newTags: Tag[]);
    addTag(tag: Tag): void;
}
export declare const tTags: TTags;
export {};
//# sourceMappingURL=TTags.d.ts.map