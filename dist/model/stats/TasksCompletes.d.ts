export declare class TasksCompletes {
    #private;
    constructor();
    get complete(): number;
    get incomplete(): number;
    get completed(): number;
    set complete(newComplete: number);
    set incomplete(newIncomplete: number);
    set completed(newCompleted: number);
    incComplete(): void;
    decComplete(): void;
    incIncomplete(): void;
    decIncomplete(): void;
    logCompletes(): void;
}
export declare const tCompletes: TasksCompletes;
//# sourceMappingURL=TasksCompletes.d.ts.map