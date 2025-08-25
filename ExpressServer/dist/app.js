"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const file_path = path_1.default.join(__dirname, "../DB/todo.json");
app.get('/', (req, res) => {
    res.send('Welcome to TODO App');
});
app.get('/todos', (req, res) => {
    const data = fs_1.default.readFileSync(file_path, { encoding: "utf-8" });
    console.log(data);
    res.json(data);
});
app.post('/todos/create_todos', (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send('Todo Created');
});
exports.default = app;
//# sourceMappingURL=app.js.map