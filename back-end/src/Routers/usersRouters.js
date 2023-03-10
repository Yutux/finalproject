import {deleteUser, getUser, getUsers, logIn, logOut, secretUser, signUp, updateUser} from "../Controllers/users.js";
import express from "express";

const usersRouter = express.Router();

usersRouter.post("/signup", signUp);
usersRouter.post("/login", logIn);
usersRouter.get('/secret', secretUser);
usersRouter.get('/profile', getUser);
usersRouter.get('/users', getUsers);
usersRouter.get('/logout', logOut);
usersRouter.put('/update', updateUser);
usersRouter.delete('/delete', deleteUser);
export default usersRouter;

