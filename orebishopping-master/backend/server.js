    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const bcrypt = require("bcryptjs");
    const Users = require("./models/User");
    const Orders = require("./models/Orders");
    const path = require('path');
    const multer = require("multer");
    const user = require("./models/userDetails");

    const app = express();
    const PORT = process.env.PORT || 8000;

    app.use(express.json());
    app.use(cors());

    app.set("view engine", "ejs");
    app.use(express.urlencoded({ extended: false }));


    const jwt = require("jsonwebtoken");
    var nodemailer = require("nodemailer");

    const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

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

        const User = mongoose.model("UserInfo");
        app.post("/register", async (req, res) => {
        const { clientName, email, password, role } = req.body;
        
        const encryptedPassword = await bcrypt.hash(password, 10);
        try {
            const oldUser = await User.findOne({ email });
        
            if (oldUser) {
            return res.json({ error: "User Exists" });
            }
            await User.create({
            clientName,
            email,
            password: encryptedPassword,
            // address,
            // city,
            // country,
            // zip,
            role,
            });
            res.send({ status: "ok" });
        } catch (error) {
            res.send({ status: "error" });
        }
        });
        
            app.post("/login-user", async (req, res) => {
                const { email, password } = req.body;
                try {
                // Perform authentication logic here (not included in this example)
                // Assuming authentication is successful and user object is retrieved
                const user = { email: email, role: "user" };
                const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" });
                res.json({ status: "ok", token });
                } catch (error) {
                console.error("Login Error:", error);
                res.status(500).json({ status: "error", message: "An error occurred during login." });
                }
            });
            
            app.post("/userData", async (req, res) => {
                const { token } = req.body;
                try {
                const user = jwt.verify(token, JWT_SECRET);
                const useremail = user.email;
                const userData = await User.findOne({ email: useremail });
                res.json({ status: "ok", data: userData });
                } catch (error) {
                console.error("Error fetching user data:", error);
                res.status(500).json({ status: "error", data: "An error occurred while fetching user data" });
                }
            });

        
        
        app.post("/forgot-password", async (req, res) => {
        const { email } = req.body;
        try {
            const oldUser = await User.findOne({ email });
            if (!oldUser) {
            return res.json({ status: "User Not Exists!!" });
            }
            const secret = JWT_SECRET + oldUser.password;
            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
            expiresIn: "5m",
            });
            const link = `http://localhost:8000/reset-password/${oldUser._id}/${token}`;
            var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "adarsh438tcsckandivali@gmail.com",
                pass: "rmdklolcsmswvyfw",
            },
            });
        
            var mailOptions = {
            from: "youremail@gmail.com",
            to: "thedebugarena@gmail.com",
            subject: "Password Reset",
            text: link,
            };
        
            transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
            });
            console.log(link);
        } catch (error) { }
        });
        
        app.get("/reset-password/:id/:token", async (req, res) => {
        const { id, token } = req.params;
        console.log(req.params);
        const oldUser = await User.findOne({ _id: id });
        if (!oldUser) {
            return res.json({ status: "User Not Exists!!" });
        }
        const secret = JWT_SECRET + oldUser.password;
        try {
            const verify = jwt.verify(token, secret);
            res.render("index", { email: verify.email, status: "Not Verified" });
        } catch (error) {
            console.log(error);
            res.send("Not Verified");
        }
        });
        
        app.post("/reset-password/:id/:token", async (req, res) => {
        const { id, token } = req.params;
        const { password } = req.body;
        
        const oldUser = await User.findOne({ _id: id });
        if (!oldUser) {
            return res.json({ status: "User Not Exists!!" });
        }
        const secret = JWT_SECRET + oldUser.password;
        try {
            const verify = jwt.verify(token, secret);
            const encryptedPassword = await bcrypt.hash(password, 10);
            await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                password: encryptedPassword,
                },
            }
            );
        
            res.render("index", { email: verify.email, status: "verified" });
        } catch (error) {
            console.log(error);
            res.json({ status: "Something Went Wrong" });
        }
        });
        
        app.get("/getAllUser", async (req, res) => {
        try {
            const allUser = await User.find({});
            res.send({ status: "ok", data: allUser });
        } catch (error) {
            console.log(error);
        }
        });
        
        app.post("/deleteUser", async (req, res) => {
        const { userid } = req.body;
        try {
            User.deleteOne({ _id: userid }, function (err, res) {
            console.log(err);
            });
            res.send({ status: "Ok", data: "Deleted" });
        } catch (error) {
            console.log(error);
        }
        });
        
        
        app.post("/upload-image", async (req, res) => {
        const { base64 } = req.body;
        try {
            await Images.create({ image: base64 });
            res.send({ Status: "ok" })
        
        } catch (error) {
            res.send({ Status: "error", data: error });
        
        }
        })
        
        app.get("/get-image", async (req, res) => {
        try {
            await Images.find({}).then(data => {
            res.send({ status: "ok", data: data })
            })
        
        } catch (error) {
        
        }
        })
        
        app.get("/paginatedUsers", async (req, res) => {
        const allUser = await User.find({});
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        
        const startIndex = (page - 1) * limit
        const lastIndex = (page) * limit
        
        const results = {}
        results.totalUser=allUser.length;
        results.pageCount=Math.ceil(allUser.length/limit);
        
        if (lastIndex < allUser.length) {
            results.next = {
            page: page + 1,
            }
        }
        if (startIndex > 0) {
            results.prev = {
            page: page - 1,
            }
        }
        results.result = allUser.slice(startIndex, lastIndex);
        res.json(results)
        })
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
