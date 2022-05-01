import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [];
router.get("/",(req,res)=>{
res.send(users);
});
//creating user
router.post("/",(req,res)=>{
    const user = req.body;
    const userId = uuidv4();
    const userWithId = {...user,id:userId}
    users.push( userWithId);
    res.send(`The user with the name ${user.firstName} is added tio the data base.`)
});
//getting unique user based on specified id
router.get("/:id",(req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
})
//deleting or removing user from data base\
router.delete("/:id",(req,res)=>{
    const { id } = req.params;
    users = users.filter((user) => user.id != id);

    res.send(`USer with id ${id} deleted from the serva`);
})
//upadating the user information

router.patch("/:id",(req,res) =>{
    const { id } = req.params;
    const {firstName,secondName,age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName){
        user.firstName = firstName;
    }
    if(secondName){
        user.secondName = secondName;
    }
    if(age){
        user.age = age;
    }
    res.send(`the user with id ${id} is updated`);
})
export default router;