import { Request, Response } from "express";
import { Chat } from "../models/ChatModel";


export const createChat = async (req: Request, res: Response) => {
    const newChat = new Chat({
        members: [req.body.senderId, req.body.receiverId]
    })
    try {

        const result = await newChat.save();
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const userChar = async (req: Request, res: Response) => {
    try {
        const chat = await Chat.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(chat)


    } catch (error) {
        res.status(500).json(error)
    }
}

export const findChat = async (req: Request, res: Response) => {
    try {
        const chat = await Chat.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })

        res.status(200).json(chat)

    } catch (error) {
        res.status(500).json(error)
    }
}