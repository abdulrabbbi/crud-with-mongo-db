const express = require("express");
const app = express();
// getting-started.js
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
main()
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/chat", async (req, res) => {
  let messages = await Chat.find();
  res.render("index.ejs", { messages });
});
// to create the new post
app.get("/chat/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/chat/new", (req, res) => {
  let { from, message, to } = req.body;

  let newchat = new Chat({
    from: from,
    message: message,
    to: to,
  });
  newchat
    .save()
    .then(() => {
      console.log("your data is saved");
      res.redirect("/chat");
    })
    .catch((err) => {
      console.log(err);
    });
});
// to render the update form
app.get("/chat/:id/edit", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let chat = await Chat.findById(id);
  console.log(chat);
  res.render("edit.ejs", { chat });
});

app.put("/chat/:id/edit", async (req, res) => {
  let { id } = req.params;
  let { message } = req.body;
  let chat = await Chat.findByIdAndUpdate(
    id,
    { message: message },
    { new: true }
  );
  chat
    .save()
    .then(() => {
      console.log("saved");
      res.redirect("/chat");
    })
    .catch((err) => {
      console.log(err);
    });
});
//to delete the route
// app.delete("/chat/:id/delete", async(req, res) => {
//     let { id } = req.params;
//     let deleltechat =await Chat.findOneAndDelete(id);
//     console.log(deleltechat);
//     res.send("deleted");
// })

app.delete("/chat/:id", async (req, res) => {
    let { id } = req.params;
    try {
      let deleteChat = await Chat.findByIdAndDelete(id);  // Use findByIdAndDelete for ID deletion
      if (!deleteChat) {
        return res.status(404).send("Chat not found");
      }
      console.log("Deleted:", deleteChat);
      res.redirect("/chat");
    } catch (err) {
      console.log(err);
      res.status(500).send("Error deleting chat");
    }
  });
  
app.listen(8080);
