export interface FirebaseEvent<ActionType> {
    action: ActionType;
    type: "REQUEST" | "CALL" | "FIRESTORE" | "PUBSUB" | "AUTH";
    name: string;
    attach: (exports: any) => Promise<any>;
    composeName: () => string;
}
