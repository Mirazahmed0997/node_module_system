"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const file_path = path_1.default.join(__dirname, "../../../DB/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(file_path, { encoding: "utf-8" });
    console.log("todos router");
    res.json({
        message: "From todos router",
        data
    });
});
exports.todosRouter.post('/create_todos', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Todo Created');
});
//# sourceMappingURL=Todos.Route.js.map