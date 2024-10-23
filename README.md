CRUD Chat Application with MongoDB and Express
This is a simple chat application built using Express.js and MongoDB. The app allows users to create, read, update, and delete chat messages. It demonstrates a basic CRUD (Create, Read, Update, Delete) functionality using MongoDB as the database and Express as the server framework.

Features
Create: Users can add new chat messages.
Read: Display all the chat messages.
Update: Users can update a specific chat message.
Delete: Users can delete a chat message.
Prerequisites
Before running the application, ensure you have the following installed:

Node.js: Download and install Node.js
MongoDB: Make sure MongoDB is installed and running locally on port 27017.
Setup Instructions
Clone the repository:

bash
Copy code
git clone https://github.com/abdulrabbbi/crud-with-mongo-db.git
cd crud-with-mongo-db
Install dependencies:

In the project directory, run:

bash
Copy code
npm install
Start MongoDB:

Make sure MongoDB is running locally. You can start MongoDB with the following command if it's not already running:

bash
Copy code
mongod
Run the application:

Start the Express server by running:

bash
Copy code
node index.js
or with nodemon for live reload:

bash
Copy code
nodemon index.js
Open the application:

Once the server is running, navigate to http://localhost:8080 in your web browser to access the app.

Endpoints
GET /chat: Display all chat messages.
GET /chat/new: Form to create a new chat message.
POST /chat/new: Create a new chat message.
GET /chat/:id/edit: Form to update a chat message.
PUT /chat/:id/edit: Update a specific chat message.
DELETE /chat/:id: Delete a specific chat message.
Project Structure
php
Copy code
.
├── models/
│   └── chat.js       # Chat schema (MongoDB model)
├── public/           # Static files (CSS, images)
├── views/            # EJS templates
│   ├── index.ejs     # Page to display all chat messages
│   ├── new.ejs       # Form to create a new chat
│   ├── edit.ejs      # Form to edit a chat
├── .gitignore        # Files and directories to ignore in git
├── index.js          # Main Express app
├── package.json      # Dependencies and project metadata
└── README.md         # Project documentation
Chat Schema
The chat messages are stored in MongoDB using the following schema:

javascript
Copy code
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: { type: String, required: true },
  message: { type: String, required: true },
  to: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", chatSchema);
How to Use
Navigate to /chat to view all messages.
Use /chat/new to create a new message.
Edit a message by clicking on the Edit button next to each message.
Delete a message by clicking on the Delete button.
License
This project is open-source and free to use under the MIT license.

