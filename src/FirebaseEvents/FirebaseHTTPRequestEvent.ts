import { FirebaseEvent } from "./FirebaseEvent";
import { region, https, Response, FunctionBuilder, SUPPORTED_REGIONS, VALID_MEMORY_OPTIONS } from "firebase-functions";

type ActionType = (req: https.Request, response: Response) => Promise<any>

export class FirebaseHTTPRequestEvent implements FirebaseEvent<ActionType> {
    type: "REQUEST"
    name: string
    action: ActionType
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

    setRegion = (region: Array<typeof SUPPORTED_REGIONS[number]>) => {
        this.region = [...region]
        return this
    }

    setMemory = (memory: typeof VALID_MEMORY_OPTIONS[number]) => {
        this.memory = memory
        return this
    }

    setTimeout = (timeout: number) => {
        this.timeoutSeconds = timeout
        return this
    }

    attach = async (exports: any) => {
        exports[this.composeName()] = region(...this.region).runWith({
            memory: this.memory,
            timeoutSeconds: this.timeoutSeconds
        }).https.onRequest(this.action)
    }

    composeName = () => {
        return "onRequest" + this.name
    }

}