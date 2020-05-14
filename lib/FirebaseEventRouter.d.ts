import { FirebaseEvent } from "./FirebaseEvents/FirebaseEvent";
import { Message } from "firebase-functions/lib/providers/pubsub";
import { EventContext, https } from "firebase-functions";
import { Response } from 'express';
export declare class FirebaseEventRouter {
    private events;
    private exports;
    constructor(exports: any);
    /**
     * Sets the exports to a certain object
     */
    setExports: (exports: any) => void;
    trigger: (name: string, data: any) => Promise<void>;
    registerPubSubAction(topic: string, name: string, action: (message: Message, context: EventContext) => Promise<any>): void;
    registerHTTPRequestAction(name: string, action: (req: https.Request, response: Response) => Promise<any>): void;
    registerCallAction(name: string, action: (data: any, context: https.CallableContext) => Promise<any>): void;
    register: <ActionType>(event: FirebaseEvent<ActionType>) => Promise<void>;
    /**
     * Compiles the routes and exports it to the Cloud Functions for Firebase module.exports object.
     */
    exportRoutes: () => Promise<void[]>;
}
export declare const router: FirebaseEventRouter;
