import { Request, Response } from "express";
import { Message } from './../models/MessageModel';

export const addMessage = async (req: Request, res: Response) => {

    const { chatId, senderId, text} = req.body;

    const message = new Message({
        chatId,
        senderId,
        text
    })

    try {

        const result = await message.save();
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json(error)
    }

}

export const getMessages = async (req: Request, res: Response) => {
    const { chatId } = req.params;

    try {
        const result = await Message.find({chatId})
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json(error)
    }
    
}