import express  from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
const db = process.env.MONGODB_URI;

mongoose.connect(db).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    }).catch((err) => {
    console.log(err);
});

