import "dotenv/config";
import './connections/db/mongoose'
import express from "express";
import cors from "cors";
import http from "http";
import Chatrouter from "./routes/chat";
import userRouter from "./routes/user";
import Messagerouter from "./routes/message";
import authRouter from "./routes/signin";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users' , userRouter)
app.use('/api/chat' , Chatrouter)
app.use('/api/message' , Messagerouter)
app.use('/api/auth' , authRouter)

const server = http.createServer(app);


server.listen(process.env.port, () => {
    console.log(`Listening on port ${process.env.port}`);
});