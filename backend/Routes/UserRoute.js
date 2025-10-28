import express from "express";
import UserModel from "../Models/UserModel.js";

let UserRouter = express.Router();

UserRouter.post("/", async (req, res) => {
    let {username, password} = req.body;

    try {
        let data = new UserModel({
            username: username,
            password: password
        })

        let response = await data.save();
        res.send(response);
    }catch(err) {
        console.log(err);
        res.send(err);
    }
})

export default UserRouter;