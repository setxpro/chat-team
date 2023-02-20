import { Schema, model } from "mongoose";

interface MessageProps {
    chatId: string;
    senderId: string;
    text: string;
}

const messageSchema = new Schema<MessageProps>(
    {
       chatId: { type: String },
       senderId: { type: String },
       text: { type: String },
    },
    {
        timestamps: true,
    }
);

export const Message = model<MessageProps>("Message", messageSchema);