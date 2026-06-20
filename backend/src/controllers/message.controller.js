import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// 1. Send Message / Create Conversation
export const sendMessage = asyncHandler(async (req, res) => {
    const { receiverId, text, subject } = req.body;
    const senderId = req.user._id;

    if (!receiverId || !text) {
        throw new ApiError(400, "Receiver ID and text are required");
    }

    // Check if conversation already exists between these two participants
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
            subject: subject || "Property Inquiry",
        });
    }

    const message = await Message.create({
        conversationId: conversation._id,
        senderId,
        text,
    });

    // Update last message in conversation
    conversation.lastMessage = text;
    await conversation.save();

    // Socket notification (optional here as it's done via emit in frontend too)
    const io = req.app.get("io");
    if (io) {
        io.to(conversation._id.toString()).emit("receive_message", {
            conversationId: conversation._id,
            senderId,
            text,
            createdAt: message.createdAt
        });
    }

    return res.status(201).json(
        new ApiResponse(201, message, "Message sent successfully")
    );
});

// 2. Get All Conversations for User
export const getConversations = asyncHandler(async (req, res) => {
    const userId = req.user._id;

    const conversations = await Conversation.find({
        participants: { $in: [userId] }
    }).populate("participants", "name email avatar");

    return res.status(200).json(
        new ApiResponse(200, conversations, "Conversations fetched successfully")
    );
});

// 3. Get All Messages in a Conversation
export const getMessages = asyncHandler(async (req, res) => {
    const { conversationId } = req.params;

    const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });

    return res.status(200).json(
        new ApiResponse(200, messages, "Messages fetched successfully")
    );
});