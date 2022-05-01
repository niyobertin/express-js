import express from "express";
import bodyParser from "body-parser";

import usersRuotes from "./router/users.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json())//json means javascript object notation;
app.use("/users",usersRuotes);

app.get("/",(req,res)=>res.send("this is the beging!!!!!!"));

app.listen(PORT,() =>console.log(`server is risteng on http://localhost:${PORT}`));

