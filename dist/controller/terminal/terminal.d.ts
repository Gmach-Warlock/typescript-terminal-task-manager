import type { Answer } from "../../types/types.js";
export declare function getAnswer(question: string): Promise<Answer>;
export declare function getNumericInput(question: string, numOfOptions?: number): Promise<number>;
export declare function getStringInput(question: string, numguard?: boolean): Promise<string>;
export declare function closeApp(): void;
//# sourceMappingURL=terminal.d.ts.map