import { FirebaseEvent } from "./FirebaseEvent";
import { Message } from "firebase-functions/lib/providers/pubsub";
import { EventContext } from "firebase-functions";
declare type ActionType = (message: Message, context: EventContext) => Promise<any>;
export declare class FirebasePubSubEvent implements FirebaseEvent<ActionType> {
    type: "PUBSUB";
    name: string;
    action: (message: Message, context: EventContext) => Promise<any>;
    topic: string;
    constructor(topic: string, name: string, action: (message: Message, context: EventContext) => Promise<any>);
    attach: (exports: any) => Promise<void>;
    composeName: () => string;
}
export {};
