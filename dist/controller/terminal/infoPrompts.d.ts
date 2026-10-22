import type { Priority, PropToModify } from "../../types/types.js";
export declare function getAddInfo(): Promise<{
    title: string;
    description: string;
    priority: Priority;
}>;
export declare function getEditInfo(): Promise<{
    propToEdit: Partial<PropToModify> | undefined;
    newValue: string | undefined;
} | undefined>;
export declare function getPriority(adding?: boolean): Promise<Priority | undefined>;
//# sourceMappingURL=infoPrompts.d.ts.map