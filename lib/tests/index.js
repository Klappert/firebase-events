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
const FirebaseEventRouter_1 = require("../FirebaseEventRouter");
let moduleExports = {};
FirebaseEventRouter_1.router.setExports(moduleExports);
FirebaseEventRouter_1.router.trigger("onChargeSucceeded", {});
FirebaseEventRouter_1.router.trigger("onEventUpdated", {});
FirebaseEventRouter_1.router.registerPubSubAction("onChargeSucceeded", "GenerateTickets", (data, context) => __awaiter(void 0, void 0, void 0, function* () {
    //Blablabla
}));
FirebaseEventRouter_1.router.registerHTTPRequestAction("SaveTheDay", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
FirebaseEventRouter_1.router.registerCallAction("SyncProfile", (data, context) => __awaiter(void 0, void 0, void 0, function* () {
}));
FirebaseEventRouter_1.router.exportRoutes();
console.log(moduleExports);
//# sourceMappingURL=index.js.map