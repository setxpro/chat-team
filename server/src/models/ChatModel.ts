import { Schema, model } from "mongoose";

interface ChatProps {
    members: ArrayConstructor;
}

const chatShema = new Schema<ChatProps>(
    {
        members: { 
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

export const Chat = model<ChatProps>("Chat", chatShema);