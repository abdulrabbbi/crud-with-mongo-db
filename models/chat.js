const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxLenght: 50,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
