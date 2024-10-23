const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
Chat.insertMany([
  {
    from: "malika",
    to: "abdulrabi",
    message: "love you rabbi",
    date: new Date(),
  },
  { from: "sara", to: "omar", message: "miss you so much", date: new Date() },
  { from: "hassan", to: "sana", message: "how are you?", date: new Date() },
  { from: "ali", to: "fatima", message: "thinking of you", date: new Date() },
  { from: "noor", to: "ahmed", message: "good morning", date: new Date() },
  {
    from: "layla",
    to: "khalid",
    message: "can’t wait to see you",
    date: new Date(),
  },
  { from: "yasmine", to: "faisal", message: "love you!", date: new Date() },
  { from: "maria", to: "zain", message: "happy birthday!", date: new Date() },
  { from: "zara", to: "bilal", message: "let’s catch up", date: new Date() },
  {
    from: "amira",
    to: "samir",
    message: "call me when you can",
    date: new Date(),
  },
])
  
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
