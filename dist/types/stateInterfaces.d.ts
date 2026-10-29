import type { TaskInfo } from "./taskInterfaces.js";
import { TDue } from "../model/task/TDue.js";
import { Tag } from "../model/tChildren/Tag.js";
import { TSubtasks } from "../model/tChildren/TSubtasks.js";
import type { Purpose, Priority } from "./types.js";
export interface StatsObj {
    size: number;
    total: number;
    complete: number;
    incomplete: number;
    completed: number;
    highPriority: number;
}
export interface StateObject {
    id: string;
    timeChanged: string;
    tasksState: TaskInfo[];
    statsState: StatsObj;
    tAddsState: TAdds;
    typeOfLastChange: Purpose;
}
export interface SaveState {
    tasks: TaskInfo[];
    stats: StatsObj;
    tAdds: TAdds;
    savedAt: string;
}
export interface STInstanceInfo {
    title: string;
    STTitle: string;
    STDescription: string;
    STPriority: Priority;
}
export interface TAdds {
    dues: TDue[];
    tags: Tag[];
    subBank: TSubtasks[];
}
//# sourceMappingURL=stateInterfaces.d.ts.map