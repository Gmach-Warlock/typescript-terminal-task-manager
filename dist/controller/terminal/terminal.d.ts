import type { Answer, Purpose } from "../../types/types.js";
export declare function getAnswer(question: string): Promise<Answer>;
export declare function getNumericInput(question: string, numOfOptions?: number): Promise<number>;
export declare function getStringInput(question: string, numguard?: boolean, numOnly?: boolean): Promise<string>;
export declare function getConfirmation(purpose: Partial<Purpose>): Promise<boolean | undefined>;
export declare function denyAndReturn(message?: string): Promise<void>;
export declare function closeApp(): Promise<void>;
//# sourceMappingURL=terminal.d.ts.map