import express from "express";
import {client} from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message:"Working Really well and now with update"
    })
})

app.post("/signup",async  (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await client.user.create({
        data:{
            username,
            password
        }
    })

    res.json({
        message:"signup success",
        id:user.id
    })


} )

app.listen(4000);