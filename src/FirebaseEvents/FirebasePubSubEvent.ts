import { FirebaseEvent } from "./FirebaseEvent";
import { Message } from "firebase-functions/lib/providers/pubsub";
import { EventContext, config, pubsub } from "firebase-functions";

type ActionType = (message: Message, context: EventContext) => Promise<any>

export class FirebasePubSubEvent implements FirebaseEvent<ActionType> {
    type: "PUBSUB";
    name: string
    action: (message: Message, context: EventContext) => Promise<any>
    topic: string

    constructor(topic: string, name: string, action: (message: Message, context: EventContext) => Promise<any>) {
        this.action = action
        this.topic = topic
        this.name = name
    }

    attach = async (exports: any) => {
        exports[this.composeName()] = pubsub.topic(this.topic).onPublish(this.action)
    };

    composeName = (): string => {
        return this.topic + this.name
    }
}