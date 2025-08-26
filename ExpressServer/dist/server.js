"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoDB_1 = require("./config/mongoDB");
const port = 5000;
const bootStrap = async () => {
    await mongoDB_1.client.connect();
    app_1.default.listen(port, async () => {
        console.log(`🚀 Server is running at http://localhost:${port}`);
    });
};
bootStrap();
//# sourceMappingURL=server.js.map