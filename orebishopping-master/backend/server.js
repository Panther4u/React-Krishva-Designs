const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Users = require("./models/Users");
const Orders = require("./models/Orders");
const path = require('path');
const multer = require("multer");

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


// add product

    // Multer storage configuration
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, 'public/images');
        },
        filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
        }
    });
    
    const upload = multer({ storage: storage });
            
    // Product schema and model
    const productSchema = new mongoose.Schema({
        title: String,
        category: String,
        description: String,
        image: String,
    });
    
    const Product = mongoose.model('Product', productSchema);
    
    // Serve static files (including images)
    app.use(express.static('public'));

    // POST route to add a product
    app.post('/products/add', upload.single('file'), (req, res) => {
        const { title, category, description } = req.body;
        const image = req.file.filename;

        const product = new Product({ title, category, description, image });
        product.save()
        .then(() => {
            // Construct the image URL relative to the server's base URL
            const imageUrl = `${req.protocol}://${req.get('host')}/images/${image}`;
            res.status(201).json({ message: 'Product added successfully', imageUrl });
        })
        .catch(err => res.status(500).json({ error: 'Error adding product' }));
    });


// GET route to fetch all products
app.get('/products', (req, res) => {
    Product.find()
      .then(products => res.json(products))
      .catch(err => res.status(500).send('Error fetching products'));
  });
    

    
// API for SIGNUP

    app.post("/auth/signup", async (req, res) => {
        const { email, password, fullName } = req.body;
    
        const encrypt_password = await bcrypt.hash(password, 10);
    
        const userDetail = {
        email: email,
        password: encrypt_password,
        fullName: fullName,
        };
    
        const user_exist = await Users.findOne({ email: email });
    
        if (user_exist) {
        res.send({ message: "The Email is already in use !" });
        } else {
        Users.create(userDetail, (err, result) => {
            if (err) {
            res.status(500).send({ message: err.message });
            } else {
            res.send({ message: "User Created Succesfully" });
            }
        });
        }
    });
    
    // API for LOGIN
    
    app.post("/auth/login", async (req, res) => {
        const { email, password } = req.body;
    
        const userDetail = await Users.findOne({ email: email });
    
        if (userDetail) {
        if (await bcrypt.compare(password, userDetail.password)) {
            res.send(userDetail);
        } else {
            res.send({ error: "invaild Password" });
        }
        } else {
        res.send({ error: "user is not exist" });
        }
    });
    
    // API for PAYMENT
    
    app.post("/payment/create", async (req, res) => {
        const total = req.body.amount;
        console.log("Payment Request recieved for this ruppess", total);
    
        const payment = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: "inr",
        });
    
        res.status(201).send({
        clientSecret: payment.client_secret,
        });
    });
    
    // API TO add ORDER DETAILS
    
    app.post("/orders/add", (req, res) => {
        const products = req.body.basket;
        const price = req.body.price;
        const email = req.body.email;
        const address = req.body.address;
    
        const orderDetail = {
        products: products,
        price: price,
        address: address,
        email: email,
        };
    
        Orders.create(orderDetail, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("order added to database >> ", result);
        }
        });
    });
    
    app.post("/orders/get", (req, res) => {
        const email = req.body.email;
    
        Orders.find((err, result) => {
        if (err) {
            console.log(err);
        } else {
            const userOrders = result.filter((order) => order.email === email);
            res.send(userOrders);
        }
        });
    });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
