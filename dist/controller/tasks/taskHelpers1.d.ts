import type { Purpose, PropToModify } from "../../types/types.js";
export declare function getInfoQuestion(purpose: Purpose, prop: PropToModify): string;
export declare function addElementToArray<T>(arr: T[], element: T): T[];
export declare function returnObjInArray<Type extends object, Key extends keyof Type>(arr: Type[], prop: Key, value: string): Type | undefined;
export declare function editItemInArray<Type extends object, FindKey extends keyof Type, EditKey extends keyof Type>(arr: Type[], propToFind: FindKey, findVal: string, propToEdit: EditKey, newVal: Type[EditKey]): Type[] | undefined;
export declare function removeItemInArray<Type extends object, Key extends keyof Type>(arr: Type[], propToFind: Key, findVal: string): Type[] | undefined;
//# sourceMappingURL=taskHelpers1.d.ts.map