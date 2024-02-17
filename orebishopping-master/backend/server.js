// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Krishva", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Contact Schema
const contactSchema = new mongoose.Schema({
    clientName: String,
    email: String,
    messages: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Routes
app.post("/api/contacts", async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
