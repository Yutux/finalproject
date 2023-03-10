import express  from "express";
import mongoose from "mongoose";
import dotenv  from "dotenv";
import morgan   from "morgan";
import usersRouter from "./src/Routers/usersRouters.js";
import users from "./src/Models/users.js";

dotenv.config();
const app = express();
const port = process.env.PORT;
const db = process.env.MONGODB_URI;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.raw());
app.use(morgan("combined"));


app.use('/user', usersRouter);

mongoose.connect(db).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    }).catch((err) => {
    console.log(err);
});
