import mongoose from "mongoose";

let UserShema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})

let UserModel = mongoose.model("User", UserShema);

export default UserModel;