import User from "../Models/users.js";
import jwt from "../libs/token.js";
import bcrypt from "bcrypt";

export async function signUp(req, res){
    const {pseudo, name, email, password} = req.body;

    if(!pseudo) return res.status(401).json({message: "Pseudo is required"});
    if(!name) return res.status(401).json({message: "Name is required"});
    if(!email) return res.status(401).json({message: "Email is required"});
    if(!password) return res.status(401).json({message: "Password is required"});

    const cryptPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({pseudo, name, email, password: cryptPassword});
    user.save()
        .then(() => res.status(201).json({message: "User created"}))
        .catch(err => res.status(401).json({message: err.message}));
    
}

export async function logIn(req, res){
    const userLogin = req.body;

    const user = await User.findOne({email: userLogin.email});
    if(!user) return res.status(401).json({message: "User not found"});
    const passwordIsValid = bcrypt.compareSync(userLogin.password, user.password);
    if(!passwordIsValid) return res.status(401).json({message: "Invalid password"});
    const token = jwt.signToken({id: user._id});
    res.status(200).json({token: token, user: {pseudo: user.pseudo, name: user.name}, message: "User logged in"});
};

export function logOut(req, res){
    res.status(200).json({message: "User logged out"});
};

//work in progress 
export async function deleteUser(req, res){
    const reqData = req.params;
    await User.findByIdAndDelete(reqData.id);
    res.status(200).json({user: await User.find(), message: "User deleted"});
};

export async function updateUser(req, res){
    const {pseudo, name} = req.body;
    jwt.verifyToken(authorization, async (err, payload)=>{
        if(err){ 
            return res.status(401).json({message: 'Invalid token'});
        }
        const newUser = await User.findByIdAndUpdate(payload.id, {pseudo, name});
        res.status(200).json({user: {pseudo: newUser.pseudo, name: newUser.name}, message: "User updated"});
    }
    );
};

export async function getUser(req, res){
    const userData = req.params;
    jwt.verifyToken(authorization, async (err, payload)=>{
        if(err){ 
            return res.status(401).json({message: 'Invalid token'});
        }
        const user = await User.findById(payload.id);
        res.status(200).json({user: {pseudo: user.pseudo, name: user.name}});
    }
    );
};
// work in progress
export async function getUsers(req, res){
    const users = await User.findById();
    res.status(200).json({users: users});
};

