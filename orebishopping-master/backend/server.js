const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://teampanther4:dt9dRQvDp6qS08Vc@ac-2cg26ym-shard-00-00.gevdelx.mongodb.net:27017,ac-2cg26ym-shard-00-01.gevdelx.mongodb.net:27017,ac-2cg26ym-shard-00-02.gevdelx.mongodb.net:27017/?replicaSet=atlas-322bib-shard-0&ssl=true&authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Krishva" // Specify the database name here
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB Atlas"));

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
        console.error("Error saving contact:", error);
        res.status(400).send("Error saving contact");
    }
});

app.get("/api/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).send(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).send("Error fetching contacts");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
