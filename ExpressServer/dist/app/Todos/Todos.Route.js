"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongoDB_1 = require("../../config/mongoDB");
const mongodb_1 = require("mongodb");
exports.todosRouter = express_1.default.Router();
// get all todos----------
exports.todosRouter.get('/', async (req, res) => {
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    const cursor = collection.find({});
    const todos = await cursor.toArray();
    res.json(todos);
});
// get single todo--------
exports.todosRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    const todo = await collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
});
// create todo-----
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
// update------
exports.todosRouter.put('/update_todo/:id', async (req, res) => {
    const id = req.params.id;
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    const { title, body } = req.body;
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const updatedTodo = await collection.updateOne(filter, { $set: { title, body } }, { upsert: true });
    res.json(updatedTodo);
    console.log("update route");
});
// delete todo----------
exports.todosRouter.delete('/delete_todo/:id', async (req, res) => {
    const id = req.params.id;
    const db = await mongoDB_1.client.db("todosDB");
    const collection = await db.collection('todos');
    const todo = await collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    console.log(todo);
    res.json(todo);
});
//# sourceMappingURL=Todos.Route.js.map