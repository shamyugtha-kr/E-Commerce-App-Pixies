const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const nodemon = require("nodemon");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://shamyugtha_kr:Shamyu123***@react-native-app.uq9j6wv.mongodb.net/?retryWrites=true&w=majority&appName=react-native-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// User Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "shamyugthakr@gmail.com", pass: "srmcxeijfpuikyop" },
});
// Routes
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(401).send("Email already exists");
    const verificationcode = randomstring.generate({
      length: 6,
      charset: "numeric",
    });

    const mailoptions = {
      from: "shamygthakr@gmail.com",
      to: email,
      subject: "email verification code",
      text: `verification code is ${verificationcode}`,
    };
    transporter.sendMail(mailoptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error in sending email");
      } else {
        console.log("Email sent" + info.response);
        res.send("Email sent sccessfully");
      }
    });

    res.json({ verificationcode });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});
app.post("/verify", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering user");
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("Invalid credentials");
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials");
    const token = jwt.sign(
      { id: user._id },
      "c8de6e0d29803932903508407019bdc5e16120968749131461bc80ef3c025ab4"
    );
    const userName = user.name;
    const userEmail = user.email;
    res.json({ token, userName, userEmail });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
