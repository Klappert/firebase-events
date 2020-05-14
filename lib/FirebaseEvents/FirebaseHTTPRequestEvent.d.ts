/// <reference types="express" />
import { FirebaseEvent } from "./FirebaseEvent";
import { https, Response, SUPPORTED_REGIONS, VALID_MEMORY_OPTIONS } from "firebase-functions";
declare type ActionType = (req: https.Request, response: Response) => Promise<any>;
export declare class FirebaseHTTPRequestEvent implements FirebaseEvent<ActionType> {
    type: "REQUEST";
    name: string;
    action: ActionType;
    region: Array<typeof SUPPORTED_REGIONS[number]>;
    memory: typeof VALID_MEMORY_OPTIONS[number];
    timeoutSeconds: number;
    constructor(name: string, action: ActionType);
    setRegion: (region: ("us-central1" | "us-east1" | "us-east4" | "europe-west1" | "europe-west2" | "europe-west3" | "asia-east2" | "asia-northeast1")[]) => this;
    setMemory: (memory: "128MB" | "256MB" | "512MB" | "1GB" | "2GB") => this;
    setTimeout: (timeout: number) => this;
    attach: (exports: any) => Promise<void>;
    composeName: () => string;
}
export {};
