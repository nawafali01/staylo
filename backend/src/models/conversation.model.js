import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema(
    {
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        subject: {
            type: String,
            default: "Property Inquiry",
        },
        lastMessage: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

export const Conversation = mongoose.model("Conversation", conversationSchema);