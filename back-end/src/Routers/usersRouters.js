import {signUp} from "../Controllers/users.js";
import express from "express";

const usersRouter = express.Router();

usersRouter.post("/signup", signUp);

export default usersRouter;

