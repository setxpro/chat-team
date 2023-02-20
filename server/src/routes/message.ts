import express from "express";
import { addMessage, getMessages } from "../controllers/MessageController";

const Messagerouter = express.Router();

Messagerouter.post('/', addMessage)
Messagerouter.get('/:chatId', getMessages)

export default Messagerouter;