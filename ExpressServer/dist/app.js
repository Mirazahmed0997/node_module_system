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
app.use('/todos', Todos_Route_1.todosRouter);
app.use('/users', userRouter);
// Root------
app.get('/', (req, res, next) => {
    try {
        res.send('Welcome to TODO App');
    }
    catch (error) {
        next(error);
    }
});
app.get('/error', async (req, res, next) => {
    try {
        console.log("Error");
        res.send("this is an error");
    }
    catch (error) {
        next(error);
    }
});
// Catch-all for unmatched routes
app.all(/.*/, (req, res) => {
    res.status(404).json({ message: "Route Not Found" });
});
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map