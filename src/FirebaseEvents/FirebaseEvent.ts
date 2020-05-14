export interface FirebaseEvent<ActionType> {
    action: ActionType
    type: "REQUEST" | "CALL" | "FIRESTORE" | "PUBSUB" | "AUTH"
    name: string
    // action: () => Promise<any>

    attach: (exports: any) => Promise<any>
    composeName: () => string
}