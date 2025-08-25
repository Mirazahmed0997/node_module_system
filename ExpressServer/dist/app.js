"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Todos_Route_1 = require("./app/Todos/Todos.Route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
// Root------
app.get('/', (req, res) => {
    res.send('Welcome to TODO App');
});
app.use('/todos', Todos_Route_1.todosRouter);
app.use('/users', userRouter);
// single todo-----
app.get('/todos/:title', (req, res) => {
    console.log("quere", req.query);
    console.log(req.params);
});
exports.default = app;
//# sourceMappingURL=app.js.map