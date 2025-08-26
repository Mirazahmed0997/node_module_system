"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoDB_1 = require("../../config/mongoDB");
const file_path = path_1.default.join(__dirname, "../../../DB/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get('/', async (req, res) => {
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    const cursor = collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});
exports.todosRouter.post('/create_todos', async (req, res) => {
    const { title, body } = req.body;
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    await collection.insertOne({
        title: title,
        body: body
    });
    const cursor = collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});
//# sourceMappingURL=Todos.Route.js.map