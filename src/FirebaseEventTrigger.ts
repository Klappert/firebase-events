export class FirebaseEventTrigger {
    private type: "REQUEST" | "CALL" | "FIRESTORE" | "PUBSUB" | "AUTH"
    private triggerPath: string
    private trigger: string
}