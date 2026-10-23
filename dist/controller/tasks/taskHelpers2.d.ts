import type { TaskInfo } from "../../types/interfaces.js";
import type { FilterType } from "../../types/types.js";
export declare function returnSearchArray<Type extends object, Key extends keyof Type>(arr: Type[], searchProp: Key, searchTerm: string): Type[] | undefined;
export declare function returnFilterArray<Task extends TaskInfo>(arr: Task[], filterType: FilterType): void | import("../../model/Task.js").Task[];
//# sourceMappingURL=taskHelpers2.d.ts.map