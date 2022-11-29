import express from 'express';
import cors from "cors";
import http from 'http';
import { Server } from 'socket.io';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import DBConnection from './Modal/index.js';



const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(express.static("public"));
app.use('/user', UserRoute);
app.use('/post', PostRoute);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

let activeUsers = [];

io.on('connection', (socket) => {


    socket.on("new-user-add", (newUser) => {
        if (!activeUsers.some((user) => user.user?._id === newUser?._id)) {
            activeUsers.push({ user: newUser, socketId: socket.id });
    
        }
        console.log(activeUsers);
        io.emit("get-users", activeUsers.filter((value) => {
                return value;
        }));
    })


    socket.on("disconnect", () => {
        // remove user from active users
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        // send all active users to all users
        io.emit("get-users", activeUsers);
    });

    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.user?._id === receiverId);
        if (user) {
            io.to(user?.socketId).emit("recieve-message", data);
        } else {
        }
    });


})


server.listen(process.env.PORT || 8000, async () => {
    try {
        console.log("Server is running");
        await DBConnection;
    } catch (e) {
        console.log(e);
    }
})