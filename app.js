require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

//My Routes
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
// const jobRoutes = require('./routes/jobs');


//Connecting Mongoose-mongodb
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
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

//My routes
app.use("/api", authRoutes);
// app.use("/api", userRoutes);
// app.use("/api",jobRoutes);


//Connecting the app
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
})