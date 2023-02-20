import express from "express";
import { createChat, findChat, userChar } from "../controllers/ChatController";

const Chatrouter = express.Router();

Chatrouter.post('/', createChat)
Chatrouter.get('/:userId', userChar)
Chatrouter.get('/find/:firstId/:secondId', findChat)

export default Chatrouter;