import { FirebaseEvent } from "./FirebaseEvent";
import { region, https, SUPPORTED_REGIONS, VALID_MEMORY_OPTIONS } from "firebase-functions";

type ActionType = (data: any, context: https.CallableContext) => Promise<any>

export class FirebaseCallEvent implements FirebaseEvent<ActionType> {
    action: (data: any, context: https.CallableContext) => Promise<any>;
    type: "CALL";
    name: string;
    region: Array<typeof SUPPORTED_REGIONS[number]>
    memory: typeof VALID_MEMORY_OPTIONS[number]
    timeoutSeconds: number

    constructor(name: string, action: ActionType) {
        this.name = name
        this.action = action
        this.region = ["europe-west3"]
        this.memory = "128MB"
        this.timeoutSeconds = 60
    }

    attach = async (exports: any) => {
        exports[this.composeName()] = region(...this.region).runWith({
            memory: this.memory,
            timeoutSeconds: this.timeoutSeconds
        }).https.onCall(this.action)
    }

    composeName = () => {
        return "onCall" + this.name
    };
}