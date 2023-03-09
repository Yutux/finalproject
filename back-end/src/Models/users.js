import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        // required: true,
        //unique: true,
        minlength: 3
    },
    name: {
        type: String,
        //required: true,
        minlength: 3
    },
    email: {
        type: String,
        //required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        //required: true,
        minlength: 3
    },
});

export default mongoose.model("User", userSchema);