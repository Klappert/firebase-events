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
const FirebasePubSubEvent_1 = require("./FirebaseEvents/FirebasePubSubEvent");
const FirebaseHTTPRequestEvent_1 = require("./FirebaseEvents/FirebaseHTTPRequestEvent");
const FirebaseCallEvent_1 = require("./FirebaseEvents/FirebaseCallEvent");
class FirebaseEventRouter {
    constructor(exports) {
        /**
         * Sets the exports to a certain object
         */
        this.setExports = (exports) => {
            this.exports = exports;
        };
        this.trigger = (name, data) => __awaiter(this, void 0, void 0, function* () { });
        this.register = (event) => __awaiter(this, void 0, void 0, function* () {
            this.events.push(event);
        });
        /**
         * Compiles the routes and exports it to the Cloud Functions for Firebase module.exports object.
         */
        this.exportRoutes = () => __awaiter(this, void 0, void 0, function* () {
            const promises = this.events.map((event) => {
                event.attach(this.exports);
            });
            return Promise.all(promises);
        });
        this.exports = exports;
        this.events = [];
    }
    registerPubSubAction(topic, name, action) {
        const event = new FirebasePubSubEvent_1.FirebasePubSubEvent(topic, name, action);
        this.events.push(event);
    }
    registerHTTPRequestAction(name, action) {
        const event = new FirebaseHTTPRequestEvent_1.FirebaseHTTPRequestEvent(name, action);
        this.events.push(event);
    }
    registerCallAction(name, action) {
        const event = new FirebaseCallEvent_1.FirebaseCallEvent(name, action);
        this.events.push(event);
    }
}
exports.FirebaseEventRouter = FirebaseEventRouter;
exports.router = new FirebaseEventRouter({});
//# sourceMappingURL=FirebaseEventRouter.js.map