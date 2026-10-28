import type { Task } from "../../model/task/Task.js";
import type { FilterType, SortType } from "../../types/types.js";
export declare function returnSearchArray<Type extends object, Key extends keyof Type>(arr: Type[], searchProp: Key, searchTerm: string): Type[] | undefined;
export declare function returnFilterArray(arr: Task[], filterType: FilterType): void | Task[];
export declare function returnSortedArray(arr: Task[], sortType: SortType): void | Task[];
//# sourceMappingURL=taskHelpers2.d.ts.map