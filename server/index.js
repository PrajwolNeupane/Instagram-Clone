import express from 'express';
import cors from "cors";
import http from 'http';
import { Server } from 'socket.io';
import UserRoute from './Routes/UserRoute.js';
import DBConnection from './Modal/index.js';



const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use('/user',UserRoute);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

let activeUsers = [];


server.listen(process.env.PORT || 8000, async () => {
    try {
        console.log("Server is running");
        await DBConnection;
    } catch (e) {
        console.log(e);
    }
})