export type Answer = string | number;
export type Priority = "low" | "medium" | "high";
export type Completed = "complete" | "incomplete" | "all";
export interface TaskInterface {
    title: string;
    description: string;
    priority: Priority;
    completed: boolean;
    createdAt: string;
}
//# sourceMappingURL=types.d.ts.map