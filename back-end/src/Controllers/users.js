import User from "../Models/users.js";

export async function signUp(req, res){
    const {pseudo, name, email, password} = req.body;
    
    const user = await User.create({pseudo, name, email, password});
    user.save()
        .then(() => res.status(201).json({message: "User created"}))
        .catch(err => res.status(400).json({message: err.message}));
    
}

export function logIn(req, res){};

export function logOut(req, res){};

export function deleteUser(req, res){};

export function updateUser(req, res){};

export function getUser(req, res){};

export function getUsers(req, res){};

