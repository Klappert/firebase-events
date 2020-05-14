"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
class FirebaseHTTPRequestEvent {
    constructor(name, action) {
        this.setRegion = (region) => {
            this.region = [...region];
            return this;
        };
        this.setMemory = (memory) => {
            this.memory = memory;
            return this;
        };
        this.setTimeout = (timeout) => {
            this.timeoutSeconds = timeout;
            return this;
        };
        this.attach = (exports) => __awaiter(this, void 0, void 0, function* () {
            exports[this.composeName()] = firebase_functions_1.region(...this.region).runWith({
                memory: this.memory,
                timeoutSeconds: this.timeoutSeconds
            }).https.onRequest(this.action);
        });
        this.composeName = () => {
            return "onRequest" + this.name;
        };
        this.name = name;
        this.action = action;
        this.region = ["europe-west3"];
        this.memory = "128MB";
        this.timeoutSeconds = 60;
    }
}
exports.FirebaseHTTPRequestEvent = FirebaseHTTPRequestEvent;
//# sourceMappingURL=FirebaseHTTPRequestEvent.js.map