import type { Priority, PropToModify, TCategory } from "../../types/types.js";
export declare function getAddInfo(): Promise<{
    title: string;
    description: string;
    priority: Priority;
    category: TCategory;
}>;
export declare function getEditInfo(): Promise<{
    propToEdit: Partial<PropToModify> | undefined;
    newValue: string | undefined;
} | undefined>;
export declare function getPriority(adding?: boolean): Promise<Priority | undefined>;
export declare function getCategory(adding?: boolean): Promise<TCategory | undefined>;
//# sourceMappingURL=infoPrompts.d.ts.map