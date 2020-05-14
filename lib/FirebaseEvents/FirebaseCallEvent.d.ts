import { FirebaseEvent } from "./FirebaseEvent";
import { https, SUPPORTED_REGIONS, VALID_MEMORY_OPTIONS } from "firebase-functions";
declare type ActionType = (data: any, context: https.CallableContext) => Promise<any>;
export declare class FirebaseCallEvent implements FirebaseEvent<ActionType> {
    action: (data: any, context: https.CallableContext) => Promise<any>;
    type: "CALL";
    name: string;
    region: Array<typeof SUPPORTED_REGIONS[number]>;
    memory: typeof VALID_MEMORY_OPTIONS[number];
    timeoutSeconds: number;
    constructor(name: string, action: ActionType);
    attach: (exports: any) => Promise<void>;
    composeName: () => string;
}
export {};
