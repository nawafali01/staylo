import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'
import bookingRouter from './routes/booking.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/properties", propertyRouter);
app.use("/api/v1/bookings", bookingRouter);

// Global error handler — must be registered AFTER all routes
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errors: err.errors || []
    });
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("join_chat", (conversationId) => {
        socket.join(conversationId);
        console.log(`User ${socket.id} joined chat: ${conversationId}`);
    });

    socket.on("send_message", (data) => {
        // Broadcast to specific room (conversationId)
        io.to(data.conversationId).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

export { app, httpServer, io }