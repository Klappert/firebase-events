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
class FirebasePubSubEvent {
    constructor(topic, name, action) {
        this.attach = (exports) => __awaiter(this, void 0, void 0, function* () {
            exports[this.composeName()] = firebase_functions_1.pubsub.topic(this.topic).onPublish(this.action);
        });
        this.composeName = () => {
            return this.topic + this.name;
        };
        this.action = action;
        this.topic = topic;
        this.name = name;
    }
}
exports.FirebasePubSubEvent = FirebasePubSubEvent;
//# sourceMappingURL=FirebasePubSubEvent.js.map