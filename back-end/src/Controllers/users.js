import User from "../Models/users.js";
import jwt from "../libs/token.js";

export async function signUp(req, res){
    const {pseudo, name, email, password} = req.body;
    
    const user = await User.create({pseudo, name, email, password});
    user.save()
        .then(() => res.status(201).json({message: "User created"}))
        .catch(err => res.status(400).json({message: err.message}));
    
}

export async function logIn(req, res){
    const userLogin = req.body;

    const user = await User.findOne({email: userLogin.email});
    if(!user) return res.status(400).json({message: "User not found"});
    if(user.password !== userLogin.password) return res.status(400).json({message: "Wrong password"});
    const token = jwt.signToken({id: user._id});
    res.status(200).json({token: token, user: {pseudo: user.pseudo, name: user.name}});
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

