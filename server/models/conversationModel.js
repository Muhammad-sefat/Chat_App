const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    videoUrl: {
      type: String,
      default: "",
    },
    seen: {
      type: Boolean,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const conversationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "user",
    },
    receiver: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "user",
    },
    messages: {
      type: mongoose.Schema.ObjectId,
      ref: "messages",
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model("message", messageSchema);
const conversationModel = mongoose.model("conversation", conversationSchema);
module.exports = { conversationModel, messageModel };
