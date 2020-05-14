import { FirebaseEvent } from "./FirebaseEvents/FirebaseEvent"
import { Message } from "firebase-functions/lib/providers/pubsub"
import { EventContext, https } from "firebase-functions"
import { Response } from 'express'
import { FirebasePubSubEvent } from "./FirebaseEvents/FirebasePubSubEvent"
import { FirebaseHTTPRequestEvent } from "./FirebaseEvents/FirebaseHTTPRequestEvent"
import { FirebaseCallEvent } from "./FirebaseEvents/FirebaseCallEvent"

export class FirebaseEventRouter {

    private events : FirebaseEvent<any>[]
    private exports: any

    constructor(exports: any) {
        this.exports = exports
        this.events = []
    }

    public setExports = (exports: any) => {
        this.exports = exports
    }

    public trigger = async (name: string, data: any) => {}

    public registerPubSubAction(topic: string, name: string, action: (message: Message, context: EventContext) => Promise<any>) {
        const event = new FirebasePubSubEvent(topic, name, action)
        this.events.push(event)
    }
    
    public registerHTTPRequestAction(name: string, action: (req: https.Request, response: Response) => Promise<any>) {
        const event = new FirebaseHTTPRequestEvent(name, action)
        this.events.push(event)
    }
    
    public registerCallAction(name: string, action: (data: any, context: https.CallableContext) => Promise<any>) {
        const event = new FirebaseCallEvent(name, action)
        this.events.push(event)
    }

    public register = async <ActionType>(event: FirebaseEvent<ActionType>) => {
        this.events.push(event)
    }

    /**
     * Compiles the routes and exports it to the Cloud Functions for Firebase module.exports object.
     */
    public exportRoutes = async () => {
        const promises = this.events.map((event) => {
            event.attach(this.exports)
        })
        return Promise.all(promises)
    }
}

export const router = new FirebaseEventRouter({})