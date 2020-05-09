require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

//My Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const postRoutes = require('./routes/post');
const bidRoutes = require('./routes/bid');
const orderRoutes = require('./routes/order');
const cartRoutes = require('./routes/cart');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("MongoDB Connected...")
}).catch((err) => {
    console.log("Problem Logging DB...");
    throw err;
})

//connecting the middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//My routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", itemRoutes);
app.use("/api", postRoutes);
app.use("/api", bidRoutes);
app.use("/api", orderRoutes);
app.use("/api", cartRoutes);


//Connecting the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})  